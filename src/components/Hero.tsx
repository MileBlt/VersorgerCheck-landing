import { Award, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TuevAndGoogle } from "./TuevAndGoogle";

const Hero = () => {
  return (
    <section className="bg-muted pt-5 md:pt-8 lg:pt-10 pb-8 md:pb-12 lg:pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start lg:items-center">

            {/* Left Content - Text Panel */}
            <div className="bg-card border border-border rounded-2xl p-5 md:p-7 lg:p-8 shadow-lg order-1 lg:order-2">
              <div className="space-y-6">
                <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-4xl text-foreground leading-snug">
                  <span className="text-[hsl(var(--brand-blue))]">Stromkosten-Check</span> – wurde zu viel berechnet?
                </h1>

                {/* Benefits List with Accent Line */}
                <ul className="space-y-3">
                  {[
                    "Prüfung von Stromrechnungen ab 2022",
                    <>Kontrolle von <strong className="font-semibold">EEG-Umlage</strong> und <strong className="font-semibold">Strompreisbremse</strong></>,
                    <>
                      <strong className="font-semibold">Kostenloses</strong> Ergebnis in wenigen Sekunden
                    </>,
                    "Zu viel bezahltes Geld zurückerhalten – ohne Kostenrisiko",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[hsl(var(--brand-blue))] flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-heading font-light text-foreground text-base md:text-lg leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Upload Card */}
            <Card
              id="upload-card"
              className="bg-card shadow-xl p-6 md:p-7 lg:p-8 space-y-5 border border-border/70 order-2 lg:order-1 lg:self-center"
            >
              <div className="space-y-4">
                <Button
                  asChild
                  id="upload-button"
                  size="lg"
                  className="w-full h-14 text-lg font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-colors shadow-md"
                >
                  <Link to="/ergebnis-chat">
                    <Upload className="w-5 h-5 mr-2" />
                    Stromrechnung prüfen
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground text-center font-sans">
                  Jetzt Foto oder PDF Ihrer Rechnung hochladen!
                </p>
              </div>
            </Card>
          </div>

            {/* Trust Row */}
            <div className="bg-card border border-border rounded-2xl px-6 py-6 md:px-8 md:py-8 shadow-sm">
              <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-4">
                <div className="flex flex-row flex-wrap items-center justify-center gap-2 text-brand-text">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 md:w-5 md:h-5 text-brand-green" />
                    <span className="text-xs md:text-sm leading-tight">
                      In Kooperation mit <span className="font-semibold">führenden Anwaltskanzleien</span>
                    </span>
                  </div>
                  <div className="text-sm md:text-base font-semibold whitespace-nowrap leading-tight">
                    100.000+ geprüfte Fälle
                  </div>
                </div>

              <div className="flex items-center justify-center scale-75 md:scale-90">
                <TuevAndGoogle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
