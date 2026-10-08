import { Heart, Route, Trophy, Users } from "lucide-react";

const highlights = [
  {
    icon: Route,
    title: "WEEKLY 5K",
    text: "A social loop that starts and ends at the same spot — nobody gets lost, nobody gets dropped.",
  },
  {
    icon: Users,
    title: "ALL PACES",
    text: "From first-timers to PR chasers. Pace groups form naturally, and the back of the pack is a great place to be.",
  },
  {
    icon: Heart,
    title: "POST-RUN HANGS",
    text: "The run is only half the club. We refuel together at local spots after every Thursday run.",
  },
  {
    icon: Trophy,
    title: "SEASON GOALS",
    text: "Optional challenges through the season — attend streaks, distance bingo, and a finale fun run.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-brand-cream py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs font-semibold tracking-[0.35em] text-brand-cyan uppercase">
            01 — About the club
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-brand-brown sm:text-6xl">
            MORE THAN A RUN CLUB
          </h2>
          <div className="mt-4 h-1.5 w-24 bg-brand-red" />
          <p className="mt-6 text-lg text-brand-brown/80">
            Happy Feet Run Club started with a simple idea: running is better
            together. We&apos;re the crew that shows up every Thursday evening —
            rain or shine, fast or slow — because the miles fly by when
            you&apos;re sharing them.
          </p>
          <p className="mt-4 text-lg text-brand-brown/80">
            No membership fees, no pace requirements, no egos. Just a
            welcoming group of runners, a reliable weekly rhythm, and a
            well-earned post-run hang.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border-2 border-brand-brown bg-card p-5 poster-shadow"
            >
              <div className="flex size-10 items-center justify-center rounded-full border-2 border-brand-brown bg-brand-yellow text-brand-ink">
                <item.icon className="size-5" />
              </div>
              <h3 className="mt-3 font-display text-xl tracking-wide text-brand-brown">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm text-brand-brown/75">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
