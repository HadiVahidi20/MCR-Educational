// FILE: src/app/policies/[slug]/page.tsx

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { POLICIES, getPolicy } from '@/lib/policies-data'
import PolicyTemplate from '@/components/policies/PolicyTemplate'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return POLICIES.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const policy = getPolicy(slug)

  if (!policy) {
    notFound()
  }

  return {
    title: `${policy.title} | Policies | MCR Educational`,
    description: policy.summary,
    openGraph: {
      title: `${policy.title} | Policies | MCR Educational`,
      description: policy.summary,
      url: `/policies/${policy.slug}`,
    },
  }
}

export default async function PolicyPage({ params }: Props) {
  const { slug } = await params
  const policy = getPolicy(slug)

  if (!policy) {
    notFound()
  }

  return <PolicyTemplate policy={policy} />
}
