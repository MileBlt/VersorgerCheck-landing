import { Award } from "lucide-react";
import { TrustBadge } from "./TrustBadge";
import { TuevAndGoogle } from "./TuevAndGoogle";
const TrustBar = () => {
  return <section className="bg-white border-y border-border py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-center md:text-left">
        {/* Partnership */}
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-brand-green" />
          <span className="text-sm md:text-base text-brand-text">
            In Kooperation mit <span className="font-semibold">hwlegal</span>
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-2">

          <span className="text-sm md:text-base text-brand-text">
            <span className="font-semibold">100.000+</span> geprüfte Fälle
          </span>
        </div>

        {/* TÜV and Google Reviews */}
        <TuevAndGoogle />

        {/* TÜV Badge */}
        <TrustBadge />
      </div>
    </div>
  </section>;
};
export default TrustBar;