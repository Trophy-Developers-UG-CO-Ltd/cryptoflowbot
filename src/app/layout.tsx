import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CryptoFlow Bot | Automated Trading System",
    template: "%s | CryptoFlow Bot",
  },
  description:
    "CryptoFlow Bot is an automated trading system that connects to supported trading accounts through API integration and automates trade execution across supported financial markets.",
  keywords: [
    "CryptoFlow Bot",
    "automated trading bot",
    "crypto trading bot",
    "automated trading system",
    "Binance trading bot",
    "Bybit trading bot",
    "Kraken trading bot",
    "MEXC trading bot",
    "Hyperliquid trading bot",
  ],
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
    title: "CryptoFlow Bot | Automated Trading System",
    description:
      "Connect a supported trading account and automate trade execution with CryptoFlow Bot.",
    siteName: "CryptoFlow Bot",
  },
  twitter: {
    card: "summary_large_image",
    title: "CryptoFlow Bot | Automated Trading System",
    description:
      "Automated trading through secure API connectivity with supported exchanges.",
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
