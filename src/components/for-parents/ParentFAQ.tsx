'use client'
// FILE: d:\TheHerd\MCR\Educational\src\components\for-parents\ParentFAQ.tsx

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How is attendance tracked and reported to me?',
    answer:
      'Weekly attendance reports are emailed to all parents and carers, giving a clear picture of your child\'s presence and engagement. If your child is absent for any reason, you will receive an immediate notification from our team the same morning.',
  },
  {
    question: 'What if my child has challenging behaviour?',
    answer:
      'We use a restorative approach to behaviour — focusing on understanding the reasons behind behaviour and repairing relationships rather than punishment. Behaviour support plans are developed collaboratively with parents and carers, so you are always part of the conversation.',
  },
  {
    question: 'How do I communicate with my child\'s keyworker?',
    answer:
      'Every student is assigned a dedicated key worker who is your main point of contact. You will have their direct phone number and email address. We also hold termly parent meetings to review progress and discuss next steps together.',
  },
  {
    question: 'What qualifications can my child achieve?',
    answer:
      'We offer a broad range of qualifications including GCSEs, Functional Skills Levels 1 and 2, vocational qualifications, and a range of internally accredited awards in areas such as enterprise, arts, and life skills — all tailored to each student\'s goals and ability.',
  },
  {
    question: 'Is transport provided?',
    answer:
      'We can help coordinate transport arrangements for your child. Speak to our admissions team about what is available in your area — in many cases, local authority transport support may be applicable.',
  },
  {
    question: 'How long will my child attend MCR?',
    answer:
      'Placements at MCR Educational are reviewed at the end of every term in discussion with you, your child, and the referring school or local authority. Our goal is always to ensure the best long-term outcome, whether that is reintegration into mainstream education, progression to further education, or an alternative pathway.',
  },
  {
    question: 'Can I visit before my child starts?',
    answer:
      'Yes — we strongly encourage a visit before your child begins. Seeing the environment and meeting the staff can make a huge difference to both you and your child\'s confidence. Contact us to arrange a tour and an informal chat at a time that suits you.',
  },
  {
    question: 'How do you support children with SEND?',
    answer:
      'We have specialist SEND expertise within our team and work closely with Education, Health and Care Plans (EHCPs), school SENCOs, and local authority SEND teams. Every student\'s provision is adapted to their individual needs, and we review SEND support regularly with parents and other professionals involved in your child\'s care.',
  },
]

export default function ParentFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section
      aria-labelledby="parent-faq-heading"
      className="bg-[#F7F8FC] py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#E85D75] font-semibold text-sm uppercase tracking-widest mb-3">
            Got questions?
          </p>
          <h2
            id="parent-faq-heading"
            className="font-heading font-bold text-[#1E3A5F] text-3xl sm:text-4xl mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[#1A1A2E]/60 text-base sm:text-lg max-w-xl mx-auto font-body">
            We know that choosing the right provision for your child is a big decision. Here are the
            questions we hear most from families.
          </p>
        </div>

        {/* Accordion */}
        <div
          className="max-w-3xl mx-auto divide-y divide-[#1E3A5F]/8"
          role="list"
          aria-label="Frequently asked questions"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const triggerId = `faq-trigger-${index}`

            return (
              <div key={index} role="listitem">
                <button
                  id={triggerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                  className={cn(
                    'w-full flex items-center justify-between gap-4 py-5 text-left group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A5F] focus-visible:ring-offset-2 rounded-sm',
                    isOpen ? 'text-[#1E3A5F]' : 'text-[#1A1A2E]'
                  )}
                >
                  <span className="font-heading font-semibold text-base sm:text-lg leading-snug flex-1 pr-2">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      'shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200',
                      isOpen
                        ? 'bg-[#1E3A5F] text-white'
                        : 'bg-[#1E3A5F]/8 text-[#1E3A5F] group-hover:bg-[#1E3A5F]/16'
                    )}
                    aria-hidden="true"
                  >
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      className={cn(
                        'transition-transform duration-200',
                        isOpen ? 'rotate-180' : 'rotate-0'
                      )}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className="pb-6"
                  >
                    <p className="text-[#1A1A2E]/65 text-base leading-relaxed font-body">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Footer nudge */}
        <p className="text-center text-[#1A1A2E]/50 text-sm mt-12 font-body">
          Still have questions?{' '}
          <a
            href="/contact"
            className="text-[#1E3A5F] font-semibold underline underline-offset-4 hover:text-[#1E3A5F]/75 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A5F] focus-visible:ring-offset-2 rounded-sm"
          >
            Get in touch with our team
          </a>
          {' '}— there are no silly questions.
        </p>
      </div>
    </section>
  )
}
