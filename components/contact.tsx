"use client"

import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Send, Calendar, AlertTriangle, Loader2 } from "lucide-react"

type FormState = {
  fullName: string
  brandName: string
  email: string
  website: string
  primaryGoal: string
  productCategory: string
  budgetRange: string
  message: string
}

const FORM_NAME = "expo-contact"

function encodeForm(data: Record<string, string>) {
  const params = new URLSearchParams()
  for (const [k, v] of Object.entries(data)) params.append(k, v ?? "")
  return params.toString()
}

export function Contact() {
  const searchParams = useSearchParams()

  const initialSubmitted = useMemo(() => {
    // Allows optional redirect-based success: /?form=expo-contact&success=1#contact
    return (
      searchParams?.get("success") === "1" &&
      (searchParams?.get("form") === FORM_NAME || !searchParams?.get("form"))
    )
  }, [searchParams])

  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    brandName: "",
    email: "",
    website: "",
    primaryGoal: "",
    productCategory: "",
    budgetRange: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState<boolean>(initialSubmitted)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const payload: Record<string, string> = {
        "form-name": FORM_NAME,
        fullName: formData.fullName,
        brandName: formData.brandName,
        email: formData.email,
        website: formData.website,
        primaryGoal: formData.primaryGoal,
        productCategory: formData.productCategory,
        budgetRange: formData.budgetRange,
        message: formData.message,
      }

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm(payload),
      })

      if (!res.ok) throw new Error(`Submission failed with status ${res.status}`)

      setSubmitted(true)
      setFormData({
        fullName: "",
        brandName: "",
        email: "",
        website: "",
        primaryGoal: "",
        productCategory: "",
        budgetRange: "",
        message: "",
      })
    } catch (err) {
      setError(
        "Something went wrong submitting the form. Please try again, or email us at contact@artistaent.com."
      )
      // eslint-disable-next-line no-console
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-charcoal-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-olive-light">
            Get Started
          </p>
          <h2 className="text-3xl font-bold uppercase tracking-tight text-warm-white md:text-4xl lg:text-5xl">
            Book Your Strategy Session
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-5">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <h3 className="mb-1 text-lg font-bold text-warm-white">Artista</h3>
              <p className="text-xs uppercase tracking-[0.15em] text-warm-gray">
                The Content Machine
              </p>
            </div>

            <div className="space-y-4 text-sm text-warm-gray">
              <p>Based in San Diego, California</p>
              <a
                href="mailto:contact@artistaent.com"
                className="block text-warm-white transition-colors hover:text-olive-light"
              >
                contact@artistaent.com
              </a>
              <p>Serving natural and organic brands nationwide.</p>
            </div>

            {/* Calendar placeholder */}
            <div className="mt-12 rounded-xl border border-border/30 bg-charcoal p-8 text-center">
              <Calendar className="mx-auto mb-4 h-10 w-10 text-olive/60" />
              <h4 className="mb-2 text-base font-semibold text-warm-white">
                Choose a Time During Expo Week
              </h4>
              <p className="text-xs text-warm-gray">
                Calendar booking integration coming soon. In the meantime, fill out
                the form and we will get back to you within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-olive/30 bg-charcoal p-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-olive/20">
                  <Send className="h-7 w-7 text-olive-light" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-warm-white">
                  Request Received
                </h3>
                <p className="text-sm text-warm-gray">
                  We'll be in touch within 24 hours to schedule your free Expo audit.
                </p>
              </div>
            ) : (
              <form
                name={FORM_NAME}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5 rounded-xl border border-border/30 bg-charcoal p-8"
              >
                {/* Netlify needs this hidden input to match the form name */}
                <input type="hidden" name="form-name" value={FORM_NAME} />
                {/* Honeypot field */}
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>

                {error ? (
                  <div className="flex items-start gap-3 rounded-md border border-red-500/30 bg-red-500/10 p-4 text-sm text-warm-white">
                    <AlertTriangle className="mt-0.5 h-5 w-5 flex-none" />
                    <div>{error}</div>
                  </div>
                ) : null}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-warm-gray"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full rounded-md border border-border/50 bg-charcoal-light px-4 py-3 text-sm text-warm-white placeholder:text-warm-gray/50 focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="brandName"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-warm-gray"
                    >
                      Brand Name *
                    </label>
                    <input
                      id="brandName"
                      name="brandName"
                      type="text"
                      required
                      value={formData.brandName}
                      onChange={(e) =>
                        setFormData({ ...formData, brandName: e.target.value })
                      }
                      className="w-full rounded-md border border-border/50 bg-charcoal-light px-4 py-3 text-sm text-warm-white placeholder:text-warm-gray/50 focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive/50"
                      placeholder="Your brand"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-warm-gray"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-md border border-border/50 bg-charcoal-light px-4 py-3 text-sm text-warm-white placeholder:text-warm-gray/50 focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive/50"
                      placeholder="you@brand.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="website"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-warm-gray"
                    >
                      Website (Optional)
                    </label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      className="w-full rounded-md border border-border/50 bg-charcoal-light px-4 py-3 text-sm text-warm-white placeholder:text-warm-gray/50 focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive/50"
                      placeholder="https://yourbrand.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="primaryGoal"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-warm-gray"
                    >
                      Primary Goal
                    </label>
                    <select
                      id="primaryGoal"
                      name="primaryGoal"
                      value={formData.primaryGoal}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          primaryGoal: e.target.value,
                        })
                      }
                      className="w-full appearance-none rounded-md border border-border/50 bg-charcoal-light px-4 py-3 text-sm text-warm-white focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive/50"
                    >
                      <option value="">Select...</option>
                      <option value="launch">Launch</option>
                      <option value="scale">Scale</option>
                      <option value="retail-pitch">Retail Pitch</option>
                      <option value="rebrand">Rebrand</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="productCategory"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-warm-gray"
                    >
                      Product Category
                    </label>
                    <select
                      id="productCategory"
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          productCategory: e.target.value,
                        })
                      }
                      className="w-full appearance-none rounded-md border border-border/50 bg-charcoal-light px-4 py-3 text-sm text-warm-white focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive/50"
                    >
                      <option value="">Select...</option>
                      <option value="beverage">Beverage</option>
                      <option value="snacks">Snacks</option>
                      <option value="supplements">Supplements</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="budgetRange"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-warm-gray"
                  >
                    Estimated Budget Range (Optional)
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        budgetRange: e.target.value,
                      })
                    }
                    className="w-full appearance-none rounded-md border border-border/50 bg-charcoal-light px-4 py-3 text-sm text-warm-white focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive/50"
                  >
                    <option value="">Select...</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k+">$25k+</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-warm-gray"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none rounded-md border border-border/50 bg-charcoal-light px-4 py-3 text-sm text-warm-white placeholder:text-warm-gray/50 focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive/50"
                    placeholder="Tell us about your brand and goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-warm-white py-3.5 text-sm font-bold uppercase tracking-wider text-charcoal transition-all hover:bg-warm-beige disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Request My Free Expo Audit
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
