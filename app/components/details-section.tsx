import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { CALENDAR_QUERY } from "@/sanity/queries/calendar";

interface DetailsSectionProps {
  data?: {
    whenText?: string;
    whereText?: string;
    routeText?: string;
    whatsAfterText?: string;
  };
}

const mapEmbedUrl = `https://www.google.com/maps/embed/v1/directions?key=${process.env.GOOGLE_MAPS_API_KEY}&origin=41.59964487289695,-72.88407178888987&destination=41.5802191893593,-72.89805551742943&mode=walking`; 

function getNextRun(events?: any[] | null) {
  if (!events || events.length === 0) {
    return null;
  }

  const today = new Date().toISOString().split('T')[0];

  const upcomingEvents = events
    .filter(event => {
      if (event.cancelled) return false;
      return event.date >= today;
    })
    .sort((a, b) => a.date.localeCompare(b.date));

  return upcomingEvents[0] || null;
}

function getOrdinalSuffix(day: number): string {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const day = date.getDate();
  const suffix = getOrdinalSuffix(day);
  return `${weekday}, ${month} ${day}${suffix}`;
}

export async function DetailsSection({ data }: DetailsSectionProps) {
  const { data: calendar } = await sanityFetch({ query: CALENDAR_QUERY });
  
  const nextRun = getNextRun(calendar?.events);
  const nextRunDate = nextRun ? formatDate(nextRun.date) : null;
  const nextRunTime = nextRun?.time || calendar?.defaultTime;

  const whenText = data?.whenText || "Every Wednesday at 6:30pm";
  const whereText = data?.whereText || "Across from Smokin' with Chris, Southington, CT";
  const routeText = data?.routeText || "The route is 5k (3.1 miles). Walkers can turn around after 15 min.";
  const whatsAfterText = data?.whatsAfterText || "Make new friends and get to know other people by joining us at the post-run social hangout, usually at the local brewery or ice cream place.";

  return (
    <section id="details" className="bg-background py-20 sm:py-24">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <h2 className="hidden font-heading text-5xl tracking-wide text-foreground sm:text-6xl">
          Run Details
        </h2>

        <div className="my-10 gap-8">
          <section aria-labelledby="details-when">
            <h3 id="details-when" className="font-heading text-4xl tracking-wide text-foreground">
              When
            </h3>
            <p className="mt-3 text-foreground/75">
              {whenText}
            </p>
            <div className="mt-5 rounded-xl border-2 border-secondary bg-background shadow-sm p-6">
              <p className="font-display text-3xl tracking-wide text-secondary">
                The Next Run
              </p>
              <p className="mt-1 text-foreground/75">
                {nextRunDate && nextRunTime ? `${nextRunDate} at ${nextRunTime}` : "Coming soon, check back for updates."}
              </p>
            </div>
            <Link href="/calendar" className="btn-secondary font-medium mt-4 inline-flex">
              See Calendar
            </Link>
          </section>

          <section aria-labelledby="details-where">
            <h3 id="details-where" className="mt-12 font-heading text-4xl tracking-wide text-foreground">
              Where
            </h3>
            <p className="mt-3 text-foreground">
              {whereText}
            </p>
            <div className="mt-5 overflow-hidden rounded-xl shadow-lg">
              <iframe
                title="Map of the Happy Feet Run Club meetup location"
                src={mapEmbedUrl}
                className="h-[320px] w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <Image
              src="/pics/parking.jpg"
              alt="Parking near the Happy Feet Run Club meetup location"
              className="mt-5 w-full rounded-xl shadow-lg"
              width={1280}
              height={720}
            />
          </section>

          <section aria-labelledby="details-route">
            <h3 id="details-route" className="mt-12 font-heading text-4xl tracking-wide text-foreground">
              The Route
            </h3>
            <p className="mt-3 text-foreground/75">
              {routeText}
            </p>
          </section>

          <section aria-labelledby="details-after">
            <h3 id="details-after" className="mt-12 font-heading text-4xl tracking-wide text-foreground">
              What's After
            </h3>
            <p className="mt-3 text-foreground/75">
              {whatsAfterText}
            </p>
            <Image
              src="/social-emojis.png"
              alt="Social emojis representing the Happy Feet Run Club community"
              className="mt-5 w-64 mx-auto"
              width={1280}
              height={720}
            />
          </section>
        </div>
      </div>
    </section>
  );
}
