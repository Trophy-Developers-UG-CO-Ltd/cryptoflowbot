import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  CircleDollarSign,
  Fuel,
  Gauge,
  Globe2,
  LockKeyhole,
  Menu,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserPlus,
  WalletCards,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

const WHATSAPP = siteConfig.links.whatsapp;
const TELEGRAM = siteConfig.links.telegram;
const REGISTER = siteConfig.links.register;

const steps = [
  {
    number: "01",
    title: "Create Account",
    text: "Register for your CryptoFlow Bot account and choose a supported exchange.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Activate Bot",
    text: "Activate CryptoFlow Bot with the $120 activation fee.",
    icon: Bot,
  },
  {
    number: "03",
    title: "Add Fuel Fee",
    text: "Add the minimum $10 fuel fee required for operation.",
    icon: Fuel,
  },
  {
    number: "04",
    title: "Add Trading Capital",
    text: "Maintain at least $50 trading capital in your supported exchange account.",
    icon: WalletCards,
  },
];

const features = [
  {
    title: "Automated Trading",
    text: "The system monitors supported markets and executes trades automatically.",
    icon: Bot,
  },
  {
    title: "Capital Stays With You",
    text: "Trading capital remains inside your personal supported exchange account.",
    icon: ShieldCheck,
  },
  {
    title: "Market Monitoring",
    text: "Automated infrastructure continuously monitors available market activity.",
    icon: Gauge,
  },
  {
    title: "API Connectivity",
    text: "Connect supported trading accounts through the required API integration.",
    icon: LockKeyhole,
  },
  {
    title: "Multiple Markets",
    text: "Trading infrastructure can support crypto, stocks, commodities, metals and indices.",
    icon: Globe2,
  },
  {
    title: "Community Support",
    text: "Access the CryptoFlow Bot community through WhatsApp and Telegram.",
    icon: MessageCircle,
  },
];

const exchanges = ["BINANCE", "KRAKEN", "BYBIT", "HYPERLIQUID", "MEXC"];

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <div className="container announcementInner">
          <span>
            <Rocket size={17} />
            AUTOMATE YOUR TRADING
          </span>

          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={17} />
            JOIN OUR COMMUNITY
          </a>
        </div>
      </div>

      <header className="siteHeader">
        <div className="container headerInner">
          <a href="#home" className="brand" aria-label="CryptoFlow Bot home">
            <Image
              src="/images/logo.png"
              alt="CryptoFlow Bot"
              width={52}
              height={52}
              className="brandLogoImage"
              priority
            />

            <div>
              <strong>CRYPTO FLOW BOT</strong>
              <span>FULLY AUTOMATIC TRADING SYSTEM</span>
            </div>
          </a>

          <nav className="desktopNav" aria-label="Main navigation">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#how-it-works">HOW IT WORKS</a>
            <a href="#features">FEATURES</a>
            <a href="#faq">FAQ</a>
          </nav>

          <button className="menuButton" type="button" aria-label="Open menu">
            <Menu size={28} />
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />

        <div className="container heroGrid">
          <div className="heroContent">
            <div className="eyebrow">
              <Sparkles size={15} />
              <span>AI-ASSISTED</span>
              <i />
              <span>AUTOMATED</span>
              <i />
              <span>BEGINNER FRIENDLY</span>
            </div>

            <h1>
              FULLY AUTOMATIC
              <span>CRYPTO TRADING</span>
            </h1>

            <p className="heroLead">
              Connect your supported trading account through API integration
              and let CryptoFlow Bot automate trade execution.
            </p>

            <div className="heroActions">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="button buttonPrimary"
              >
                <MessageCircle size={21} />
                <span>
                  <small>JOIN COMMUNITY</small>
                  WhatsApp Group
                </span>
              </a>

              <a
                href={REGISTER}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="button buttonGold"
              >
                <UserPlus size={21} />
                <span>
                  <small>REGISTER NOW</small>
                  Start Your Journey
                </span>
              </a>
            </div>

            <div className="heroTrust">
              <div>
                <Bot />
                <span>
                  <strong>Automated</strong>
                  Trading System
                </span>
              </div>

              <div>
                <Gauge />
                <span>
                  <strong>Continuous</strong>
                  Monitoring
                </span>
              </div>

              <div>
                <LockKeyhole />
                <span>
                  <strong>Secure API</strong>
                  Connection
                </span>
              </div>
            </div>
          </div>

          <div className="heroVisual" aria-hidden="true">
            <div className="chartCard">
              <div className="chartHeader">
                <span>AI TRADING BOT</span>
                <span>ACTIVE</span>
              </div>

              <div className="chart">
                <span className="chartLine" />
                <BarChart3 size={45} />
              </div>
            </div>

            <div className="coinOrbit orbitOne" />
            <div className="coinOrbit orbitTwo" />

            <div className="botCoin">
              <div className="coinInner">
                <TrendingUp />
                <strong>₿</strong>
              </div>
            </div>

            <div className="platformRing" />

            <div className="robotArm robotArmLeft">
              <span />
              <span />
              <span />
            </div>

            <div className="robotArm robotArmRight">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="capitalSection" id="about">
        <div className="container">
          <div className="capitalCard">
            <div className="capitalMessage">
              <ShieldCheck size={38} />

              <div>
                <h2>
                  YOUR CAPITAL STAYS IN
                  <span>YOUR OWN EXCHANGE ACCOUNT</span>
                </h2>

                <p>
                  Trading capital remains in your personal exchange account
                  while the bot performs authorized trading functions through
                  the connected API.
                </p>

                <strong>
                  <Check size={18} />
                  YOU MAINTAIN CONTROL OF YOUR FUNDS
                </strong>
              </div>
            </div>

            <div className="exchangeMain">
              <strong>BINANCE</strong>
              <span>Supported Exchange</span>
            </div>

            <div className="exchangeMain">
              <strong>BYBIT</strong>
              <span>Supported Exchange</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="container">
          <div className="sectionHeading">
            <span>HOW TO GET STARTED</span>
            <h2>Start with a minimum total of $180</h2>
            <p>
              The startup amount consists of a $120 bot activation fee, a
              minimum $10 fuel fee and at least $50 trading capital.
            </p>
          </div>

          <div className="stepGrid">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article className="stepCard" key={step.number}>
                  <span className="stepNumber">{step.number}</span>

                  <div className="stepIcon">
                    <Icon />
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.text}</p>

                  <ArrowRight className="stepArrow" />
                </article>
              );
            })}
          </div>

          <div className="startupBreakdown">
            <div>
              <span>BOT ACTIVATION</span>
              <strong>$120</strong>
            </div>

            <div>
              <span>MINIMUM FUEL FEE</span>
              <strong>$10</strong>
            </div>

            <div>
              <span>MINIMUM TRADING CAPITAL</span>
              <strong>$50</strong>
            </div>

            <div className="startupTotal">
              <span>MINIMUM STARTUP</span>
              <strong>$180</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="exchangeStrip">
        <div className="container">
          <span className="exchangeLabel">SUPPORTED EXCHANGES</span>

          <div className="exchangeList">
            {exchanges.map((exchange) => (
              <strong key={exchange}>{exchange}</strong>
            ))}
          </div>
        </div>
      </section>

      <section className="section featuresSection" id="features">
        <div className="container">
          <div className="sectionHeading compact">
            <span>WHY CRYPTOFLOW BOT?</span>
            <h2>Designed to automate the trading workflow</h2>
          </div>

          <div className="featureGrid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="featureCard" key={feature.title}>
                  <div className="featureIcon">
                    <Icon />
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="automationBanner">
        <div className="automationChart" />

        <div className="container automationInner">
          <div>
            <span>AUTOMATED EXECUTION</span>
            <h2>Let CryptoFlow Bot automate your trades.</h2>
            <p>
              Set up your account, connect a supported exchange and monitor your
              trading activity from your account.
            </p>
          </div>

          <Zap size={56} />
        </div>
      </section>

      <section className="section faqSection" id="faq">
        <div className="container">
          <div className="sectionHeading">
            <span>COMMON QUESTIONS</span>
            <h2>How CryptoFlow Bot works</h2>
          </div>

          <div className="faqGrid">
            <article>
              <h3>What is CryptoFlow Bot?</h3>
              <p>
                CryptoFlow Bot is an automated trading system designed to
                execute trades through an API connection with a supported
                trading account.
              </p>
            </article>

            <article>
              <h3>Where does my trading capital stay?</h3>
              <p>
                Trading capital remains in your personal exchange account. The
                bot uses the authorized API connection to perform configured
                trading functions.
              </p>
            </article>

            <article>
              <h3>Which exchanges are supported?</h3>
              <p>
                Supported exchanges include Binance, Kraken, Bybit,
                Hyperliquid and MEXC.
              </p>
            </article>

            <article>
              <h3>Does CryptoFlow Bot guarantee profits?</h3>
              <p>
                No. Automated trading involves financial risk and neither
                profits nor trading outcomes are guaranteed.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="container finalCtaInner">
          <div className="finalHeading">
            <CircleDollarSign size={37} />

            <div>
              <span>READY TO GET STARTED?</span>
              <h2>Connect. Activate. Automate.</h2>
            </div>
          </div>

          <div className="heroActions">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="button buttonPrimary"
            >
              <MessageCircle size={21} />
              JOIN COMMUNITY
            </a>

            <a
              href={REGISTER}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="button buttonGold"
            >
              <UserPlus size={21} />
              REGISTER NOW
            </a>
          </div>

          <p className="riskNotice">
            <strong>Risk disclosure:</strong> CryptoFlow Bot is an automated
            trading system, not a guarantee of profit. Financial markets involve
            risk and trading can result in losses.
          </p>
        </div>
      </section>

      <footer>
        <div className="container footerInner">
          <a href="#home" className="brand footerBrand">
            <Image
              src="/images/logo.png"
              alt="CryptoFlow Bot"
              width={39}
              height={39}
              className="brandLogoImage footerLogoImage"
            />

            <div>
              <strong>CRYPTO FLOW BOT</strong>
              <span>AUTOMATED TRADING SYSTEM</span>
            </div>
          </a>

          <p>© 2026 CryptoFlow Bot. All rights reserved.</p>

          <div className="socials">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}


