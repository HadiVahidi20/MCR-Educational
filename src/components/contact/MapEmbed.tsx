import { MapPin, ExternalLink } from 'lucide-react'

const MAP_QUERY = encodeURIComponent('Greater Manchester, M1 1AA, UK')
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`
const EMBED_URL = `https://maps.google.com/maps?q=${MAP_QUERY}&output=embed&z=14`

export default function MapEmbed() {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-primary/10 bg-primary/5 h-64 sm:h-80">
      <iframe
        src={EMBED_URL}
        title="MCR Educational location on Google Maps"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label="Map showing MCR Educational location in Greater Manchester"
      />

      {/* Overlay link for full map */}
      <a
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-white text-primary text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label="Open full map in Google Maps (opens in new tab)"
      >
        <MapPin size={11} aria-hidden="true" />
        View full map
        <ExternalLink size={10} aria-hidden="true" />
      </a>
    </div>
  )
}
