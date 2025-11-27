import { Award } from "lucide-react";
import { TuevAndGoogle } from "./TuevAndGoogle";

const TrustBar = () => {
  return (
    <section className="bg-white border-y border-border py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-lg p-6 md:p-7 flex flex-col items-center text-center gap-4 md:gap-5">
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 md:gap-4 text-brand-text">
            {/* Partnership */}
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-brand-green" />
              <span className="text-xs md:text-sm leading-tight">
                In Kooperation mit <span className="font-semibold">hwlegal</span>
              </span>
            </div>

            {/* Stats */}
            <div className="text-sm md:text-lg font-semibold whitespace-nowrap leading-tight">
              100.000+ geprüfte Fälle
            </div>
          </div>

          {/* TÜV and Google Reviews */}
          <div className="flex items-center justify-center scale-75 md:scale-90">
            <TuevAndGoogle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
