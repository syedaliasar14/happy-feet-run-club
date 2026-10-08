import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t-4 border-brand-brown bg-brand-yellow py-20 sm:py-28"
    >
      {/* Vintage sunburst rays */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "repeating-conic-gradient(from -90deg at 50% 120%, var(--brand-cream) 0deg 5deg, transparent 5deg 10deg)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <p className="font-mono text-xs font-semibold tracking-[0.35em] text-brand-brown uppercase">
          {config.run.dayOfWeek}s · {config.run.time} · {config.meetup.name}
        </p>
        <h2 className="mt-4 font-display text-6xl leading-[0.9] tracking-wide text-brand-ink sm:text-7xl md:text-8xl">
          LACE UP. SHOW UP.
          <span className="block text-brand-red">RUN HAPPY.</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg font-medium text-brand-ink/75">
          Your first run is one Thursday away. Free forever, no sign-up — just
          find the crew at the meetup point and say hi.
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            render={<a href="#details" />}
            className="h-12 border-2 border-brand-ink bg-brand-red px-8 font-display text-xl tracking-wider text-brand-cream poster-shadow hover:bg-brand-red/90"
          >
            RUN WITH US THIS {config.run.dayOfWeek.toUpperCase()}
            <ArrowRight />
          </Button>
        </div>
        <p className="mt-4 font-mono text-xs font-semibold tracking-[0.25em] text-brand-ink/60 uppercase">
          Free · No sign-up · Just show up
        </p>
      </div>
    </section>
  );
}
