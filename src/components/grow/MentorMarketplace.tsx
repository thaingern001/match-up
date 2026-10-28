"use client";

import React, { useState } from "react";
import { useDemo } from "@/context/DemoContext";
import {
  GraduationCap,
  Star,
  Sparkles,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { Mentor, MentorshipPackage } from "@/types";
import { MOCK_PACKAGES } from "@/data/mockData";
import { cn } from "@/lib/utils";

export function MentorMarketplace() {
  const {
    mentors,
    setSelectedMentorForBooking,
    setSelectedPackageForBooking,
    bookedSessions,
    setActiveTab,
  } = useDemo();

  const [activeSpecialty, setActiveSpecialty] = useState<string>("All");

  const specialties = ["All", "Strategy", "Pitching", "Data & AI", "UX/UI Design"];

  const filteredMentors = mentors.filter((m) => {
    if (activeSpecialty === "All") return true;
    return m.specialties.some((s) => s.toLowerCase().includes(activeSpecialty.toLowerCase())) ||
      m.title.toLowerCase().includes(activeSpecialty.toLowerCase());
  });

  const handleBook = (mentor: Mentor, pkg?: MentorshipPackage) => {
    setSelectedMentorForBooking(mentor);
    if (pkg) setSelectedPackageForBooking(pkg);
  };

  return (
    <div className="pb-24 px-4 pt-4 max-w-lg mx-auto space-y-4">
      {/* Title matching Wireframe Slide 12 */}
      <div>
        <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          From Team Formation to Team Performance.
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Learn and prepare for competition with champion alumni and industry mentors.
        </p>
      </div>

      {/* Booked Sessions Notification Banner (if any) */}
      {bookedSessions.length > 0 && (
        <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-emerald-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Upcoming Mentorship Session ({bookedSessions.length})</span>
            </span>
            <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
              Confirmed
            </span>
          </div>
          {bookedSessions.slice(0, 1).map((s) => (
            <div key={s.id} className="text-xs text-slate-300 flex items-center justify-between">
              <div>
                <span className="font-semibold text-white">{s.mentorName}</span> · {s.packageName}
                <div className="text-[11px] text-slate-400">
                  {s.date} at {s.timeSlot}
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-400 font-mono">฿{s.priceThb}</span>
            </div>
          ))}
        </div>
      )}

      {/* Specialty Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
        {specialties.map((spec) => (
          <button
            key={spec}
            onClick={() => setActiveSpecialty(spec)}
            className={cn(
              "px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition border text-xs",
              activeSpecialty === spec
                ? "bg-purple-600 text-white border-purple-500 shadow-sm shadow-purple-600/30"
                : "bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200"
            )}
          >
            {spec}
          </button>
        ))}
      </div>

      {/* Slide 6 B2C Marketplace Value Banner */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-indigo-950/60 border border-purple-800/40">
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="font-bold text-purple-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Tiered Mentorship Packages (Slide 6)</span>
          </span>
          <span className="text-[10px] text-slate-400">20% commission</span>
        </div>
        <p className="text-[11px] text-slate-300 leading-snug">
          From <strong>Deck Review (฿199-299)</strong> to <strong>Judge Mock Pitches (฿699-899)</strong>. Guaranteed written feedback or live cross-examination.
        </p>
      </div>

      {/* Mentors List */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Featured Mentors
          </span>
          <span className="text-xs text-indigo-400 font-medium">
            {filteredMentors.length} Verified Mentors
          </span>
        </div>

        {filteredMentors.map((mentor) => (
          <div
            key={mentor.id}
            className="rounded-2xl bg-slate-900 border border-slate-800 p-4 space-y-3 shadow-lg hover:border-slate-700 transition"
          >
            {/* Mentor Top Info */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className="w-12 h-12 rounded-2xl object-cover ring-2 ring-purple-500/40 shrink-0"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-base text-white">{mentor.name}</h3>
                    <div className="flex items-center gap-0.5 text-amber-400 font-bold text-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{mentor.rating}</span>
                      <span className="text-slate-500 text-[10px]">({mentor.reviewCount})</span>
                    </div>
                  </div>
                  <p className="text-xs text-purple-300 font-medium">{mentor.title}</p>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-[10px] text-slate-400 block font-medium">Starts from</span>
                <span className="text-sm font-extrabold text-emerald-400 font-mono">
                  ฿{mentor.startingPriceThb}
                </span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-xs text-slate-300 leading-relaxed">{mentor.bio}</p>

            {/* Key Credentials Badges */}
            <div className="space-y-1">
              {mentor.credentials.slice(0, 2).map((cred, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="truncate">{cred}</span>
                </div>
              ))}
            </div>

            {/* Specialties Chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {mentor.specialties.map((s) => (
                <span
                  key={s}
                  className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-300"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-500" />
                <span>Next slot: Tomorrow</span>
              </span>

              <button
                onClick={() => handleBook(mentor)}
                className="py-2 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 text-white font-bold text-xs shadow-md shadow-purple-600/30 flex items-center gap-1.5 active:scale-95 transition"
              >
                <span>Book Prep Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Switch to Toolkit Link */}
      <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-3">
        <div>
          <span className="text-xs font-bold text-white block">Looking for winning templates?</span>
          <span className="text-[11px] text-slate-400">
            Explore 10-slide case decks and past winning solutions.
          </span>
        </div>
        <button
          onClick={() => setActiveTab("resources")}
          className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-slate-700 transition"
        >
          View Toolkit
        </button>
      </div>
    </div>
  );
}
