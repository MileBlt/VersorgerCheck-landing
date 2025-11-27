import { Award } from "lucide-react";
import { TuevAndGoogle } from "./TuevAndGoogle";

const TrustBar = () => {
  return (
    <section className="bg-white border-y border-border py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 md:gap-6 text-center lg:text-left">
          <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-3 text-brand-text">
            {/* Partnership */}
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-brand-green" />
              <span className="text-xs md:text-sm leading-tight">
                In Kooperation mit <span className="font-semibold">hwlegal</span> – verbraucherfreundliche Durchsetzung
              </span>
            </div>

            {/* Stats */}
            <div className="text-sm md:text-lg font-semibold whitespace-nowrap leading-tight">
              Tausende geprüfte Stromrechnungen
            </div>
          </div>

          {/* TÜV and Google Reviews */}
          <div className="flex items-center justify-center lg:justify-end scale-75 md:scale-90">
            <TuevAndGoogle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
