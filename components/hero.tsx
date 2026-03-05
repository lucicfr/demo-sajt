import { Phone, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-dental.jpg"
          alt="Moderna stomatološka ordinacija"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-6 py-24">
        <div className="max-w-2xl">
          <div className="mb-6 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            Više od 2.000 zadovoljnih pacijenata
          </div>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Moderna Stomatološka Ordinacija u Pančevu
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Profesionalna stomatološka nega sa modernom opremom i pristupom usmerenim na pacijenta. Vaš osmeh je naš prioritet.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="text-base">
              <Link href="/kontakt">
                <CalendarDays className="mr-2 h-5 w-5" />
                Zakaži pregled
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground text-base backdrop-blur-sm">
              <a href="tel:+381131234567">
                <Phone className="mr-2 h-5 w-5" />
                Pozovi sada
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
