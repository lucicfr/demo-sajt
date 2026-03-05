import { Hero } from "@/components/hero"
import { WhyChooseUs } from "@/components/why-choose-us"
import { BeforeAfterGallery } from "@/components/before-after-gallery"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <BeforeAfterGallery preview />
      <FAQ />
      <CTA />
    </>
  )
}
