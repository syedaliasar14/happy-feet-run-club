import type { CALENDAR_QUERY_RESULT } from "@/sanity.types";

type CalendarEvent = NonNullable<NonNullable<CALENDAR_QUERY_RESULT>["events"]>[number];

interface CalendarMonthsProps {
  events?: CalendarEvent[] | null;
  defaultTime?: string | null;
}

const TIME_ZONE = "America/New_York";

function todayIso() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE }).format(new Date());
}

function formatMonth(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function formatDay(date: string) {
  const d = new Date(`${date}T12:00:00Z`);
  return {
    weekday: d.toLocaleDateString("en-US", { weekday: "long", timeZone: "UTC" }),
    day: d.getUTCDate(),
    formatted: d.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" }),
  };
}

export function CalendarMonths({ events, defaultTime }: CalendarMonthsProps) {
  const today = todayIso();
  const upcoming = (events ?? [])
    .filter((e): e is CalendarEvent & { date: string } => !!e.date && e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date) || (a.time ?? "").localeCompare(b.time ?? ""));

  const months = new Map<string, typeof upcoming>();
  for (const event of upcoming) {
    const key = event.date.slice(0, 7);
    months.set(key, [...(months.get(key) ?? []), event]);
  }

  if (months.size === 0) {
    return (
      <p className="text-lg md:text-xl">
        No runs scheduled right now. Check back soon!
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-12">
      {[...months.entries()].map(([key, monthEvents]) => (
        <section key={key} className="flex flex-col gap-4">
          <h2 className="font-heading text-3xl tracking-wide text-foreground sm:text-4xl">
            {formatMonth(monthEvents[0].date)}
          </h2>
          <ul className="flex flex-col gap-3">
            {monthEvents.map((event) => {
              const { weekday, formatted } = formatDay(event.date);
              const cancelled = !!event.cancelled;
              const time = event.time || defaultTime;
              return (
                <li key={event._key} className={`flex flex-col gap-3 rounded-lg border-2 border-secondary p-4 shadow-sm ${cancelled ? "opacity-60" : ""}`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold tracking-widest text-white uppercase">
                      {weekday}
                    </span>
                  </div>
                  
                  <div className={`text-lg font-semibold md:text-xl ${cancelled ? "line-through text-foreground/50" : "text-foreground"}`}>
                    {formatted} at {time}
                  </div>

                  {cancelled && (
                    <span className="rounded-full bg-foreground px-3 py-1 w-max text-xs font-bold tracking-widest text-white uppercase">
                      Cancelled
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
