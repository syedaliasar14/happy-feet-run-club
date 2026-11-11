import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CalendarMonths } from "@/app/calendar/components/calendar-months";
import { sanityFetch } from "@/sanity/lib/live";
import { CALENDAR_QUERY } from "@/sanity/queries/calendar";

export default async function CalendarPage() {
  const { data: calendar } = await sanityFetch({ query: CALENDAR_QUERY });

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-background py-16 sm:py-24">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 sm:px-6">
          <h1 className="font-heading text-5xl tracking-wide text-primary sm:text-6xl">
            Upcoming Runs
          </h1>
          <CalendarMonths events={calendar?.events} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
