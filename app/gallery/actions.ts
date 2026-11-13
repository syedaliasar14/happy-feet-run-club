"use server";

import { client } from "@/sanity/lib/client";
import { GALLERY_SEASON_QUERY } from "@/sanity/queries/gallery-page";

export async function getGallerySeason(key: string) {
  return client.fetch(GALLERY_SEASON_QUERY, { key });
}
