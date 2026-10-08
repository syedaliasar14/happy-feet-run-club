import { CalendarCheck, Sparkles, Users } from "lucide-react";

const pillars = [
  {
    icon: Users,
    chipColor: "bg-brand-cyan",
    title: "MOVE TOGETHER",
    text: "Running is the excuse — community is the point. Every pace has a place in our pack.",
  },
  {
    icon: Sparkles,
    chipColor: "bg-brand-yellow",
    title: "KEEP IT FUN",
    text: "Theme runs, finish-line high-fives, and post-run hangs. If it stops being fun, we're doing it wrong.",
  },
  {
    icon: CalendarCheck,
    chipColor: "bg-brand-red",
    title: "SHOW UP WEEKLY",
    text: "Consistency beats intensity. One social run every Thursday, all season long.",
  },
];

export function MissionSection() {
  return (
    <section className="relative overflow-hidden border-y-4 border-brand-yellow bg-brand-cyan py-20 text-brand-ink sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 halftone-dots"
      />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-xs font-semibold tracking-[0.35em] text-brand-brown uppercase">
          02 — Our mission
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] tracking-wide text-brand-ink sm:text-6xl">
          MAKE RUNNING THE{" "}
          <span className="text-brand-red">BEST PART</span> OF YOUR WEEK
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-brand-ink/75">
          We exist to get more people moving, more often, with more joy. That
          means removing every barrier — cost, pace pressure, intimidation —
          and replacing it with a starting line you can walk up to alone and
          leave with friends.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border-2 border-brand-brown bg-brand-cream p-6 poster-shadow"
            >
              <div
                className={`flex size-10 items-center justify-center rounded-full border-2 border-brand-brown text-brand-ink ${pillar.chipColor}`}
              >
                <pillar.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-2xl tracking-wide text-brand-brown">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-brand-brown/70">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
