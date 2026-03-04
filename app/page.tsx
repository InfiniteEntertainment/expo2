import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Showreel } from "@/components/showreel"
import { Services } from "@/components/services"
import { Websites } from "@/components/websites"
import { Team } from "@/components/team"
import { ExpoOffer } from "@/components/expo-offer"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Showreel />
      <Services />
      <Websites />
      <Team />
      <ExpoOffer />
    <Suspense fallback={null}>
      <Contact />
    </Suspense>
      <Footer />
    </main>
  )
}
