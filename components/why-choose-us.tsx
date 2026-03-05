import { Monitor, Award, HeartHandshake, Clock } from "lucide-react"

const reasons = [
  {
    icon: Monitor,
    title: "Moderna Oprema",
    description: "Najsavremenija stomatološka tehnologija uključujući digitalni rendgen, 3D skenere i laserske tretmane za preciznu i ugodnu negu.",
  },
  {
    icon: Award,
    title: "Iskusni Stomatolozi",
    description: "Naš tim sertifikovanih specijalista donosi decenije kombinovanog iskustva i kontinuirano usavršavanje u najnovijim tehnikama.",
  },
  {
    icon: HeartHandshake,
    title: "Ugodni Tretmani",
    description: "Mirno i prijatno okruženje sa nežnim tehnikama i opcijama sedacije za bezbrižno stomatološko iskustvo.",
  },
  {
    icon: Clock,
    title: "Fleksibilni Termini",
    description: "Dostupnost u večernjim satima i vikendom sa lakim online zakazivanjem da uklopite posete u vaš raspored.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">Zašto Mi</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Šta nas izdvaja
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-primary-foreground/70">
            Idemo dalje od standardne stomatološke nege kako bismo pružili izuzetno iskustvo od početka do kraja.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
                <reason.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-primary-foreground">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
