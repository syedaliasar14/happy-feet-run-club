import { MoveRight } from "lucide-react";
import { config } from "@/config";
import { getWeeklyRunDates } from "@/lib/run-dates";

function formatSeasonDate(iso: string) {
  const date = new Date(`${iso}T12:00:00`);
  return {
    monthDay: new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(date),
    year: new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(date),
  };
}

export function SeasonSection() {
  const { season, run } = config;
  const runDates = getWeeklyRunDates(
    season.startDate,
    season.endDate,
    run.dayOfWeekIndex
  );
  const start = formatSeasonDate(season.startDate);
  const end = formatSeasonDate(season.endDate);

  return (
    <section
      id="season"
      className="border-y-4 border-brand-brown bg-brand-cyan py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-xs font-semibold tracking-[0.35em] text-brand-ink uppercase">
          04 — {season.label}
        </p>
        <h2 className="mt-3 font-display text-5xl tracking-wide text-brand-ink sm:text-6xl">
          ONE SEASON. {runDates.length} THURSDAYS.
        </h2>

        <div className="mt-10 flex flex-col items-stretch gap-6 sm:flex-row sm:items-center">
          <div className="flex-1 rounded-xl border-2 border-brand-brown bg-brand-cream p-6 text-center poster-shadow">
            <p className="font-mono text-xs font-semibold tracking-[0.3em] text-brand-red uppercase">
              Season starts
            </p>
            <p className="mt-2 font-display text-5xl tracking-wide text-brand-brown">
              {start.monthDay.toUpperCase()}
            </p>
            <p className="text-sm font-semibold text-brand-brown/60">
              {start.year}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <MoveRight className="size-10 rotate-90 text-brand-ink sm:rotate-0" />
          </div>

          <div className="flex-1 rounded-xl border-2 border-brand-brown bg-brand-cream p-6 text-center poster-shadow">
            <p className="font-mono text-xs font-semibold tracking-[0.3em] text-brand-red uppercase">
              Season finale
            </p>
            <p className="mt-2 font-display text-5xl tracking-wide text-brand-brown">
              {end.monthDay.toUpperCase()}
            </p>
            <p className="text-sm font-semibold text-brand-brown/60">
              {end.year}
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-brand-ink/80">
          We run every {run.dayOfWeek} at {run.time} from the season opener to
          the finale — {runDates.length} weekly runs in total. Miss a week (or
          five)? No shame, just jump back in. The finale wraps up with a
          celebratory fun run and an end-of-season social.
        </p>
      </div>
    </section>
  );
}
