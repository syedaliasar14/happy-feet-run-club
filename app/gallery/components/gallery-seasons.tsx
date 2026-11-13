"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "@/sanity/lib/image";
import { getGallerySeason } from "@/app/gallery/actions";
import type {
  GALLERY_PAGE_QUERY_RESULT,
  GALLERY_SEASON_QUERY_RESULT,
} from "@/sanity.types";

type GalleryPage = NonNullable<GALLERY_PAGE_QUERY_RESULT>;
type Season = NonNullable<GALLERY_SEASON_QUERY_RESULT>;

export function GallerySeasons({
  seasonList,
  latestSeason,
}: {
  seasonList?: GalleryPage["seasonList"];
  latestSeason?: GalleryPage["latestSeason"];
}) {
  const [selectedKey, setSelectedKey] = useState(latestSeason?._key);
  const [cache, setCache] = useState<Record<string, Season>>(
    latestSeason ? { [latestSeason._key]: latestSeason as Season } : {},
  );
  const [isPending, startTransition] = useTransition();

  if (!seasonList?.length) return null;

  const selected = selectedKey ? cache[selectedKey] : undefined;

  function select(key: string) {
    setSelectedKey(key);
    if (cache[key]) return;
    startTransition(async () => {
      const season = await getGallerySeason(key);
      if (season) setCache((prev) => ({ ...prev, [key]: season }));
    });
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-3 overflow-x-auto pb-2">
        {seasonList.map((s) => (
          <button
            key={s._key}
            type="button"
            onClick={() => select(s._key)}
            className={`shrink-0 whitespace-nowrap ${
              s._key === selectedKey ? "btn-primary" : "btn-outline"
            }`}
          >
            {s.season}
          </button>
        ))}
      </div>
      {selected ? (
        <section className="flex flex-col gap-4">
          <h2 className="font-heading text-4xl tracking-wide text-secondary sm:text-5xl">
            {selected.season}
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {selected.images?.map((image) =>
              image.asset ? (
                <div
                  key={image._key}
                  className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
                >
                  <Image
                    src={urlFor(image as SanityImageSource).width(800).height(800).url()}
                    alt={image.alt ?? `${selected.season} photo`}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ) : null,
            )}
          </div>
        </section>
      ) : (
        <p className="text-foreground/70">{isPending ? "Loading…" : null}</p>
      )}
    </div>
  );
}
