import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Programs } from "@/components/sections/Programs";
import { About } from "@/components/sections/About";
import { Results } from "@/components/sections/Results";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        {/* Anchor Target for Skip to Content */}
        <div id="content-start" className="sr-only" />

        {/* 1. Hero */}
        <Hero />

        {/* 2. Stats Strip */}
        <StatsStrip />

        {/* 3. Programs */}
        <Programs />

        {/* 4. About & Photo Band */}
        <About />

        {/* 5. Client Results */}
        <Results />

        {/* 6. Pricing */}
        <Pricing />

        {/* 7. Athlete Testimonials */}
        <Testimonials />

        {/* 8. FAQ */}
        <Faq />

        {/* 9. Final CTA */}
        <FinalCta />

        {/* 10. Contact Form */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
