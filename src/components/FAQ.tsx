import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Was kostet der Kündigungscheck?",
    answer: "Sie erhalten eine verständliche und unverbindliche Zusammenfassung Ihres Falls. Auf Wunsch versenden wir für Sie eine Antwort per Einschreiben. Wenn Sie mehr Rechtssicherheit wünschen, können Sie ganz einfach eine Einschätzung durch unsere Anwälte anfordern."
  },
  {
    question: "Wie versendet ihr Post für mich?",
    answer: "Gern versenden wir Ihr Schreiben per Einschreiben. Für diesen Service berechnen wir 7,99 €. Das Einschreiben wird spätestens bis 12 Uhr des folgenden Werktags aufgegeben, die Sendungsverfolgungsnummer erhalten Sie im Anschluss per E-Mail."
  },
  {
    question: "Wie schnell bekomme ich ein Ergebnis?",
    answer: "Die KI-Analyse erfolgt in Echtzeit und dauert nur wenige Sekunden. Direkt nach dem Upload Ihres Dokuments erhalten Sie eine verständliche Ersteinschätzung mit allen wichtigen Informationen zu Formfehlern, Fristen und Handlungsoptionen."
  },
  {
    question: "Was passiert, wenn ich eine Rechtsschutzversicherung habe?",
    answer: "Perfekt! Falls Sie eine Rechtsschutzversicherung haben, übernimmt diese in der Regel die Kosten für die anwaltliche Vertretung. Wir unterstützen Sie bei der Abwicklung und kümmern uns um die Kommunikation mit Ihrer Versicherung."
  },
  {
    question: "Wie läuft die Zusammenarbeit mit den Anwälten ab?",
    answer: "Nach der kostenlosen KI-Ersteinschätzung können Sie optional die Unterstützung unserer Partner-Kanzlei hwlegal in Anspruch nehmen. Die spezialisierten Fachanwälte für Arbeitsrecht prüfen Ihren Fall persönlich und vertreten Sie bei Bedarf vor Gericht."
  }
];

const FAQ = () => {
  return (
    <section className="bg-brand-light-bg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text text-center mb-12">
            Häufig gestellte Fragen
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border border-border"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-brand-text hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-brand-text/80 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
