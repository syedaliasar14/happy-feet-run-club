import type { FAQ_PAGE_QUERY_RESULT } from "@/sanity.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Faq = NonNullable<NonNullable<FAQ_PAGE_QUERY_RESULT>["faqs"]>[number];

interface FaqAccordionProps {
  faqs?: Faq[] | null;
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const publishedFaqs = (faqs ?? []).filter(
    (faq) => faq.question && faq.answer,
  );

  if (publishedFaqs.length === 0) {
    return (
      <p className="text-lg leading-relaxed text-foreground/70">
        There are no frequently asked questions yet. Check back soon!
      </p>
    );
  }

  return (
    <Accordion className="rounded-2xl border border-foreground/10 bg-white/70 px-5 shadow-sm">
      {publishedFaqs.map((faq) => (
        <AccordionItem
          key={faq._key}
          value={faq._key}
          className="border-foreground/10"
        >
          <AccordionTrigger className="py-5 text-left text-base font-bold text-foreground hover:no-underline sm:text-lg">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-base leading-relaxed text-foreground/80">
            {(faq.answer ?? "").split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => (
              <p key={`${faq._key}-${index}`}>{paragraph}</p>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
