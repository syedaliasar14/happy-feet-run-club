import { type SchemaTypeDefinition } from 'sanity'
import { siteSettings } from './site-settings'
import { homepage } from './homepage'
import { aboutPage } from './about-page'
import { calendar } from './calendar'
import { faqPage } from './faq-page'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, homepage, aboutPage, calendar, faqPage],
}
