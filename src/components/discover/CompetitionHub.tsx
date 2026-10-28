"use client";

import React, { useState, useMemo } from "react";
import { useDemo } from "@/context/DemoContext";
import {
  Search,
  Bookmark,
  Calendar,
  MapPin,
  Users,
  Trophy,
  Sparkles,
  ArrowRight,
  Filter,
  Check,
} from "lucide-react";
import { Category, Competition } from "@/types";
import { cn } from "@/lib/utils";

const CATEGORIES: Category[] = [
  "All",
  "Case Competition",
  "Hackathon",
  "Design",
  "Tech & AI",
  "FinTech",
];

export function CompetitionHub() {
  const {
    competitions,
    selectedCompetition,
    setSelectedCompetition,
    bookmarkedIds,
    toggleBookmark,
    findTeammatesForCompetition,
  } = useDemo();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [onlySaved, setOnlySaved] = useState(false);

  // Filter logic
  const filteredCompetitions = useMemo(() => {
    return competitions.filter((comp) => {
      // Category filter
      if (selectedCategory !== "All" && comp.category !== selectedCategory) {
        return false;
      }
      // Saved filter
      if (onlySaved && !bookmarkedIds.includes(comp.id)) {
        return false;
      }
      // Search filter
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesTitle = comp.title.toLowerCase().includes(q);
        const matchesOrganizer = comp.organizer.toLowerCase().includes(q);
        const matchesTags = comp.tags.some((t) => t.toLowerCase().includes(q));
        const matchesDesc = comp.description.toLowerCase().includes(q);
        return matchesTitle || matchesOrganizer || matchesTags || matchesDesc;
      }
      return true;
    });
  }, [competitions, selectedCategory, onlySaved, searchQuery, bookmarkedIds]);

  return (
    <div className="pb-24 px-4 pt-4 space-y-4 max-w-lg mx-auto">
      {/* Page Title & Slogan */}
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Find Your Next Challenge.
          </h1>
          <span className="text-[11px] font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full">
            {competitions.length} Live Events
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Explore top hackathons and business case competitions. Match with high-caliber teammates.
        </p>
      </div>

      {/* Search Input Bar (from Wireframe Slide 9) */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search competitions, tags, or topics..."
          className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/60 transition"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
          >
            ✕
          </button>
        )}
      </div>

      {/* Category Filter Pills (Slide 9 & 13) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat && !onlySaved;
          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOnlySaved(false);
              }}
              className={cn(
                "px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition border text-xs",
                isSelected
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-sm shadow-indigo-600/30"
                  : "bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800/60"
              )}
            >
              {cat}
            </button>
          );
        })}

        {/* Saved Filter Pill */}
        <button
          onClick={() => setOnlySaved(!onlySaved)}
          className={cn(
            "flex items-center gap-1 px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition border text-xs",
            onlySaved
              ? "bg-rose-500 text-white border-rose-400 shadow-sm shadow-rose-500/30"
              : "bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200"
          )}
        >
          <Bookmark className={cn("w-3 h-3", onlySaved && "fill-white")} />
          <span>Saved ({bookmarkedIds.length})</span>
        </button>
      </div>

      {/* Pitch Demo Callout / Value Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-950/70 via-slate-900 to-slate-900 border border-indigo-900/40 p-3.5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Step 1: Discover to Match</span>
            </div>
            <p className="text-[11px] text-slate-300 mt-1 leading-snug">
              Select <span className="text-white font-semibold">SCG Case Challenge</span> below and tap{" "}
              <strong className="text-indigo-300">"Find Teammates"</strong> to experience instant swipe matching with verified candidates.
            </p>
          </div>
          <button
            onClick={() => {
              const scg = competitions.find((c) => c.id === "scg-case-2024");
              if (scg) findTeammatesForCompetition(scg);
            }}
            className="shrink-0 text-xs font-semibold px-2.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition flex items-center gap-1"
          >
            <span>Demo SCG</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Competition Cards List */}
      <div className="space-y-3.5">
        {filteredCompetitions.length === 0 ? (
          <div className="text-center py-12 px-4 rounded-2xl bg-slate-900/50 border border-slate-800">
            <Trophy className="w-8 h-8 text-slate-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-300">No competitions found</p>
            <p className="text-xs text-slate-500 mt-1">Try clearing filters or search keywords</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setOnlySaved(false);
              }}
              className="mt-3 text-xs text-indigo-400 underline font-medium"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredCompetitions.map((comp) => {
            const isBookmarked = bookmarkedIds.includes(comp.id);

            return (
              <div
                key={comp.id}
                className={cn(
                  "group relative rounded-2xl bg-slate-900 border transition-all duration-200 overflow-hidden shadow-lg",
                  comp.id === "scg-case-2024"
                    ? "border-indigo-500/40 hover:border-indigo-400 ring-1 ring-indigo-500/20"
                    : "border-slate-800 hover:border-slate-700"
                )}
              >
                {/* Top Card Bar */}
                <div className="p-4 pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-md">
                          {comp.category}
                        </span>
                        {comp.featured && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition">
                        {comp.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">{comp.organizer}</p>
                    </div>

                    {/* Bookmark action */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(comp.id);
                      }}
                      className={cn(
                        "p-2 rounded-xl transition border shrink-0",
                        isBookmarked
                          ? "bg-rose-500/20 border-rose-500/40 text-rose-400"
                          : "bg-slate-800/80 border-slate-700/80 text-slate-400 hover:text-white"
                      )}
                      title={isBookmarked ? "Remove Bookmark" : "Save Competition"}
                    >
                      <Bookmark className={cn("w-4 h-4", isBookmarked && "fill-rose-400")} />
                    </button>
                  </div>

                  {/* Dates & Location */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{comp.datesText}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{comp.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>Team: {comp.teamSize}</span>
                    </div>
                  </div>

                  {/* Prize pool badge */}
                  <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-slate-800/60">
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                        Prize Pool
                      </span>
                      <span className="text-sm font-extrabold text-emerald-400 font-mono">
                        {comp.prizePool}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <span className="text-[11px] text-rose-400 font-semibold bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded-full">
                        {comp.daysRemaining} days left
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons (Directly matching wireframe) */}
                <div className="p-3 bg-slate-950/60 border-t border-slate-800/80 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCompetition(comp)}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 text-center transition"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => findTeammatesForCompetition(comp)}
                    className="flex-1 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white text-center shadow-md shadow-indigo-600/30 flex items-center justify-center gap-1 transition active:scale-[0.98]"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Find Teammates</span>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
