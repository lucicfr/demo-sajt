import { CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
          Zakažite vaš stomatološki pregled danas
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-muted-foreground">
          Napravite prvi korak ka zdravijem i lepšem osmehu. Naš prijateljski tim je spreman da vas dočeka.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild className="text-base">
            <Link href="/kontakt">
              <CalendarDays className="mr-2 h-5 w-5" />
              Zakaži pregled
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base">
            <a href="tel:+381131234567">
              Pozovite +381 13 123 456
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
