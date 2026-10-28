"use client";

import React, { useState } from "react";
import { useDemo } from "@/context/DemoContext";
import { X, ChevronLeft, ChevronRight, Presentation, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    slideNumber: 1,
    title: "MatchUp — Find Your Team, Build Your Edge",
    subtitle: "The End-to-End Competition Ecosystem: Discover → Match → Grow",
    badge: "Cover & Vision",
    points: [
      "Target audience: Ambitious university students, hackathon competitors, and case challenge contenders.",
      "Core thesis: Strong students struggle to form winning cross-functional teams and prepare effectively.",
      "Solution: End-to-end journey uniting discovery, swipe matching, and mentor coaching in one platform."
    ]
  },
  {
    slideNumber: 2,
    title: "The Problem — Fragmented & High-Risk Team Formation",
    subtitle: "Strong students struggle to build the right team.",
    badge: "Problem (Slide 2)",
    points: [
      "Lack of Networks: Hard to connect beyond existing peer circles and isolated faculties.",
      "Uncertain Commitment: Frequent ghosting, mismatched ambition, and unclear availability.",
      "Unverified Skills: Difficult to assess real capabilities from static text resumes or self-reported claims."
    ]
  },
  {
    slideNumber: 3,
    title: "Our Solution — Discover → Connect → Grow",
    subtitle: "The three pillars of the MatchUp platform",
    badge: "Solution (Slide 3)",
    points: [
      "01. Discover (Competition Hub): Centralized directory of challenges, prize pools, and verified deadlines.",
      "02. Connect (Swipe-to-Match): Tinder-style algorithm pairing complementary skills with weekly availability locks.",
      "03. Grow (Mentor Marketplace): Tiered coaching from champion alumni to turn team formation into podium performance."
    ]
  },
  {
    slideNumber: 4,
    title: "Value Proposition Map",
    subtitle: "Customer Profile vs. MatchUp Value Creation",
    badge: "Value Prop (Slide 4)",
    points: [
      "Customer Jobs: Find competitions · Build cross-functional teams · Build verifiable career portfolios.",
      "Pain Relievers: Mutual opt-in matching · Explicit weekly availability filters · Linked portfolio proof.",
      "Gain Creators: Faster matching cycle · Peer and mentor feedback · Corporate recruiter visibility."
    ]
  },
  {
    slideNumber: 5,
    title: "Revenue Streams & Business Model",
    subtitle: "Multi-sided monetization across B2B and B2C",
    badge: "Monetization (Slide 5)",
    points: [
      "Organizer Listings (฿20K - ฿30K / event): Targeted promotion to student competitor pool.",
      "Talent Scouting (฿50K - ฿100K): Direct recruitment pipeline to verified hackathon winners.",
      "Premium Subscription (฿99 / month): Early alerts, winning slide templates, Verified Talent Badge.",
      "Mentor Marketplace (20% Platform Commission): Commission on all student-mentor bookings."
    ]
  },
  {
    slideNumber: 6,
    title: "B2C Mentorship Pricing Structure",
    subtitle: "Tiered coaching packages directly implemented in prototype",
    badge: "B2C Pricing (Slide 6)",
    points: [
      "Deck Review (199 - 299 THB): Written feedback for up to 15 slides within 24h.",
      "Private Call (349 - 449 THB): 30-min 1-on-1 video call to refine business model & Q&A.",
      "Storytelling (599 - 799 THB): 45-60 min consultation on narrative flow & data visualization.",
      "Mock Pitch (699 - 899 THB): 60-min live simulation with judge-style cross-examination.",
      "Full Package (1,490 - 1,990 THB): All-inclusive package with 1 deck review + 2 mock pitches."
    ]
  }
];

export function PitchDeckModal() {
  const { showPitchDeckModal, setShowPitchDeckModal, selectedPitchSlide, setSelectedPitchSlide } = useDemo();
  const [currentIdx, setCurrentIdx] = useState(0);

  if (!showPitchDeckModal) return null;

  const currentSlide = SLIDES[currentIdx];

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : SLIDES.length - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev < SLIDES.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Presentation className="w-4 h-4 text-indigo-400" />
            <span className="font-bold text-sm text-white">Pitch Deck & Business Architecture</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Slide {currentSlide.slideNumber} of {SLIDES.length}
            </span>
          </div>

          <button
            onClick={() => setShowPitchDeckModal(false)}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Content Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded-lg">
              {currentSlide.badge}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {currentSlide.title}
          </h2>
          <p className="text-sm text-indigo-300 font-medium">{currentSlide.subtitle}</p>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Core Strategic Elements
            </span>
            <ul className="space-y-2.5">
              {currentSlide.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={handlePrev}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex gap-1.5">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition",
                  currentIdx === idx ? "bg-indigo-500 scale-125" : "bg-slate-700 hover:bg-slate-500"
                )}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition shadow-md shadow-indigo-600/30"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
