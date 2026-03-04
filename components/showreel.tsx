"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const thumbnails = [
  {
    id: 1,
    label: "Product Shots",
    image: "/images/thumb-product.jpg",
  },
  {
    id: 2,
    label: "Social Stills",
    image: "/images/thumb-social.jpg",
  },
  {
    id: 3,
    label: "Brand Moments",
    image: "/images/thumb-brand.jpg",
  },
]

export function Showreel() {
  const [activeThumb, setActiveThumb] = useState(0)

  const mainImages = [
    "/images/showreel-poster.jpg",
    "/images/thumb-product.jpg",
    "/images/thumb-social.jpg",
    "/images/thumb-brand.jpg",
  ]

  const activeLabel =
    activeThumb === 0 ? "Featured Gallery Image" : thumbnails[activeThumb - 1]?.label

  return (
    <section id="showreel" className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-olive-light">
            Our Work
          </p>
          <h2 className="text-3xl font-bold uppercase tracking-tight text-warm-white md:text-4xl lg:text-5xl">
            Showcase Gallery
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-warm-gray">
            A quick look at the kinds of visuals we create for natural &amp; organic brands.
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto overflow-hidden rounded-lg border border-border/50 shadow-2xl shadow-black/30"
        >
          <div className="relative mx-auto aspect-video w-full max-w-4xl">
            <Image
              src={mainImages[activeThumb]}
              alt={activeLabel || "Artista gallery"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority={activeThumb === 0}
            />
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-border/30 bg-charcoal-light px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-wide text-warm-gray">
              {activeLabel}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setActiveThumb((v) => Math.max(0, v - 1))}
                className="rounded-md border border-border/40 bg-charcoal px-3 py-1.5 text-xs font-medium text-warm-white transition-colors hover:border-olive/50"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() => setActiveThumb((v) => Math.min(mainImages.length - 1, v + 1))}
                className="rounded-md border border-border/40 bg-charcoal px-3 py-1.5 text-xs font-medium text-warm-white transition-colors hover:border-olive/50"
              >
                Next
              </button>
            </div>
          </div>
        </motion.div>

        {/* Thumbnails */}
        <div className="mx-auto mt-6 flex max-w-4xl gap-4">
          {thumbnails.map((thumb, i) => (
            <motion.button
              key={thumb.id}
              type="button"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              onClick={() => setActiveThumb(i + 1)}
              className={`group relative flex-1 overflow-hidden rounded-md border transition-all ${
                activeThumb === i + 1
                  ? "border-olive ring-2 ring-olive/30"
                  : "border-border/30 hover:-translate-y-1 hover:border-olive/50 hover:shadow-lg hover:shadow-olive/10"
              }`}
            >
              <div className="relative aspect-video">
                <Image
                  src={thumb.image}
                  alt={thumb.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 280px"
                />
              </div>
              <p className="bg-charcoal-light py-2 text-center text-xs font-medium tracking-wide text-warm-gray">
                {thumb.label}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
