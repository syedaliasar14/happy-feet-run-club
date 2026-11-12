import { defineQuery } from 'next-sanity'

export const GALLERY_PAGE_QUERY = defineQuery(
  `*[_type == "galleryPage"][0] {
    seasons[] {
      _key,
      season,
      images[] {
        _key,
        alt,
        asset,
        crop,
        hotspot
      }
    }
  }`
)
