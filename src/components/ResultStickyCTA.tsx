import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ResultStickyCTA = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const target = document.getElementById("ergebnis-cta");
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowSticky(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 bg-white/85 backdrop-blur border-t border-border shadow-[0_-4px_12px_rgba(0,0,0,0.05)] transition-transform duration-300 ${
        showSticky ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
      aria-hidden={!showSticky}
    >
      <div className="container mx-auto px-4 py-3 flex items-center gap-3">
        <div className="flex-1">
          <div className="text-sm font-semibold text-brand-text">Nur noch ein Schritt, um Ihre Rückzahlung zu erhalten.</div>
        </div>
        <Button
          asChild
          size="sm"
          className="h-11 px-4 text-sm font-semibold"
        >
          <Link to="/beauftragen" aria-label="Zum CTA springen">Jetzt prüfen</Link>
        </Button>
      </div>
    </div>
  );
};

export default ResultStickyCTA;
