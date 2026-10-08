import { Suspense } from "react";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/app/components/hero-section";
import { AboutSection } from "@/app/components/about-section";
import { MissionSection } from "@/app/components/mission-section";
import { DetailsSection } from "@/app/components/details-section";
import { SeasonSection } from "@/app/components/season-section";
import { CalendarSection } from "@/app/components/calendar-section";
import { FaqSection } from "@/app/components/faq-section";
import { CtaSection } from "@/app/components/cta-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <DetailsSection />
        <SeasonSection />
        <Suspense>
          <CalendarSection />
        </Suspense>
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
