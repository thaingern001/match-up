"use client";

import React from "react";
import { useDemo } from "@/context/DemoContext";
import { Sparkles, MessageSquare, X, Heart, ShieldCheck, Check } from "lucide-react";

export function MutualMatchModal() {
  const { matchedCandidate, setMatchedCandidate, setActiveTab } = useDemo();

  if (!matchedCandidate) return null;

  const handleOpenChat = () => {
    setMatchedCandidate(null);
    setActiveTab("inbox");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-slate-900 via-indigo-950/60 to-slate-900 border border-indigo-500/40 p-6 text-center shadow-2xl shadow-indigo-500/20 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => setMatchedCandidate(null)}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-white transition"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
          <span>Mutual Opt-in Match</span>
        </div>

        <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-300 to-indigo-300 tracking-tight">
          It's a Match! 🎉
        </h2>
        <p className="text-xs text-slate-300 mt-1">
          You and <strong className="text-white font-bold">{matchedCandidate.name}</strong> both liked each other for:
        </p>

        {/* Challenge pill */}
        <div className="inline-block mt-2 px-3 py-1 rounded-full bg-indigo-900/60 border border-indigo-700/60 text-xs font-semibold text-indigo-200">
          🏆 {matchedCandidate.matchedChallengeTitle || "SCG Case Challenge 2024"}
        </div>

        {/* Dual Avatars Connection Visual */}
        <div className="flex items-center justify-center gap-3 my-6">
          {/* User Avatar */}
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl ring-4 ring-indigo-500/60 overflow-hidden bg-slate-800 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80"
                alt="You"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-600 text-white">
              You
            </span>
          </div>

          {/* Glowing Heart Connector */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-indigo-600 text-white shadow-lg shadow-rose-500/40 animate-pulse">
            <Heart className="w-5 h-5 fill-white" />
          </div>

          {/* Matched Candidate Avatar */}
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl ring-4 ring-rose-500/60 overflow-hidden bg-slate-800 shadow-xl">
              <img
                src={matchedCandidate.avatar}
                alt={matchedCandidate.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white">
              {matchedCandidate.name}
            </span>
          </div>
        </div>

        {/* Complementary Skills Breakdown Box */}
        <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-left space-y-2 mb-5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400 font-medium">Complementary Synergy</span>
            <span className="font-bold text-emerald-400">{matchedCandidate.compatibilityScore}% Match</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-slate-800/80">
            <div>
              <span className="text-slate-400 block text-[10px]">Your Core Strength</span>
              <span className="text-indigo-300 font-semibold">Strategy & Financials</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">{matchedCandidate.name}'s Strength</span>
              <span className="text-rose-300 font-semibold">{matchedCandidate.role}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2.5">
          <button
            onClick={handleOpenChat}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-rose-600 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 hover:opacity-95 active:scale-[0.98] transition flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Say Hello to {matchedCandidate.name}</span>
          </button>

          <button
            onClick={() => setMatchedCandidate(null)}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 font-medium text-xs transition"
          >
            Keep Swiping
          </button>
        </div>
      </div>
    </div>
  );
}
