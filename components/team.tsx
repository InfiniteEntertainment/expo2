"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const team = [
  {
    name: "Fabrizio Siboldi",
    role: "Founder & Creative Director",
    oneLiner: "Strategy + cinematic storytelling for natural brands.",
    specialties: "Brand Strategy, Creative Direction, Cinematography",
    image: "/images/team-fabrizio.jpg",
  },
  {
    name: "Renzo Siboldi",
    role: "Videographer",
    oneLiner: "Beverage-focused cinematography + on-set execution.",
    specialties: "Product Macro, Lifestyle Shoots, Short-Form Content",
    image: "/images/team-renzo.jpg",
  },
  {
    name: "Sahib Singh",
    role: "Head of Web Systems",
    oneLiner:
      "Full-stack web developer building modern, performance-focused websites.",
    specialties: "React, Full-Stack Development, Scalable Systems",
    image: "/images/team-sahib.jpg",
  },
]

export function Team() {
  return (
    <section id="team" className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-olive-light">
            The Team
          </p>
          <h2 className="text-3xl font-bold uppercase tracking-tight text-warm-white md:text-4xl lg:text-5xl">
            Meet The Content Machine
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-xl border border-border/30 bg-charcoal-light transition-all hover:-translate-y-1 hover:border-olive/30 hover:shadow-xl hover:shadow-olive/5"
            >
              {/* Headshot */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-light via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="relative -mt-16 p-6 pt-0">
                <div className="relative">
                  <h3 className="text-lg font-bold text-warm-white">
                    {member.name}
                  </h3>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-olive-light">
                    {member.role}
                  </p>
                  <p className="text-sm leading-relaxed text-warm-gray">
                    {member.oneLiner}
                  </p>

                  {/* Hover reveal specialties */}
                  <div className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
                    <p className="border-t border-border/30 pt-3 text-xs text-warm-gray/70">
                      <span className="font-medium text-olive-light">
                        Specialties:{" "}
                      </span>
                      {member.specialties}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
