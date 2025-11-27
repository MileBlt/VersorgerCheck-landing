import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Für welche Zeiträume kann ich Geld zurückbekommen?",
    answer: (
      <>
        Wir prüfen Rechnungen ab 2022. Ab Juli 2022 musste die <strong className="font-semibold">EEG-Umlage</strong> auf null gesetzt werden, ab 2023 gilt die <strong className="font-semibold">Strompreisbremse</strong> rückwirkend. In diesen Zeiträumen finden wir häufig zu hohe Preise.
      </>
    )
  },
  {
    question: "Brauche ich alle alten Rechnungen?",
    answer: "Ein aktuelles Schreiben reicht für den Start. Wenn wir mehr Belege brauchen, sagen wir Ihnen genau, was fehlt – meist genügt die letzte Jahres- oder Abschlagsrechnung."
  },
  {
    question: "Wie schnell bekomme ich ein Ergebnis?",
    answer: "Die KI-Auswertung dauert nur wenige Sekunden. Direkt nach dem Upload sehen Sie, ob Ihr Anbieter Entlastungen übersehen hat."
  },
  {
    question: "Was kostet der Stromkosten-Check?",
    answer: "Die Prüfung ist kostenlos. Wenn Sie ein Schreiben an den Anbieter verschicken möchten, sehen Sie die Kosten vorher transparent. Bei Bedarf helfen spezialisierte Anwälte – mit Kostenhinweis, bevor etwas beauftragt wird."
  },
  {
    question: "Was passiert nach der Prüfung?",
    answer: "Sie bekommen eine leicht verständliche Einschätzung und ein fertiges Schreiben für Rückzahlungen. Sie entscheiden, ob Sie selbst verschicken oder anwaltliche Hilfe möchten."
  }
];

const FAQ = () => {
  return (
    <section className="bg-brand-light-bg py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text text-center mb-10">
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
