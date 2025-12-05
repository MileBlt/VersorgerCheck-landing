import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, ArrowRight, Upload, Loader2, Award, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResultStickyCTA from "@/components/ResultStickyCTA";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TuevAndGoogle } from "@/components/TuevAndGoogle";

type ChatMessage = {
  id: string;
  sender: "bot" | "user";
  content: string;
  title?: string;
  listItems?: string[];
  actions?: { label: string; to?: string; replyText?: string }[];
  imageSrc?: string;
};

const ErgebnisChat4 = () => {
  const summaryText =
    "Erfolg. Sie haben Anspruch auf eine Rückzahlung.\nSeit dem 1.7.2022 beträgt die EEG-Umlage 0 ct/kWh und wurde abgeschafft. Wird sie auf Ihrer Rechnung ab Juli 2022 trotzdem noch berechnet, ist das unzulässig und der zu viel gezahlte Betrag kann zurückverlangt werden.";

  const recommendations = [
    "Nutzen Sie im nächsten Schritt unser Musterschreiben, um die Rückzahlung zu verlangen.",
    "Um den Vorgang zu beschleunigen, können Sie im nächsten Schritt unsere Experten-Partneranwälte beauftragen.",
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
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const replyTimeout = useRef<NodeJS.Timeout | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const ctaRef = useRef<HTMLButtonElement | null>(null);

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

  useEffect(() => {
    const target = ctaRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsCtaVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );
    observer.observe(target);
    return () => observer.disconnect();
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
                  ref={ctaRef}
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
          </div>
        </div>
      </section>

      <Footer />
      {!isCtaVisible ? <ResultStickyCTA /> : null}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleUploadSelected}
      />
    </main>
  );
};

export default ErgebnisChat4;
