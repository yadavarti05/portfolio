import { createWorkersAI } from "workers-ai-provider";
import { streamText } from "ai";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { knowledgeBase, profile } from "@/lib/data";

export const runtime = "nodejs";
export const maxDuration = 30;

const SYSTEM = `You are the AI assistant for ${profile.name}'s portfolio. You speak in the FIRST PERSON as ${profile.name} (use "I", "my").

Your job: help recruiters and hiring managers quickly understand whether ${profile.name} is a strong fit, based ONLY on the facts below. Be warm, concise, and confident — never arrogant. Keep answers to 2-5 short sentences unless asked for detail. Use plain text (no markdown headings). If asked something not covered, say you're not certain and suggest emailing ${profile.email}. Never invent facts, employers, dates, or metrics.

=== FACTS ABOUT ME ===
${knowledgeBase}
=== END FACTS ===`;

type ClientMsg = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  let messages: ClientMsg[] = [];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    /* ignore */
  }

  let aiBinding: unknown;
  try {
    const ctx = getCloudflareContext();
    aiBinding = (ctx.env as Record<string, unknown>).AI;
  } catch {
    /* running outside Cloudflare (local next dev) */
  }

  if (!aiBinding) {
    return textResponse(fallbackAnswer(lastUserMessage(messages)));
  }

  try {
    const workersai = createWorkersAI({ binding: aiBinding });
    const result = streamText({
      model: workersai("@cf/meta/llama-3.1-8b-instruct"),
      system: SYSTEM,
      temperature: 0.6,
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    });
    return result.toTextStreamResponse();
  } catch {
    return textResponse(fallbackAnswer(lastUserMessage(messages)));
  }
}

function lastUserMessage(messages: ClientMsg[]): string {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].role === "user") return messages[i].content.toLowerCase();
  }
  return "";
}

function textResponse(text: string) {
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      const enc = new TextEncoder();
      const words = text.split(" ");
      let i = 0;
      const tick = () => {
        if (i >= words.length) {
          controller.close();
          return;
        }
        const chunk = words.slice(i, i + 3).join(" ") + " ";
        controller.enqueue(enc.encode(chunk));
        i += 3;
        setTimeout(tick, 18);
      };
      tick();
    },
  });
  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

function fallbackAnswer(q: string): string {
  const has = (...k: string[]) => k.some((w) => q.includes(w));

  if (has("research", "iit", "paper", "eeg", "seizure", "gcn", "publi")) {
    return "During my AI/ML research internship at IIT Delhi (Dept. of Electrical Engineering, under Prof. Tapan Kumar Gandhi), I built Graph Convolutional Neural Networks for single-channel EEG-based seizure classification, using data augmentation to handle limited, imbalanced clinical data. The work became a co-authored paper accepted for publication at an international conference.";
  }
  if (has("flutter", "mobile", "app", "crm", "construction", "trip", "dart")) {
    return "I work as a Flutter developer and have shipped 2+ live production apps: a Construction Company Management app, a CRM, and a Trip Portal with separate admin and customer experiences. I handle real client workflows, role-based access, and REST API integration end to end.";
  }
  if (has("genai", "gen ai", "llm", "rag", "agent", "mcp", "generative")) {
    return "I'm going deep on Generative AI — LLMs, RAG, AI agents, and the Model Context Protocol. This very assistant runs on Cloudflare Workers AI, grounded on my real background. My ML fundamentals (GCN, RNN, LSTM from real research) mean I understand what's under the hood, not just the API.";
  }
  if (has("why", "hire", "fit", "good", "strong", "best")) {
    return "I'm a rare dual-track engineer: published deep-learning research (IIT Delhi) AND production shipping experience (2+ live Flutter apps). That combination de-risks a hire — I have both the fundamentals to go deep and the discipline to ship. And I'm actively building in GenAI today.";
  }
  if (has("skill", "stack", "tech", "language", "know", "tools")) {
    return "Core stack: Generative AI (LLMs, RAG, agents, MCP, Workers AI), Deep Learning (PyTorch, GCN, RNN/LSTM, CNN), Mobile (Flutter, Dart), Web/Backend (React, TypeScript, C#/.NET, Node.js), and Python with strong DSA foundations.";
  }
  if (has("education", "study", "degree", "college", "university", "btech")) {
    return "I'm completing a B.Tech in Computer Engineering (2022–2026). My path ran from web fundamentals to C#/.NET, then Python and Data Science, then React and Flutter, and finally deep-learning research at IIT Delhi.";
  }
  if (has("contact", "email", "reach", "hire me", "available", "open")) {
    return `I'd love to hear from you — reach me at ${profile.email}. I'm ${profile.status.toLowerCase()}.`;
  }
  return `I'm ${profile.name}, ${profile.role.toLowerCase()}. ${profile.summary} Ask me about my IIT Delhi research, the Flutter apps I've shipped, my GenAI work, or why I'd be a fit for your role.`;
}
