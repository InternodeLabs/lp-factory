import Link from "next/link";

export default function LpNotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-lg text-gray-600 dark:text-gray-400">
        This landing page doesn&apos;t exist or has been removed.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
      >
        Back to campaigns
      </Link>
    </div>
  );
}
