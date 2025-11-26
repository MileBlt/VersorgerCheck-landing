import { Award, ShieldCheck, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TuevAndGoogle } from "./TuevAndGoogle";
import { TrustBadge } from "./TrustBadge";

const Hero = () => {
  return (
    <section className="bg-muted py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">

            {/* Left Content - Text Panel */}
            <div className="bg-card border border-border rounded-2xl p-5 md:p-7 lg:p-8 shadow-lg">
              <div className="space-y-6">
                <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-4xl text-foreground leading-snug">
                  Mit <span className="text-[hsl(var(--accent))]">Kündigungscheck</span> sofort erfahren, ob sich ein Einspruch lohnt.
                </h1>

                <p className="font-heading font-normal text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Unsere KI erklärt Ihr Schreiben, prüft Fehler und Fristen und zeigt Ihre Möglichkeiten.
                </p>

                {/* Benefits List with Accent Line */}
                <div className="relative pl-4">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[hsl(var(--accent))] rounded-full" />
                  <ul className="space-y-3">
                    {[
                      "Alle arbeitsrechtlichen Schreiben: Kündigung, Abmahnung, Aufhebungsvertrag",
                      "Versand einer Antwort und Hilfe von Anwalt",
                      "Ergebnis nach wenigen Sekunden – kostenlos",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center mt-0.5">
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
            </div>

            {/* Right Upload Card */}
            <Card className="bg-card shadow-xl p-6 md:p-7 lg:p-8 space-y-5 border border-border/70">
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full h-14 text-lg font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-colors shadow-md"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Fotoscan starten
                </Button>
                <p className="text-sm text-muted-foreground text-center font-sans">
                  Jetzt Foto oder Datei hochladen!
                </p>
              </div>
            </Card>
          </div>

          {/* Trust Row */}
          <div className="bg-card/90 border border-border rounded-2xl px-4 py-3 md:px-6 md:py-4 shadow-sm flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
            <div className="flex items-center gap-2 text-sm md:text-base text-brand-text">
              <Award className="w-5 h-5 text-brand-green flex-shrink-0" />
              <span>
                <span className="font-semibold">100.000+</span> geprüfte Fälle
              </span>
            </div>

            <div className="hidden md:block w-px h-8 bg-border/80" />

            <div className="flex items-center gap-2 text-sm md:text-base text-brand-text">
              <ShieldCheck className="w-5 h-5 text-brand-blue flex-shrink-0" />
              <span>Sichere, vertrauliche Prüfung</span>
            </div>

            <div className="hidden md:block w-px h-8 bg-border/80" />

            <div className="flex items-center gap-3">
              <TrustBadge className="h-10 w-auto" />
              <TuevAndGoogle />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
