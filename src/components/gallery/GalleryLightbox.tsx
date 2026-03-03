// FILE: src/components/gallery/GalleryLightbox.tsx

'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import type { GalleryItem } from '@/lib/gallery-data'
import { GALLERY_ALBUMS } from '@/lib/gallery-data'

interface GalleryLightboxProps {
  item: GalleryItem
  onClose: () => void
}

export default function GalleryLightbox({ item, onClose }: GalleryLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const albumLabel =
    GALLERY_ALBUMS.find((a) => a.slug === item.album)?.label ?? item.album

  // Focus the close button on mount
  useEffect(() => {
    closeButtonRef.current?.focus()
  }, [])

  // Escape key closes the lightbox
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  // Prevent body scroll while open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Lightbox: ${item.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col gap-4">
        {/* Close button */}
        <div className="flex justify-end">
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close lightbox"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Media area */}
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
          {item.type === 'video' && item.videoUrl ? (
            <div className="aspect-video w-full bg-neutral-dark">
              <iframe
                src={item.videoUrl}
                title={item.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div
              className={`w-full aspect-[4/3] sm:aspect-video bg-gradient-to-br ${item.accentColor} flex items-center justify-center`}
            >
              <div className="text-center px-6">
                <p className="font-heading font-semibold text-white text-xl sm:text-2xl lg:text-3xl drop-shadow-md">
                  {item.title}
                </p>
                <p className="text-white/60 text-sm mt-2 font-body">
                  {item.placeholder}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Caption */}
        <div className="flex items-center gap-3 px-1">
          <p className="font-body text-white text-base sm:text-lg flex-1 leading-snug">
            {item.title}
          </p>
          <span className="shrink-0 inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-medium border border-white/15">
            {albumLabel}
          </span>
        </div>
      </div>
    </div>
  )
}
