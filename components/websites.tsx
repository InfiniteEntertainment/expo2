"use client"

import { motion } from "framer-motion"
import {
  Smartphone,
  Search,
  Target,
  ShoppingCart,
  Gauge,
} from "lucide-react"
import Image from "next/image"

const checklist = [
  { icon: Smartphone, text: "Mobile-first & lightning fast" },
  { icon: Search, text: "SEO-ready foundations" },
  { icon: Target, text: "Landing pages for paid campaigns" },
  { icon: ShoppingCart, text: "E-commerce and product pages" },
  { icon: Gauge, text: "Performance optimization and integrations" },
]

export function Websites() {
  return (
    <section className="bg-warm-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-olive">
            Websites
          </p>
          <h2 className="text-balance text-3xl font-bold uppercase tracking-tight text-charcoal md:text-4xl lg:text-5xl">
            {"Don't Send Video Traffic to a Weak Website."}
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Laptop Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-lg">
              {/* Laptop frame */}
              <div className="overflow-hidden rounded-t-xl border-4 border-charcoal/80 bg-charcoal shadow-2xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/website-preview.jpg"
                    alt="Website preview on laptop"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
              </div>
              {/* Laptop base */}
              <div className="relative mx-auto h-4 w-full rounded-b-lg bg-charcoal/70">
                <div className="absolute top-0 left-1/2 h-1 w-16 -translate-x-1/2 rounded-b bg-charcoal/50" />
              </div>
              <div className="mx-auto h-2 w-[105%] -translate-x-[2.5%] rounded-b-xl bg-charcoal/30" />
            </div>
          </motion.div>

          {/* Copy + Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="mb-4 text-2xl font-bold text-charcoal md:text-3xl">
              High-Converting Websites Built In-House.
            </h3>
            <p className="mb-8 text-base leading-relaxed text-charcoal/70">
              When your videos win attention, your website must win the sale. We
              build fast, mobile-first pages designed to convert.
            </p>

            <ul className="space-y-4">
              {checklist.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-olive/15 text-olive">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-charcoal/80">
                      {item.text}
                    </span>
                  </motion.li>
                )
              })}
            </ul>

            <p className="mt-8 text-xs text-charcoal/50">
              Website development led by Sahib Singh.
            </p>

            <a
              href="#contact"
              className="mt-4 inline-block text-sm font-medium text-olive underline underline-offset-4 transition-colors hover:text-olive-light"
            >
              See Website Capabilities
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
