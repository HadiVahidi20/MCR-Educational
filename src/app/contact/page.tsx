import type { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactDetails from '@/components/contact/ContactDetails'
import MapEmbed from '@/components/contact/MapEmbed'

export const metadata: Metadata = {
  title: 'Contact Us — MCR Educational',
  description:
    'Get in touch with MCR Educational. Use our contact form, call us on 0161 123 4567, or email info@mcreducational.co.uk.',
  openGraph: {
    title: 'Contact Us — MCR Educational',
    description:
      'Get in touch with MCR Educational. Use our contact form, call us on 0161 123 4567, or email info@mcreducational.co.uk.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return (
    <main id="main-content">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <ContactHero />

      {/* ── FORM + DETAILS ───────────────────────────────────────────────── */}
      <section
        aria-label="Contact form and details"
        className="bg-neutral-light py-20 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form — wider column */}
            <div className="lg:col-span-3 bg-white rounded-3xl border border-primary/8 shadow-sm p-8 sm:p-10">
              <h2 className="font-heading font-bold text-primary text-2xl mb-2">
                Send us a message
              </h2>
              <p className="text-neutral-dark/55 text-sm mb-8">
                We&apos;ll get back to you within 48 hours on working days.
              </p>
              <ContactForm />
            </div>

            {/* Details + Map — narrower column */}
            <div className="lg:col-span-2 space-y-8">
              <ContactDetails />
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
