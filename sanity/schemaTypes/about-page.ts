import { defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

const sectionFields = [
  defineField({
    name: 'title',
    title: 'Title',
    type: 'string',
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: 'text',
    title: 'Text',
    type: 'text',
    description: 'Separate paragraphs with a blank line.',
    rows: 8,
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: 'image',
    title: 'Image',
    type: 'image',
    options: {
      hotspot: true,
    },
    fields: [
      defineField({
        name: 'alt',
        title: 'Alternative Text',
        type: 'string',
      }),
    ],
    validation: (rule) => rule.required(),
  }),
]

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: sectionFields,
    }),
    defineField({
      name: 'missionSection',
      title: 'Mission Section',
      type: 'object',
      fields: sectionFields,
    }),
  ],
  preview: {
    prepare: () => ({ title: 'About Page' }),
  },
})
