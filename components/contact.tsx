import { MapPin, Phone, Clock } from "lucide-react"

const details = [
  {
    icon: MapPin,
    label: "Adresa",
    value: "Vojvode Radomira Putnika 12\n26000 Pančevo, Srbija",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+381 13 123 456",
    href: "tel:+381131234567",
  },
  {
    icon: Clock,
    label: "Radno Vreme",
    value: "Pon - Pet: 08:00 - 20:00\nSub: 09:00 - 14:00\nNed: Zatvoreno",
  },
]

export function Contact() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Lokacija i Kontakt</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Pronađite nas u Pančevu
          </h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            {details.map((detail) => (
              <div key={detail.label} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <detail.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{detail.label}</p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="mt-1 block whitespace-pre-line text-sm leading-relaxed text-muted-foreground hover:text-primary transition-colors"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                      {detail.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <iframe
              title="Lokacija DentCare ordinacije"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22640.75291826517!2d20.625!3d44.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a0578ef7b696f%3A0xb3e7f7b0b3e7f7b0!2sPan%C4%8Devo!5e0!3m2!1sen!2srs!4v1710000000000!5m2!1sen!2srs"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
