export function StructuredData({
  value,
}: Readonly<{
  value: unknown;
}>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(value),
      }}
    />
  );
}
