import { Stethoscope, Smile, Wrench, AlignVerticalSpaceAround, ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Stethoscope,
    title: "Opšta Stomatologija",
    description: "Sveobuhvatni pregledi, čišćenje, plombe i rutinska nega za zdravlje vaših zuba.",
  },
  {
    icon: Smile,
    title: "Izbeljivanje Zuba",
    description: "Profesionalni tretmani izbeljivanja koji bezbedno i efikasno osvetljavaju vaš osmeh.",
  },
  {
    icon: Wrench,
    title: "Zubni Implanti",
    description: "Trajne zamene zuba prirodnog izgleda korišćenjem napredne implant tehnologije.",
  },
  {
    icon: AlignVerticalSpaceAround,
    title: "Ortodoncija",
    description: "Proteze i aligneri za ravnije zube i samopouzdaniji osmeh u svakom uzrastu.",
  },
  {
    icon: ShieldCheck,
    title: "Preventivna Nega",
    description: "Zalivanje fisura, fluoridni tretmani i edukacija o oralnoj higijeni za prevenciju problema.",
  },
]

export function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Naše Usluge</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Kompletna stomatološka nega na jednom mestu
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Od rutinskih pregleda do naprednih procedura, nudimo kompletan spektar stomatoloških usluga za celu porodicu.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-card-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
