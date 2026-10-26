import type { Metadata } from "next";
import { Archivo, Instrument_Sans, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "PeakForm — High-Performance Athletic Coaching",
    template: "%s | PeakForm",
  },
  description:
    "Personalized strength training built around your life. 1:1 programming, video analysis, and weekly accountability from an expert coach.",
  keywords: [
    "strength coaching",
    "online personal trainer",
    "1:1 coaching",
    "powerlifting",
    "athletic performance",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PeakForm",
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
        {children}
      </body>
    </html>
  );
}
