import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResultStickyCTA from "@/components/ResultStickyCTA";
import SummaryCard from "@/components/SummaryCard";

const Ergebnis = () => {
  const summaryText =
    "Auf Ihrer Rechnung steht ab Juli 2022 noch eine EEG-Umlage. Das ist nicht erlaubt, denn seit 1.7.2022 liegt sie bei 0 ct/kWh und wurde abgeschafft. Die Entlastung wurde offenbar nicht weitergegeben – deshalb kann eine Rückzahlung fällig sein.";

  const recommendations = [
    "Fordern Sie von Ihrem Anbieter eine korrigierte Rechnung.",
    "Nutzen Sie unser Musterschreiben, um die Rückzahlung zu verlangen.",
    "Falls keine Reaktion erfolgt, prüfen Sie weitere Schritte.",
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
              <p className="text-base text-brand-text/70">
                Kurzer Überblick mit klaren Handlungsempfehlungen. Sehen Sie sofort, was festgestellt wurde und was Sie tun können.
              </p>
            </div>

            <SummaryCard
              summaryTitle="Befund"
              summaryText={summaryText}
              recommendations={recommendations}
              footerNote="Bereit loszulegen? Wählen Sie jetzt Ihren nächsten Schritt."
              ctaLabel="Jetzt aktiv werden"
              ctaHref="/beauftragen"
            />
          </div>
        </div>
      </section>

      <Footer />
      <ResultStickyCTA />
    </main>
  );
};

export default Ergebnis;
