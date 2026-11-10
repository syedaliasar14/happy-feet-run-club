import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/app/components/hero-section";
import { AboutSection } from "@/app/components/about-section";
import { DetailsSection } from "@/app/components/details-section";
import { CtaSection } from "@/app/components/cta-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <DetailsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
