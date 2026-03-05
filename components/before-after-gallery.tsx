"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const galleryItems = [
  {
    id: 1,
    src: "/images/before-after-1.jpg",
    alt: "Izbeljivanje zuba - pre i posle",
    label: "Izbeljivanje zuba",
  },
  {
    id: 2,
    src: "/images/before-after-2.jpg",
    alt: "Zubni implant - pre i posle",
    label: "Zubni implant",
  },
  {
    id: 3,
    src: "/images/before-after-3.jpg",
    alt: "Ortodoncija - pre i posle",
    label: "Ortodoncija",
  },
]

export function BeforeAfterGallery({ preview = false }: { preview?: boolean }) {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)
  const items = preview ? galleryItems.slice(0, 3) : galleryItems

  return (
    <section className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Rezultati</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
            Rezultati tretmana
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Pogledajte transformacije naših pacijenata pre i posle stomatoloških tretmana.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-xl border border-border bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/20" />
                <div className="absolute inset-x-0 top-0 flex justify-between p-3">
                  <span className="rounded-full bg-foreground/70 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
                    Pre
                  </span>
                  <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
                    Posle
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-card-foreground">{item.label}</p>
              </div>
            </button>
          ))}
        </div>

        {preview && (
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/usluge">Pogledajte sve rezultate</Link>
            </Button>
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-foreground/60 text-primary-foreground transition-colors hover:bg-foreground/80"
              aria-label="Zatvori"
            >
              <X className="h-5 w-5" />
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={900}
              height={675}
              className="h-auto max-h-[80vh] w-full object-contain"
            />
            <div className="p-4 text-center">
              <p className="text-base font-semibold text-card-foreground">{selectedImage.label}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
