"use client";

import React from "react";
import { useDemo } from "@/context/DemoContext";
import { Bookmark, Sparkles, Trophy } from "lucide-react";

export function AppHeader() {
  const { activeTab, setActiveTab, bookmarkedIds, filterByChallengeId, setFilterByChallengeId } = useDemo();

  return (
    <header className="sticky top-0 z-30 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-500 via-indigo-600 to-violet-500 shadow-md shadow-indigo-500/20">
            {/* MatchUp Logo Icon inspired by deck: 3 connection dots */}
            <div className="flex items-center gap-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-base text-white tracking-tight">MatchUp</span>
              <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Pitch Demo
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium leading-none">
              Find Your Team · Build Your Edge
            </p>
          </div>
        </div>

        {/* Quick Context Badges */}
        <div className="flex items-center gap-2">
          {filterByChallengeId && (
            <button
              onClick={() => setFilterByChallengeId(null)}
              className="hidden sm:flex items-center gap-1 text-[11px] bg-indigo-950/80 text-indigo-300 border border-indigo-700/50 px-2 py-1 rounded-full hover:bg-indigo-900/60 transition"
              title="Click to clear filter"
            >
              <Trophy className="w-3 h-3 text-indigo-400" />
              <span>SCG Filtered</span>
              <span className="ml-1 text-slate-400 hover:text-white">✕</span>
            </button>
          )}

          {/* Bookmarks Counter */}
          <button
            onClick={() => setActiveTab("hub")}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs transition"
            title="Saved Competitions"
          >
            <Bookmark className="w-3.5 h-3.5 text-rose-400 fill-rose-400/20" />
            <span className="font-semibold text-slate-200">{bookmarkedIds.length}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
