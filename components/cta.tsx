import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
          Vaš osmeh je naša briga
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-muted-foreground">
          Pružamo savremenu stomatološku negu uz modernu opremu i prijatan pristup pacijentima.
        </p>
        <div className="mt-10">
          <Button size="lg" asChild className="text-base">
            <Link href="/kontakt">
              Kontaktirajte nas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
