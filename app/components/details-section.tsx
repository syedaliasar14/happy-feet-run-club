import { config } from "@/config";

export function DetailsSection() {
  return (
    <section id="details" className="bg-muted py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <h2 className="hidden font-heading text-5xl tracking-wide text-foreground sm:text-6xl">
          Run Details
        </h2>

        <div className="my-10 grid gap-8 md:grid-cols-3">
          <section aria-labelledby="details-when">
            <h3
              id="details-when"
              className="font-heading text-3xl tracking-wide text-foreground"
            >
              WHEN
            </h3>
            <p className="mt-3 text-foreground/75">
              Every Wednesday at 6:30pm
            </p>
            <div className="mt-5 rounded-xl border-2 border-secondary bg-card p-6">
              <p className="font-display text-2xl tracking-wide text-secondary">
                The next run
              </p>
              <p className="mt-2 text-foreground/75">
                Wednesday, June 12th
              </p>
            </div>
            <a href="#" className="btn-secondary mt-4 inline-flex">
              See Calendar
            </a>
          </section>

          <section aria-labelledby="details-where">
            <h3
              id="details-where"
              className="font-heading text-3xl tracking-wide text-foreground"
            >
              WHERE
            </h3>
            <p className="mt-3 font-semibold text-foreground">
              Across from Smokin&rsquo; with Chris, Southington, CT
            </p>
            <p className="mt-3 text-foreground/75">
              The route is 5k (3.1 miles).
              <br />
              Walkers can turn around after 15 min.
            </p>
            <div className="mt-5 overflow-hidden rounded-xl shadow-lg">
              <iframe
                title="Map of the Happy Feet Run Club meetup location"
                src={config.mapEmbedUrl}
                className="h-[320px] w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>

          <section aria-labelledby="details-after">
            <h3
              id="details-after"
              className="font-heading text-3xl tracking-wide text-foreground"
            >
              WHAT&apos;S AFTER
            </h3>
            <p className="mt-3 text-foreground/75">
              Make new friends and get to know other people by joining us at the
              post-run social hangout, usually at the local brewery or ice cream
              place.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
