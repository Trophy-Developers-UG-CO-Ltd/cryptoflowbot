import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "CryptoFlow Bot | Automated Trading System",
    template: "%s | CryptoFlow Bot",
  },

  description:
    "CryptoFlow Bot is an automated trading system that connects to supported exchanges through API integration and automates trade execution while trading capital remains in the user's exchange account.",

  applicationName: "CryptoFlow Bot",

  keywords: [
    "CryptoFlow Bot",
    "CryptoFlowBot",
    "automated trading system",
    "automated trading bot",
    "crypto trading bot",
    "API trading bot",
    "Binance trading bot",
    "Bybit trading bot",
    "Kraken trading bot",
    "MEXC trading bot",
    "Hyperliquid trading bot",
  ],

  authors: [
    {
      name: "CryptoFlow Bot",
    },
  ],

  creator: "CryptoFlow Bot",
  publisher: "CryptoFlow Bot",

  category: "Finance",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "CryptoFlow Bot",

    title: "CryptoFlow Bot | Automated Trading System",

    description:
      "Connect a supported exchange through API integration and automate trade execution with CryptoFlow Bot.",

    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "CryptoFlow Bot automated trading system",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "CryptoFlow Bot | Automated Trading System",

    description:
      "Automate trade execution through API connectivity with supported exchanges.",

    images: ["/images/og.jpg"],
  },

  other: {
    "theme-color": "#020a14",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


