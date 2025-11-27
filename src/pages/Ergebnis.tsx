import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ResultStickyCTA from "@/components/ResultStickyCTA";

const Ergebnis = () => {
  return (
    <main className="min-h-screen flex flex-col bg-muted pb-16 md:pb-20">
      <Navbar />

      <section className="flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto py-8 md:py-12 lg:py-14 space-y-6 md:space-y-8">
            <div className="space-y-2">
              <p className="text-sm text-brand-text/70 uppercase tracking-wide">Ergebnis</p>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-text leading-tight">
                Ihre Zusammenfassung und nächste Schritte
              </h1>
              <p className="text-base text-brand-text/70">
                Kurzer Überblick über Ihr Schreiben mit klaren Handlungsempfehlungen. Auf Wunsch können Sie direkt aktiv werden.
              </p>
            </div>

            <Card className="p-6 md:p-8 space-y-6 bg-card shadow-sm border border-border/60">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide">
                    Zusammenfassung der Prüfung
                  </div>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="rounded-xl border border-accent/30 bg-accent/5 p-4 space-y-2">
                  <p className="text-brand-text font-semibold">Befund</p>
                  <p className="text-brand-text/90 leading-relaxed">
                    Auf der Rechnung wurde für Zeiträume ab 1. Juli 2022 weiterhin eine EEG-Umlage angesetzt.
                    Das ist unzulässig, denn die Umlage wurde ab 1.7.2022 gesetzlich auf 0 ct/kWh gesenkt
                    und ab 1.1.2023 endgültig abgeschafft.
                  </p>
                  <div className="text-xs text-brand-text/60">Quelle: Bundesnetzagentur</div>
                </div>
              </div>

              <div className="h-2" />

              <div className="space-y-3">
                <h3 className="font-heading text-xl font-semibold text-brand-text">Handlungsempfehlungen</h3>
                <ul className="space-y-2 text-brand-text/85 leading-relaxed list-disc pl-5">
                  <li>Platzhalter-Empfehlung 1: Kurze, klare Aktion, die Sie jetzt umsetzen können.</li>
                  <li>Platzhalter-Empfehlung 2: Nächster sinnvoller Schritt, z. B. Anbieter kontaktieren.</li>
                  <li>Platzhalter-Empfehlung 3: Hinweis auf mögliche Rückforderung oder weitere Prüfung.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-xl font-semibold text-brand-text">Rechtsgrundlagen</h3>
                <ul className="space-y-2 text-brand-text/85 leading-relaxed list-disc pl-5">
                  <li>
                    Gesetz zur Absenkung der Kostenbelastungen durch die EEG-Umlage (BGBl. I 2022 S. 747) – Absenkung auf 0 ct/kWh ab 1.7.2022 und Weitergabe an Letztverbraucher vorgeschrieben.
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full bg-muted text-xs font-semibold text-brand-text/80">Dejure</span>
                  </li>
                  <li>
                    BMWK-Mitteilung: EEG-Umlage entfällt ab 1.7.2022 vollständig.
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full bg-muted text-xs font-semibold text-brand-text/80">BMWi</span>
                  </li>
                  <li>
                    Bundesnetzagentur/Netztransparenz: EEG-Umlage 2022 = 3,723 ct/kWh (nur 1.1.–30.6.2022); ab 1.7.2022 = 0 ct/kWh; ab 1.1.2023 dauerhaft 0 (EEG 2023).
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full bg-muted text-xs font-semibold text-brand-text/80">Netztransparenz</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-xl font-semibold text-brand-text">Konkreter Fehler auf der Rechnung</h3>
                <div className="rounded-lg border border-border/60 bg-muted/60 p-4 space-y-2">
                  <p className="text-brand-text/90 leading-relaxed">
                    Der Versorger hat für Liefermonate ab Juli 2022 eine Zeile „EEG-Umlage“ (z. B. 3,723 ct/kWh) ausgewiesen.
                  </p>
                  <p className="text-brand-text/85 leading-relaxed">
                    Dadurch wurden zu hohe Gesamtkosten berechnet, denn die Umlage war zu diesem Zeitpunkt nicht mehr zulässig.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                <div className="text-sm text-brand-text/70">
                  Bereit loszulegen? Wählen Sie eines der Angebote auf der nächsten Seite.
                </div>
                <Button asChild size="lg" className="w-full sm:w-auto" id="ergebnis-cta">
                  <Link to="/beauftragen">Jetzt aktiv werden</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <ResultStickyCTA />
    </main>
  );
};

export default Ergebnis;
