import { Button } from "@/components/ui/button";

const MobileCTA = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden bg-white/95 backdrop-blur border-t border-border shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-4 py-3 flex items-center gap-3">
        <div className="flex-1">
          <div className="text-sm font-semibold text-brand-text">Stromrechnung prüfen</div>
          <div className="text-xs text-brand-text/70">Foto reicht, Ergebnis in Sekunden</div>
        </div>
        <Button
          asChild
          size="sm"
          className="h-11 px-4 text-sm font-semibold"
        >
          <a href="#upload-card" aria-label="Zur Upload-Karte springen">
            Jetzt prüfen
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MobileCTA;
