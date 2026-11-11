import { defineQuery } from 'next-sanity'

export const ABOUT_PAGE_QUERY = defineQuery(
  `*[_type == "aboutPage"][0] {
    heroSection {
      title,
      text,
      image {
        asset->{
          _id,
          url
        },
        alt
      }
    },
    missionSection {
      title,
      text,
      image {
        asset->{
          _id,
          url
        },
        alt
      }
    }
  }`
)
