import { Instagram, Linkedin } from "lucide-react"

const footerLinks = [
  { label: "Work", href: "#showreel" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Book", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-charcoal py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-1 text-lg font-bold text-warm-white">
              Artista
            </h3>
            <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-warm-gray">
              The Content Machine
            </p>
            <p className="text-sm text-warm-gray">
              We Help Natural Brands Win On Shelf & Online.
            </p>
            <p className="mt-2 text-xs text-warm-gray/60">
              Based in San Diego, CA
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-warm-gray/60">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-warm-gray transition-colors hover:text-warm-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact + Social */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-warm-gray/60">
              Contact
            </p>
            <a
              href="mailto:contact@artistaent.com"
              className="mb-6 block text-sm text-warm-white transition-colors hover:text-olive-light"
            >
              contact@artistaent.com
            </a>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/artistaentertainment/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/30 text-warm-gray transition-all hover:border-olive/50 hover:text-warm-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/artista-entertainment/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/30 text-warm-gray transition-all hover:border-olive/50 hover:text-warm-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border/20 pt-8 text-center">
          <p className="text-xs text-warm-gray/50">
            &copy; 2026 Artista Entertainment. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
