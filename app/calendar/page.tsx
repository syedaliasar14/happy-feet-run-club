import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CalendarMonths } from "@/app/calendar/components/calendar-months";
import { sanityFetch } from "@/sanity/lib/live";
import { CALENDAR_QUERY } from "@/sanity/queries/calendar";
import { CalendarDaysIcon } from "lucide-react";

export const revalidate = 0;

export function formatDate(dateString: string | null | undefined): string {
  if (!dateString) return '';
  const date = new Date(`${dateString}T12:00:00Z`);
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export default async function CalendarPage() {
  const { data: calendar } = await sanityFetch({ query: CALENDAR_QUERY });

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-background py-16 sm:py-24">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 sm:px-6">
          <h1 className="font-heading text-5xl tracking-wide text-primary sm:text-6xl">
            <CalendarDaysIcon className="inline-block mr-3 size-12" />
            Calendar
          </h1>

          <div className="text-xl font-display text-primary flex flex-col md:flex-row gap-4">
            <div className="border-2 border-primary p-4 rounded-lg w-full shadow-lg">
              Season Start<br />
              <span className="text-base font-semibold font-sans text-foreground">{formatDate(calendar?.seasonStart)}</span>
            </div>
            <div className="border-2 text-primary border-primary p-4 rounded-lg w-full shadow-lg">
              Season End<br />
              <span className="text-base font-semibold font-sans text-foreground">{formatDate(calendar?.seasonEnd)}</span>
            </div>
          </div>

          <h2 className="font-heading -mb-4 text-4xl tracking-wide text-secondary sm:text-5xl">
            Upcoming Runs
          </h2>

          <CalendarMonths events={calendar?.events} defaultTime={calendar?.defaultTime} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
