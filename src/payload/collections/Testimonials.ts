// FILE: src/payload/collections/Testimonials.ts

import type { CollectionConfig } from 'payload'

const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'authorName',
    description: 'Testimonials from parents, students, and school professionals.',
    defaultColumns: ['authorName', 'authorRole', 'category', 'isFeatured', 'order'],
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      maxLength: 400,
    },
    {
      name: 'authorName',
      type: 'text',
      required: true,
    },
    {
      name: 'authorRole',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g. "Parent of Year 10 student"',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      defaultValue: 'parent',
      options: [
        { label: 'Student', value: 'student' },
        { label: 'Parent', value: 'parent' },
        { label: 'School', value: 'school' },
      ],
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'videoUrl',
      type: 'text',
      required: false,
      admin: {
        description: 'YouTube embed URL (optional)',
      },
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}

export default Testimonials
