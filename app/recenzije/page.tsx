import type { Metadata } from "next"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"

export const metadata: Metadata = {
  title: "Recenzije | DentCare Stomatološka Ordinacija",
  description: "Pročitajte šta naši pacijenti kažu o DentCare ordinaciji u Pančevu. Prave priče pravih pacijenata.",
}

export default function RecenzijePage() {
  return (
    <div className="pt-20">
      <Testimonials />
      <CTA />
    </div>
  )
}
