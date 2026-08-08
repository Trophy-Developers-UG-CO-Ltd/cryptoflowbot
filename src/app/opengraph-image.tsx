import { ImageResponse } from "next/og";

export const alt = "CryptoFlow Bot automated trading system";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#020a14",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            right: -100,
            top: -120,
            background: "rgba(16, 209, 165, 0.18)",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 350,
            height: 350,
            borderRadius: "50%",
            left: -130,
            bottom: -180,
            background: "rgba(16, 209, 165, 0.10)",
          }}
        />

        <div
          style={{
            width: "100%",
            display: "flex",
            padding: "72px 78px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: 720,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#48f3c7",
                fontSize: 23,
                fontWeight: 700,
                letterSpacing: 2,
                marginBottom: 26,
              }}
            >
              CRYPTOFLOW BOT
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 72,
                lineHeight: 0.98,
                letterSpacing: -3,
                fontWeight: 900,
              }}
            >
              <span>FULLY AUTOMATIC</span>

              <span
                style={{
                  color: "#10d1a5",
                  marginTop: 10,
                }}
              >
                CRYPTO TRADING
              </span>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 30,
                color: "#b6c4cc",
                fontSize: 25,
                lineHeight: 1.4,
              }}
            >
              Automated trade execution through API connectivity with
              supported exchanges.
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 34,
                gap: 15,
              }}
            >
              <div
                style={{
                  display: "flex",
                  border: "1px solid rgba(72,243,199,.45)",
                  borderRadius: 999,
                  padding: "10px 18px",
                  color: "#d8fff5",
                  fontSize: 16,
                }}
              >
                AUTOMATED
              </div>

              <div
                style={{
                  display: "flex",
                  border: "1px solid rgba(72,243,199,.45)",
                  borderRadius: 999,
                  padding: "10px 18px",
                  color: "#d8fff5",
                  fontSize: 16,
                }}
              >
                API CONNECTED
              </div>

              <div
                style={{
                  display: "flex",
                  border: "1px solid rgba(72,243,199,.45)",
                  borderRadius: 999,
                  padding: "10px 18px",
                  color: "#d8fff5",
                  fontSize: 16,
                }}
              >
                MULTI-EXCHANGE
              </div>
            </div>
          </div>

          <div
            style={{
              width: 265,
              height: 265,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              border: "8px solid #10d1a5",
              background: "#073c34",
              boxShadow: "0 0 60px rgba(16,209,165,.30)",
            }}
          >
            <div
              style={{
                width: 205,
                height: 205,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                border: "2px solid rgba(255,255,255,.35)",
                fontSize: 116,
                fontWeight: 900,
              }}
            >
              ₿
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
