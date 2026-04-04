import Link from "next/link";

import { getAllCampaignSlugs, getCampaign } from "@/config/campaigns";

export default function Home() {
  const slugs = getAllCampaignSlugs();

  return (
    <div className="mx-auto min-h-dvh max-w-3xl px-4 py-16 md:py-24">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
        LP Factory
      </h1>
      <p className="mt-2 text-gray-500">
        {slugs.length} campaign{slugs.length !== 1 && "s"}
      </p>

      <ul className="mt-10 divide-y divide-gray-200">
        {slugs.map((slug) => {
          const campaign = getCampaign(slug)!;
          return (
            <li key={slug}>
              <Link
                href={`/lp/${slug}`}
                className="group flex items-center justify-between gap-4 py-4 transition hover:bg-gray-50 -mx-3 px-3 rounded-lg"
              >
                <div className="min-w-0">
                  <p className="truncate font-semibold text-gray-900 group-hover:text-indigo-600">
                    {campaign.meta.title}
                  </p>
                  <p className="mt-1 truncate text-sm text-gray-500">
                    /lp/{slug}
                    <span className="mx-2 text-gray-300">·</span>
                    {campaign.tracking.source}
                    <span className="mx-2 text-gray-300">·</span>
                    {campaign.tracking.campaignId}
                  </p>
                </div>
                <span className="shrink-0 text-gray-400 transition group-hover:translate-x-0.5 group-hover:text-indigo-500">
                  →
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
