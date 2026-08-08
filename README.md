# CryptoFlow Bot

Official frontend website for **CryptoFlow Bot**, an automated crypto trading platform.

The website is built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS**, and deployed as a fully static site using **Cloudflare Workers Static Assets**.

## Production Domain

```text
https://cryptoflowbot.net
```

## Technology Stack

- Next.js 16.3
- React 19
- TypeScript
- Tailwind CSS
- Lucide React
- pnpm
- Cloudflare Workers
- Cloudflare Static Assets
- GitHub

## Architecture

CryptoFlow Bot uses a static Next.js export.

```text
Next.js source
      ↓
pnpm build
      ↓
out/
      ↓
Cloudflare Worker Static Assets
      ↓
cryptoflowbot.net
```

No Node.js application server is required in production.

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

## Lint

```bash
pnpm lint
```

## Production Build

```bash
pnpm build
```

The static website is generated in:

```text
out/
```

Verify the export:

```powershell
Test-Path .\out\index.html
```

Expected:

```text
True
```

## Static Export Configuration

`next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

## Cloudflare Deployment

The production site is deployed through **Cloudflare Workers Static Assets**.

`wrangler.jsonc`

```jsonc
{
  "name": "cryptoflowbot",
  "compatibility_date": "2026-08-08",
  "assets": {
    "directory": "./out",
    "not_found_handling": "404-page"
  }
}
```

### Cloudflare Build Configuration

| Setting | Value |
|---|---|
| Production branch | `master` |
| Root directory | `/` |
| Build command | `pnpm build` |
| Deploy command | `pnpm exec wrangler deploy` |
| Version command | `npx wrangler versions upload` |

### Manual Deployment

Build:

```bash
pnpm build
```

Validate:

```bash
pnpm exec wrangler deploy --dry-run
```

Deploy:

```bash
pnpm exec wrangler deploy
```

## SEO

The website includes:

- Static server-rendered homepage HTML
- `robots.txt`
- `sitemap.xml`
- Canonical metadata
- Open Graph metadata
- Twitter/X sharing metadata
- Structured data
- Static OG image
- Crawlable public content

Production SEO URLs:

```text
https://cryptoflowbot.net/
https://cryptoflowbot.net/robots.txt
https://cryptoflowbot.net/sitemap.xml
https://cryptoflowbot.net/images/og.jpg
```

## Main Website Features

- Responsive one-page landing page
- CryptoFlow Bot product overview
- Automated trading workflow
- Supported exchange information
- Getting-started requirements
- Trading activity screenshots
- Responsive earnings screenshot slider
- Community support popup
- WhatsApp community integration
- Telegram integration
- Registration CTA
- Mobile navigation
- FAQ
- Risk disclosure
- Desktop, tablet, and mobile layouts

## Supported Exchanges

The website currently references:

- Binance
- Kraken
- Bybit
- Hyperliquid
- MEXC

## Public Assets

Important public assets are stored in:

```text
public/images/
```

Key files include:

```text
logo.png
og.jpg
binance.png
screenshotearnings00.jpeg
screenshotearnings01.jpeg
screenshotearnings02.jpeg
```

## Environment Variables

Production:

```env
NEXT_PUBLIC_SITE_URL=https://cryptoflowbot.net
```

Development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Git Workflow

Production branch:

```text
master
```

Typical deployment workflow:

```bash
pnpm lint
pnpm build
git add -A
git commit -m "Update CryptoFlow Bot website"
git push origin master
```

Cloudflare Workers Builds then builds and deploys the latest production commit automatically.

## Repository

```text
https://github.com/Trophy-Developers-UG-CO-Ltd/cryptoflowbot
```

## Important Notes

> The production website is intentionally statically exported.

- Do not add server-only Next.js functionality without reviewing the hosting architecture.
- Avoid API routes, Server Actions, and runtime image optimization unless the deployment architecture changes.
- Interactive menus, sliders, and popups run client-side after the static HTML loads.
- Trading results and earnings examples must not be presented as guarantees of future performance.

## Risk Disclosure

Cryptocurrency trading involves financial risk. Historical trading activity, screenshots, and past performance do not guarantee future results.

---

Developed and maintained by **Trophy Developers**.
