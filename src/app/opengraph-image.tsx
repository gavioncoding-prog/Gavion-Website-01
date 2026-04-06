import { ImageResponse } from "next/og";

export const alt = "Gavion Group — Engineering, Construction & Technology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(145deg, #1e293b 0%, #0f172a 45%, #172554 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            color: "#f8fafc",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.03em" }}>
            Gavion Group
          </div>
          <div style={{ fontSize: 28, fontWeight: 500, opacity: 0.92, maxWidth: 900 }}>
            Engineering the future. Building with precision.
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 20,
              opacity: 0.75,
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
            }}
          >
            Architecture · Construction · Technology
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
