"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Work", href: "#showreel" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-warm-white">
              Artista
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-warm-gray">
              The Content Machine
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-warm-gray transition-colors hover:text-warm-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:contact@artistaent.com"
              className="rounded-sm border border-warm-gray/30 px-4 py-2 text-xs text-warm-gray transition-all hover:border-warm-white/50 hover:text-warm-white"
            >
              Email Us
            </a>
            <a
              href="#contact"
              className="rounded-sm bg-warm-white px-5 py-2.5 text-sm font-semibold text-charcoal transition-all hover:bg-warm-beige"
            >
              Book Strategy Session
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-warm-white md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-charcoal/98 backdrop-blur-lg md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-light text-warm-white transition-colors hover:text-warm-beige"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:contact@artistaent.com"
              className="rounded-sm border border-warm-gray/30 px-6 py-2.5 text-sm text-warm-gray transition-all hover:border-warm-white/50 hover:text-warm-white"
            >
              Email Us
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-sm bg-warm-white px-8 py-3 text-sm font-semibold text-charcoal"
            >
              Book Strategy Session
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/30 bg-charcoal/95 p-3 backdrop-blur-md md:hidden">
        <a
          href="#contact"
          className="block w-full rounded-sm bg-warm-white py-3 text-center text-sm font-semibold text-charcoal transition-all hover:bg-warm-beige"
        >
          Book Session
        </a>
      </div>
    </>
  )
}
