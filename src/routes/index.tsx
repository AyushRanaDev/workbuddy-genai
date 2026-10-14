import { useCallback, useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import type { UIMessage } from "ai";
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  Bike,
  BookOpenText,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleHelp,
  FileText,
  HeartHandshake,
  Languages,
  LockKeyhole,
  Menu,
  MessageCircle,
  MoreHorizontal,
  RotateCcw,
  Send,
  ShieldCheck,
  Siren,
  Sparkles,
  Wallet,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { detectTopic, getMockReply, topicLabels } from "@/lib/mock-assistant";
import type { DemoLanguage, SupportTopic } from "@/lib/mock-assistant";

const STORE_KEY = "apna-saathi-demo-messages-v1";
const topicIcons = {
  earnings: Wallet,
  safety: ShieldCheck,
  rights: HeartHandshake,
  documents: FileText,
  grievance: MessageCircle,
  general: CircleHelp,
};
const suggestedQuestions = [
  { topic: "earnings", question: "Help me understand my earnings" },
  { topic: "safety", question: "I have a safety concern" },
  { topic: "rights", question: "Where can I check worker benefits?" },
  { topic: "documents", question: "Which documents should I keep?" },
  { topic: "grievance", question: "Help me draft a complaint" },
] as const satisfies ReadonlyArray<{ topic: SupportTopic; question: string }>;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apna Saathi | A little help for work days" },
      {
        name: "description",
        content:
          "A multilingual gig-worker companion prototype for earnings, safety, worker support, documents, and raising concerns.",
      },
      { property: "og:title", content: "Apna Saathi | Gig Worker Companion" },
      {
        property: "og:description",
        content: "Everyday work support in clear, familiar language.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function makeMessage(role: UIMessage["role"], text: string): UIMessage {
  return { id: crypto.randomUUID(), role, parts: [{ type: "text", text }] };
}

function storedMessages(): UIMessage[] {
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(STORE_KEY) ?? "[]");
    if (!Array.isArray(value)) return [];
    return value.filter(
      (item): item is UIMessage =>
        item !== null &&
        typeof item === "object" &&
        (item.role === "user" || item.role === "assistant") &&
        Array.isArray(item.parts) &&
        item.parts.every((part) => part && part.type === "text" && typeof part.text === "string"),
    );
  } catch {
    return [];
  }
}

function Index() {
  const [messages, setMessages] = useState<UIMessage[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [language, setLanguage] = useState<DemoLanguage>("en");
  const [simulateFailure, setSimulateFailure] = useState(false);
  const [status, setStatus] = useState<"ready" | "submitted">("ready");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const pendingReply = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollRegionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const restored = storedMessages();
    const initial = restored.length ? restored : [makeMessage("assistant", getMockReply("general", "en", false))];
    setMessages(initial);
    window.localStorage.setItem(STORE_KEY, JSON.stringify(initial));
    setHydrated(true);
    inputRef.current?.focus();
    return () => {
      if (pendingReply.current) window.clearTimeout(pendingReply.current);
    };
  }, []);

  const saveMessages = useCallback((update: (previous: UIMessage[]) => UIMessage[]) => {
    setMessages((previous) => {
      const next = update(previous);
      window.localStorage.setItem(STORE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const sendMessage = useCallback(
    (text: string, chosenTopic?: SupportTopic) => {
      const trimmed = text.trim();
      if (!trimmed || status !== "ready") return;
      saveMessages((previous) => [...previous, makeMessage("user", trimmed)]);
      setStatus("submitted");
      pendingReply.current = window.setTimeout(() => {
        const topic = chosenTopic ?? detectTopic(trimmed);
        saveMessages((previous) => [...previous, makeMessage("assistant", getMockReply(topic, language, simulateFailure))]);
        setStatus("ready");
        pendingReply.current = null;
        inputRef.current?.focus();
      }, 360);
    },
    [language, saveMessages, simulateFailure, status],
  );

  const startOver = () => {
    if (pendingReply.current) window.clearTimeout(pendingReply.current);
    setStatus("ready");
    saveMessages(() => [makeMessage("assistant", getMockReply("general", language, simulateFailure))]);
    inputRef.current?.focus();
  };

  const updateLanguage = (value: string) => {
    if (value === "en" || value === "hi" || value === "bn" || value === "ta") setLanguage(value);
  };

  return (
    <div className="app-shell">
      <aside className={`worker-sidebar${mobileMenuOpen ? " sidebar-open" : ""}`}>
        <div className="brand-lockup">
          <span className="brand-icon"><Bike size={20} strokeWidth={2.4} /></span>
          <span>apna<span className="brand-highlight">saathi</span><small>YOUR WORKDAY COMPANION</small></span>
          <Button className="mobile-close" variant="ghost" size="icon" aria-label="Close menu" onClick={() => setMobileMenuOpen(false)}><X /></Button>
        </div>

        <div className="nav-section-label">YOUR SPACE</div>
        <nav className="side-nav" aria-label="Main navigation">
          <a className="side-link active" href="#home" onClick={() => setMobileMenuOpen(false)}><BriefcaseBusiness /><span>Today</span><span className="nav-dot" /></a>
          <a className="side-link" href="#companion" onClick={() => setMobileMenuOpen(false)}><MessageCircle /><span>Ask your Saathi</span></a>
          <a className="side-link" href="#topics" onClick={() => setMobileMenuOpen(false)}><BookOpenText /><span>Worker support</span></a>
        </nav>

        <div className="sidebar-divider" />
        <div className="nav-section-label">QUICK HELP</div>
        <nav className="side-nav" aria-label="Quick help">
          {suggestedQuestions.map(({ topic }) => {
            const Icon = topicIcons[topic];
            return <a key={topic} className="side-link compact" href="#companion" onClick={() => { setMobileMenuOpen(false); sendMessage(topicLabels[topic], topic); }}><Icon /><span>{topicLabels[topic]}</span></a>;
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="privacy-note"><LockKeyhole size={16} /><span>Your chat stays on this device</span></div>
          <div className="worker-profile"><div className="worker-avatar">A</div><div><strong>Your space</strong><span>Private demo</span></div><MoreHorizontal className="profile-more" size={18} /></div>
        </div>
      </aside>

      {mobileMenuOpen && <button className="mobile-scrim" aria-label="Close menu" onClick={() => setMobileMenuOpen(false)} />}

      <main id="home" className="main-area">
        <header className="topbar">
          <div className="breadcrumbs"><Button className="menu-toggle" variant="ghost" size="icon" aria-label="Open menu" onClick={() => setMobileMenuOpen(true)}><Menu /></Button><span>YOUR SPACE</span><span className="crumb-slash">/</span><strong>Today</strong></div>
          <div className="topbar-actions">
            <span className="prototype-badge"><span />Prototype</span>
            <Select value={language} onValueChange={updateLanguage}>
              <SelectTrigger className="language-select" aria-label="Reply language"><Languages size={15} /><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem><SelectItem value="hi">हिन्दी</SelectItem><SelectItem value="bn">বাংলা</SelectItem><SelectItem value="ta">தமிழ்</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </header>

        <div className="page-content">
          <section className="welcome-band" aria-labelledby="welcome-title">
            <div className="welcome-image" role="img" aria-label="Delivery worker checking his phone at the start of a workday" />
            <div className="welcome-overlay" />
            <div className="welcome-copy">
              <span className="eyebrow"><span /> A LITTLE HELP FOR WORK DAYS</span>
              <h1 id="welcome-title">Your work.<br />A little less worry.</h1>
              <p>A friendly place to figure things out, at your pace.</p>
              <a href="#companion" className="welcome-link">Talk to your Saathi <ArrowDownRight size={15} /></a>
            </div>
            <div className="welcome-mark"><HeartHandshake size={20} /><span>Here for your<br />everyday work life</span></div>
          </section>

          <section className="today-heading" aria-label="Support overview">
            <div><div className="today-date"><span className="status-pin" /> YOUR SPACE, YOUR PACE</div><h2>What’s on your mind today?</h2></div>
            <p>Start wherever you are. We’ll figure it out together.</p>
          </section>

          <section id="topics" className="topic-grid" aria-label="Ways I can help">
            {suggestedQuestions.map(({ topic, question }, index) => {
              const Icon = topicIcons[topic];
              return (
                <button type="button" className={`topic-tile topic-tile-${index + 1}`} key={topic} onClick={() => { sendMessage(question, topic); document.getElementById("companion")?.scrollIntoView({ behavior: "smooth" }); }}>
                  <span className="topic-icon"><Icon size={18} /></span><span className="topic-name">{topicLabels[topic]}</span><ArrowUpRight className="topic-arrow" size={15} />
                </button>
              );
            })}
          </section>

          <section className="lower-grid">
            <section id="companion" className="chat-panel" aria-labelledby="chat-title">
              <div className="chat-heading">
                <div className="chat-agent-mark"><HeartHandshake size={19} /></div>
                <div className="chat-heading-copy"><div className="chat-name-line"><h2 id="chat-title">Your Saathi</h2><span className="available-dot" /> <span className="ready-label">Here with you</span></div><p>Worker support, in simple words</p></div>
                <Button variant="ghost" size="icon" aria-label="Start a new conversation" title="Start a new conversation" onClick={startOver}><RotateCcw /></Button>
              </div>
              <div ref={scrollRegionRef} className="chat-transcript">
                <Conversation className="conversation-root">
                  <ConversationContent className="conversation-content">
                    {!messages.length && <ConversationEmptyState title="Start with what’s on your mind" description="Your Saathi is here to listen." icon={<HeartHandshake size={30} />} />}
                    {messages.map((message, index) => {
                      const text = message.parts.filter((part) => part.type === "text").map((part) => part.text).join("\n");
                      const isAssistant = message.role === "assistant";
                      return (
                        <Message key={message.id} from={message.role} className="chat-message">
                          {isAssistant && <span className="message-attribution">YOUR SAATHI <span>·</span> JUST NOW</span>}
                          <MessageContent className={isAssistant ? "assistant-content" : "user-content"}><MessageResponse>{text}</MessageResponse></MessageContent>
                          {isAssistant && index === messages.length - 1 && <div className="reply-note"><BadgeCheck size={13} /><span>Canned demo reply</span></div>}
                        </Message>
                      );
                    })}
                    {status === "submitted" && <div className="thinking-state"><span className="thinking-mark"><HeartHandshake size={14} /></span><Shimmer duration={1.6}>Finding a helpful starting point…</Shimmer></div>}
                  </ConversationContent>
                  <ConversationScrollButton />
                </Conversation>
              </div>
              <div className="chat-composer-wrap">
                <PromptInput className="chat-composer" onSubmit={({ text }) => sendMessage(text)}>
                  <PromptInputTextarea ref={inputRef} placeholder="Tell me a little about it…" aria-label="Your message to Saathi" rows={2} disabled={!hydrated || status !== "ready"} />
                  <PromptInputFooter className="composer-footer">
                    <span className="composer-privacy"><LockKeyhole size={12} /> Only on this device</span>
                    <PromptInputSubmit status={status} disabled={!hydrated || status !== "ready"} aria-label="Send message"><Send size={15} /></PromptInputSubmit>
                  </PromptInputFooter>
                </PromptInput>
                <p className="chat-disclaimer">Illustrative replies, not legal or financial advice. Don’t share passwords or bank details.</p>
              </div>
            </section>

            <aside className="support-rail" aria-label="Prototype details">
              <section className="rail-section">
                <div className="rail-eyebrow"><span className="rail-indicator" /> DESIGNED AROUND YOUR DAY</div>
                <h3>Small steps can make things clearer.</h3>
                <p>Start with one question. Your Saathi can help you sort the next step.</p>
                <div className="support-list">
                  <div><span className="support-list-icon earning"><Wallet size={15} /></span><span>Keep track of earnings</span><Check size={14} /></div>
                  <div><span className="support-list-icon safe"><Siren size={15} /></span><span>Think through safety</span><Check size={14} /></div>
                  <div><span className="support-list-icon rights"><HeartHandshake size={15} /></span><span>Find worker support</span><Check size={14} /></div>
                  <div><span className="support-list-icon documents"><FileText size={15} /></span><span>Put a concern into words</span><Check size={14} /></div>
                </div>
              </section>

              <section className="demo-control" aria-label="Evaluator demo controls">
                <div className="demo-control-head"><span className="demo-control-icon"><Sparkles size={15} /></span><span>EVALUATOR CONTROLS</span></div>
                <h3>Try the fallback</h3>
                <p>Simulate an unavailable service. No real assistant is contacted; the prototype shows its local fallback.</p>
                <label className="failure-switch-row" htmlFor="simulate-failure">
                  <span><span className="switch-title">Simulate service issue</span><span className={`switch-state ${simulateFailure ? "state-on" : ""}`}>{simulateFailure ? "Fallback on" : "Demo replies on"}</span></span>
                  <Switch id="simulate-failure" checked={simulateFailure} onCheckedChange={setSimulateFailure} aria-label="Simulate service issue" />
                </label>
                <div className={`mock-guarantee${simulateFailure ? " guarantee-fallback" : ""}`}><ShieldCheck size={14} /><span>{simulateFailure ? "Next reply uses the visible mock fallback" : "All replies are prewritten demo examples"}</span></div>
              </section>

              <section className="source-note"><div><BookOpenText size={16} /><strong>Good to know</strong></div><p>Scheme and rights information can change. Check your local government for current guidance.</p><span>EXAMPLE ONLY <span>·</span> NOT A LIVE SERVICE</span></section>
            </aside>
          </section>

          <footer className="page-footer"><span>Made for everyday workdays <span className="footer-heart">♥</span></span><span>YOUR SAATHI <span>·</span> A LOCAL PROTOTYPE</span></footer>
        </div>
      </main>
    </div>
  );
}
