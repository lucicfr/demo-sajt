import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Marija Petrović",
    rating: 5,
    text: "Izvanredno iskustvo! Osoblje je bilo neverovatno ljubazno i profesionalno. Rezultati izbeljivanja zuba su premašili moja očekivanja. Toplo preporučujem!",
  },
  {
    name: "Stefan Jovanović",
    rating: 5,
    text: "Ugradio sam zubni implant ovde i ceo proces je bio gladak i bezbolan. Dr Nikolić je sve jasno objasnio. Najbolja stomatološka ordinacija u Pančevu!",
  },
  {
    name: "Ana Marković",
    rating: 5,
    text: "Cela moja porodica dolazi ovde na stomatološku negu. Ordinacija je besprekorno čista, moderna, a stomatolozi su tako nežni sa mojom decom. Uvek se osećamo zbrinuto.",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} od 5 zvezdica`}>
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

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border bg-background">
              <CardContent className="p-8">
                <StarRating rating={testimonial.rating} />
                <blockquote className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {`„${testimonial.text}"`}
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <p className="text-sm font-semibold text-card-foreground">{testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
