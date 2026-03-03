import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import Users from './collections/Users'
import Pages from './collections/Pages'
import Media from './collections/Media'
import Referrals from './collections/Referrals'
import Programmes from './collections/Programmes'
import TeamMembers from './collections/TeamMembers'
import Posts from './collections/Posts'
import Events from './collections/Events'
import Testimonials from './collections/Testimonials'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '— MCR Educational CMS',
    },
  },

  collections: [Users, Pages, Media, Referrals, Programmes, TeamMembers, Posts, Events, Testimonials],

  editor: lexicalEditor(),

  secret: process.env.PAYLOAD_SECRET ?? '',

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
    // Migrations are stored alongside the config
    migrationDir: path.resolve(dirname, 'migrations'),
  }),

  upload: {
    // Local disk storage for development.
    // For production, swap in @payloadcms/storage-s3 or @payloadcms/storage-r2.
    limits: {
      fileSize: 10_000_000, // 10 MB
    },
  },

  cors: [process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'],

  csrf: [process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'],

  sharp,
})
