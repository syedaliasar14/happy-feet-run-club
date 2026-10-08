import Image from "next/image";
import { ArrowRight, CalendarDays, Route, Users, Beer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-yellow">
      {/* Vintage sunburst rays */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "repeating-conic-gradient(from -90deg at 50% -20%, var(--brand-cream) 0deg 5deg, transparent 5deg 10deg)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 paper-texture" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28 sm:pb-24">
        {/* <p className="font-mono text-xs font-semibold tracking-[0.35em] text-brand-red uppercase">
          Est. 2026 — A run club for everyone
        </p> */}

        <Image
          src="/logo.png"
          alt="Happy Feet Run Club logo"
          width={160}
          height={160}
          priority
          className="size-28 sm:size-40"
        />

        <h1 className="mt-4 font-display text-7xl leading-[0.9] tracking-wide text-brand-ink sm:text-8xl md:text-9xl">
          HAPPY FEET
          <span className="mt-1 block text-brand-red">RUN CLUB</span>
        </h1>

        {/* Circular race-seal badge */}
        <div
          aria-hidden
          className="absolute top-16 right-4 hidden rotate-12 md:block lg:right-16"
        >
          <div className="flex size-32 items-center justify-center rounded-full border-4 border-brand-red bg-brand-cyan text-center">
            <div className="flex size-24 flex-col items-center justify-center rounded-full border-2 border-dashed border-brand-brown font-display leading-tight text-brand-ink">
              <span className="text-lg">THURS</span>
              <span className="text-2xl">6:30</span>
              <span className="text-lg">PM</span>
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-xl text-lg font-medium text-brand-ink/75">
          More miles, more smiles. One {config.run.typicalDistance} at a time.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            render={<a href="#details" />}
            className="h-11 border-2 border-brand-brown bg-brand-cyan px-6 font-bold text-brand-ink poster-shadow hover:bg-brand-cyan/90"
          >
            Join Thursday&apos;s Run
            <ArrowRight />
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={<a href="#calendar" />}
            className="h-11 border-2 border-brand-brown bg-brand-cream px-6 font-bold text-brand-ink poster-shadow hover:bg-muted"
          >
            See the Season
            <CalendarDays />
          </Button>
        </div>
      </div>

      {/* Info band */}
      <div className="relative border-y-4 border-brand-brown bg-brand-cyan text-brand-ink">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-3 px-4 py-4 sm:flex-row sm:gap-10 sm:px-6">
          <span className="flex items-center gap-2 font-display text-lg tracking-wider">
            <Route className="size-5 text-brand-red" />
            {config.run.typicalDistance.toUpperCase()}
          </span>
          <span className="hidden text-brand-brown sm:inline">★</span>
          <span className="flex items-center gap-2 font-display text-lg tracking-wider">
            <Users className="size-5 text-brand-ink" />
            ALL PACES WELCOME
          </span>
          <span className="hidden text-brand-brown sm:inline">★</span>
          <span className="flex items-center gap-2 font-display text-lg tracking-wider">
            <Beer className="size-5 text-brand-red" />
            POST-RUN HANGS
          </span>
        </div>
      </div>
    </section>
  );
}
