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
              description: 'Month and day of the run (the year keeps events in the right order).',
              options: { dateFormat: 'MMMM D, YYYY' },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'time',
              title: 'Time',
              type: 'string',
              description: '24-hour format, e.g. 18:30',
              validation: (rule) =>
                rule
                  .required()
                  .regex(/^([01]\d|2[0-3]):[0-5]\d$/, {
                    name: 'time',
                    invert: false,
                  })
                  .error('Use 24-hour HH:MM format, e.g. 18:30'),
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
