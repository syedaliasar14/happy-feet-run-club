import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GalleryImages } from "@/app/gallery/components/gallery-images";
import { SeasonTabs } from "@/app/gallery/components/season-tabs";
import { sanityFetch } from "@/sanity/lib/live";
import { GALLERY_PAGE_QUERY } from "@/sanity/queries/gallery-page";

export const revalidate = 0;

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ season?: string | string[] }>;
}) {
  const { season } = await searchParams;
  const seasonKey = typeof season === "string" ? season : "";
  const { data: gallery } = await sanityFetch({
    query: GALLERY_PAGE_QUERY,
    params: { seasonKey },
  });

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-background py-16 sm:py-24">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 sm:px-6">
          <h1 className="font-heading text-5xl tracking-wide text-foreground sm:text-6xl">
            Gallery
          </h1>
          <SeasonTabs
            seasons={gallery?.seasons ?? []}
            selectedKey={gallery?.selectedSeason?._key}
          />
          {gallery?.selectedSeason && <GalleryImages season={gallery.selectedSeason} />}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
