import { Beer, Clock, Flag, MapPin, Route } from "lucide-react";
import { config } from "@/config";

export function DetailsSection() {
  return (
    <section id="details" className="bg-muted py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-xs font-semibold tracking-[0.35em] text-brand-red uppercase">
          03 — The details
        </p>
        <h2 className="mt-3 font-display text-5xl tracking-wide text-brand-brown sm:text-6xl">
          WHERE, WHEN &amp; WHAT&apos;S AFTER
        </h2>
        <div className="mt-4 h-1.5 w-24 bg-brand-cyan" />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Meetup location */}
          <div className="rounded-xl border-2 border-brand-brown bg-card p-6 poster-shadow">
            <div className="flex size-10 items-center justify-center rounded-full border-2 border-brand-brown bg-brand-cyan text-brand-ink">
              <MapPin className="size-5" />
            </div>
            <h3 className="mt-4 font-display text-2xl tracking-wide text-brand-brown">
              MEETUP POINT
            </h3>
            <p className="mt-2 font-semibold text-brand-brown">
              {config.meetup.name}
            </p>
            <p className="text-sm text-brand-brown/75">{config.meetup.address}</p>
            <p className="mt-3 inline-block rounded-full bg-brand-yellow/40 px-3 py-1 text-xs font-bold text-brand-ink">
              {config.meetup.warmupNote}
            </p>
          </div>

          {/* Weekly run time */}
          <div className="rounded-xl border-2 border-brand-brown bg-card p-6 poster-shadow">
            <div className="flex size-10 items-center justify-center rounded-full border-2 border-brand-brown bg-brand-yellow text-brand-ink">
              <Clock className="size-5" />
            </div>
            <h3 className="mt-4 font-display text-2xl tracking-wide text-brand-brown">
              THE WEEKLY RUN
            </h3>
            <p className="mt-2 font-semibold text-brand-brown">
              Every {config.run.dayOfWeek} · {config.run.time}
            </p>
            <p className="text-sm text-brand-brown/75">
              {config.run.typicalDistance} — out and back, start and finish at
              the same spot.
            </p>
            <p className="mt-3 inline-block rounded-full bg-brand-cyan/30 px-3 py-1 text-xs font-bold text-brand-ink">
              Free forever · no sign-up needed
            </p>
          </div>

          {/* Post-run social */}
          <div className="rounded-xl border-2 border-brand-brown bg-card p-6 poster-shadow">
            <div className="flex size-10 items-center justify-center rounded-full border-2 border-brand-brown bg-brand-red text-brand-cream">
              <Beer className="size-5" />
            </div>
            <h3 className="mt-4 font-display text-2xl tracking-wide text-brand-brown">
              POST-RUN SOCIAL
            </h3>
            <ul className="mt-2 flex flex-col gap-2.5">
              {config.socialSpots.map((spot) => (
                <li key={spot.name} className="text-sm">
                  <span className="font-semibold text-brand-brown">
                    {spot.name}
                  </span>
                  <span className="block text-brand-brown/70">
                    {spot.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Route map */}
        <div className="mt-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <h3 className="flex items-center gap-2 font-display text-2xl tracking-wide text-brand-brown">
              <Route className="size-6 text-brand-cyan" />
              THE ROUTE
            </h3>
            <span className="flex items-center gap-1.5 rounded-full border-2 border-brand-brown bg-brand-cyan/30 px-3 py-1 text-xs font-bold text-brand-ink">
              <MapPin className="size-3.5" /> START
            </span>
            <span className="flex items-center gap-1.5 rounded-full border-2 border-brand-brown bg-brand-red/20 px-3 py-1 text-xs font-bold text-brand-ink">
              <Flag className="size-3.5" /> FINISH
            </span>
          </div>
          <div className="overflow-hidden rounded-xl border-4 border-brand-brown poster-shadow">
            <iframe
              title={`Map of the ${config.title} route — ${config.meetup.name}`}
              src={config.meetup.mapEmbedUrl}
              className="h-[420px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-xs text-brand-brown/60">
            Start and finish pins mark the same meetup point — the route is an
            out-and-back along the river path.
          </p>
        </div>
      </div>
    </section>
  );
}
