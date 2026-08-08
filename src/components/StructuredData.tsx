const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://cryptoflowbot.net";

export default function StructuredData() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "CryptoFlow Bot",
      url: siteUrl,
      logo: `${siteUrl}/images/logo.png`,
      description:
        "CryptoFlow Bot is an automated trading system that connects to supported trading accounts through API integration and automates trade execution.",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "CryptoFlow Bot",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "CryptoFlow Bot",
      url: siteUrl,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description:
        "Automated crypto trading software that connects to supported exchanges through API integration and automates trade execution.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
