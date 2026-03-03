// FILE: src/payload/collections/Programmes.ts
import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

const Programmes: CollectionConfig = {
  slug: 'programmes',
  admin: {
    useAsTitle: 'title',
    description: 'Programmes offered by MCR Educational.',
    defaultColumns: ['title', 'slug', 'heroColor', 'order'],
  },
  access: {
    read: () => true,
    create: ({ req }) => req.user !== null,
    update: ({ req }) => req.user !== null,
    delete: ({ req }) => req.user !== null,
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
        description: 'URL-friendly ID e.g. academic-pathway',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      editor: lexicalEditor({}),
    },
    {
      name: 'highlights',
      type: 'array',
      label: "What You'll Learn",
      minRows: 3,
      maxRows: 8,
      fields: [
        {
          name: 'highlight',
          type: 'text',
          label: 'Highlight',
        },
      ],
    },
    {
      name: 'heroColor',
      type: 'select',
      label: 'Card Accent Color',
      options: [
        { label: 'Teal', value: 'teal' },
        { label: 'Coral', value: 'coral' },
        { label: 'Navy', value: 'navy' },
        { label: 'Purple', value: 'purple' },
        { label: 'Amber', value: 'amber' },
      ],
      defaultValue: 'teal',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Display order on overview page',
      },
    },
  ],
  timestamps: true,
}

export default Programmes
