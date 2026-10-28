"use client";

import React, { useState } from "react";
import { useDemo } from "@/context/DemoContext";
import {
  X,
  Calendar,
  MapPin,
  Users,
  Trophy,
  Bookmark,
  Share2,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function CompetitionDetailModal() {
  const {
    selectedCompetition,
    setSelectedCompetition,
    bookmarkedIds,
    toggleBookmark,
    findTeammatesForCompetition,
  } = useDemo();

  const [activeModalTab, setActiveModalTab] = useState<"overview" | "timeline" | "criteria">("overview");

  if (!selectedCompetition) return null;

  const isBookmarked = bookmarkedIds.includes(selectedCompetition.id);

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-t-3xl sm:rounded-2xl max-h-[92vh] sm:max-h-[88vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Hero Banner */}
        <div className="relative p-5 pb-4 bg-gradient-to-br from-indigo-950/90 via-slate-900 to-slate-900 border-b border-slate-800">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              <Trophy className="w-3.5 h-3.5 text-indigo-400" />
              {selectedCompetition.category}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleBookmark(selectedCompetition.id)}
                className={cn(
                  "p-2 rounded-xl transition border",
                  isBookmarked
                    ? "bg-rose-500/20 border-rose-500/40 text-rose-400"
                    : "bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white"
                )}
                title={isBookmarked ? "Remove Bookmark" : "Bookmark Competition"}
              >
                <Bookmark className={cn("w-4 h-4", isBookmarked && "fill-rose-400")} />
              </button>

              <button
                onClick={() => setSelectedCompetition(null)}
                className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <h2 className="text-xl font-bold text-white tracking-tight leading-snug">
            {selectedCompetition.title}
          </h2>
          <p className="text-xs text-indigo-300/90 font-medium mt-1 flex items-center gap-1">
            <span>Organized by</span>
            <span className="text-white font-semibold">{selectedCompetition.organizer}</span>
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800/70 text-center">
            <div className="p-2 rounded-xl bg-slate-800/40 border border-slate-800">
              <span className="text-[10px] text-slate-400 block font-medium">Prize Pool</span>
              <span className="text-sm font-bold text-emerald-400">
                {selectedCompetition.prizePool}
              </span>
            </div>
            <div className="p-2 rounded-xl bg-slate-800/40 border border-slate-800">
              <span className="text-[10px] text-slate-400 block font-medium">Team Size</span>
              <span className="text-sm font-bold text-indigo-300">
                {selectedCompetition.teamSize}
              </span>
            </div>
            <div className="p-2 rounded-xl bg-slate-800/40 border border-slate-800">
              <span className="text-[10px] text-slate-400 block font-medium">Deadline</span>
              <span className="text-sm font-bold text-rose-400">
                {selectedCompetition.daysRemaining}d left
              </span>
            </div>
          </div>

          {/* Modal Tabs */}
          <div className="flex border-b border-slate-800 mt-4 -mb-4">
            <button
              onClick={() => setActiveModalTab("overview")}
              className={cn(
                "flex-1 py-2 text-xs font-semibold text-center border-b-2 transition",
                activeModalTab === "overview"
                  ? "border-indigo-500 text-indigo-400"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              )}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveModalTab("timeline")}
              className={cn(
                "flex-1 py-2 text-xs font-semibold text-center border-b-2 transition",
                activeModalTab === "timeline"
                  ? "border-indigo-500 text-indigo-400"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              )}
            >
              Timeline
            </button>
            <button
              onClick={() => setActiveModalTab("criteria")}
              className={cn(
                "flex-1 py-2 text-xs font-semibold text-center border-b-2 transition",
                activeModalTab === "criteria"
                  ? "border-indigo-500 text-indigo-400"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              )}
            >
              Judging & Roles
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 text-slate-300 text-sm">
          {activeModalTab === "overview" && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  About the Challenge
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedCompetition.description}
                </p>
              </div>

              {/* Problem Statement */}
              <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-800/40">
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-300 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Official Problem Prompt
                </div>
                <p className="text-xs text-slate-200 italic leading-relaxed">
                  "{selectedCompetition.problemStatement}"
                </p>
              </div>

              {/* Key Requirements */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Eligibility & Submission
                </h4>
                <ul className="space-y-2">
                  {selectedCompetition.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedCompetition.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeModalTab === "timeline" && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Competition Road Map
              </h4>
              <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
                {selectedCompetition.timeline.map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-slate-900" />
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-semibold text-xs text-white">{item.phase}</span>
                      <span className="text-[11px] font-mono text-indigo-300">{item.date}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeModalTab === "criteria" && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Judging Rubric
                </h4>
                <div className="space-y-2">
                  {selectedCompetition.judgingCriteria.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800 flex items-center justify-between"
                    >
                      <span className="text-xs text-slate-200">{item.criterion}</span>
                      <span className="text-xs font-bold text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                        {item.weight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  High-Demand Complementary Roles
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCompetition.lookingForRoles.map((role) => (
                    <span
                      key={role}
                      className="text-xs px-2.5 py-1 rounded-lg bg-indigo-950/60 border border-indigo-700/50 text-indigo-300 font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Footer CTA - Find Teammates */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center gap-3">
          <button
            onClick={() => findTeammatesForCompetition(selectedCompetition)}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:opacity-95 active:scale-[0.98] transition"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Find Teammates for this Challenge</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
