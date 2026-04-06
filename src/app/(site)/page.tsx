import type { Metadata } from "next";

import { AboutSection } from "@/components/landing/about-section";
import { FeaturedProjectsSection } from "@/components/landing/featured-projects-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { LandingHero } from "@/components/landing/landing-hero";
import { ServicesPreviewSection } from "@/components/landing/services-preview-section";
import { StatsSection } from "@/components/landing/stats-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { canonicalPath } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  alternates: canonicalPath("/"),
};

export default function HomePage() {
  return (
    <>
      <LandingHero />
      <AboutSection />
      <ServicesPreviewSection />
      <FeaturedProjectsSection />
      <StatsSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </>
  );
}
