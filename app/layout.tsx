import type { Metadata } from "next";
import { Archivo, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import "./globals.css";

// Headline font — heavy condensed weights matching the design system
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

// Body / UI font
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
  display: "swap",
});

// Monospace / data / telemetry font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://peakform-app-psi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "PeakForm | Online Strength Coaching for Busy Adults Over 30",
  description:
    "Online strength coaching for busy adults over 30. Three 45-minute sessions a week, built around your schedule, joints and gym. Free intro call.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PeakForm | Online Strength Coaching for Busy Adults Over 30",
    description:
      "Online strength coaching for busy adults over 30. Three 45-minute sessions a week, built around your schedule, joints and gym. Free intro call.",
    url: siteUrl,
    siteName: "PeakForm",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PeakForm | Online Strength Coaching for Busy Adults Over 30",
    description:
      "Online strength coaching for busy adults over 30. Three 45-minute sessions a week, built around your schedule, joints and gym. Free intro call.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bone text-ink antialiased font-sans">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
