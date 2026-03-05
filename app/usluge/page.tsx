import type { Metadata } from "next"
import { Services } from "@/components/services"
import { CTA } from "@/components/cta"

export const metadata: Metadata = {
  title: "Usluge | DentCare Stomatološka Ordinacija",
  description: "Kompletna stomatološka nega - opšta stomatologija, izbeljivanje zuba, zubni implanti, ortodoncija i preventivna nega.",
}

export default function UslugePage() {
  return (
    <div className="pt-20">
      <Services />
      <CTA />
    </div>
  )
}
