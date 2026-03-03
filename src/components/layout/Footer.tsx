import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/programmes', label: 'Our Programmes' },
  { href: '/for-schools', label: 'For Schools' },
  { href: '/for-parents', label: 'For Parents' },
  { href: '/for-students', label: 'For Students' },
  { href: '/news', label: 'News & Events' },
  { href: '/contact', label: 'Contact Us' },
];

const policyLinks = [
  { href: '/policies/privacy', label: 'Privacy Policy' },
  { href: '/policies/safeguarding', label: 'Safeguarding' },
  { href: '/policies/cookies', label: 'Cookie Policy' },
  { href: '/policies/complaints', label: 'Complaints' },
];

const socialLinks = [
  {
    href: 'https://facebook.com',
    label: 'Follow us on Facebook',
    Icon: Facebook,
  },
  {
    href: 'https://instagram.com',
    label: 'Follow us on Instagram',
    Icon: Instagram,
  },
  {
    href: 'https://twitter.com',
    label: 'Follow us on X (Twitter)',
    Icon: Twitter,
  },
  {
    href: 'https://linkedin.com',
    label: 'Connect on LinkedIn',
    Icon: Linkedin,
  },
  {
    href: 'https://youtube.com',
    label: 'Watch us on YouTube',
    Icon: Youtube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white" aria-label="Site footer">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark rounded-sm mb-4"
              aria-label="MCR Educational — home"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-white">
                <GraduationCap size={22} aria-hidden="true" />
              </div>
              <div className="leading-tight">
                <div className="text-base font-bold font-heading text-white group-hover:text-accent transition-colors">
                  MCR Educational
                </div>
                <div className="text-[10px] text-white/50 uppercase tracking-widest">
                  Part of MCR HQ CIC
                </div>
              </div>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering young people through dance, education and support.
              Alternative provision that puts creativity and wellbeing at the
              heart of learning.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3" role="list" aria-label="Social media links">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  role="listitem"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-white/70 hover:bg-secondary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h2 className="text-sm font-semibold font-heading text-white uppercase tracking-widest mb-5">
              Quick Links
            </h2>
            <ul role="list" className="space-y-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h2 className="text-sm font-semibold font-heading text-white uppercase tracking-widest mb-5">
              Contact
            </h2>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin
                  size={15}
                  className="mt-0.5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>
                  MCR HQ CIC
                  <br />
                  Greater Manchester
                  <br />
                  M1 XXX
                </span>
              </div>
              <a
                href="tel:01611234567"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent"
              >
                <Phone size={14} className="shrink-0 text-accent" aria-hidden="true" />
                0161 123 4567
              </a>
              <a
                href="mailto:info@mcreducational.co.uk"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent break-all"
              >
                <Mail size={14} className="shrink-0 text-accent" aria-hidden="true" />
                info@mcreducational.co.uk
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <Clock
                  size={14}
                  className="mt-0.5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>
                  Mon – Fri: 8:30am – 4:00pm
                  <br />
                  Term time only
                </span>
              </div>
            </address>
          </div>

          {/* Column 4 — Make a Referral CTA */}
          <div>
            <h2 className="text-sm font-semibold font-heading text-white uppercase tracking-widest mb-5">
              Work With Us
            </h2>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Are you a school, local authority, or parent looking for
              alternative provision for a young person?
            </p>
            <Link
              href="/for-schools#referral"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-secondary text-white text-sm font-semibold hover:bg-secondary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark"
            >
              Make a Referral
            </Link>
            <p className="mt-4 text-xs text-white/40 leading-relaxed">
              We typically respond to referrals within 48 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            {/* Legal info */}
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center sm:text-left">
              <span>© {new Date().getFullYear()} MCR HQ CIC. All rights reserved.</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span>Registered CIC No. XXXXXXX</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span>UKRLP: XXXXXXXX</span>
            </div>

            {/* Policy links */}
            <nav aria-label="Legal and policy links">
              <ul role="list" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                {policyLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
