import Image from "next/image"
import { Award, Users, Clock, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { icon: Clock, label: "Godina iskustva", value: "10+" },
  { icon: Users, label: "Zadovoljnih pacijenata", value: "300+" },
  { icon: Award, label: "Specijalnost", value: "Implantologija" },
  { icon: GraduationCap, label: "Obrazovanje", value: "Stomatološki fakultet" },
]

export function DoctorProfile() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Naš Stomatolog</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Upoznajte dr Marka Petrovića
          </h2>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl">
            <Image
              src="/images/doctor-profile.jpg"
              alt="Dr. Marko Petrović - Specijalista stomatologije"
              width={500}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>

          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground">Dr. Marko Petrović</h3>
            <p className="mt-1 text-base font-medium text-primary">Specijalista stomatologije</p>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Dr. Marko Petrović je specijalista stomatologije sa više od 10 godina iskustva u oblasti
              implantologije, estetske stomatologije i oralne hirurgije. Diplomirao je na Stomatološkom
              fakultetu u Beogradu i redovno pohađa međunarodne kongrese i seminare kako bi bio u toku
              sa najnovijim tehnikama i tehnologijama.
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Posvećen je tome da svakom pacijentu pruži personalizovanu negu u prijatnoj
              i opuštenoj atmosferi. Njegov pristup se zasniva na temeljnoj dijagnostici,
              transparentnoj komunikaciji i vrhunskim rezultatima.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="border-border bg-card">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-card-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
