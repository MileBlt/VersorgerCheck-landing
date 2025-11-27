import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type SummaryCardProps = {
  overline?: string;
  summaryTitle: string;
  summaryText: string;
  recommendationsTitle?: string;
  recommendations: string[];
  footerNote?: string;
  ctaLabel: string;
  ctaHref: string;
};

const SummaryCard = ({
  overline = "Zusammenfassung der Prüfung",
  summaryTitle,
  summaryText,
  recommendationsTitle = "Handlungsempfehlungen",
  recommendations,
  footerNote = "Bereit loszulegen? Wählen Sie jetzt Ihren nächsten Schritt.",
  ctaLabel,
  ctaHref,
}: SummaryCardProps) => {
  return (
    <Card className="bg-card shadow-sm border border-border/60 rounded-2xl p-5 md:p-7 space-y-5">
      <header className="space-y-3">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-[11px] font-semibold uppercase tracking-[0.08em]">
          {overline}
        </div>
        <div className="space-y-2">
          <h2 className="font-heading text-2xl font-semibold text-brand-text">{summaryTitle}</h2>
          <p className="text-brand-text/90 leading-relaxed">{summaryText}</p>
        </div>
      </header>

      <section className="space-y-3">
        <h3 className="font-heading text-xl font-semibold text-brand-text">{recommendationsTitle}</h3>
        <ul className="space-y-2 text-brand-text/85 leading-relaxed list-disc pl-5">
          {recommendations.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="border-t border-border/70" />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
        <div className="text-sm text-brand-text/75">{footerNote}</div>
        <Button asChild size="lg" className="w-full sm:w-auto" id="ergebnis-cta">
          <Link to={ctaHref}>{ctaLabel}</Link>
        </Button>
      </div>
    </Card>
  );
};

export default SummaryCard;
