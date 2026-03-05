import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Da li je izbeljivanje zuba bolno?",
    answer:
      "Izbeljivanje zuba je generalno bezbolna procedura. Neki pacijenti mogu osetiti blagu osetljivost tokom ili nakon tretmana, ali ona je prolazna i nestaje u roku od 24-48 sati. Koristimo profesionalne preparate koji su bezbedni za gleđ i desni.",
  },
  {
    question: "Koliko traje ugradnja implantata?",
    answer:
      "Sam hirurški zahvat ugradnje jednog implantata traje oko 30-60 minuta. Međutim, ceo proces od ugradnje do postavljanja finalne krunice traje 3-6 meseci, jer je potrebno vreme da se implant integriše sa kosti. Tokom tog perioda nosite privremenu nadoknadu.",
  },
  {
    question: "Koliko često treba dolaziti na stomatološki pregled?",
    answer:
      "Preporučujemo redovne kontrolne preglede na svakih 6 meseci. Ovo omogućava rano otkrivanje eventualnih problema i profesionalno čišćenje zuba. Pacijenti sa specifičnim stanjima mogu zahtevati češće posete prema preporuci stomatologa.",
  },
  {
    question: "Da li radite vikendom?",
    answer:
      "Da, naša ordinacija radi subotom od 09:00 do 14:00. Nedeljom ne radimo. Radnim danima smo dostupni od 08:00 do 20:00. Za hitne slučajeve, kontaktirajte nas telefonom i potrudićemo se da vam pomognemo što pre.",
  },
]

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Česta pitanja
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Odgovori na najčešća pitanja naših pacijenata.
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
