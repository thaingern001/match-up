"use client";

import React, { useState } from "react";
import { useDemo } from "@/context/DemoContext";
import {
  X,
  Heart,
  Star,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Calendar,
  ExternalLink,
  Award,
  ChevronRight,
  Filter,
} from "lucide-react";
import { cn } from "@/lib/utils";

const DAYS_OF_WEEK = ["M", "T", "W", "TH", "F", "SA", "SU"] as const;

export function SwipeCardDeck() {
  const {
    candidates,
    currentCandidateIndex,
    currentCandidate,
    swipeCurrentCandidate,
    rewindLastSwipe,
    resetDeck,
    filterByChallengeId,
    setFilterByChallengeId,
    triggerInstantMatch,
  } = useDemo();

  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | "up" | null>(null);

  const handleAction = (action: "pass" | "like" | "superlike") => {
    if (!currentCandidate) return;

    if (action === "pass") setSwipeDirection("left");
    if (action === "like") setSwipeDirection("right");
    if (action === "superlike") setSwipeDirection("up");

    setTimeout(() => {
      setSwipeDirection(null);
      swipeCurrentCandidate(action);
    }, 200);
  };

  return (
    <div className="pb-24 px-4 pt-4 max-w-lg mx-auto space-y-3">
      {/* Top Header from Wireframe Slide 10 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Meet Your Missing Skill.
          </h1>
          <p className="text-xs text-slate-400">
            Swipe to find complementary teammates with verified capabilities.
          </p>
        </div>

        {filterByChallengeId && (
          <button
            onClick={() => setFilterByChallengeId(null)}
            className="flex items-center gap-1 text-[11px] font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/30 px-2.5 py-1 rounded-full hover:bg-indigo-500/20 transition"
          >
            <span>SCG Filter</span>
            <span className="text-slate-400">✕</span>
          </button>
        )}
      </div>

      {/* Demo Presenter Tip Pill */}
      <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
          <span>
            {currentCandidate?.id === "fah" ? (
              <>
                Target: <strong className="text-indigo-300">Fah</strong> (UX/UI lead) — Tap{" "}
                <strong className="text-rose-400">Like (💚)</strong> to demo mutual match!
              </>
            ) : (
              <>Swipe right to like, left to pass</>
            )}
          </span>
        </div>
        {currentCandidate?.id === "fah" && (
          <button
            onClick={triggerInstantMatch}
            className="text-[10px] font-bold text-indigo-400 underline hover:text-indigo-300"
          >
            Instant Match
          </button>
        )}
      </div>

      {/* Main Card View */}
      {currentCandidate ? (
        <div
          className={cn(
            "relative rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden transition-all duration-200 select-none",
            swipeDirection === "left" && "-translate-x-12 -rotate-6 opacity-0",
            swipeDirection === "right" && "translate-x-12 rotate-6 opacity-0",
            swipeDirection === "up" && "-translate-y-12 scale-95 opacity-0"
          )}
        >
          {/* Top Image Banner */}
          <div className="relative h-56 sm:h-64 w-full bg-slate-950 overflow-hidden">
            <img
              src={currentCandidate.avatar}
              alt={currentCandidate.name}
              className="w-full h-full object-cover object-top"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

            {/* Compatibility Tag */}
            <div className="absolute top-3.5 right-3.5 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-xs font-bold shadow-md">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span>{currentCandidate.compatibilityScore}% Synergy</span>
            </div>

            {/* Target Challenge Badge */}
            {currentCandidate.matchedChallengeTitle && (
              <div className="absolute top-3.5 left-3.5 max-w-[65%] truncate px-2.5 py-1 rounded-full bg-indigo-950/90 backdrop-blur-md border border-indigo-500/40 text-indigo-300 text-xs font-semibold shadow-md">
                🎯 {currentCandidate.matchedChallengeTitle}
              </div>
            )}

            {/* Candidate Name & University */}
            <div className="absolute bottom-3 left-4 right-4">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-black text-white tracking-tight">
                  {currentCandidate.name}
                </h2>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-600 text-white">
                  {currentCandidate.role}
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium mt-0.5">
                {currentCandidate.yearAndUni}
              </p>
            </div>
          </div>

          {/* Card Body Information */}
          <div className="p-4 space-y-3.5 text-xs text-slate-300">
            {/* Verified Student / Skills Badge (Slide 2 & 8 Trust & Verification) */}
            {currentCandidate.verifiedBadge && (
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-indigo-950/40 border border-indigo-800/40 text-indigo-200">
                <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="font-semibold text-[11px] leading-tight">
                  {currentCandidate.verifiedBadge}
                </span>
              </div>
            )}

            {/* Tagline / Bio */}
            <div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {currentCandidate.bio}
              </p>
            </div>

            {/* Looking For Section (from Wireframe Slide 10 & 13) */}
            <div className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Looking For
              </span>
              <p className="text-xs font-semibold text-rose-300">
                {currentCandidate.lookingFor}
              </p>
            </div>

            {/* Skills Pills (from Wireframe Slide 10 & 13) */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                Core Skills
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentCandidate.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-[11px] font-medium"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability Matrix (M T W TH F SA SU) from Wireframe Slide 10 & 13 */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Weekly Availability
                </span>
                <span className="text-[10px] text-slate-400">
                  {currentCandidate.availableDays.length} days active
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {DAYS_OF_WEEK.map((day) => {
                  const isAvailable = currentCandidate.availableDays.includes(day);
                  return (
                    <div
                      key={day}
                      className={cn(
                        "flex-1 py-1.5 rounded-lg text-center font-bold text-xs transition border",
                        isAvailable
                          ? "bg-indigo-600 border-indigo-500 text-white shadow-sm shadow-indigo-600/40"
                          : "bg-slate-950/70 border-slate-800/80 text-slate-600"
                      )}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Portfolio Link / Evidence */}
            {currentCandidate.portfolioUrl && (
              <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80">
                <span>Portfolio: {currentCandidate.portfolioPlatform}</span>
                <span className="text-indigo-400 font-semibold flex items-center gap-1">
                  <span>{currentCandidate.portfolioUrl}</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            )}
          </div>

          {/* Swipe Action Buttons (Slide 10 & 13 Wireframes) */}
          <div className="p-3.5 bg-slate-950/90 border-t border-slate-800 flex items-center justify-around gap-2">
            {/* Rewind */}
            <button
              onClick={rewindLastSwipe}
              disabled={currentCandidateIndex === 0}
              className="p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-amber-400 disabled:opacity-30 disabled:pointer-events-none transition border border-slate-700/80"
              title="Undo Last Swipe"
            >
              <RotateCcw className="w-5 h-5" />
            </button>

            {/* Pass (✕) */}
            <button
              onClick={() => handleAction("pass")}
              className="flex-1 py-3 px-4 rounded-2xl bg-slate-800/90 hover:bg-rose-950/40 hover:text-rose-400 text-slate-300 font-bold transition border border-slate-700 flex items-center justify-center gap-1 active:scale-95"
              title="Pass"
            >
              <X className="w-5 h-5 text-rose-500" />
              <span className="text-xs">Pass</span>
            </button>

            {/* Super Like (⭐) */}
            <button
              onClick={() => handleAction("superlike")}
              className="p-3 rounded-2xl bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-700 text-indigo-300 hover:text-indigo-200 transition active:scale-95 shadow-md shadow-indigo-900/30"
              title="Super Like"
            >
              <Star className="w-5 h-5 fill-indigo-400 text-indigo-400" />
            </button>

            {/* Like (💚) */}
            <button
              onClick={() => handleAction("like")}
              className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-indigo-600 hover:opacity-95 text-white font-bold transition shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-1 active:scale-95"
              title="Like / Match"
            >
              <Heart className="w-5 h-5 fill-white text-white" />
              <span className="text-xs">Match</span>
            </button>
          </div>
        </div>
      ) : (
        /* Empty State / All Swiped */
        <div className="py-16 px-6 text-center rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
          <div className="w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto text-indigo-400">
            <Sparkles className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">You're All Caught Up!</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
              You've reviewed all candidate profiles for this category. Reset the deck to demo again or jump into the simulated team chat.
            </p>
          </div>

          <div className="flex flex-col gap-2 max-w-xs mx-auto pt-2">
            <button
              onClick={resetDeck}
              className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition shadow-md shadow-indigo-600/30 flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Candidate Deck</span>
            </button>

            <button
              onClick={triggerInstantMatch}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition"
            >
              Replay Match with Fah
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
