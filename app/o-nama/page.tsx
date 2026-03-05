import type { Metadata } from "next"
import { About } from "@/components/about"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CTA } from "@/components/cta"

export const metadata: Metadata = {
  title: "O nama | DentCare Stomatološka Ordinacija",
  description: "Saznajte više o DentCare ordinaciji u Pančevu - 15+ godina iskustva, moderna tehnologija i pristup usmeren na pacijenta.",
}

export default function ONamaPage() {
  return (
    <div className="pt-20">
      <About />
      <WhyChooseUs />
      <CTA />
    </div>
  )
}
