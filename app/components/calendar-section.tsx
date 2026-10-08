import { connection } from "next/server";
import { CalendarDays } from "lucide-react";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import {
  formatRunDate,
  getNextRunDate,
  getWeeklyRunDates,
  groupRunsByMonth,
} from "@/lib/run-dates";

export async function CalendarSection() {
  // "Next run" depends on the current time, so render this section at request
  // time (inside the page's Suspense boundary) instead of prerendering it.
  await connection();

  const { season, run } = config;
  const runDates = getWeeklyRunDates(
    season.startDate,
    season.endDate,
    run.dayOfWeekIndex
  );
  const months = groupRunsByMonth(runDates);
  const nextRun = getNextRunDate(runDates);

  return (
    <section id="calendar" className="bg-brand-cream py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-xs font-semibold tracking-[0.35em] text-brand-cyan uppercase">
          05 — Run calendar
        </p>
        <h2 className="mt-3 font-display text-5xl tracking-wide text-brand-brown sm:text-6xl">
          MARK YOUR CALENDAR
        </h2>
        <div className="mt-4 h-1.5 w-24 bg-brand-yellow" />
        <p className="mt-6 max-w-2xl text-lg text-brand-brown/80">
          Every {run.dayOfWeek} at {run.time}, all season long. No fancy
          calendar embed needed — here&apos;s every single run date. Pick one
          and show up.
        </p>

        {nextRun && (
          <div className="mt-8 inline-flex flex-wrap items-center gap-3 rounded-xl border-2 border-brand-brown bg-brand-yellow px-5 py-3 poster-shadow">
            <CalendarDays className="size-6 text-brand-ink" />
            <span className="font-display text-2xl tracking-wide text-brand-ink">
              NEXT RUN: {formatRunDate(nextRun).toUpperCase()} · {run.time}
            </span>
          </div>
        )}

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {months.map((month) => (
            <div
              key={month.label}
              className="rounded-xl border-2 border-brand-brown bg-card p-5"
            >
              <h3 className="border-b-2 border-dashed border-brand-brown/30 pb-3 font-display text-2xl tracking-wide text-brand-brown">
                {month.label.toUpperCase()}
              </h3>
              <ul className="mt-3 flex flex-col gap-1.5">
                {month.dates.map((date) => {
                  const isNext =
                    nextRun !== undefined &&
                    date.getTime() === nextRun.getTime();
                  return (
                    <li
                      key={date.toISOString()}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-3 py-1.5 text-sm",
                        isNext
                          ? "bg-brand-red font-bold text-brand-cream"
                          : "text-brand-brown/80"
                      )}
                    >
                      <span>{formatRunDate(date)}</span>
                      <span className="font-mono text-xs tracking-wider">
                        {isNext ? "NEXT UP" : run.time}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
