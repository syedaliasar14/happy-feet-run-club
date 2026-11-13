import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "@/sanity/lib/image";
import type { GALLERY_PAGE_QUERY_RESULT } from "@/sanity.types";

type SelectedSeason = NonNullable<NonNullable<GALLERY_PAGE_QUERY_RESULT>["selectedSeason"]>;

export function GalleryImages({ season }: { season: SelectedSeason }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {season.images?.map((image) =>
        image.asset ? (
          <div
            key={image._key}
            className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={urlFor(image as SanityImageSource).width(800).height(800).url()}
              alt={image.alt ?? `${season.season} photo`}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover"
            />
          </div>
        ) : null,
      )}
    </div>
  );
}
