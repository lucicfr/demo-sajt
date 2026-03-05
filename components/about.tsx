import { Shield, Heart, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Shield,
    title: "15+ Godina Iskustva",
    description: "Ordinacija od poverenja sa više od decenije pouzdane stomatološke nege.",
  },
  {
    icon: Sparkles,
    title: "Moderna Tehnologija",
    description: "Digitalni rendgen, 3D snimanje i laserski tretmani za preciznu negu.",
  },
  {
    icon: Heart,
    title: "Pristup Usmeren na Pacijenta",
    description: "Toplo i prijateljsko osoblje posvećeno tome da svaka poseta bude ugodna.",
  },
]

export function About() {
  return (
    <section className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">O nama</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
              Brinemo o vašem osmehu od 2009. godine
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              U DentCare ordinaciji kombinujemo godine kliničkog iskustva sa najnovijom stomatološkom tehnologijom kako bismo postigli izuzetne rezultate. Naš tim iskusnih stomatologa je posvećen tome da vam pomogne da postignete i održite zdrav, prelep osmeh u ugodnom i prijatnom okruženju.
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Smešteni u srcu Pančeva, pružamo usluge pacijentima svih uzrasta sa personalizovanim planovima lečenja prilagođenim individualnim potrebama i ciljevima.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="flex gap-5 rounded-xl border border-border bg-background p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-card-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
