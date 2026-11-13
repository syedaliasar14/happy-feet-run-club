import { defineQuery } from 'next-sanity'

// Selects the season matching $seasonKey, falling back to the latest (last) season
export const GALLERY_PAGE_QUERY = defineQuery(
  `*[_type == "galleryPage"][0] {
    "seasons": seasons[] {
      _key,
      season
    },
    "selectedSeason": coalesce(seasons[_key == $seasonKey][0], seasons[-1]) {
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
