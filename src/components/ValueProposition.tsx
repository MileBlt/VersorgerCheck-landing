import { Zap, Shield, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Zap,
    title: (
      <>
        <strong className="font-semibold">EEG-Umlage</strong> erklärt
      </>
    ),
    description: (
      <>
        Bis Mitte 2022 zahlten Haushalte eine Ökostrom-Umlage (<strong className="font-semibold">EEG-Umlage</strong>). Zum 1.7.2022 wurde sie auf null gesetzt – Ihr Anbieter musste die Ersparnis komplett weitergeben.
      </>
    )
  },
  {
    icon: Shield,
    title: (
      <>
        <strong className="font-semibold">Strompreisbremse</strong> einfach
      </>
    ),
    description: (
      <>
        Seit 2023 gilt die <strong className="font-semibold">Strompreisbremse</strong>: 80 % Ihres früheren Jahresverbrauchs dürfen höchstens 40 Cent pro kWh kosten. Liegt Ihr Preis darüber, muss der Anbieter die Rechnung anpassen.
      </>
    )
  },
  {
    icon: Scale,
    title: "Wir prüfen Ihre Entlastungen",
    description: "Wir checken, ob Ihr Anbieter beide Regeln eingehalten hat. Wenn nicht, fordern wir für Sie das zu viel bezahlte Geld zurück."
  }
];

const ValueProposition = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text text-center mb-4">
          Warum lohnt sich der Stromkosten-Check?
        </h2>
        <p className="text-lg text-brand-text/70 text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          Klar und verständlich: So behalten Sie den Überblick über <strong className="font-semibold">EEG-Umlage</strong> und <strong className="font-semibold">Strompreisbremse</strong> und sehen, ob Geld zurück auf Ihr Konto gehört.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="border-2 hover:border-brand-orange/50 transition-all hover:shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-brand-text">
                    {value.title}
                  </h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
