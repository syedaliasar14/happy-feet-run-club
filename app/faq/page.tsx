import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { sanityFetch } from "@/sanity/lib/live";
import { FAQ_PAGE_QUERY } from "@/sanity/queries/faq-page";
import { FaqAccordion } from "@/app/faq/components/faq-accordion";

export default async function FaqPage() {
  const { data: faqPage } = await sanityFetch({ query: FAQ_PAGE_QUERY });

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-background py-16 sm:py-24">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 sm:px-6">
          <h1 className="font-heading text-5xl text-center tracking-wide text-primary sm:text-6xl">
            FAQ
          </h1>
          <FaqAccordion faqs={faqPage?.faqs} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
