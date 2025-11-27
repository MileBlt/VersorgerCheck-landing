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
                <h2 className="font-heading text-2xl font-semibold text-brand-text">Zusammenfassung</h2>
                <p className="text-brand-text/85 leading-relaxed">
                  Freitext-Platzhalter: Hier steht die individuelle Zusammenfassung Ihres Schreibens mit allen wichtigen Punkten.
                </p>
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
