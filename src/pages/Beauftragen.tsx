import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock3, Download, Send, ShieldCheck, Sparkles } from "lucide-react";

const Beauftragen = () => {
  const freeFeatures = [
    "Individuelles Antwortschreiben mit Ihren Rechnungsdaten.",
    "Als PDF herunterladen oder direkt digital verschicken.",
    "Kurze Anleitung, wie Sie den Anbieter anschreiben und Fristen einhalten.",
  ];

  const serviceFeatures = [
    "Wir erstellen und versenden das Schreiben für Sie – ohne Aufwand für Sie.",
    "Status-Updates, falls der Anbieter nachhakt oder nicht reagiert.",
    "Einmalige Servicepauschale, keine Abos oder versteckte Gebühren.",
  ];

  return (
    <main className="min-h-screen flex flex-col bg-muted pb-16 md:pb-20">
      <Navbar />

      <section className="flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto py-8 md:py-12 lg:py-14 space-y-8 md:space-y-10">
            <div className="space-y-3 text-center">
              <p className="text-sm text-brand-text/70 uppercase tracking-wide">Beauftragen</p>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-text leading-tight">
                Ihr fertiges Antwortschreiben – so wie es Ihnen passt
              </h1>
              <p className="text-base text-brand-text/70">
                Wählen Sie zwischen einem kostenlosen Download oder unserem Rundum-Service für nur 7,99 €.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="relative overflow-hidden p-6 md:p-7 bg-card shadow-sm border border-border/60 space-y-5">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-brand-light-blue/15 via-transparent to-white" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <span className="inline-flex items-center rounded-full bg-brand-light-blue/15 text-brand-blue px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
                      Selbst erledigen
                    </span>
                    <h2 className="font-heading text-xl md:text-2xl font-semibold text-brand-text">
                      Antwortschreiben kostenlos erstellen
                    </h2>
                    <p className="text-brand-text/80 leading-relaxed">
                      Sie erhalten sofort Ihr personalisiertes Schreiben. Laden Sie es herunter oder verschicken Sie es direkt – ohne Kosten.
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-heading font-bold text-brand-text">0 €</div>
                    <div className="text-xs uppercase text-brand-text/60 tracking-wide">einmalig</div>
                  </div>
                </div>

                <ul className="relative space-y-3">
                  {freeFeatures.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <span className="text-brand-text/85 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative pt-1 space-y-2">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="w-full sm:w-auto" variant="secondary">
                      <Download className="w-4 h-4" />
                      Antwortschreiben gratis erhalten
                    </Button>
                    <Button className="w-full sm:w-auto" variant="outline">
                      <Send className="w-4 h-4" />
                      Direkt aus dem Browser versenden
                    </Button>
                  </div>
                  <p className="text-sm text-brand-text/65">
                    Kein Abo, keine versteckten Gebühren – Sie behalten die Kontrolle.
                  </p>
                </div>
              </Card>

              <Card className="relative overflow-hidden p-6 md:p-7 bg-card shadow-lg border-2 border-brand-orange/70 space-y-5">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white via-white to-brand-orange/10" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <span className="inline-flex items-center rounded-full bg-brand-orange/10 text-brand-text px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
                      Rundum-Service
                    </span>
                    <h2 className="font-heading text-xl md:text-2xl font-semibold text-brand-text">
                      Wir übernehmen alles für Sie
                    </h2>
                    <p className="text-brand-text/80 leading-relaxed">
                      Lehnen Sie sich zurück: Wir kümmern uns um Versand und Nachverfolgung Ihres Anspruchs – zum Festpreis von 7,99 €.
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-heading font-bold text-brand-text">7,99 €</div>
                    <div className="text-xs uppercase text-brand-text/60 tracking-wide">einmalig</div>
                  </div>
                </div>

                <ul className="relative space-y-3">
                  {serviceFeatures.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange mt-0.5" />
                      <span className="text-brand-text/85 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative pt-1 space-y-2">
                  <Button className="w-full sm:w-auto">
                    <Sparkles className="w-4 h-4" />
                    Für 7,99 € beauftragen
                  </Button>
                  <p className="text-sm text-brand-text/65">
                    Wir melden uns mit Updates, sobald Ihr Schreiben raus ist oder der Anbieter reagiert.
                  </p>
                </div>
              </Card>
            </div>

            <Card className="bg-white border border-border/60 shadow-sm p-5 md:p-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-brand-blue mt-0.5" />
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-brand-text">Sicher & transparent</div>
                    <p className="text-sm text-brand-text/75">Ihre Daten bleiben geschützt. Alle Preise sind einmalig und klar ausgewiesen.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock3 className="w-6 h-6 text-accent mt-0.5" />
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-brand-text">In wenigen Minuten</div>
                    <p className="text-sm text-brand-text/75">Vom Ergebnis bis zum fertigen Schreiben dauert es nur ein paar Klicks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Send className="w-6 h-6 text-brand-orange mt-0.5" />
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-brand-text">Passend zu Ihrem Fall</div>
                    <p className="text-sm text-brand-text/75">Die Formulierungen richten sich nach Ihrer Prüfung und den Angaben aus der Rechnung.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Beauftragen;
