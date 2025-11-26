import { Upload, Sparkles, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Dokument hochladen",
    description: "Kündigung, Abmahnung oder Aufhebungsvertrag als Foto/PDF hochladen oder Fragen beantworten."
  },
  {
    icon: Sparkles,
    title: "KI-Analyse",
    description: "Unsere KI prüft sofort auf Formfehler, Fristen und Sozialauswahl."
  },
  {
    icon: CheckCircle,
    title: "Ergebnis & Option",
    description: "Sie erhalten sofort eine kostenlose Ersteinschätzung und Handlungsoptionen."
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-secondary py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-10 md:mb-14">
          So funktioniert's
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-light-blue/20 mb-4">
                  <Icon className="w-8 h-8 text-brand-light-blue" />
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
