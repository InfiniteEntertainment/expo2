"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const proofBadges = [
  "+1M Views",
  "50k+ Monthly Views",
  "Organic + Paid",
  "Product Videos",
  "Brand Stories",
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 animate-ken-burns">
        <Image
          src="/images/hero-poster.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 pb-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-balance text-4xl font-bold uppercase leading-[1.1] tracking-tight text-warm-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          We Help Natural Brands Win On Shelf & Online.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-warm-beige/90 md:text-lg"
        >
          Short-form content, cinematic product videos, and conversion-ready
          websites—built to grow modern beverage and CPG brands.
        </motion.p>

        {/* Proof Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {proofBadges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              className="rounded-full border border-warm-white/20 bg-warm-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-warm-white backdrop-blur-sm"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="animate-pulse-glow rounded-sm bg-warm-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-charcoal transition-all hover:bg-warm-beige"
          >
            Book Your Free Expo Strategy Session
          </a>
          <a
            href="#showreel"
            className="rounded-sm border border-warm-white/30 px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-warm-white transition-all hover:border-warm-white/60 hover:bg-warm-white/10"
          >
            Watch the Showreel
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-6 text-xs text-warm-gray"
        >
          {'Expo West attendees get a complimentary "Shelf + Online Growth Audit."'}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-10 w-6 rounded-full border-2 border-warm-white/30"
        >
          <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-warm-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
