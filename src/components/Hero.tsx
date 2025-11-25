import { Upload, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="bg-brand-light-bg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight">
              Mit Kündigungscheck in Minuten erfahren, ob sich Gegenwehr lohnt.
            </h1>
            <p className="text-lg md:text-xl text-brand-text/80">
              Unsere KI erklärt Ihr Schreiben, prüft Fehler und Fristen und zeigt Ihre Möglichkeiten.
            </p>
            
            {/* Benefits List */}
            <ul className="space-y-4">
              {[
                "Alle arbeitsrechtlichen Schreiben: Kündigung, Abmahnung, Aufhebungsvertrag",
                "Verständliche Erklärung statt Juristendeutsch",
                "Formale Prüfung & Fristencheck",
                "Ergebnis nach wenigen Sekunden – kostenlos"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-brand-text">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Upload Card */}
          <Card className="bg-white shadow-xl p-8 md:p-10 space-y-6">
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-white"
              >
                <Upload className="w-5 h-5 mr-2" />
                Dokument hochladen und prüfen
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Foto oder PDF, ein Handyfoto reicht
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-muted-foreground font-semibold">ODER</span>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 text-brand-blue hover:text-brand-blue/80 transition-colors font-semibold py-3">
              <FileText className="w-5 h-5" />
              Schreiben nicht zur Hand? Beantworten Sie ein paar Fragen
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
