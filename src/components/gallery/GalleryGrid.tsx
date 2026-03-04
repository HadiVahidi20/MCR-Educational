// FILE: src/components/gallery/GalleryGrid.tsx

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { GALLERY_ITEMS, GALLERY_ALBUMS, type GalleryItem } from '@/lib/gallery-data'
import GalleryLightbox from './GalleryLightbox'

export default function GalleryGrid() {
  const [activeAlbum, setActiveAlbum] = useState<string>('all')
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredItems =
    activeAlbum === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.album === activeAlbum)

  return (
    <>
      {/* Album filter pills */}
      <div
        className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none snap-x snap-mandatory"
        role="group"
        aria-label="Filter by album"
      >
        {GALLERY_ALBUMS.map((album) => {
          const isActive = activeAlbum === album.slug
          return (
            <button
              key={album.slug}
              onClick={() => setActiveAlbum(album.slug)}
              aria-pressed={isActive}
              className={[
                'shrink-0 snap-start px-4 py-2 rounded-full text-sm font-medium transition-all',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                isActive
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-neutral-dark border border-neutral-dark/10 hover:border-primary/40 hover:text-primary',
              ].join(' ')}
            >
              {album.label}
            </button>
          )
        })}
      </div>

      {/* Masonry grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
        {filteredItems.map((item) => (
          <div key={item.id} className="break-inside-avoid mb-3">
            <button
              onClick={() => setLightboxItem(item)}
              aria-label={`View ${item.title}`}
              className={[
                'group relative w-full block rounded-xl overflow-hidden cursor-pointer',
                'hover:scale-[1.02] transition-all duration-300',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                mounted ? 'opacity-100' : 'opacity-0',
                'transition-opacity duration-500',
              ].join(' ')}
            >
              {/* Image tile */}
              <div
                className={`${item.aspectRatio} w-full relative overflow-hidden`}
              >
                {item.imageSrc ? (
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.accentColor}`} />
                )}
                {/* Overlay for hover */}
                <div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"
                  aria-hidden="true"
                />

                {/* Title label on hover */}
                <span className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/60 to-transparent px-3 py-2 text-white/90 text-xs font-body font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title}
                </span>

                {/* Play overlay for videos */}
                {item.type === 'video' && (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center border border-white/40 group-hover:bg-white/35 transition-colors">
                      <Play size={20} className="text-white fill-white ml-0.5" aria-hidden="true" />
                    </div>
                  </div>
                )}
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <p className="text-center text-neutral-dark/50 font-body py-16 text-sm">
          No items in this album yet.
        </p>
      )}

      {/* Lightbox */}
      {lightboxItem !== null && (
        <GalleryLightbox
          item={lightboxItem}
          onClose={() => setLightboxItem(null)}
        />
      )}
    </>
  )
}
