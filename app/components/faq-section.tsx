import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { config } from "@/config";

const faqs = [
  {
    question: "Do I need to be fast to join?",
    answer:
      "Not even a little. Our Thursday runs are social, not competitive — walkers, joggers, and speedsters all head out together and regroup at the finish. If you can move for 30ish minutes, you're ready.",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "Nope — Happy Feet Run Club is 100% free, forever. No sign-up forms, no dues, no apps to download. Just show up at the meetup point on Thursday.",
  },
  {
    question: "What if it rains (or snows)?",
    answer:
      "We run. Rain, snow, heat — the club meets every Thursday of the season regardless. We only cancel for dangerous conditions like lightning or ice, and we'll post about it on Instagram if that happens.",
  },
  {
    question: "Can I leave a bag somewhere during the run?",
    answer:
      "Yes — we have an informal bag drop at the meetup point. Keep valuables minimal; a couple of members always hang back during warm-up and the area stays in sight.",
  },
  {
    question: "Can I bring a friend, kid, or dog?",
    answer:
      "Friends: absolutely, the more the merrier. Kids in strollers and well-behaved leashed dogs are welcome too — just start toward the back of the pack.",
  },
  {
    question: "What exactly happens after the run?",
    answer:
      "We walk over to one of our post-run spots together for food and drinks. It's casual and totally optional, but it's where most of the friendships (and inside jokes) happen.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="border-t-4 border-brand-brown bg-muted py-20 sm:py-24">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <p className="text-center font-mono text-xs font-semibold tracking-[0.35em] text-brand-red uppercase">
          06 — FAQ
        </p>
        <h2 className="mt-3 text-center font-display text-5xl tracking-wide text-brand-brown sm:text-6xl">
          BEFORE YOU ASK
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-brand-brown/75">
          Everything first-timers usually want to know. Still curious? Come to
          one {config.run.dayOfWeek} run and ask us in person.
        </p>

        <Accordion className="mt-10 gap-3">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="rounded-xl border-2 border-brand-brown bg-card px-5 not-last:border-b-2"
            >
              <AccordionTrigger className="py-4 font-display text-xl tracking-wide text-brand-brown hover:text-brand-red hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-brand-brown/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
