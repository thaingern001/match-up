"use client";

import React, { useState, useEffect } from "react";
import { useDemo } from "@/context/DemoContext";
import { PitchCompanionBar } from "@/components/demo/PitchCompanionBar";
import { AppHeader } from "@/components/navigation/AppHeader";
import { BottomNavBar } from "@/components/navigation/BottomNavBar";
import { CompetitionHub } from "@/components/discover/CompetitionHub";
import { CompetitionDetailModal } from "@/components/discover/CompetitionDetailModal";
import { SwipeCardDeck } from "@/components/match/SwipeCardDeck";
import { MutualMatchModal } from "@/components/match/MutualMatchModal";
import { SimulatedChatModal } from "@/components/match/SimulatedChatModal";
import { MentorMarketplace } from "@/components/grow/MentorMarketplace";
import { BookingModal } from "@/components/grow/BookingModal";
import { ResourceLibrary } from "@/components/grow/ResourceLibrary";
import { PitchDeckModal } from "@/components/demo/PitchDeckModal";
import {
  Wifi,
  BatteryCharging,
  Signal,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Presentation,
  Flame,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function PresentationContainer() {
  const {
    activeTab,
    viewMode,
    jumpToStep,
    bookmarkedIds,
    matchedCandidate,
    chatMessages,
    bookedSessions,
    savedResourceIds,
    setShowPitchDeckModal,
  } = useDemo();

  const [currentTime, setCurrentTime] = useState("09:41");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Pitch Companion Bar */}
      <PitchCompanionBar />

      {/* Main Showcase Canvas */}
      <main className="flex-1 flex items-center justify-center p-0 sm:p-4 lg:p-6 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/20 via-slate-950 to-slate-950">
        {/* Subtle background glow orbs */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto flex items-start justify-center gap-6 lg:gap-8">
          {/* Left Desktop Panel: Pitch Story & Value Map (Visible on large screens) */}
          <div className="hidden xl:flex flex-col gap-4 w-72 shrink-0 pt-4">
            {/* Story Card */}
            <div className="p-4 rounded-3xl bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Pitch Architecture</span>
              </div>
              <h3 className="text-base font-extrabold text-white">The MatchUp Journey</h3>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div
                  onClick={() => jumpToStep("discover")}
                  className={cn(
                    "p-2.5 rounded-xl border transition cursor-pointer",
                    activeTab === "hub"
                      ? "bg-indigo-950/80 border-indigo-500/80 text-white"
                      : "bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-white"
                  )}
                >
                  <span className="font-bold text-indigo-400 block">1. Discover</span>
                  <span>Find upcoming competitions & verified deadlines.</span>
                </div>

                <div
                  onClick={() => jumpToStep("match")}
                  className={cn(
                    "p-2.5 rounded-xl border transition cursor-pointer",
                    activeTab === "match"
                      ? "bg-indigo-950/80 border-indigo-500/80 text-white"
                      : "bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-white"
                  )}
                >
                  <span className="font-bold text-rose-400 block">2. Match</span>
                  <span>Swipe to match complementary verified skills.</span>
                </div>

                <div
                  onClick={() => jumpToStep("mentors")}
                  className={cn(
                    "p-2.5 rounded-xl border transition cursor-pointer",
                    activeTab === "mentors" || activeTab === "resources"
                      ? "bg-indigo-950/80 border-indigo-500/80 text-white"
                      : "bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-white"
                  )}
                >
                  <span className="font-bold text-purple-400 block">3. Grow</span>
                  <span>Tiered mentorship packages & winning toolkits.</span>
                </div>
              </div>
            </div>

            {/* Business Model Quick Card */}
            <div className="p-4 rounded-3xl bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-xl space-y-2 text-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                Monetization (Slide 5-6)
              </span>
              <ul className="space-y-1.5 text-slate-300 text-[11px]">
                <li className="flex items-center justify-between">
                  <span>Organizer Listing:</span>
                  <span className="font-bold text-white">฿20K - 30K</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Talent Scouting:</span>
                  <span className="font-bold text-white">฿50K - 100K</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Student Premium:</span>
                  <span className="font-bold text-white">฿99 / mo</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Mentor Commission:</span>
                  <span className="font-bold text-indigo-400">20% cut</span>
                </li>
              </ul>
              <button
                onClick={() => setShowPitchDeckModal(true)}
                className="w-full mt-2 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 text-xs font-semibold transition"
              >
                Inspect Pitch Deck Slides
              </button>
            </div>
          </div>

          {/* Centered Mobile Phone Frame OR Fullscreen Container */}
          <div
            className={cn(
              "w-full transition-all duration-300 flex justify-center",
              viewMode === "mobile-frame"
                ? "max-w-[430px]"
                : "max-w-2xl bg-slate-900/60 rounded-3xl border border-slate-800"
            )}
          >
            {viewMode === "mobile-frame" ? (
              /* Realistic Smartphone Shell */
              <div className="relative w-full rounded-[44px] bg-slate-950 border-[9px] border-slate-800/95 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(99,102,241,0.15)] ring-1 ring-slate-700/60 overflow-hidden flex flex-col h-[850px] max-h-[92vh]">
                {/* Simulated Phone Status Bar with Dynamic Island */}
                <div className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md px-6 pt-3 pb-2 flex items-center justify-between text-xs text-white select-none">
                  <span className="font-semibold text-[13px] tracking-tight">{currentTime}</span>

                  {/* Dynamic Island Pill */}
                  <div className="w-24 h-5 rounded-full bg-black border border-slate-800/80 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700" />
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/80 animate-pulse" />
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Signal className="w-3.5 h-3.5" />
                    <Wifi className="w-3.5 h-3.5" />
                    <BatteryCharging className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>

                {/* Mobile App Header */}
                <AppHeader />

                {/* Scrollable Mobile App Views */}
                <div className="flex-1 overflow-y-auto no-scrollbar relative bg-slate-950">
                  {activeTab === "hub" && <CompetitionHub />}
                  {activeTab === "match" && <SwipeCardDeck />}
                  {activeTab === "mentors" && <MentorMarketplace />}
                  {activeTab === "resources" && <ResourceLibrary />}
                  {activeTab === "inbox" && <SimulatedChatModal />}
                </div>

                {/* Mobile Bottom Navigation Bar */}
                <BottomNavBar />

                {/* Simulated iOS Home Indicator Bar */}
                <div className="bg-slate-950 py-1 flex justify-center">
                  <div className="w-32 h-1 rounded-full bg-slate-700/80" />
                </div>
              </div>
            ) : (
              /* Fullscreen Responsive App View */
              <div className="w-full min-h-[800px] flex flex-col">
                <AppHeader />
                <div className="flex-1 overflow-y-auto bg-slate-950">
                  {activeTab === "hub" && <CompetitionHub />}
                  {activeTab === "match" && <SwipeCardDeck />}
                  {activeTab === "mentors" && <MentorMarketplace />}
                  {activeTab === "resources" && <ResourceLibrary />}
                  {activeTab === "inbox" && <SimulatedChatModal />}
                </div>
                <BottomNavBar />
              </div>
            )}
          </div>

          {/* Right Desktop Panel: Interactive Pitch Checklist (Visible on large screens) */}
          <div className="hidden xl:flex flex-col gap-4 w-72 shrink-0 pt-4">
            <div className="p-4 rounded-3xl bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
                <Flame className="w-4 h-4 text-rose-500" />
                <span>Live Demo Script</span>
              </div>
              <h3 className="text-base font-extrabold text-white">Pitch Checklist</h3>
              <p className="text-xs text-slate-400">
                Follow these interactive steps during your presentation:
              </p>

              <div className="space-y-2 text-xs">
                <button
                  onClick={() => jumpToStep("discover")}
                  className="w-full flex items-start gap-2.5 p-2 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 text-left transition border border-slate-800/70"
                >
                  <CheckCircle2
                    className={cn(
                      "w-4 h-4 shrink-0 mt-0.5",
                      bookmarkedIds.includes("scg-case-2024")
                        ? "text-emerald-400"
                        : "text-slate-600"
                    )}
                  />
                  <div>
                    <span className="font-semibold text-white block">1. Explore Challenges</span>
                    <span className="text-[11px] text-slate-400">
                      View SCG Case Challenge details & bookmarks.
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => jumpToStep("match")}
                  className="w-full flex items-start gap-2.5 p-2 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 text-left transition border border-slate-800/70"
                >
                  <CheckCircle2
                    className={cn(
                      "w-4 h-4 shrink-0 mt-0.5",
                      matchedCandidate ? "text-emerald-400" : "text-slate-600"
                    )}
                  />
                  <div>
                    <span className="font-semibold text-white block">2. Swipe-to-Match</span>
                    <span className="text-[11px] text-slate-400">
                      Match with Fah (UX/UI lead) based on availability.
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => jumpToStep("chat")}
                  className="w-full flex items-start gap-2.5 p-2 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 text-left transition border border-slate-800/70"
                >
                  <CheckCircle2
                    className={cn(
                      "w-4 h-4 shrink-0 mt-0.5",
                      chatMessages.length > 1 ? "text-emerald-400" : "text-slate-600"
                    )}
                  />
                  <div>
                    <span className="font-semibold text-white block">3. Simulated Team Chat</span>
                    <span className="text-[11px] text-slate-400">
                      Send icebreakers & receive realistic replies.
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => jumpToStep("mentors")}
                  className="w-full flex items-start gap-2.5 p-2 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 text-left transition border border-slate-800/70"
                >
                  <CheckCircle2
                    className={cn(
                      "w-4 h-4 shrink-0 mt-0.5",
                      bookedSessions.length > 0 ? "text-emerald-400" : "text-slate-600"
                    )}
                  />
                  <div>
                    <span className="font-semibold text-white block">4. Book a Mentor</span>
                    <span className="text-[11px] text-slate-400">
                      Select P'Mint for a Slide 6 mock pitch session.
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => jumpToStep("toolkit")}
                  className="w-full flex items-start gap-2.5 p-2 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 text-left transition border border-slate-800/70"
                >
                  <CheckCircle2
                    className={cn(
                      "w-4 h-4 shrink-0 mt-0.5",
                      savedResourceIds.length > 0 ? "text-emerald-400" : "text-slate-600"
                    )}
                  />
                  <div>
                    <span className="font-semibold text-white block">5. Access Winning Toolkit</span>
                    <span className="text-[11px] text-slate-400">
                      Preview McKinsey 10-slide case deck template.
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Reset Demo Quick Card */}
            <div className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-800/40 text-xs text-indigo-300 flex items-center justify-between">
              <span>Ready for next pitch run?</span>
              <span className="font-bold text-white underline cursor-pointer" onClick={() => jumpToStep("discover")}>
                Start from Top
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Global Overlays & Modals */}
      <CompetitionDetailModal />
      <MutualMatchModal />
      <BookingModal />
      <PitchDeckModal />
    </div>
  );
}
