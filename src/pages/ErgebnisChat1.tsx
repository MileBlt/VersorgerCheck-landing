import { FormEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, ArrowRight, Sparkles, Upload, Loader2, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResultStickyCTA from "@/components/ResultStickyCTA";
import TrustBar from "@/components/TrustBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

type ChatMessage = {
  id: string;
  sender: "bot" | "user";
  content: string;
  title?: string;
  listItems?: string[];
  actions?: { label: string; to: string }[];
};

const ErgebnisChat1 = () => {
  const summaryText =
    "Auf Ihrer Rechnung steht ab Juli 2022 noch eine EEG-Umlage. Das ist nicht erlaubt, denn seit 1.7.2022 liegt sie bei 0 ct/kWh und wurde abgeschafft. Die Entlastung wurde offenbar nicht weitergegeben – deshalb kann eine Rückzahlung fällig sein.";

  const recommendations = [
    "Nutzen Sie im nächsten Schritt unser Musterschreiben, um die Rückzahlung zu verlangen.",
    "Um den Vorgang zu beschleunigen, können Sie im nächsten Schritt unsere Experten-Partneranwälte beauftragen.",
  ];

  const footerNote = "Nur noch ein Schritt, um Ihre Rückzahlung zu erhalten.";

  const initialMessages: ChatMessage[] = [
    {
      id: "bot-befund",
      sender: "bot",
      title: "Zusammenfassung der Prüfung",
      content: summaryText,
    },
    {
      id: "bot-empfehlungen",
      sender: "bot",
      title: "Handlungsempfehlungen",
      content: "",
      listItems: recommendations,
      actions: [
        { label: "Jetzt Rückzahlung erhalten", to: "/beauftragen" },
        { label: "Jetzt Rückzahlung erhalten", to: "/beauftragen" },
      ],
    },
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const replyTimeout = useRef<NodeJS.Timeout | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const quickReplies = ["Button 1", "Button 2", "Button 3"];

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

  const handleQuickReply = (text: string) => {
    addUserMessage(text);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    addUserMessage(inputValue);
  };

  return (
    <main className="min-h-screen flex flex-col bg-muted pb-16 md:pb-20">
      <Navbar />

      <section className="flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto pt-4 md:pt-6 lg:pt-8 pb-8 md:pb-12 lg:pb-14 space-y-6 md:space-y-8">
            <Card className="bg-card shadow-[0_12px_32px_-20px_rgba(3,68,119,0.35)] border border-border/60 rounded-2xl p-5 md:p-7 space-y-5">
              <section className="space-y-4">
                <div className="rounded-xl border border-[#83d2de80] bg-[#f4fbff] p-4 flex flex-col gap-4 -mx-5 md:-mx-7 -mt-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#e8f4ff] border border-[#83d2de80] flex items-center justify-center">
                        <img src="/Nur Logo Transparent.png" alt="Helpcheck Logo" className="h-6 w-6 object-contain" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-[#25252f]">helpcheck</span>
                          <Badge
                            variant="secondary"
                            className="text-[11px] font-semibold px-2 py-0.5 bg-[#034477] text-white border border-[#034477]"
                          >
                            Aktiv
                          </Badge>
                        </div>
                        <p className="text-xs text-[#25252fcc]">Antwortet in Sekunden auf Ihre Fragen.</p>
                      </div>
                    </div>
                  </div>

                  <ScrollArea className="h-[320px] pr-2">
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

                            const baseClasses = "max-w-full rounded-3xl border px-4 py-3.5 shadow-none";
                            const userClasses = "bg-[#0344770d] border-[#03447726] text-[#034477]";
                            const botClasses = "bg-white border-[#83d2de] text-[#25252f]";
                            const summaryClasses =
                              "bg-white border-[#41c8a2] shadow-[0_10px_24px_-16px_rgba(3,68,119,0.45)]";

                            const bubbleClasses = `${baseClasses} ${
                              message.sender === "user"
                                ? userClasses
                                : isSummaryTitle
                                  ? summaryClasses
                                  : botClasses
                            }`;

                            return (
                              <div className={bubbleClasses}>
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
                                      <li key={index} className="leading-relaxed">
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p className="text-[15px] text-[#25252fcc] leading-relaxed whitespace-pre-wrap">
                                    {message.content}
                                  </p>
                                )}

                                {message.actions && message.actions.length > 0 ? (
                                  <div className="mt-3 flex flex-wrap gap-2">
                                    {message.actions.map((action) => (
                                      <Button
                                        key={action.label}
                                        asChild
                                        size="sm"
                                        variant="secondary"
                                        className="bg-[#e8f7ff] text-[#034477] hover:bg-[#dbeffc] border border-[#83d2de80] text-sm rounded-full shadow-sm px-4"
                                      >
                                        <Link to={action.to} className="flex items-center gap-2">
                                          {action.label}
                                          <ArrowRight className="h-3.5 w-3.5" />
                                        </Link>
                                      </Button>
                                    ))}
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

                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply) => (
                      <Button
                        key={reply}
                        type="button"
                        variant="secondary"
                        size="sm"
                        className="rounded-full bg-[#e8f7ff] hover:bg-[#dbeffc] text-[#034477] border border-[#83d2de80] px-3"
                        onClick={() => handleQuickReply(reply)}
                      >
                        <Sparkles className="h-3.5 w-3.5 mr-1.5 text-[#034477]" />
                        {reply}
                      </Button>
                    ))}
                  </div>

                  <div className="bg-white border border-[#00000022] rounded-[18px] p-2 shadow-[0_10px_26px_-18px_rgba(3,68,119,0.35)] space-y-2">
                    <div className="flex items-center gap-2">
                      <Input
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        placeholder="Stelle dem KI-Bot eine Frage …"
                        className="flex-1 h-11 bg-white border border-transparent rounded-[14px] text-[15px] placeholder:text-[#25252f99] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                        aria-label="Nachricht an den KI-Assistenten"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-11 w-11 rounded-full text-[#25252f] hover:bg-[#f1f1f1]"
                      >
                        <Upload className="h-5 w-5" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-11 w-11 rounded-full text-[#25252f] hover:bg-[#f1f1f1] md:hidden"
                        aria-label="Kamera öffnen"
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
                      >
                        <ArrowUp className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-border/70" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
                <div className="text-sm text-brand-text/75">{footerNote}</div>
                <Button asChild size="lg" className="w-full sm:w-auto" id="ergebnis-cta">
                  <Link to="/beauftragen">Jetzt Stromrechnung prüfen</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <TrustBar />
      <Footer />
      <ResultStickyCTA />
    </main>
  );
};

export default ErgebnisChat1;
