import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Marija Petrović",
    avatar: "/images/avatar-marija.jpg",
    rating: 5,
    text: "Izvanredno iskustvo! Osoblje je bilo neverovatno ljubazno i profesionalno. Rezultati izbeljivanja zuba su premašili moja očekivanja. Toplo preporučujem!",
  },
  {
    name: "Stefan Jovanović",
    avatar: "/images/avatar-stefan.jpg",
    rating: 5,
    text: "Ugradio sam zubni implant ovde i ceo proces je bio gladak i bezbolan. Dr Petrović je sve jasno objasnio. Najbolja stomatološka ordinacija u Pančevu!",
  },
  {
    name: "Ana Marković",
    avatar: "/images/avatar-ana.jpg",
    rating: 5,
    text: "Cela moja porodica dolazi ovde na stomatološku negu. Ordinacija je besprekorno čista, moderna, a stomatolozi su tako nežni sa mojom decom.",
  },
  {
    name: "Nikola Đorđević",
    avatar: "/images/avatar-nikola.jpg",
    rating: 4,
    text: "Imao sam strah od stomatologa godinama, ali ovde sam se osećao potpuno opušteno. Profesionalan pristup i bezbolni tretmani. Svaka preporuka!",
  },
  {
    name: "Jelena Simić",
    avatar: "/images/avatar-jelena.jpg",
    rating: 5,
    text: "Oduševljena sam rezultatima ortodontskog tretmana. Posle samo godinu dana nosenja fiksne proteze, imam osmeh o kom sam oduvek sanjala.",
  },
  {
    name: "Milan Todorović",
    avatar: "/images/avatar-milan.jpg",
    rating: 5,
    text: "Hitna intervencija u kasnim večernjim satima. Zahvalan sam na fleksibilnosti i brzoj reakciji. Bol je nestao za tren, a objašnjenje je bilo detaljno.",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} od 5 zvezdica`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Recenzije</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
            Šta kažu naši pacijenti
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Prave priče pravih pacijenata koji nam veruju sa svojim osmesima.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border bg-background transition-shadow hover:shadow-lg hover:shadow-primary/5">
              <CardContent className="p-7">
                <div className="flex items-start justify-between">
                  <StarRating rating={testimonial.rating} />
                  <Quote className="h-5 w-5 text-primary/20" />
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {`„${testimonial.text}"`}
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">Pacijent</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
