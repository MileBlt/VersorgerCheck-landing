import { Star, Award, Users } from "lucide-react";

const TrustBar = () => {
  return (
    <section className="bg-white border-y border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-center md:text-left">
          {/* Partnership */}
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-brand-green" />
            <span className="text-sm md:text-base text-brand-text">
              In Kooperation mit <span className="font-semibold">hwlegal</span>
            </span>
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
            <Users className="w-5 h-5 text-brand-light-blue" />
            <span className="text-sm md:text-base text-brand-text">
              <span className="font-semibold">100.000+</span> geprüfte Fälle
            </span>
          </div>

          {/* TÜV Badge */}
          <div className="flex items-center gap-2 px-4 py-2 bg-brand-light-bg rounded-lg">
            <Award className="w-6 h-6 text-brand-blue" />
            <div className="text-left">
              <div className="text-xs font-semibold text-brand-text">Geprüftes</div>
              <div className="text-xs text-brand-text/70">Onlineportal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
