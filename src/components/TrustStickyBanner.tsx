import { useEffect, useState } from "react";
import { Award } from "lucide-react";
import { TuevAndGoogle } from "@/components/TuevAndGoogle";

const TrustStickyBanner = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const target = document.getElementById("trust-anchor");
    if (!target) {
      setShowSticky(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowSticky(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-3 md:top-4 z-40 transition-transform duration-300 ${
        showSticky ? "translate-y-0" : "-translate-y-full pointer-events-none"
      }`}
      aria-hidden={!showSticky}
    >
      <div className="container mx-auto px-4">
        <div className="bg-white border border-border/70 rounded-xl shadow-[0_10px_30px_-18px_rgba(3,68,119,0.25)] px-4 py-3 flex items-center gap-3">
          <Award className="w-4 h-4 text-brand-green shrink-0" />
          <div className="flex-1 text-sm text-brand-text/85">
            In Kooperation mit <span className="font-semibold text-brand-text">führenden Anwaltskanzleien</span> – 100.000+ geprüfte Fälle.
          </div>
          <div className="scale-75">
            <TuevAndGoogle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustStickyBanner;
