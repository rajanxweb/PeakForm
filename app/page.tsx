import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Programs } from "@/components/sections/Programs";
import { About } from "@/components/sections/About";
import { Results } from "@/components/sections/Results";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <StatsStrip />
        <Programs />
        <About />
        <Results />
      </main>
      <Footer />
    </>
  );
}
