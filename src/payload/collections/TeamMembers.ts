// FILE: src/payload/collections/TeamMembers.ts

import type { CollectionConfig } from 'payload'

const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  admin: {
    useAsTitle: 'name',
    description: 'Team members displayed on the Meet the Team page.',
    defaultColumns: ['name', 'role', 'department', 'order'],
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g. "Head Teacher", "Key Worker"',
      },
    },
    {
      name: 'department',
      type: 'select',
      required: true,
      options: [
        { label: 'Leadership', value: 'leadership' },
        { label: 'Teaching', value: 'teaching' },
        { label: 'Support', value: 'support' },
        { label: 'Pastoral', value: 'pastoral' },
        { label: 'Admin', value: 'admin' },
      ],
    },
    {
      name: 'bio',
      type: 'textarea',
      required: true,
      maxLength: 300,
    },
    {
      name: 'fullBio',
      type: 'textarea',
      required: false,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'email',
      type: 'email',
      required: false,
      admin: {
        description: 'Optional — shown if provided',
      },
    },
    {
      name: 'linkedIn',
      type: 'text',
      required: false,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}

export default TeamMembers
