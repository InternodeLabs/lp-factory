import { APP_SITE_URL, MAIN_SITE_URL } from "@/lib/site";

import { TrackedContentLink } from "./TrackedContentLink";

export function ContentShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-dvh bg-white text-zinc-950">
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <TrackedContentLink href="/" trackingLocation="header" trackingLabel="home">
            content.internode.ai
          </TrackedContentLink>

          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-zinc-700">
            <TrackedContentLink
              href={MAIN_SITE_URL}
              trackingLocation="header"
              trackingLabel="main site"
              trackingType="external"
            >
              main site
            </TrackedContentLink>
            <TrackedContentLink
              href={APP_SITE_URL}
              trackingLocation="header"
              trackingLabel="product app"
              trackingType="external"
            >
              product app
            </TrackedContentLink>
            <TrackedContentLink
              href="/rss.xml"
              trackingLocation="header"
              trackingLabel="rss"
            >
              rss
            </TrackedContentLink>
            <TrackedContentLink
              href="/llms.txt"
              trackingLocation="header"
              trackingLabel="llms"
            >
              llms.txt
            </TrackedContentLink>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-8 text-sm text-zinc-700 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Internode content hub. Plain-language pages designed to be easy to
            read, easy to cite, and easy to revisit.
          </p>
          <p>&copy; {year} Internode</p>
        </div>
      </footer>
    </div>
  );
}
