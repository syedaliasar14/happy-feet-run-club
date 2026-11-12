import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AboutHeroSection } from "@/app/about/components/about-hero-section";
import { MissionSection } from "@/app/about/components/mission-section";
import { sanityFetch } from "@/sanity/lib/live";
import { ABOUT_PAGE_QUERY } from "@/sanity/queries/about-page";

export const revalidate = 0;

export default async function AboutPage() {
  const { data } = await sanityFetch({ query: ABOUT_PAGE_QUERY });

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <AboutHeroSection data={data?.heroSection || undefined} />
        <MissionSection data={data?.missionSection || undefined} />
      </main>
      <SiteFooter />
    </>
  );
}
