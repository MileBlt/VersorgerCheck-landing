import { Award } from "lucide-react";
import { TrustBadge } from "./TrustBadge";
import { TuevAndGoogle } from "./TuevAndGoogle";
const TrustBar = () => {
  return <section className="bg-white border-y border-border py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12">
        {/* Partnership */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <Award className="w-5 h-5 text-brand-green flex-shrink-0" />
          <span className="text-sm md:text-base text-brand-text">
            In Kooperation mit <span className="font-semibold">hwlegal</span>
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center whitespace-nowrap">
          <span className="text-sm md:text-base text-brand-text">
            <span className="font-semibold">100.000+</span> geprüfte Fälle
          </span>
        </div>

        {/* TÜV and Google Reviews */}
        <div className="flex items-center gap-4">
          <TuevAndGoogle />
        </div>
      </div>
    </div>
  </section>;
};
export default TrustBar;