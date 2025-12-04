import { Link } from "react-router-dom";
import { Zap, Shield, Scale, Check, ArrowRight, Image as ImageIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const LandingCopy = () => {
  const advantages = [
    {
      icon: Zap,
      title: "Verständnis",
      text: "EEG-Umlage und Strompreisbremse endlich klar – Sie wissen, was auf Ihrer Rechnung steht.",
    },
    {
      icon: Shield,
      title: "Kontrolle",
      text: "Sekundencheck zeigt, ob Entlastungen fehlen oder Preise zu hoch angesetzt sind.",
    },
    {
      icon: Scale,
      title: "Handlung",
      text: "Konkreter Plan mit Hinweisen und Musterschreiben, falls etwas nicht stimmt.",
    },
  ];

  const qna = [
    {
      question: "Für wen ist der Check geeignet?",
      answer:
        "Für Haushalte mit Stromrechnungen ab 2022. Wir prüfen Abschläge und Jahresrechnungen auf EEG-Entfall und Strompreisbremse.",
    },
    {
      question: "Wie läuft der Prozess ab?",
      answer:
        "Rechnung hochladen, KI prüft in Sekunden, Sie sehen das Ergebnis und erhalten bei Bedarf ein Musterschreiben.",
    },
    {
      question: "Was kostet der Check?",
      answer: "Die Prüfung ist kostenlos. Kosten sehen Sie erst, wenn Sie ein Schreiben oder weitere Services beauftragen.",
    },
    {
      question: "Welche Daten brauche ich?",
      answer: "Eine aktuelle Rechnung als Foto oder PDF. Falls nötig, fragen wir gezielt fehlende Angaben ab.",
    },
    {
      question: "Wie sicher sind meine Daten?",
      answer: "Ihre Daten werden verschlüsselt übertragen und nur zur Prüfung Ihrer Rechnung genutzt – kein Verkauf, keine Weitergabe.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col pb-20 md:pb-0">
      <Navbar />
      <Hero />

      <section id="stromcheck-content" className="bg-gradient-to-b from-muted/60 via-white to-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl space-y-12 md:space-y-14">
          {/* Block 1: Journey Cards */}
          <section className="bg-card border border-border/60 rounded-3xl p-6 md:p-8 shadow-[0_16px_40px_-24px_rgba(3,68,119,0.35)] space-y-6 md:space-y-8">
            <div className="space-y-2 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-text/70">So läuft es ab</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-text">In 4 Schritten zur Klarheit</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  title: "Rechnung hochladen",
                  text: "Foto oder PDF Ihrer Stromrechnung hochladen – ein aktuelles Schreiben genügt.",
                },
                {
                  title: "KI prüft Entlastungen",
                  text: "EEG-Entfall und Strompreisbremse werden automatisch geprüft und verständlich bewertet.",
                },
                {
                  title: "Ergebnis & Handlung",
                  text: "Sie sehen klar, ob Geld zu Ihnen gehört und erhalten einen Plan mit Musterschreiben.",
                },
                {
                  title: "Unterstützung möglich",
                  text: "Fehlt etwas oder haben Sie Fragen? Wir helfen bei der nächsten Aktion und beim Versand.",
                },
              ].map((step, idx) => (
                <article
                  key={step.title}
                  className="bg-white border border-border/60 rounded-[24px] p-4 md:p-6 shadow-[0_14px_36px_-26px_rgba(3,68,119,0.25)] flex flex-col gap-3"
                >
                  <div className="w-full aspect-[3/2] md:aspect-[4/3] bg-muted/50 border border-border/40 rounded-xl md:rounded-2xl shadow-inner flex flex-col items-center justify-center text-center text-brand-text/60 text-xs md:text-base px-3 md:px-4">
                    <ImageIcon className="w-7 h-7 mb-2" />
                    <div className="font-semibold text-brand-text/70">Bild-Platzhalter</div>
                    <div className="text-brand-text/60">Schritt {idx + 1} – Motiv folgt</div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-text/70">Schritt {idx + 1}</p>
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-brand-text">{step.title}</h3>
                    <p className="text-brand-text/80 leading-relaxed">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Block 2: Drei Kernvorteile */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {advantages.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="bg-card border border-border/70 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-brand-text">{item.title}</h3>
                    <p className="text-brand-text/80 leading-relaxed">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Block 3: Q&A mit Accordion */}
          <section className="bg-brand-light-bg rounded-3xl p-6 md:p-8 border border-border/60 shadow-sm">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-text mb-3">Wie funktioniert der Stromkosten-Check?</h2>
            <p className="text-base md:text-lg text-brand-text/75 mb-6 max-w-3xl">
              Die wichtigsten Fragen und Antworten auf einen Blick.
            </p>
            <Accordion type="multiple" className="space-y-3 md:space-y-4">
              {qna.map((item, idx) => (
                <AccordionItem
                  key={item.question}
                  value={`qna-${idx}`}
                  className="bg-white rounded-2xl border border-border px-4 md:px-5 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-brand-text hover:no-underline py-3">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-text/80 leading-relaxed pb-3">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Block 5: Abschlussband */}
          <section className="space-y-4">
            <div className="bg-secondary text-white rounded-3xl p-6 md:p-10 text-center space-y-4 shadow-lg">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">Stromkosten müssen weder kompliziert noch stressig sein</h2>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Der Stromkosten-Check zeigt klar, ob Entlastungen fehlen und ob Geld zu Ihnen gehört – ohne Fachwissen, in wenigen Minuten.
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                <Button
                  asChild
                  size="lg"
                  className="h-12 px-6 text-base font-semibold bg-brand-orange text-white hover:bg-brand-orange/90"
                >
                  <Link to="/ergebnis-chat3">Jetzt Stromrechnung prüfen</Link>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="h-12 px-6 text-base font-semibold bg-white text-brand-text border border-white/60 hover:bg-white/90"
                  asChild
                >
                  <Link to="/ergebnis-chat3">
                    Mehr erfahren <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-card border border-border/70 rounded-2xl p-4 md:p-5 flex items-center gap-4 shadow-sm">
              <div className="w-6 h-6 rounded-full bg-[hsl(var(--brand-blue))] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <div className="font-heading font-semibold text-brand-text">Kein Kostenrisiko für Sie</div>
                <p className="text-brand-text/75 text-sm md:text-base">
                  Kostenlose Prüfung. Die Zusatzleistungen sind optional und werden transparent dargestellt.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </main>
  );
};

export default LandingCopy;
