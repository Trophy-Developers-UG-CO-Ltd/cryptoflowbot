export const siteConfig = {
  name: "CryptoFlow Bot",
  shortName: "CryptoFlow Bot",

  description:
    "CryptoFlow Bot is an automated trading system that connects to supported trading accounts through API integration and automates trade execution.",

  links: {
    whatsapp:
      "https://chat.whatsapp.com/KSeBUJZmchm9anj8FPiCv0?s=cl&p=a&ilr=4",

    telegram:
      "https://t.me/CryptoFlowBotAi",

    register:
      "https://www.cryptoflowsignals.com/auth?ref=3NHR4ABC",
  },

  pricing: {
    activation: 120,
    fuel: 10,
    tradingCapital: 50,
    minimumStartup: 180,
  },

  exchanges: [
    "Binance",
    "Kraken",
    "Bybit",
    "Hyperliquid",
    "MEXC",
  ],
} as const;
