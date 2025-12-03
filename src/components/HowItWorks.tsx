import { Upload, Sparkles, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Stromrechnung hochladen"
  },
  {
    icon: Sparkles,
    title: "KI prüft Entlastungen"
  },
  {
    icon: CheckCircle,
    title: "Ergebnis und Rückforderung"
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-secondary py-7 md:py-10">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-7 md:mb-9">
          So funktioniert's
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
