// FILE: src/payload/collections/Policies.ts

import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

const Policies: CollectionConfig = {
  slug: 'policies',
  admin: {
    useAsTitle: 'title',
    description: 'Policy and governance documents displayed on the Policies page.',
    defaultColumns: ['title', 'slug', 'lastUpdated', 'version'],
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
      admin: {
        description: 'URL-safe identifier, e.g. safeguarding-policy',
      },
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor(),
      required: true,
    },
    {
      name: 'lastUpdated',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyyy',
        },
      },
    },
    {
      name: 'version',
      type: 'text',
      required: false,
      admin: {
        description: 'e.g. v1.2',
      },
    },
    {
      name: 'downloadUrl',
      type: 'text',
      required: false,
      admin: {
        description: 'Link to PDF version',
      },
    },
  ],
}

export default Policies
