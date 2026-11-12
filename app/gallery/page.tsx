import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GallerySeasons } from "@/app/gallery/components/gallery-seasons";
import { sanityFetch } from "@/sanity/lib/live";
import { GALLERY_PAGE_QUERY } from "@/sanity/queries/gallery-page";

export const revalidate = 0;

export default async function GalleryPage() {
  const { data: gallery } = await sanityFetch({ query: GALLERY_PAGE_QUERY });

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-background py-16 sm:py-24">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 sm:px-6">
          <h1 className="font-heading text-5xl tracking-wide text-foreground sm:text-6xl">
            Gallery
          </h1>
          <GallerySeasons seasons={gallery?.seasons} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
