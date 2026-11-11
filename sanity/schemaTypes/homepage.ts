import { defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'alertUpdate',
      title: 'Alert Update',
      type: 'text',
    }),
    defineField({
      name: 'aboutSection',
      title: 'About Section',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'text',
          title: 'Text',
          type: 'text',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'detailsSection',
      title: 'Details Section',
      type: 'object',
      fields: [
        defineField({
          name: 'whenText',
          title: 'When Text',
          type: 'text',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'whereText',
          title: 'Where Text',
          type: 'text',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'routeText',
          title: 'Route Text',
          type: 'text',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'whatsAfterText',
          title: 'What\'s After Text',
          type: 'text',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'object',
      fields: [
        defineField({
          name: 'slogan',
          title: 'Slogan',
          type: 'text',
          rows: 3,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'ctaText',
          title: 'CTA Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Home Page' }),
  },
})
