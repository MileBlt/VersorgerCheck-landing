import { Zap, Shield, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Zap,
    title: "Sofortige Gewissheit",
    description: "Ergebnis in Sekunden statt Tagen. Keine Wartezeit auf Anwaltsantwort."
  },
  {
    icon: Shield,
    title: "Kein Kostenrisiko",
    description: "Ersteinschätzung kostenlos. Bei Erfolgsaussicht Prozessfinanzierung möglich."
  },
  {
    icon: Scale,
    title: "Fachanwälte im Hintergrund",
    description: "Expertise von hwlegal – spezialisiert auf Arbeitsrecht mit jahrelanger Erfahrung."
  }
];

const ValueProposition = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text text-center mb-4">
          Warum Kündigungscheck?
        </h2>
        <p className="text-lg text-brand-text/70 text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          Die schnellste und sicherste Methode, Ihre arbeitsrechtlichen Dokumente zu prüfen.
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
