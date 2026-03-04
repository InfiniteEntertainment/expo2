"use client"

import { motion } from "framer-motion"
import { Play, Zap, Film, Video } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Zap,
    headline: "SHORT-FORM THAT SELLS",
    bullets: [
      "8-12 scroll-stopping videos per month",
      "Hooks, variants, and edits built for performance",
      "Organic + paid-ready deliverables",
      "Designed to drive attention AND conversion",
    ],
    proof: "Backed by +1M views and 50k+ monthly views momentum.",
    media: "phone" as const,
  },
  {
    icon: Video,
    headline: "PRODUCT VIDEOS FOR DTC + RETAIL",
    bullets: [
      "Bottle macro, pour shots, condensation, lifestyle",
      "Premium visuals for Amazon, Shopify, retailer pitches",
      "Built to fill your website with compelling video content",
      "Converts browsers into buyers",
    ],
    proof: null,
    media: "product" as const,
  },
  {
    icon: Film,
    headline: "We’re a CRG Group — Content. Revenue. Growth.",
    bullets: [
      "Cinematic product videos; Short-form performance content",
      "Product storytelling engineered for purchase intent Traffic-to-conversion funnel integration",
      "Timeless messaging designed for long-term use",
    ],
    proof: null,
    media: "cinematic" as const,
  },
]

function PhoneMockup() {
  return (
    <div className="relative mx-auto h-80 w-44 overflow-hidden rounded-3xl border-4 border-charcoal-light bg-charcoal shadow-xl">
      <div className="absolute top-0 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-charcoal-light" />
      <Image
        src="/images/short-form-1.jpg"
        alt="Short-form content preview"
        fill
        className="object-cover"
        sizes="176px"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-charcoal/20">
        <Play className="h-10 w-10 text-warm-white/80" fill="currentColor" />
      </div>
    </div>
  )
}

function ProductGrid() {
  return (
    <div className="space-y-3">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src="/images/product-hero.jpg"
          alt="Premium product photography"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="relative aspect-square overflow-hidden rounded-md bg-charcoal-light"
          >
            <Image
              src="/images/product-hero.jpg"
              alt={`Product detail ${i}`}
              fill
              className="object-cover opacity-70"
              sizes="120px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function CinematicFrame() {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-border/30 shadow-xl">
      <Image
        src="/images/brand-story.jpg"
        alt="Cinematic brand story"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 400px"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-charcoal/30">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-warm-white/50 bg-warm-white/10 backdrop-blur-sm">
          <Play className="h-6 w-6 text-warm-white" fill="currentColor" />
        </div>
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section
      id="services"
      className="bg-charcoal-light py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-olive-light">
            What We Do
          </p>
          <h2 className="text-3xl font-bold uppercase tracking-tight text-warm-white md:text-4xl lg:text-5xl">
            The Growth Stack for Natural Brands
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.headline}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col rounded-xl border border-border/30 bg-charcoal p-8 transition-all hover:-translate-y-1 hover:border-olive/40 hover:shadow-xl hover:shadow-olive/5"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-olive/15 text-olive transition-colors group-hover:bg-olive/25">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-4 text-lg font-bold uppercase tracking-wide text-warm-white">
                  {service.headline}
                </h3>

                <ul className="mb-6 flex-1 space-y-2.5">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm leading-relaxed text-warm-gray"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-olive" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {service.proof && (
                  <p className="mb-6 border-t border-border/30 pt-4 text-xs italic text-olive-light">
                    {service.proof}
                  </p>
                )}

                <div className="mt-auto pt-4">
                  {service.media === "phone" && <PhoneMockup />}
                  {service.media === "product" && <ProductGrid />}
                  {service.media === "cinematic" && <CinematicFrame />}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
