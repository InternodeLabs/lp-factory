import type { APIRoute } from "astro";
import { CONTENT_SITE_URL, absoluteUrl } from "@/lib/site";

export const prerender = false;

interface PingBody {
  urls?: string[];
}

function parseSitemapUrls(xml: string): string[] {
  const matches = xml.matchAll(/<loc>([^<]+)<\/loc>/g);
  const urls: string[] = [];
  for (const match of matches) {
    const url = match[1]?.trim();
    if (url && url.endsWith(".xml")) continue;
    if (url) urls.push(url);
  }
  return urls;
}

async function collectUrlsFromSitemap(): Promise<string[]> {
  const indexUrl = absoluteUrl("/sitemap-index.xml");
  const indexResponse = await fetch(indexUrl);
  if (!indexResponse.ok) {
    throw new Error(`sitemap-index fetch failed: ${indexResponse.status}`);
  }
  const indexXml = await indexResponse.text();
  const sitemapUrls = Array.from(indexXml.matchAll(/<loc>([^<]+\.xml)<\/loc>/g))
    .map((m) => m[1].trim());

  if (sitemapUrls.length === 0) {
    return parseSitemapUrls(indexXml);
  }

  const all: string[] = [];
  for (const sitemapUrl of sitemapUrls) {
    const resp = await fetch(sitemapUrl);
    if (!resp.ok) continue;
    const xml = await resp.text();
    all.push(...parseSitemapUrls(xml));
  }
  return Array.from(new Set(all));
}

export const POST: APIRoute = async ({ request }) => {
  // Read at runtime via process.env so rotations don't require a rebuild and
  // accidental whitespace from the Vercel dashboard is stripped, not inlined.
  const secret = (process.env.INDEXNOW_WEBHOOK_SECRET ?? "").trim();
  const key = (process.env.INDEXNOW_KEY ?? "").trim();

  if (!secret || !key) {
    return new Response(
      JSON.stringify({ error: "INDEXNOW_WEBHOOK_SECRET or INDEXNOW_KEY is not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  const auth = request.headers.get("authorization") ?? "";
  const expected = `Bearer ${secret}`;
  if (auth !== expected) {
    return new Response(
      JSON.stringify({ error: "unauthorized" }),
      { status: 401, headers: { "Content-Type": "application/json" } },
    );
  }

  let body: PingBody = {};
  if (request.headers.get("content-type")?.includes("application/json")) {
    try {
      body = (await request.json()) as PingBody;
    } catch {
      body = {};
    }
  }

  let urlList: string[];
  if (Array.isArray(body.urls) && body.urls.length > 0) {
    urlList = body.urls;
  } else {
    try {
      urlList = await collectUrlsFromSitemap();
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "sitemap fetch failed", detail: String(error) }),
        { status: 502, headers: { "Content-Type": "application/json" } },
      );
    }
  }

  if (urlList.length === 0) {
    return new Response(
      JSON.stringify({ submitted: 0, status: "no-urls" }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  }

  const host = new URL(CONTENT_SITE_URL).host;
  const keyLocation = absoluteUrl(`/${key}.txt`);

  const indexNowResponse = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host,
      key,
      keyLocation,
      urlList,
    }),
  });

  const indexNowBody = await indexNowResponse.text();

  return new Response(
    JSON.stringify({
      submitted: urlList.length,
      status: indexNowResponse.ok ? "ok" : "indexnow-error",
      indexNowStatus: indexNowResponse.status,
      // Safe to echo: host + keyLocation are public; key is the same public
      // string published at keyLocation. Helps debug key-mismatch or bad-host
      // failures from the workflow log without redeploying.
      host,
      keyLocation,
      keyPreview: `${key.slice(0, 6)}…${key.slice(-4)}`,
      indexNowBody: indexNowBody.slice(0, 500),
    }),
    {
      status: indexNowResponse.ok ? 200 : 502,
      headers: { "Content-Type": "application/json" },
    },
  );
};

export const GET: APIRoute = async () =>
  new Response(
    JSON.stringify({ hint: "POST with Authorization: Bearer <INDEXNOW_WEBHOOK_SECRET>" }),
    { status: 405, headers: { "Content-Type": "application/json", Allow: "POST" } },
  );
