import { Link } from "react-router-dom";
import {
  Check,
  Zap,
  Shield,
  Scale,
  FileWarning,
  AlertTriangle,
  RefreshCw,
  FileText,
  CreditCard,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import { Button } from "@/components/ui/button";

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

  const scenarios = [
    {
      icon: FileWarning,
      title: "Unerwartet hoher Abschlag",
      text: "Wir prüfen, ob Ihr Anbieter Abschläge erhöht hat, ohne Entlastungen korrekt zu verrechnen.",
    },
    {
      icon: AlertTriangle,
      title: "Nachzahlung trotz Preisbremse",
      text: "Wir zeigen, ob die Strompreisbremse angewendet wurde und ob die Nachzahlung gerechtfertigt ist.",
    },
    {
      icon: RefreshCw,
      title: "Tarif- oder Anbieterwechsel",
      text: "Wir prüfen, ob der neue Tarif die Entlastungen übernimmt und keine versteckten Mehrkosten enthält.",
    },
    {
      icon: FileText,
      title: "Unklare Nachforderung",
      text: "Sie sehen schnell, welche Posten fraglich sind und wie Sie gezielt nachhaken können.",
    },
    {
      icon: CreditCard,
      title: "Dauerhaft hohe Abschläge",
      text: "Wir decken auf, ob Abschläge zu hoch angesetzt sind und wo Sie ansetzen können.",
    },
    {
      icon: ShieldCheck,
      title: "Sie wollen Sicherheit",
      text: "Kurzcheck für alle, die sicher sein wollen, dass keine Entlastung übersehen wurde.",
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
          {/* Block 1: Problem & Nutzen mit Bild-Platzhalter */}
          <section className="bg-card border border-border/60 rounded-3xl p-6 md:p-8 shadow-[0_16px_40px_-24px_rgba(3,68,119,0.35)]">
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
              <div className="space-y-4 md:space-y-5">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-text">
                  Stromkosten unklar oder zu hoch?
                </h2>
                <p className="text-lg md:text-xl text-brand-text/85">
                  Viele Haushalte verstehen die Entlastungen nicht. Der Stromkosten-Check zeigt, ob Ihre Rechnung korrekt ist – einfach und verständlich.
                </p>
                <p className="text-brand-text/80 leading-relaxed">
                  Wir prüfen EEG-Entfall und Strompreisbremse, decken fehlende Entlastungen auf und zeigen sofort, ob Geld zu Ihnen gehört.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" className="h-12 px-6 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link to="/ergebnis-chat3">Stromrechnung prüfen</Link>
                  </Button>
                </div>
              </div>
              <div className="order-first md:order-last">
                <div className="w-full aspect-[4/3] bg-muted border border-border/60 rounded-2xl shadow-inner flex items-center justify-center text-center text-brand-text/60 text-sm md:text-base px-6">
                  Bild-Platzhalter Stromrechnung / Person
                </div>
              </div>
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

          {/* Block 3: Szenarien-Grid */}
          <section className="bg-card border border-border/60 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="space-y-4 md:space-y-5">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-text">Der Check hilft besonders bei …</h2>
              <p className="text-brand-text/80 text-base md:text-lg max-w-3xl">
                Typische Situationen, in denen wir Klarheit schaffen und mögliche Rückzahlungen sichtbar machen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {scenarios.map((scenario) => {
                  const Icon = scenario.icon;
                  return (
                    <article
                      key={scenario.title}
                      className="bg-muted/60 border border-border/60 rounded-2xl p-4 md:p-5 flex flex-col gap-2 shadow-inner"
                    >
                      <div className="w-10 h-10 rounded-full bg-white border border-accent/20 flex items-center justify-center mb-1">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="font-heading text-lg md:text-xl font-semibold text-brand-text">{scenario.title}</h3>
                      <p className="text-brand-text/80 leading-relaxed">{scenario.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Block 4: Q&A offen */}
          <section className="bg-brand-light-bg rounded-3xl p-6 md:p-8 border border-border/60 shadow-sm">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-text mb-3">Wie funktioniert der Stromkosten-Check?</h2>
            <p className="text-base md:text-lg text-brand-text/75 mb-6 max-w-3xl">
              Die wichtigsten Fragen und Antworten auf einen Blick.
            </p>
            <div className="space-y-5">
              {qna.map((item) => (
                <div key={item.question} className="bg-white rounded-2xl border border-border px-5 py-4 shadow-sm">
                  <div className="font-heading font-semibold text-brand-text text-lg mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent" />
                    {item.question}
                  </div>
                  <div className="text-brand-text/80 leading-relaxed">{item.answer}</div>
                </div>
              ))}
            </div>
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
            <div className="bg-card border border-border/70 rounded-2xl p-4 md:p-5 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="font-heading font-semibold text-brand-text">Kein Kostenrisiko für Sie</div>
                <p className="text-brand-text/75 text-sm md:text-base">
                  Prüfung kostenlos, Kosten erst bei beauftragten Zusatzleistungen – transparent vorab.
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
