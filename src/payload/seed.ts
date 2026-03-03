/**
 * Seed script — populates the database with initial development data.
 *
 * Usage:
 *   pnpm payload:seed
 *
 * Requires DATABASE_URI and PAYLOAD_SECRET to be set in .env.local.
 */

import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'
import config from './payload.config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

async function seed() {
  const payload = await getPayload({ config })

  console.log('🌱  Starting seed...')

  // ── Admin user ─────────────────────────────────────────────────────────────
  const existingAdmins = await payload.find({
    collection: 'users',
    where: { email: { equals: 'admin@mcreducational.co.uk' } },
    limit: 1,
  })

  if (existingAdmins.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: {
        name: 'MCR Admin',
        email: 'admin@mcreducational.co.uk',
        password: 'ChangeMe123!',
        role: 'super-admin',
      },
    })
    console.log('✅  Created admin user: admin@mcreducational.co.uk (password: ChangeMe123!)')
  } else {
    console.log('ℹ️   Admin user already exists — skipping.')
  }

  // ── Home page ──────────────────────────────────────────────────────────────
  const existingHome = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    limit: 1,
  })

  if (existingHome.totalDocs === 0) {
    await payload.create({
      collection: 'pages',
      data: {
        title: 'Home',
        slug: 'home',
        status: 'published',
        seo: {
          metaTitle: 'MCR Educational — Specialist Education Support in Greater Manchester',
          metaDescription:
            'MCR Educational provides specialist educational support services for schools, parents, and students across Greater Manchester.',
        },
      },
    })
    console.log('✅  Created home page.')
  } else {
    console.log('ℹ️   Home page already exists — skipping.')
  }

  console.log('\n🌱  Seed complete.')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
