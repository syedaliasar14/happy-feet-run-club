import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/app/components/hero-section";
import { AboutSection } from "@/app/components/about-section";
import { DetailsSection } from "@/app/components/details-section";
import { CtaSection } from "@/app/components/cta-section";
import { SiteFooter } from "@/components/site-footer";
import { sanityFetch } from "@/sanity/lib/live";
import { HOMEPAGE_QUERY } from "@/sanity/queries/homepage";

export const revalidate = 0;

export default async function Home() {
  const { data: homepage } = await sanityFetch({ query: HOMEPAGE_QUERY });

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection alertUpdate={homepage?.alertUpdate || undefined} />
        <AboutSection data={homepage?.aboutSection || undefined} />
        <DetailsSection data={homepage?.detailsSection || undefined} />
        <CtaSection data={homepage?.ctaSection || undefined} />
      </main>
      <SiteFooter />
    </>
  );
}
