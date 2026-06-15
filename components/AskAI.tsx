"use client";

import { useRef, useState } from "react";
import { ArrowUp, Sparkles, Bot, User as UserIcon } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { profile } from "@/lib/data";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What's your strongest AI/ML work?",
  "Tell me about your IIT Delhi research.",
  "What Flutter apps have you shipped?",
  "Why hire you for a GenAI role?",
];

export function AskAI() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;

    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    // placeholder assistant message we stream into
    setMessages((m) => [...m, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok || !res.body) throw new Error("network");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      let streaming = true;
      while (streaming) {
        const { done, value } = await reader.read();
        if (done) {
          streaming = false;
          break;
        }
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
        requestAnimationFrame(() => {
          scrollRef.current?.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: "smooth",
          });
        });
      }
    } catch {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = {
          role: "assistant",
          content:
            "Sorry — I couldn't reach the model just now. You can email me at " +
            profile.email +
            " and I'll get right back to you.",
        };
        return copy;
      });
    } finally {
      setLoading(false);
    }
  }

  const empty = messages.length === 0;

  return (
    <section
      id="ask"
      className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28"
    >
      <Reveal>
        <div className="flex items-baseline gap-4 border-b border-line pb-6">
          <span className="font-mono text-sm text-faint">02</span>
          <div>
            <div className="eyebrow">Interactive</div>
            <h2 className="font-display mt-1 text-4xl leading-none text-text sm:text-5xl">
              Ask my AI anything
            </h2>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted">
          Short on time? This assistant is grounded on my real background — ask
          it about my research, my shipped apps, or whether I&apos;m a fit for
          your role. (Built with the Gemini API &amp; Vercel AI SDK — a live
          demo of the GenAI work itself.)
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 overflow-hidden rounded-2xl border border-line-2 bg-surface shadow-[0_30px_60px_-35px_rgba(42,36,29,0.45)]">
          {/* clean minimal header */}
          <div className="flex items-center gap-3 border-b border-line bg-surface-2/60 px-4 py-3">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-accent/12 text-accent">
              <Bot className="h-4 w-4" />
            </span>
            <span className="font-display text-base text-text">
              {profile.name.split(" ")[0]}&apos;s AI
            </span>
            <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> online
            </span>
          </div>

          {/* messages */}
          <div
            ref={scrollRef}
            className="max-h-[42vh] min-h-[220px] space-y-5 overflow-y-auto px-4 py-6 sm:px-6"
          >
            {empty ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-8 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-line-2 bg-surface text-accent">
                  <Sparkles className="h-5 w-5" />
                </span>
                <p className="max-w-sm text-sm text-faint">
                  Ask a question below, or tap one of the suggestions to start.
                </p>
              </div>
            ) : (
              messages.map((m, i) => <Bubble key={i} msg={m} loading={loading && i === messages.length - 1} />)
            )}
          </div>

          {/* suggestions */}
          {empty && (
            <div className="flex flex-wrap gap-2 px-4 pb-4 sm:px-6">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-line-2 bg-surface/60 px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/50 hover:text-text"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-line bg-ink/40 p-3"
          >
            <span className="pl-2 font-mono text-sm text-accent">›</span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              className="flex-1 bg-transparent py-2 text-sm text-text outline-none placeholder:text-faint"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send"
              className="grid h-9 w-9 place-items-center rounded-full bg-accent text-ink transition-opacity disabled:opacity-30"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}

function Bubble({ msg, loading }: { msg: Msg; loading: boolean }) {
  const isUser = msg.role === "user";
  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      <span
        className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border ${
          isUser
            ? "border-line-2 bg-surface text-muted"
            : "border-accent/40 bg-accent/10 text-accent"
        }`}
      >
        {isUser ? <UserIcon className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
      </span>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "border border-accent/20 bg-accent/10 text-text"
            : "border border-line bg-surface-2 text-text"
        }`}
      >
        {msg.content ? (
          <span className="whitespace-pre-wrap">{msg.content}</span>
        ) : loading ? (
          <span className="inline-flex gap-1">
            <Dot /> <Dot d={0.15} /> <Dot d={0.3} />
          </span>
        ) : null}
      </div>
    </div>
  );
}

function Dot({ d = 0 }: { d?: number }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-faint"
      style={{ animationDelay: `${d}s` }}
    />
  );
}
