import { defineQuery } from 'next-sanity'

export const CALENDAR_QUERY = defineQuery(
  `*[_type == "calendar"][0] {
    seasonStart,
    seasonEnd,
    defaultTime,
    events[] {
      _key,
      date,
      time,
      cancelled
    }
  }`
)
