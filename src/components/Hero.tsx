import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="bg-muted py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">

          {/* Left Content - Text Panel */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg">
            <div className="space-y-8">
              <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                Mit <span className="text-[hsl(var(--accent))]">Kündigungscheck</span> sofort erfahren, ob sich ein Einspruch lohnt.
              </h1>

              <p className="font-heading font-normal text-lg md:text-xl text-muted-foreground leading-relaxed">
                Unsere KI erklärt Ihr Schreiben, prüft Fehler und Fristen und zeigt Ihre Möglichkeiten.
              </p>

              {/* Benefits List with Accent Line */}
              <div className="relative pl-4">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[hsl(var(--accent))] rounded-full"></div>
                <ul className="space-y-4">
                  {[
                    "Alle arbeitsrechtlichen Schreiben: Kündigung, Abmahnung, Aufhebungsvertrag",
                    "Versand einer Antwort und Hilfe von Anwalt",
                    "Ergebnis nach wenigen Sekunden – kostenlos"
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
          <Card className="bg-card shadow-xl p-8 md:p-10 space-y-6 border-none">
            <div className="space-y-5">
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
      </div>
    </section>
  );
};

export default Hero;