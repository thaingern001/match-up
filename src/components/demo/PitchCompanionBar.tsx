"use client";

import React from "react";
import { useDemo } from "@/context/DemoContext";
import {
  Sparkles,
  RotateCcw,
  Presentation,
  Smartphone,
  Maximize2,
  Trophy,
  Heart,
  MessageSquare,
  GraduationCap,
  FolderKanban,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function PitchCompanionBar() {
  const {
    activeTab,
    jumpToStep,
    triggerInstantMatch,
    resetDemo,
    viewMode,
    setViewMode,
    setShowPitchDeckModal,
  } = useDemo();

  return (
    <div className="w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 px-4 py-2.5 z-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand & Tagline */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-tr from-rose-500 via-indigo-600 to-violet-500 text-white font-bold text-xs shadow-md shadow-indigo-500/20">
              M
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm text-white tracking-tight">MatchUp</span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Pitch Controller
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
                Interactive Investor Prototype (Discover → Match → Grow)
              </span>
            </div>
          </div>
        </div>

        {/* 1-Click Interactive Pitch Journey Stepper */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full py-0.5">
          <button
            onClick={() => jumpToStep("discover")}
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition border",
              activeTab === "hub"
                ? "bg-indigo-600 text-white border-indigo-500 shadow-sm"
                : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800"
            )}
          >
            <Trophy className="w-3.5 h-3.5 text-indigo-400" />
            <span>1. Discover</span>
          </button>

          <button
            onClick={() => jumpToStep("match")}
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition border",
              activeTab === "match"
                ? "bg-indigo-600 text-white border-indigo-500 shadow-sm"
                : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800"
            )}
          >
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>2. Match</span>
          </button>

          <button
            onClick={() => jumpToStep("chat")}
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition border",
              activeTab === "inbox"
                ? "bg-indigo-600 text-white border-indigo-500 shadow-sm"
                : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800"
            )}
          >
            <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
            <span>3. Chat</span>
          </button>

          <button
            onClick={() => jumpToStep("mentors")}
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition border",
              activeTab === "mentors"
                ? "bg-indigo-600 text-white border-indigo-500 shadow-sm"
                : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800"
            )}
          >
            <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
            <span>4. Mentors</span>
          </button>

          <button
            onClick={() => jumpToStep("toolkit")}
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition border",
              activeTab === "resources"
                ? "bg-indigo-600 text-white border-indigo-500 shadow-sm"
                : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800"
            )}
          >
            <FolderKanban className="w-3.5 h-3.5 text-amber-400" />
            <span>5. Toolkit</span>
          </button>
        </div>

        {/* Presenter Fast-Forward Controls */}
        <div className="flex items-center gap-2">
          {/* Instant Match Shortcut */}
          <button
            onClick={triggerInstantMatch}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-700/60 text-indigo-300 hover:text-white text-xs font-semibold transition"
            title="Trigger Instant Mutual Match with Fah"
          >
            <Zap className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">Instant Match</span>
          </button>

          {/* Reset Demo State */}
          <button
            onClick={resetDemo}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition"
            title="Reset All Swipes, Chats, and Bookings to Initial State"
          >
            <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
            <span>Reset Demo</span>
          </button>

          {/* Slide Deck Reference Modal */}
          <button
            onClick={() => setShowPitchDeckModal(true)}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition"
            title="View Pitch Deck & Business Model Slides"
          >
            <Presentation className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden md:inline">Pitch Deck</span>
          </button>

          {/* Device View Mode Toggle */}
          <button
            onClick={() => setViewMode(viewMode === "mobile-frame" ? "fullscreen" : "mobile-frame")}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition"
            title={viewMode === "mobile-frame" ? "Switch to Fullscreen Responsive" : "Switch to Centered Mobile Device Frame"}
          >
            {viewMode === "mobile-frame" ? (
              <Maximize2 className="w-4 h-4" />
            ) : (
              <Smartphone className="w-4 h-4 text-indigo-400" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
