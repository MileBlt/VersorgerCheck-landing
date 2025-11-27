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
          <div className="max-w-4xl mx-auto pt-5 md:pt-8 lg:pt-10 pb-8 md:pb-12 lg:pb-14 space-y-6 md:space-y-8">
            <div className="space-y-2">
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
