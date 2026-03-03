// FILE: src/payload/collections/Events.ts

import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    description: 'Events, open days, workshops, and celebrations at MCR Educational.',
    defaultColumns: ['title', 'type', 'date', 'isFeatured'],
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'endDate',
      type: 'date',
      required: false,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'time',
      type: 'text',
      required: false,
      admin: {
        description: 'e.g. 09:00–15:00',
      },
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      defaultValue: 'MCR Educational Centre',
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      editor: lexicalEditor({}),
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'other',
      options: [
        { label: 'Open Day', value: 'open-day' },
        { label: 'Workshop', value: 'workshop' },
        { label: 'Celebration', value: 'celebration' },
        { label: 'Meeting', value: 'meeting' },
        { label: 'Trip', value: 'trip' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
  timestamps: true,
}

export default Events
