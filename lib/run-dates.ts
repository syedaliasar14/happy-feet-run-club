/**
 * Helpers to generate the club's weekly run dates for a season.
 * All dates are constructed at noon local time to avoid DST/timezone drift.
 */

export type MonthGroup = {
  /** e.g. "April 2026" */
  label: string;
  dates: Date[];
};

/** Every weekly run date between the season start and end (inclusive). */
export function getWeeklyRunDates(
  startISO: string,
  endISO: string,
  dayOfWeek: number // 0 = Sunday ... 4 = Thursday
): Date[] {
  const dates: Date[] = [];
  const current = new Date(`${startISO}T12:00:00`);
  const end = new Date(`${endISO}T12:00:00`);

  // Roll forward to the first run day on/after the season start
  while (current.getDay() !== dayOfWeek) {
    current.setDate(current.getDate() + 1);
  }

  while (current <= end) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 7);
  }

  return dates;
}

/** Group run dates under "Month Year" labels, preserving order. */
export function groupRunsByMonth(dates: Date[]): MonthGroup[] {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  });

  const groups: MonthGroup[] = [];
  for (const date of dates) {
    const label = formatter.format(date);
    const last = groups[groups.length - 1];
    if (last && last.label === label) {
      last.dates.push(date);
    } else {
      groups.push({ label, dates: [date] });
    }
  }
  return groups;
}

/** The first run date that hasn't started yet (undefined if season is over). */
export function getNextRunDate(dates: Date[], now = new Date()): Date | undefined {
  return dates.find((date) => date.getTime() >= now.getTime());
}

/** e.g. "Thu, Apr 2" */
export function formatRunDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(date);
}
