import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '@/app/(payload)/importMap'

export const dynamic = 'force-dynamic'

export { generatePageMetadata as generateMetadata }

export default function Page(args: Parameters<typeof RootPage>[0]) {
  return RootPage({ ...args, importMap })
}
