export default function StructuredData() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://cryptoflowbot.net";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "CryptoFlow Bot",
    alternateName: "CryptoFlowBot",
    description:
      "CryptoFlow Bot is an automated trading system that connects to supported trading accounts through API integration and automates trade execution.",
    inLanguage: "en",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

