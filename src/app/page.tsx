import { CreatorSection } from "@/components/creator-section";
import { EcosystemSection } from "@/components/ecosystem-section";
import { GenreSection } from "@/components/genre-section";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TrendingSection } from "@/components/trending-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TrendingSection />
        <GenreSection />
        <EcosystemSection />
        <TestimonialsSection />
        <CreatorSection />
      </main>
      <SiteFooter />
    </>
  );
}
