import { defineQuery } from 'next-sanity'

export const HOMEPAGE_QUERY = defineQuery(
  `*[_type == "homepage"][0] {
    alertUpdate,
    aboutSection {
      image {
        asset->{
          _id,
          url
        },
        alt
      },
      text
    },
    detailsSection {
      whenText,
      whereText,
      routeText,
      whatsAfterText
    },
    ctaSection {
      slogan,
      ctaText
    }
  }`
)
