import type { CollectionConfig } from 'payload'

const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  admin: {
    description: 'Images and files uploaded via the CMS.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description: 'Alt text for accessibility.',
      },
    },
    {
      name: 'caption',
      type: 'text',
      admin: {
        description: 'Optional caption displayed beneath the media.',
      },
    },
  ],
}

export default Media
