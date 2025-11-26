import { Star, Award } from "lucide-react";
import { TrustBadge } from "./TrustBadge";
import { TuevAndGoogle } from "./TuevAndGoogle";

const TrustBar = () => {
  return (
    <section className="bg-white border-y border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-center md:text-left">
          {/* Partnership */}
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-brand-green" />
            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base text-brand-text">In Kooperation mit</span>
              <span className="px-3 py-1 rounded-full border border-border text-sm font-semibold text-brand-text bg-white">
                hwlegal
              </span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
              ))}
            </div>
            <span className="text-sm md:text-base text-brand-text font-semibold">4,9 von 5 Sternen</span>
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
    </section>
  );
};

export default TrustBar;
