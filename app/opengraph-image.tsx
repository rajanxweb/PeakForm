import { ImageResponse } from "next/og";

export const alt = "PeakForm | Online Strength Coaching for Busy Adults Over 30";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#F3F0E8",
          color: "#141412",
        }}
      >
        {/* Brand Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="#FF4B1F"
          >
            <path d="M12 2L2 19.5H7.5L12 11.5L16.5 19.5H22L12 2Z" />
          </svg>
          <span
            style={{
              fontSize: "32px",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: "#141412",
            }}
          >
            PEAKFORM
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "76px",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            maxWidth: "960px",
            color: "#141412",
          }}
        >
          Stronger in 3 sessions a week.
        </div>

        {/* Subtitle / Category */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#5E5B52",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Online Strength Coaching · Over 30
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
