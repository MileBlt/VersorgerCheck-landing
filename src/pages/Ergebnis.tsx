import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResultStickyCTA from "@/components/ResultStickyCTA";
import SummaryCard from "@/components/SummaryCard";
import TrustBar from "@/components/TrustBar";

const Ergebnis = () => {
  const summaryText =
    "Auf Ihrer Rechnung steht ab Juli 2022 noch eine EEG-Umlage. Das ist nicht erlaubt, denn seit 1.7.2022 liegt sie bei 0 ct/kWh und wurde abgeschafft. Die Entlastung wurde offenbar nicht weitergegeben – deshalb kann eine Rückzahlung fällig sein.";

  const recommendations = [
    "Nutzen Sie im nächsten Schritt unser Musterschreiben, um die Rückzahlung zu verlangen.",
    "Um den Vorgang zu beschleunigen, können Sie im nächsten Schritt unsere Experten-Partneranwälte beauftragen.",
  ];

  return (
    <main className="min-h-screen flex flex-col bg-muted pb-16 md:pb-20">
      <Navbar />

      <section className="flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto pt-4 md:pt-6 lg:pt-8 pb-8 md:pb-12 lg:pb-14 space-y-6 md:space-y-8">
            <div className="space-y-2">
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-text leading-tight">
                Ihre Zusammenfassung und nächste Schritte
              </h1>
            </div>

            <SummaryCard
              summaryTitle="Befund"
              summaryText={summaryText}
              recommendations={recommendations}
              footerNote="Nur noch ein Schritt, um Ihre Rückzahlung zu erhalten."
              ctaLabel="Jetzt Stromrechnung prüfen"
              ctaHref="/beauftragen"
            />
          </div>
        </div>
      </section>

      <TrustBar />
      <Footer />
      <ResultStickyCTA />
    </main>
  );
};

export default Ergebnis;
