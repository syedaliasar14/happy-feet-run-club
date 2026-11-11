import type { CALENDAR_QUERY_RESULT } from "@/sanity.types";

type CalendarEvent = NonNullable<NonNullable<CALENDAR_QUERY_RESULT>["events"]>[number];

interface CalendarMonthsProps {
  events?: CalendarEvent[] | null;
}

const TIME_ZONE = "America/New_York";

function todayIso() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE }).format(new Date());
}

function formatTime(time: string | null) {
  if (!time) return "";
  const [h, m] = time.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${suffix}`;
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
    weekday: d.toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" }),
    day: d.getUTCDate(),
  };
}

export function CalendarMonths({ events }: CalendarMonthsProps) {
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
        No upcoming runs are scheduled right now. Check back soon!
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-12">
      {[...months.entries()].map(([key, monthEvents]) => (
        <section key={key} className="flex flex-col gap-4">
          <h2 className="font-hero text-3xl tracking-wide text-primary sm:text-4xl">
            {formatMonth(monthEvents[0].date)}
          </h2>
          <ul className="flex flex-col gap-3">
            {monthEvents.map((event) => {
              const { weekday, day } = formatDay(event.date);
              const cancelled = !!event.cancelled;
              return (
                <li
                  key={event._key}
                  className="flex items-center gap-4 rounded-lg border border-foreground/10 bg-white/60 p-4 shadow-sm"
                >
                  <div
                    className={`flex size-16 shrink-0 flex-col items-center justify-center rounded-lg text-white ${
                      cancelled ? "bg-foreground/40" : "bg-primary"
                    }`}
                  >
                    <span className="text-xs font-bold tracking-widest uppercase">{weekday}</span>
                    <span className="font-hero text-2xl leading-none">{day}</span>
                  </div>
                  <span
                    className={`flex-1 text-lg font-bold md:text-xl ${
                      cancelled ? "text-foreground/50 line-through" : ""
                    }`}
                  >
                    {formatTime(event.time)}
                  </span>
                  {cancelled && (
                    <span className="rounded-full bg-foreground px-3 py-1 text-xs font-bold tracking-widest text-white uppercase">
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
