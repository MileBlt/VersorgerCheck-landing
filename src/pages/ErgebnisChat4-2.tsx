import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUp,
  ArrowRight,
  Upload,
  Loader2,
  Award,
  Camera,
  Info,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Download,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResultStickyCTA from "@/components/ResultStickyCTA";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TuevAndGoogle } from "@/components/TuevAndGoogle";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type ChatMessage = {
  id: string;
  sender: "bot" | "user";
  content: string;
  title?: string;
  listItems?: string[];
  actions?: { label: string; to?: string; replyText?: string }[];
  imageSrc?: string;
};

const ErgebnisChat42 = () => {
  const summaryText =
    "Erfolg. Sie haben Anspruch auf eine Rückzahlung.\nSeit dem 1.7.2022 beträgt die EEG-Umlage 0 ct/kWh und wurde abgeschafft. Wird sie auf Ihrer Rechnung ab Juli 2022 trotzdem noch berechnet, ist das unzulässig und der zu viel gezahlte Betrag kann zurückverlangt werden.";

  const recommendations = [
    "Nutzen Sie im nächsten Schritt unser Musterschreiben, um die Rückzahlung zu verlangen.",
    "Um den Vorgang zu beschleunigen, können Sie im nächsten Schritt unsere Experten-Partneranwälte beauftragen.",
  ];

  const offers = [
    {
      id: "free",
      badge: "Selbst erledigen",
      badgeTone: "bg-brand-light-blue/15 text-brand-blue",
      title: "Antwortschreiben kostenlos erstellen",
      desc: "Sie erhalten sofort Ihr personalisiertes Schreiben. Laden Sie es ohne Kosten herunter.",
      price: "Kostenlos",
      priceNote: "",
      bgTone: "bg-gradient-to-br from-[#e8f7ff] via-white to-white",
      detailBgTone: "bg-gradient-to-br from-[#e8f7ff] via-white to-[#f6fbff]",
      borderTone: "border-[#83d2de80]",
      features: [
        "Individuelles Antwortschreiben mit Ihren Rechnungsdaten.",
        "Als PDF herunterladen oder direkt digital verschicken.",
        "Kurze Anleitung, wie Sie den Anbieter anschreiben und Fristen einhalten.",
      ],
      ctaIcon: <Download className="w-4 h-4" />,
      ctaText: "Antwortschreiben gratis erhalten",
      accent: "border-brand-light-blue/50",
    },
    {
      id: "service",
      badge: "Rundum-Service",
      badgeTone: "bg-brand-green/12 text-brand-green",
      title: "Wir übernehmen alles für Sie",
      desc: "Lehnen Sie sich zurück: Wir kümmern uns um Versand und Nachverfolgung Ihres Anspruchs.",
      price: "7,99 €",
      priceNote: "einmalig",
      bgTone: "bg-gradient-to-br from-[#e9fbf4] via-white to-white",
      detailBgTone: "bg-gradient-to-br from-[#e9fbf4] via-white to-[#f3fdf8]",
      borderTone: "border-[#41c8a24f]",
      features: [
        "Wir erstellen und versenden das Schreiben für Sie – ohne Aufwand für Sie.",
        "Status-Updates, falls der Anbieter nachhakt oder nicht reagiert.",
        "Einmalige Servicepauschale, keine Abos oder versteckte Gebühren.",
      ],
      ctaIcon: <Sparkles className="w-4 h-4" />,
      ctaText: "Für 7,99 € beauftragen",
      accent: "border-brand-green/60",
    },
    {
      id: "legal",
      badge: "Anwaltliche Einschätzung",
      badgeTone: "bg-brand-orange/10 text-brand-orange",
      title: "Juristische Prüfung & Empfehlung",
      desc: "Sie erhalten eine kurze Einschätzung eines:r Anwält:in zu Ihrem Schreiben, inklusive klarer Empfehlung für das weitere Vorgehen.",
      price: "79 €",
      priceNote: "einmalig",
      bgTone: "bg-gradient-to-br from-[#fff5eb] via-white to-white",
      detailBgTone: "bg-gradient-to-br from-[#fff5eb] via-white to-[#fffaf3]",
      borderTone: "border-[#fe8f0b3d]",
      features: [
        "Einschätzung durch eine:n spezialisierte:n Rechtsanwält:in zu Ihrem Fall.",
        "Prüfung von Erfolgsaussichten und nächsten Schritten bei Gegenwehr des Anbieters.",
        "Optionales Mandat möglich – Sie entscheiden nach der ersten Einschätzung.",
      ],
      ctaIcon: <ShieldCheck className="w-4 h-4" />,
      ctaText: "Partneranwälte beauftragen",
      accent: "border-brand-orange/60",
    },
  ];

  const footerNote = "Nur noch ein Schritt, um Ihre Rückzahlung zu erhalten.";

  const initialMessages: ChatMessage[] = [
    {
      id: "bot-greeting",
      sender: "bot",
      content: "Hallo, um Ihnen zu helfen muss ich ein paar Dinge wissen. Haben Sie eine Stromrechnung ab dem Jahr 2022?",
      actions: [
        { label: "Ja, Rechnung liegt vor", replyText: "Ja, Rechnung liegt vor" },
        { label: "Nein, brauche Hilfe", replyText: "Nein, brauche Hilfe" },
        { label: "Ich weiß es nicht", replyText: "Ich weiß es nicht" },
      ],
    },
    {
      id: "user-greeting-response",
      sender: "user",
      content: "Ja, Rechnung liegt vor",
    },
    {
      id: "bot-greeting-followup",
      sender: "bot",
      content: "Ok sehr gut. Möchten Sie ein Foto hochladen oder sollen wir die Fragen hier im Chat durchgehen?",
      actions: [
        { label: "Foto hochladen", replyText: "Foto hochladen" },
        { label: "Im Chat fortfahren", replyText: "Im Chat fortfahren" },
      ],
    },
    {
      id: "user-upload",
      sender: "user",
      content: "Foto hochgeladen.",
      imageSrc: "/StromrechnungBeispiel.png",
    },
    {
      id: "bot-closing",
      sender: "bot",
      title: "Abschluss eines Chatdialogs",
      content: "Danke für Ihre Angaben. Ich habe den Check abgeschlossen – hier sind Ihre Ergebnisse.",
    },
    {
      id: "bot-befund",
      sender: "bot",
      title: "Zusammenfassung der Prüfung",
      content: summaryText,
    },
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [isOfferDialogOpen, setIsOfferDialogOpen] = useState(false);
  const [selectedOfferId, setSelectedOfferId] = useState<string>("service");
  const [detailOfferId, setDetailOfferId] = useState<string | null>(null);
  const replyTimeout = useRef<NodeJS.Timeout | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const selectedOffer = useMemo(() => offers.find((offer) => offer.id === selectedOfferId), [offers, selectedOfferId]);
  const detailOffer = useMemo(() => offers.find((offer) => offer.id === detailOfferId), [offers, detailOfferId]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    return () => {
      if (replyTimeout.current) {
        clearTimeout(replyTimeout.current);
      }
    };
  }, []);

  const addUserMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsThinking(true);

    if (replyTimeout.current) {
      clearTimeout(replyTimeout.current);
    }

    replyTimeout.current = setTimeout(() => {
      const botReply: ChatMessage = {
        id: `bot-reply-${Date.now()}`,
        sender: "bot",
        content: `Verstanden: "${trimmed}". Ich merke das vor – haben Sie weitere Fragen?`,
      };
      setMessages((prev) => [...prev, botReply]);
      setIsThinking(false);
    }, 450);
  };

  const handleUploadSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      event.target.value = "";
    }
  };

  const openSystemPicker = () => {
    fileInputRef.current?.click();
  };

  const openOffers = () => {
    setIsOfferDialogOpen(true);
    setDetailOfferId(null);
  };

  const goToDetail = (id: string) => {
    setDetailOfferId(id);
  };

  const backToList = () => {
    setDetailOfferId(null);
  };

  return (
    <main className="min-h-screen flex flex-col bg-muted pb-16 md:pb-20" data-testid="ergebnischat4-page">
      <Navbar />

      <section className="flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto pt-4 md:pt-6 lg:pt-8 pb-8 md:pb-12 lg:pb-14 space-y-6 md:space-y-8">
            <Card
              className="bg-transparent shadow-none border-none p-0 space-y-5"
              data-testid="ergebnischat4-chat-shell"
            >
              <section className="space-y-4">
                <Card
                  className="border border-border/60 bg-white rounded-2xl p-4 md:p-5 shadow-sm flex flex-col gap-4"
                  data-testid="ergebnischat4-chat-card"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#e8f4ff] border border-[#83d2de80] flex items-center justify-center">
                        <img src="/Nur Logo Transparent.png" alt="Helpcheck Logo" className="h-6 w-6 object-contain" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-sm font-semibold text-[#25252f]">helpcheck</span>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      className="rounded-full bg-[#e8f7ff] text-[#034477] hover:bg-[#dbeffc] border border-[#83d2de80] text-xs px-3"
                      onClick={openOffers}
                    >
                      Angebote
                    </Button>
                  </div>

                  <ScrollArea className="h-[320px] pr-2" data-testid="ergebnischat4-scroll">
                    <div className="space-y-3">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={message.sender === "user" ? "flex justify-end" : "flex justify-start"}
                        >
                          {(() => {
                            const isSummaryTitle =
                              message.title &&
                              message.title.toLowerCase() === "zusammenfassung der prüfung".toLowerCase();
                            const isSummaryMessage = message.id === "bot-befund";
                            const [firstLine, ...restLines] = message.content.split("\n");
                            const restText = restLines.join(" ").trim();

                            const baseClasses = "max-w-[90%] rounded-3xl border px-4 py-3.5 shadow-none";
                            const userClasses = "bg-[#0344770d] border-[#03447726] text-[#034477]";
                            const botClasses = "bg-white border-[#c6f0df] text-[#25252f]";
                            const summaryClasses =
                              "bg-[#e6f7f1] border-[#c6f0df] shadow-[0_10px_24px_-16px_rgba(3,68,119,0.35)]";

                            const bubbleClasses = `${baseClasses} ${
                              message.sender === "user"
                                ? userClasses
                                : isSummaryTitle
                                  ? summaryClasses
                                  : botClasses
                            }`;

                            return (
                              <div className={bubbleClasses} data-testid={`ergebnischat4-message-${message.id}`}>
                                {message.title ? (
                                  isSummaryTitle ? (
                                    <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#e6f7f1] text-[#41c8a2] text-[11px] font-semibold tracking-[0.08em] mb-3 border border-[#c6f0df]">
                                      {message.title}
                                    </div>
                                  ) : (
                                    <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#25252fb3] mb-1">
                                      {message.title}
                                    </div>
                                  )
                                ) : null}

                                {message.listItems ? (
                                  <ul className="list-disc pl-4 space-y-1 text-[15px] text-[#25252fcc]">
                                    {message.listItems.map((item, index) => (
                                      <li key={index} className="leading-relaxed" data-testid="ergebnischat4-list-item">
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <>
                                    {isSummaryMessage ? (
                                      <p className="text-[15px] leading-relaxed whitespace-pre-wrap">
                                        <span className="font-semibold text-[#25252f]">{firstLine}</span>
                                        {restText ? (
                                          <>
                                            <br />
                                            <span className="text-[#25252fcc]">{restText}</span>
                                          </>
                                        ) : null}
                                      </p>
                                    ) : (
                                      <p className="text-[15px] text-[#25252fcc] leading-relaxed whitespace-pre-wrap">
                                        {message.content}
                                      </p>
                                    )}
                                    {message.imageSrc ? (
                                      <div className="mt-2">
                                        <img
                                          src={message.imageSrc}
                                          alt="Hochgeladenes Dokument"
                                          className="rounded-2xl shadow-sm border border-[#0344771a] w-[70%] max-w-[320px] md:max-w-[360px] object-cover"
                                        />
                                      </div>
                                    ) : null}
                                  </>
                                )}

                                {message.actions && message.actions.length > 0 ? (
                                  <div className="mt-3 flex flex-wrap gap-2">
                                    {message.actions.map((action) => {
                                      if (action.to) {
                                        return (
                                          <Button
                                            key={action.label}
                                            asChild
                                            size="sm"
                                            variant="secondary"
                                            className="bg-[#e8f7ff] text-[#034477] hover:bg-[#dbeffc] border border-[#83d2de80] text-sm rounded-full shadow-sm px-4"
                                            data-testid={`ergebnischat4-action-${action.label}`}
                                          >
                                            <Link to={action.to} className="flex items-center gap-2">
                                              {action.label}
                                              <ArrowRight className="h-3.5 w-3.5" />
                                            </Link>
                                          </Button>
                                        );
                                      }

                                      return (
                                        <Button
                                          key={action.label}
                                          type="button"
                                          size="sm"
                                          variant="secondary"
                                          className="bg-[#e8f7ff] text-[#034477] hover:bg-[#dbeffc] border border-[#83d2de80] text-sm rounded-full shadow-sm px-4"
                                          data-testid={`ergebnischat4-action-${action.label}`}
                                          onClick={() => {
                                            if (action.label === "Foto hochladen") {
                                              openSystemPicker();
                                              return;
                                            }
                                            addUserMessage(action.replyText || action.label);
                                          }}
                                        >
                                          <span className="flex items-center gap-2">
                                            {action.label}
                                            <ArrowRight className="h-3.5 w-3.5" />
                                          </span>
                                        </Button>
                                      );
                                    })}
                                  </div>
                                ) : null}
                              </div>
                            );
                          })()}
                        </div>
                      ))}
                      {isThinking ? (
                        <div className="flex items-center gap-2 text-sm text-brand-text/80 pl-1">
                          <Loader2 className="h-4 w-4 animate-spin text-primary" />
                          Antwort wird erstellt …
                        </div>
                      ) : null}
                      <div ref={chatEndRef} />
                    </div>
                  </ScrollArea>

                  <div className="bg-white border border-[#00000022] rounded-[18px] p-2 shadow-[0_10px_26px_-18px_rgba(3,68,119,0.35)] space-y-2">
                    <div className="flex items-center gap-2">
                      <Input
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        placeholder="Eine Frage stellen"
                        className="flex-1 h-11 bg-white border border-transparent rounded-[14px] text-[15px] placeholder:text-[#25252f99] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                        aria-label="Nachricht an den KI-Assistenten"
                        data-testid="ergebnischat4-input"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-11 w-11 rounded-full text-[#25252f] hover:bg-[#f1f1f1]"
                        data-testid="ergebnischat4-upload"
                        onClick={openSystemPicker}
                      >
                        <Upload className="h-5 w-5" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-11 w-11 rounded-full text-[#25252f] hover:bg-[#f1f1f1] md:hidden"
                        aria-label="Kamera öffnen"
                        data-testid="ergebnischat4-camera"
                        onClick={openSystemPicker}
                      >
                        <Camera className="h-5 w-5" />
                      </Button>
                      <div className="flex-1" />
                      <Button
                        type="submit"
                        size="icon"
                        className="h-11 w-11 rounded-full bg-[#41c8a2] text-white shadow-md hover:bg-[#36b292]"
                        disabled={!inputValue.trim()}
                        onClick={(event) => {
                          event.preventDefault();
                          addUserMessage(inputValue);
                        }}
                        aria-label="Nachricht senden"
                        data-testid="ergebnischat4-send"
                      >
                        <ArrowUp className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </section>
            </Card>

            <Card
              className="bg-card shadow-[0_10px_28px_-18px_rgba(3,68,119,0.28)] border border-border/60 rounded-2xl p-5 md:p-7 space-y-4"
              data-testid="ergebnischat4-footer-card"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="text-base text-brand-text/85">{footerNote}</div>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto"
                  id="ergebnis-cta"
                  data-testid="ergebnischat4-footer-cta"
                >
                  <Link to="/beauftragen">Jetzt Geld zurückfordern</Link>
                </Button>
              </div>

              <div className="border-t border-border/70" />

              <div className="flex flex-col items-center text-center gap-3 md:gap-4">
                <div className="flex flex-col items-center gap-2 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-4 text-brand-text">
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 md:w-5 md:h-5 text-brand-green shrink-0" />
                    <span className="text-xs md:text-sm leading-tight">
                      In Kooperation mit <span className="font-semibold">führenden Anwaltskanzleien</span>
                    </span>
                  </div>
                  <div className="text-sm md:text-lg font-semibold whitespace-nowrap leading-tight">100.000+ geprüfte Fälle</div>
                </div>

                <div className="flex items-center justify-center scale-75 md:scale-90">
                  <TuevAndGoogle />
                </div>
              </div>
            </Card>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#034477] text-white hover:bg-[#023a66] shadow-lg"
                onClick={openOffers}
              >
                Angebote ansehen
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ResultStickyCTA />

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleUploadSelected}
      />

      <Dialog open={isOfferDialogOpen} onOpenChange={setIsOfferDialogOpen}>
        <DialogContent className="max-w-xl p-0 overflow-hidden border border-border/70 rounded-t-3xl rounded-b-xl">
          {!detailOffer ? (
            <>
              <DialogHeader className="px-4 pt-4 pb-2 border-b border-border/70">
                <DialogTitle className="text-lg font-semibold text-brand-text">Angebot auswählen</DialogTitle>
                <p className="text-sm text-brand-text/70">Wählen Sie, wie wir weiter für Sie vorgehen sollen.</p>
              </DialogHeader>

              <div className="max-h-[70vh] overflow-y-auto px-4 pt-3 pb-4">
                <RadioGroup value={selectedOfferId} onValueChange={(value) => setSelectedOfferId(value)}>
                  {offers.map((offer) => (
                    <label
                      key={offer.id}
                      className={`group relative flex gap-3 rounded-2xl border ${offer.borderTone} ${offer.bgTone} px-4 py-4 shadow-sm hover:border-brand-blue/50 hover:shadow-md transition`}
                    >
                      <RadioGroupItem
                        value={offer.id}
                        className="mt-1 text-brand-blue border-brand-blue data-[state=checked]:bg-brand-blue"
                      />
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div className="space-y-1">
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] border border-current/25 ${offer.badgeTone}`}
                            >
                              {offer.badge}
                            </span>
                            <h3 className="text-base md:text-lg font-semibold text-brand-text leading-tight">{offer.title}</h3>
                          </div>
                          <div className="text-right">
                            <div className="text-base md:text-lg font-heading font-bold text-brand-text">{offer.price}</div>
                            {offer.priceNote ? (
                              <div className="text-[11px] uppercase text-brand-text/60 tracking-[0.06em]">{offer.priceNote}</div>
                            ) : null}
                          </div>
                        </div>
                        <p className="text-sm text-brand-text/80 leading-relaxed">{offer.desc}</p>
                        <ul className="space-y-2 text-sm text-brand-text/85 leading-relaxed">
                          {offer.features.slice(0, 2).map((item) => (
                            <li key={item} className="flex gap-2">
                              <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="border-brand-blue/60 text-brand-blue hover:bg-brand-blue/5"
                            onClick={() => goToDetail(offer.id)}
                          >
                            <Info className="w-4 h-4 mr-2" />
                            Weitere Informationen
                          </Button>
                          <Button
                            type="button"
                            variant="secondary"
                            size="sm"
                            className="bg-[#034477] text-white hover:bg-[#023a66] border border-[#023a66]"
                            onClick={() => setSelectedOfferId(offer.id)}
                          >
                            Auswählen
                          </Button>
                        </div>
                      </div>
                    </label>
                  ))}
                </RadioGroup>
              </div>

              <div className="border-t border-border/70 bg-[#f8fafc] px-4 py-3">
                <Button
                  className="w-full bg-[#034477] text-white hover:bg-[#023a66]"
                  disabled={!selectedOffer}
                  onClick={() => setIsOfferDialogOpen(false)}
                >
                  Fortfahren
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b border-border/70">
                <Button variant="ghost" size="icon" className="h-10 w-10" onClick={backToList}>
                  <ArrowLeft className="w-5 h-5" />
                </Button>
                <DialogTitle className="text-lg font-semibold text-brand-text text-center flex-1">{detailOffer.title}</DialogTitle>
                <div className="w-10" />
              </div>

              <div className="max-h-[70vh] overflow-y-auto px-4 pb-4 pt-2 space-y-4">
                <div
                  className={`rounded-2xl ${detailOffer.detailBgTone} border ${detailOffer.borderTone} shadow-sm p-4`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] border border-current/25 ${detailOffer.badgeTone}`}
                      >
                        {detailOffer.badge}
                      </span>
                      <h3 className="text-xl font-semibold text-brand-text">{detailOffer.title}</h3>
                      <p className="text-sm text-brand-text/80 leading-relaxed">{detailOffer.desc}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-heading font-bold text-brand-text">{detailOffer.price}</div>
                      {detailOffer.priceNote ? (
                        <div className="text-[11px] uppercase text-brand-text/60 tracking-[0.06em]">{detailOffer.priceNote}</div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {detailOffer.features.map((item) => (
                    <div key={item} className="flex gap-3 rounded-xl border border-border/70 bg-white px-3 py-2.5 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-brand-green mt-0.5 shrink-0" />
                      <span className="text-sm text-brand-text/85 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border/70 bg-[#f8fafc] px-4 py-3 space-y-2">
                <Button
                  className="w-full bg-[#034477] text-white hover:bg-[#023a66]"
                  onClick={() => {
                    setSelectedOfferId(detailOffer.id);
                    setIsOfferDialogOpen(false);
                  }}
                >
                  {detailOffer.ctaIcon}
                  <span className="ml-2">Auswählen</span>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default ErgebnisChat42;
