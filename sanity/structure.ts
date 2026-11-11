import type { StructureResolver } from 'sanity/structure'
import { CalendarIcon, CogIcon, DocumentIcon } from '@sanity/icons'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .icon(CogIcon)
        .child(
          S.document()
            .title('Site Settings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Home Page')
        .id('homepage')
        .icon(DocumentIcon)
        .child(
          S.document()
            .title('Home Page')
            .schemaType('homepage')
            .documentId('homepage')
        ),
      S.listItem()
        .title('About Page')
        .id('aboutPage')
        .icon(DocumentIcon)
        .child(
          S.document()
            .title('About Page')
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),
      S.listItem()
        .title('Calendar')
        .id('calendar')
        .icon(CalendarIcon)
        .child(
          S.document()
            .title('Calendar')
            .schemaType('calendar')
            .documentId('calendar')
        ),
      S.listItem()
        .title('FAQ Page')
        .id('faqPage')
        .icon(DocumentIcon)
        .child(
          S.document()
            .title('FAQ Page')
            .schemaType('faqPage')
            .documentId('faqPage')
        ),
    ])
