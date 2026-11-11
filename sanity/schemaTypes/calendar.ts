import { defineArrayMember, defineField, defineType } from 'sanity'
import { CalendarIcon } from '@sanity/icons'

export const calendar = defineType({
  name: 'calendar',
  title: 'Calendar',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'event',
          title: 'Event',
          fields: [
            defineField({
              name: 'date',
              title: 'Date',
              type: 'date',
              options: { dateFormat: 'MMMM D, YYYY' },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'time',
              title: 'Time',
              type: 'string',
            }),
            defineField({
              name: 'cancelled',
              title: 'Cancelled',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: { date: 'date', time: 'time', cancelled: 'cancelled' },
            prepare: ({ date, time, cancelled }) => ({
              title: date ?? 'No date',
              subtitle: `${time ?? ''}${cancelled ? ' — CANCELLED' : ''}`,
            }),
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Calendar' }),
  },
})
