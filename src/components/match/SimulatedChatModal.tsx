"use client";

import React, { useState, useRef, useEffect } from "react";
import { useDemo } from "@/context/DemoContext";
import {
  Send,
  Sparkles,
  Trophy,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  CheckCheck,
  Phone,
  Video,
  Info,
} from "lucide-react";
import { SCRIPTED_ICEBREAKERS } from "@/data/mockData";
import { cn } from "@/lib/utils";

export function SimulatedChatModal() {
  const { chatMessages, sendUserMessage, isFahTyping, setActiveTab } = useDemo();
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages, isFahTyping]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;
    sendUserMessage(text.trim());
    setInputText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="pb-24 px-3 sm:px-4 pt-3 max-w-lg mx-auto flex flex-col h-[calc(100vh-140px)] min-h-[500px]">
      {/* Chat Contact Header */}
      <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 shadow-md flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
              alt="Fah"
              className="w-10 h-10 rounded-2xl object-cover ring-2 ring-indigo-500/50"
            />
            {/* Active online indicator */}
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-slate-900" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm text-white">Fah</span>
              <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                UX/UI Lead
              </span>
            </div>
            <p className="text-[11px] text-slate-400 flex items-center gap-1">
              <Trophy className="w-3 h-3 text-amber-400" />
              <span>Matched for SCG Case Challenge</span>
            </p>
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab("mentors")}
            className="p-2 rounded-xl bg-indigo-950/60 border border-indigo-700/50 text-indigo-300 hover:text-white transition"
            title="Book Team Mentor"
          >
            <GraduationCap className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Cross-Journey Grow Banner */}
      <div className="mb-2.5 p-2.5 rounded-xl bg-gradient-to-r from-purple-950/60 via-indigo-950/60 to-slate-900 border border-purple-800/40 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
          <span className="text-[11px] text-purple-200 leading-tight">
            Team formed! Ready to review your deck with a mentor?
          </span>
        </div>
        <button
          onClick={() => setActiveTab("mentors")}
          className="shrink-0 text-[10px] font-bold px-2 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white flex items-center gap-1 transition"
        >
          <span>Find Mentors</span>
          <ArrowRight className="w-2.5 h-2.5" />
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-3 text-xs">
        {chatMessages.map((msg) => {
          if (msg.senderId === "system") {
            return (
              <div key={msg.id} className="text-center my-3 px-4">
                <span className="inline-block py-1.5 px-3 rounded-full bg-slate-900/90 border border-indigo-500/30 text-[11px] text-indigo-300 font-medium shadow-sm">
                  {msg.text}
                </span>
              </div>
            );
          }

          const isMe = msg.isUser;
          return (
            <div
              key={msg.id}
              className={cn("flex flex-col", isMe ? "items-end" : "items-start")}
            >
              <div
                className={cn(
                  "max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs shadow-md leading-relaxed",
                  isMe
                    ? "bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-br-none"
                    : "bg-slate-800/95 border border-slate-700/80 text-slate-100 rounded-bl-none"
                )}
              >
                {msg.text}
              </div>
              <div className="flex items-center gap-1 mt-1 px-1">
                <span className="text-[10px] text-slate-500">{msg.timestamp}</span>
                {isMe && <CheckCheck className="w-3 h-3 text-indigo-400" />}
              </div>
            </div>
          );
        })}

        {/* Typing Bubble */}
        {isFahTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <div className="p-2.5 rounded-2xl bg-slate-800 border border-slate-700 rounded-bl-none flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
              <span
                className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <span
                className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
            <span className="text-[11px] text-slate-500">Fah is typing...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Icebreaker suggestions */}
      <div className="pt-2 pb-1.5">
        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Suggested Icebreakers</span>
        </div>
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {SCRIPTED_ICEBREAKERS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="text-[11px] whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition shadow-sm"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 pt-1">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Send a message to Fah..."
          className="flex-1 py-2.5 px-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/60 transition"
        />
        <button
          onClick={() => handleSend()}
          disabled={!inputText.trim()}
          className="p-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 disabled:pointer-events-none text-white transition shadow-md shadow-indigo-600/30"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
