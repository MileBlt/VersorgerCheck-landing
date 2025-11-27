import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Beauftragen = () => {
  return (
    <main className="min-h-screen flex flex-col bg-muted pb-16 md:pb-20">
      <Navbar />

      <section className="flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto py-8 md:py-12 lg:py-14 space-y-6 md:space-y-8">
            <div className="space-y-2">
              <p className="text-sm text-brand-text/70 uppercase tracking-wide">Beauftragen</p>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-text leading-tight">
                Wählen Sie Ihr Angebot
              </h1>
              <p className="text-base text-brand-text/70">
                Zwei Platzhalter-Angebote – Details folgen. Wählen Sie das passende, um fortzufahren.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 md:p-7 bg-card shadow-sm border border-border/60 space-y-4">
                <h2 className="font-heading text-xl md:text-2xl font-semibold text-brand-text">Angebot 1 (Platzhalter)</h2>
                <p className="text-brand-text/80 leading-relaxed">
                  Platzhaltertext: Hier beschreiben wir das erste Angebot. Inhalte und Konditionen werden noch ergänzt.
                </p>
                <Button className="w-full" variant="default">Details folgen</Button>
              </Card>

              <Card className="p-6 md:p-7 bg-card shadow-sm border border-border/60 space-y-4">
                <h2 className="font-heading text-xl md:text-2xl font-semibold text-brand-text">Angebot 2 (Platzhalter)</h2>
                <p className="text-brand-text/80 leading-relaxed">
                  Platzhaltertext: Hier folgt das zweite Angebot. Wir ergänzen die Informationen, sobald sie vorliegen.
                </p>
                <Button className="w-full" variant="default">Details folgen</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Beauftragen;
