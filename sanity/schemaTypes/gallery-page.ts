import { defineArrayMember, defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

export const galleryPage = defineType({
  name: 'galleryPage',
  title: 'Gallery Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'seasons',
      title: 'Seasons',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'seasonGallery',
          title: 'Season',
          fields: [
            defineField({
              name: 'season',
              title: 'Season',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'image',
                  options: { hotspot: true },
                  fields: [
                    defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
                  ],
                }),
              ],
            }),
          ],
          preview: {
            select: { title: 'season', media: 'images.0' },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Gallery Page' }),
  },
})
