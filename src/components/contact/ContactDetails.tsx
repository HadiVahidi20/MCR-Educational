import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const details = [
  {
    icon: Phone,
    label: 'Phone',
    value: '0161 123 4567',
    href: 'tel:01611234567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@mcreducational.co.uk',
    href: 'mailto:info@mcreducational.co.uk',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'MCR Educational, Greater Manchester, M1 1AA',
    href: 'https://maps.google.com/?q=Manchester,+M1+1AA',
  },
]

const hours = [
  { day: 'Monday – Friday', time: '8:30 am – 4:30 pm' },
  { day: 'Saturday', time: 'Closed' },
  { day: 'Sunday', time: 'Closed' },
]

export default function ContactDetails() {
  return (
    <div className="space-y-10">
      {/* Contact info */}
      <div>
        <h2 className="font-heading font-bold text-primary text-xl mb-6">Contact Information</h2>
        <ul role="list" className="space-y-5">
          {details.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center shrink-0 mt-0.5">
                <Icon size={18} aria-hidden="true" />
              </div>
              <div>
                <p className="text-neutral-dark/50 text-xs uppercase tracking-wider mb-0.5">
                  {label}
                </p>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-primary font-semibold text-sm hover:text-secondary transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  {value}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Opening hours */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <Clock size={18} className="text-primary" aria-hidden="true" />
          <h2 className="font-heading font-bold text-primary text-xl">Opening Hours</h2>
        </div>
        <ul role="list" className="space-y-3">
          {hours.map(({ day, time }) => (
            <li key={day} className="flex items-center justify-between py-2 border-b border-primary/6 last:border-0">
              <span className="text-neutral-dark/70 text-sm">{day}</span>
              <span
                className={`text-sm font-semibold ${time === 'Closed' ? 'text-neutral-dark/30' : 'text-primary'}`}
              >
                {time}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-neutral-dark/40 text-xs mt-4">
          Outside these hours? Email us and we&apos;ll respond the next working day.
        </p>
      </div>
    </div>
  )
}
