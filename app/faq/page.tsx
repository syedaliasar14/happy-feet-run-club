import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { sanityFetch } from "@/sanity/lib/live";
import { FAQ_PAGE_QUERY } from "@/sanity/queries/faq-page";
import { FaqAccordion } from "@/app/faq/components/faq-accordion";

export default async function FaqPage() {
  const { data: faqPage } = await sanityFetch({ query: FAQ_PAGE_QUERY });
  const title = faqPage?.title || "Frequently Asked Questions";
  const intro = faqPage?.intro?.split(/\n\s*\n/).filter(Boolean) ?? [];

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-background py-16 sm:py-24">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 sm:px-6">
          <header className="flex flex-col gap-4">
            <h1 className="font-hero text-5xl tracking-wide text-primary sm:text-6xl">
              {title}
            </h1>
            {intro.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed md:text-xl">
                {paragraph}
              </p>
            ))}
          </header>
          <FaqAccordion faqs={faqPage?.faqs} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
