import type { StructureResolver } from 'sanity/structure'
import { CogIcon, DocumentIcon } from '@sanity/icons'

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
    ])
