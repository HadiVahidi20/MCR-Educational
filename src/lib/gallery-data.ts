// FILE: src/lib/gallery-data.ts

export type GalleryItem = {
  id: string
  title: string
  album: string
  type: 'image' | 'video'
  videoUrl?: string
  placeholder: string
  accentColor: string
  aspectRatio: string
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // ── Life at MCR ──────────────────────────────────────────────────────────
  {
    id: 'g1',
    title: 'Morning check-in session',
    album: 'life-at-mcr',
    type: 'image',
    placeholder: 'Morning Check-in',
    accentColor: 'from-primary to-primary/70',
    aspectRatio: 'aspect-[4/3]',
  },
  {
    id: 'g2',
    title: 'Art workshop in progress',
    album: 'life-at-mcr',
    type: 'image',
    placeholder: 'Art Workshop',
    accentColor: 'from-violet-600 to-violet-400',
    aspectRatio: 'aspect-square',
  },
  {
    id: 'g3',
    title: 'Football on the pitch',
    album: 'life-at-mcr',
    type: 'image',
    placeholder: 'Football',
    accentColor: 'from-accent to-accent/70',
    aspectRatio: 'aspect-video',
  },

  // ── Achievements ─────────────────────────────────────────────────────────
  {
    id: 'g4',
    title: 'GCSE Results Day',
    album: 'achievements',
    type: 'image',
    placeholder: 'Results Day',
    accentColor: 'from-secondary to-secondary/70',
    aspectRatio: 'aspect-[4/3]',
  },
  {
    id: 'g5',
    title: 'Awards ceremony',
    album: 'achievements',
    type: 'image',
    placeholder: 'Awards',
    accentColor: 'from-amber-500 to-amber-400',
    aspectRatio: 'aspect-square',
  },
  {
    id: 'g6',
    title: 'Student showcase performance',
    album: 'achievements',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    placeholder: 'Showcase Video',
    accentColor: 'from-primary to-accent',
    aspectRatio: 'aspect-video',
  },

  // ── Enrichment ───────────────────────────────────────────────────────────
  {
    id: 'g7',
    title: 'Cooking club sessions',
    album: 'enrichment',
    type: 'image',
    placeholder: 'Cooking Club',
    accentColor: 'from-orange-500 to-orange-400',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 'g8',
    title: 'Peak District trip',
    album: 'enrichment',
    type: 'image',
    placeholder: 'Outdoor Trip',
    accentColor: 'from-accent to-primary',
    aspectRatio: 'aspect-video',
  },
  {
    id: 'g9',
    title: 'Garden project',
    album: 'enrichment',
    type: 'image',
    placeholder: 'Gardening',
    accentColor: 'from-green-600 to-green-400',
    aspectRatio: 'aspect-square',
  },

  // ── Community ─────────────────────────────────────────────────────────────
  {
    id: 'g10',
    title: 'Open day visitors',
    album: 'community',
    type: 'image',
    placeholder: 'Open Day',
    accentColor: 'from-secondary to-primary',
    aspectRatio: 'aspect-[4/3]',
  },
  {
    id: 'g11',
    title: 'Parent information evening',
    album: 'community',
    type: 'image',
    placeholder: 'Parents Evening',
    accentColor: 'from-primary/80 to-accent/60',
    aspectRatio: 'aspect-video',
  },
  {
    id: 'g12',
    title: 'Community volunteering day',
    album: 'community',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    placeholder: 'Community Video',
    accentColor: 'from-violet-600 to-secondary',
    aspectRatio: 'aspect-square',
  },
]

export const GALLERY_ALBUMS = [
  { slug: 'all', label: 'All' },
  { slug: 'life-at-mcr', label: 'Life at MCR' },
  { slug: 'achievements', label: 'Achievements' },
  { slug: 'enrichment', label: 'Enrichment' },
  { slug: 'community', label: 'Community' },
]
