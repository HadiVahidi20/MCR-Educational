// FILE: src/lib/policies-data.ts

export type Policy = {
  slug: string
  title: string
  lastUpdated: string
  version: string
  summary: string
  downloadUrl?: string
  sections: {
    heading: string
    content: string
  }[]
}

export const POLICIES: Policy[] = [
  {
    slug: 'safeguarding-policy',
    title: 'Safeguarding Policy',
    lastUpdated: '2025-09-01',
    version: 'v3.1',
    summary:
      'Our commitment to the safety and protection of all young people in our care.',
    sections: [
      {
        heading: 'Statement of Intent',
        content:
          'MCR Educational is committed to safeguarding and promoting the welfare of all young people...',
      },
      {
        heading: 'Roles & Responsibilities',
        content:
          'Our Designated Safeguarding Lead (DSL) is Priya Sharma. All staff share responsibility for child protection...',
      },
      {
        heading: 'Reporting Concerns',
        content:
          "Any concerns about a young person's welfare should be reported immediately to the DSL. Never delay. When in doubt, report...",
      },
    ],
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    lastUpdated: '2025-08-15',
    version: 'v2.0',
    summary:
      'How we collect, use, and protect your personal data in line with UK GDPR.',
    sections: [
      {
        heading: 'Data We Collect',
        content:
          'We collect personal data including names, contact details, and educational records as necessary for our services...',
      },
      {
        heading: 'How We Use Your Data',
        content:
          'Your data is used to provide educational services, communicate with you, and fulfil legal obligations...',
      },
      {
        heading: 'Your Rights',
        content:
          'Under UK GDPR you have the right to access, rectify, or erase your data. Contact our Data Protection Officer at info@mcreducational.co.uk...',
      },
    ],
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    lastUpdated: '2025-08-15',
    version: 'v1.1',
    summary: 'Information about how we use cookies on our website.',
    sections: [
      {
        heading: 'What Are Cookies',
        content:
          'Cookies are small text files placed on your device when you visit our website...',
      },
      {
        heading: 'Cookies We Use',
        content:
          'We use essential cookies for website functionality and analytics cookies (with your consent) to improve our service...',
      },
      {
        heading: 'Managing Cookies',
        content:
          'You can manage cookie preferences using the banner at the bottom of this page or through your browser settings...',
      },
    ],
  },
  {
    slug: 'complaints-procedure',
    title: 'Complaints Procedure',
    lastUpdated: '2025-07-01',
    version: 'v1.3',
    summary: 'How to raise a concern or complaint with MCR Educational.',
    sections: [
      {
        heading: 'Our Commitment',
        content:
          'We take all complaints seriously and aim to resolve them fairly, promptly, and confidentially...',
      },
      {
        heading: 'Stage 1 — Informal Resolution',
        content:
          'Please speak directly with the relevant member of staff or their line manager in the first instance...',
      },
      {
        heading: 'Stage 2 — Formal Complaint',
        content:
          'If unresolved, submit a written complaint to the Headteacher. We will acknowledge within 5 working days...',
      },
    ],
  },
  {
    slug: 'equality-diversity',
    title: 'Equality & Diversity Policy',
    lastUpdated: '2025-07-01',
    version: 'v2.1',
    summary:
      'Our approach to equality, inclusion, and diversity across all aspects of our work.',
    sections: [
      {
        heading: 'Our Commitment',
        content:
          'MCR Educational values and celebrates diversity. We are committed to eliminating discrimination and promoting equality of opportunity...',
      },
      {
        heading: 'Protected Characteristics',
        content:
          'We comply with the Equality Act 2010 and do not discriminate on the basis of age, disability, gender, race, religion, or sexuality...',
      },
      {
        heading: 'Inclusive Practice',
        content:
          'Our curriculum and practices are designed to be inclusive. All policies are subject to regular equality impact assessments...',
      },
    ],
  },
  {
    slug: 'health-safety',
    title: 'Health & Safety Policy',
    lastUpdated: '2025-06-01',
    version: 'v1.4',
    summary: 'Our approach to maintaining a safe working and learning environment.',
    sections: [
      {
        heading: 'Statement of Intent',
        content:
          'MCR Educational is committed to providing a safe and healthy environment for all students and staff...',
      },
      {
        heading: 'Responsibilities',
        content:
          'The Executive Headteacher has overall responsibility for health and safety. All staff have a duty of care...',
      },
      {
        heading: 'Risk Assessment',
        content:
          'Regular risk assessments are conducted for all activities, trips, and premises. Records are maintained and reviewed annually...',
      },
    ],
  },
  {
    slug: 'governance',
    title: 'Governance Information',
    lastUpdated: '2025-09-01',
    version: 'v1.0',
    summary:
      "Information about MCR Educational's governance structure, directors, and accountability.",
    sections: [
      {
        heading: 'Organisational Structure',
        content:
          'MCR Educational is a private limited company committed to providing high-quality alternative provision...',
      },
      {
        heading: 'Board of Directors',
        content:
          'Our board meets quarterly to review strategy, performance, and compliance. Minutes are available on request...',
      },
      {
        heading: 'Accountability & Reporting',
        content:
          'We report to Ofsted, local authorities, and commissioning schools. Our most recent inspection report is available on the Ofsted website...',
      },
    ],
  },
]

export function getPolicy(slug: string): Policy | undefined {
  return POLICIES.find((p) => p.slug === slug)
}
