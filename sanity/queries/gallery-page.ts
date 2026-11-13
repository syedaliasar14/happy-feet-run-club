import { defineQuery } from 'next-sanity'

export const GALLERY_PAGE_QUERY = defineQuery(
  `*[_type == "galleryPage"][0] {
    "seasonList": seasons[] { _key, season },
    "latestSeason": seasons[-1] {
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

export const GALLERY_SEASON_QUERY = defineQuery(
  `*[_type == "galleryPage"][0].seasons[_key == $key][0] {
    _key,
    season,
    images[] {
      _key,
      alt,
      asset,
      crop,
      hotspot
    }
  }`
)
