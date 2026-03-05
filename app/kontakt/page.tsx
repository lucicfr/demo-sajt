import type { Metadata } from "next"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Kontakt | DentCare Stomatološka Ordinacija",
  description: "Kontaktirajte DentCare ordinaciju u Pančevu. Adresa, telefon, radno vreme i mapa lokacije.",
}

export default function KontaktPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  )
}
