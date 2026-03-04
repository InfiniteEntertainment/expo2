"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const bullets = [
  "Quick visibility + conversion assessment",
  "Actionable content recommendations",
  "Website/landing page improvement checklist",
  "Suggested short-form strategy for the next 30 days",
]

export function ExpoOffer() {
  return (
    <section className="relative overflow-hidden bg-olive py-24 lg:py-32">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(245,240,235,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-warm-white/70">
            Limited Time
          </p>
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight text-warm-white md:text-4xl lg:text-5xl">
            Expo West Exclusive
          </h2>
          <p className="mx-auto mb-2 max-w-lg text-xl font-semibold text-warm-white/90 md:text-2xl">
            Free Shelf + Online Growth Audit
          </p>
          <p className="mx-auto mb-10 max-w-md text-sm text-warm-white/60">
            (Video + Website + Product Story)
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-10 flex max-w-md flex-col gap-3 text-left"
        >
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-warm-white/20">
                <Check className="h-3 w-3 text-warm-white" />
              </div>
              <span className="text-sm text-warm-white/90">{item}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#contact"
            className="animate-pulse-glow inline-block rounded-sm bg-warm-white px-10 py-4 text-sm font-bold uppercase tracking-wider text-charcoal transition-all hover:bg-warm-beige"
          >
            Claim Your Free Strategy Session
          </a>
          <p className="mt-4 text-xs text-warm-white/50">
            Limited availability during Expo Week.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
