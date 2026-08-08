"use client";

const earnings = [
  {
    label: "Today",
    meta: "13t · 12W",
    amount: "+UGX 1,375,048.83",
    type: "Daily Earnings",
  },
  {
    label: "Aug 04, 2026",
    meta: "16t · 13W",
    amount: "+UGX 2,366,912.13",
    type: "Daily Earnings",
  },
  {
    label: "Aug 03, 2026",
    meta: "25t · 22W",
    amount: "+UGX 4,034,874.99",
    type: "Daily Earnings",
  },
  {
    label: "Aug 02, 2026",
    meta: "18t · 16W",
    amount: "+UGX 2,922,043.06",
    type: "Daily Earnings",
  },
  {
    label: "Aug 01, 2026",
    meta: "14t · 12W",
    amount: "+UGX 3,134,882.23",
    type: "Daily Earnings",
  },
  {
    label: "Jul 31, 2026",
    meta: "15t · 9W",
    amount: "+UGX 881,426.99",
    type: "Daily Earnings",
  },
  {
    label: "30 Day Earnings",
    meta: "30D",
    amount: "+$5,261.70",
    type: "Total Earnings",
  },
  {
    label: "30 Day Earnings",
    meta: "30D",
    amount: "+$501.71",
    type: "Total Earnings",
  },
  {
    label: "Today",
    meta: "6t · 6W",
    amount: "+$747.30",
    type: "Daily Earnings",
  },
  {
    label: "Best Trade",
    meta: "AVAXUSDT",
    amount: "+$57.46",
    type: "Trade Highlight",
  },
];

const desktopLoop = [...earnings, ...earnings];

export default function EarningsTicker() {
  return (
    <section
      className="earningsV2Section"
      aria-labelledby="earnings-highlights-title"
    >
      <div className="container">
        <div className="sectionHeading compact earningsV2Heading">
          <span>EARNINGS HIGHLIGHTS</span>

          <h2 id="earnings-highlights-title">
            Recent Earnings Activity
          </h2>

          <p>
            Selected recent earnings and trading activity highlights.
          </p>
        </div>
      </div>

      <div className="earningsV2Viewport">
        <div className="earningsV2DesktopTrack">
          {desktopLoop.map((item, index) => (
            <article
              className="earningsV2Card"
              key={`${item.label}-${item.amount}-${index}`}
            >
              <div className="earningsV2CardTop">
                <span className="earningsV2Type">
                  {item.type}
                </span>

                <span className="earningsV2Meta">
                  {item.meta}
                </span>
              </div>

              <strong className="earningsV2Amount">
                {item.amount}
              </strong>

              <div className="earningsV2Bottom">
                <strong>{item.label}</strong>

                <span className="earningsV2Live">
                  <i />
                  RECENT
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="earningsV2MobileTrack">
          {earnings.map((item, index) => (
            <article
              className="earningsV2Card"
              key={`mobile-${item.label}-${item.amount}-${index}`}
            >
              <div className="earningsV2CardTop">
                <span className="earningsV2Type">
                  {item.type}
                </span>

                <span className="earningsV2Meta">
                  {item.meta}
                </span>
              </div>

              <strong className="earningsV2Amount">
                {item.amount}
              </strong>

              <div className="earningsV2Bottom">
                <strong>{item.label}</strong>

                <span className="earningsV2Live">
                  <i />
                  RECENT
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="container">
        <p className="earningsV2Disclosure">
          Earnings and trading results shown are historical examples and
          do not guarantee future performance.
        </p>
      </div>
    </section>
  );
}
