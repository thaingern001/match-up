"use client";

import React, { useState } from "react";
import { useDemo } from "@/context/DemoContext";
import {
  X,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  CreditCard,
  Check,
} from "lucide-react";
import { Mentor, MentorshipPackage } from "@/types";
import { MOCK_PACKAGES } from "@/data/mockData";
import { cn } from "@/lib/utils";

export function BookingModal() {
  const {
    selectedMentorForBooking,
    setSelectedMentorForBooking,
    selectedPackageForBooking,
    setSelectedPackageForBooking,
    confirmBooking,
  } = useDemo();

  const [selectedPackage, setSelectedPackage] = useState<MentorshipPackage>(
    selectedPackageForBooking || MOCK_PACKAGES[1] // default to private call
  );
  const [selectedDate, setSelectedDate] = useState<string>("Tomorrow, May 22");
  const [selectedSlot, setSelectedSlot] = useState<string>("18:00 - 18:45");
  const [teamNotes, setTeamNotes] = useState<string>(
    "SCG Case Challenge — Reviewing 10-slide circular economy deck & financial assumptions"
  );
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  if (!selectedMentorForBooking) return null;

  const mentor = selectedMentorForBooking;
  const platformFee = Math.round(selectedPackage.priceThb * 0.2); // 20% commission from Slide 5 & 6

  const handleCompleteBooking = () => {
    confirmBooking(mentor, selectedPackage, selectedDate, selectedSlot, teamNotes);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setSelectedMentorForBooking(null);
    setSelectedPackageForBooking(null);
    setIsSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-t-3xl sm:rounded-2xl max-h-[92vh] sm:max-h-[88vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-purple-950/80 via-slate-900 to-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={mentor.avatar}
              alt={mentor.name}
              className="w-11 h-11 rounded-2xl object-cover ring-2 ring-purple-500/50"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm text-white">Book {mentor.name}</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ★ {mentor.rating}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">{mentor.title}</p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs text-slate-300">
          {isSuccess ? (
            /* Success Confirmation Screen */
            <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Session Confirmed! 🎉</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Your preparation booking with <strong className="text-white">{mentor.name}</strong> is locked in.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-2 max-w-sm mx-auto">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Package:</span>
                  <span className="font-semibold text-white">{selectedPackage.name}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Schedule:</span>
                  <span className="font-semibold text-indigo-300">
                    {selectedDate} · {selectedSlot}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Amount Paid:</span>
                  <span className="font-bold text-emerald-400">฿{selectedPackage.priceThb} THB</span>
                </div>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                  Calendar invite and Google Meet link sent to your team members.
                </div>
              </div>

              <button
                onClick={handleClose}
                className="py-2.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition shadow-lg shadow-indigo-600/30"
              >
                Back to Mentors
              </button>
            </div>
          ) : (
            <>
              {/* Step 1: Select Tiered Package (from Slide 6 B2C Model) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    1. Select Service Package
                  </span>
                  <span className="text-[10px] text-indigo-400 font-medium">
                    20% platform commission model
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {mentor.availablePackages.map((pkg) => {
                    const isSelected = selectedPackage.id === pkg.id;
                    return (
                      <div
                        key={pkg.id}
                        onClick={() => setSelectedPackage(pkg)}
                        className={cn(
                          "p-3 rounded-2xl border cursor-pointer transition-all flex items-start justify-between gap-3",
                          isSelected
                            ? "bg-indigo-950/60 border-indigo-500 ring-1 ring-indigo-500/40 shadow-md"
                            : "bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40"
                        )}
                      >
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-white text-xs">{pkg.name}</span>
                            {pkg.popular && (
                              <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                Most Popular
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400">{pkg.deliverables}</p>
                          <span className="text-[10px] text-indigo-300 font-medium block pt-0.5">
                            ⏱ {pkg.durationText}
                          </span>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-sm font-extrabold text-emerald-400 block font-mono">
                            ฿{pkg.priceThb}
                          </span>
                          <span className="text-[10px] text-slate-500">{pkg.priceRangeText}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Choose Date & Time */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                  2. Choose Date & Time Slot
                </span>

                <div className="space-y-2">
                  {/* Date pills */}
                  <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                    {mentor.availableSlots.map((slotGroup) => {
                      const isDateSelected = selectedDate === slotGroup.date;
                      return (
                        <button
                          key={slotGroup.date}
                          onClick={() => {
                            setSelectedDate(slotGroup.date);
                            setSelectedSlot(slotGroup.times[0]);
                          }}
                          className={cn(
                            "px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition border",
                            isDateSelected
                              ? "bg-purple-600 border-purple-500 text-white"
                              : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                          )}
                        >
                          {slotGroup.date}
                        </button>
                      );
                    })}
                  </div>

                  {/* Available Time Slots */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {mentor.availableSlots
                      .find((g) => g.date === selectedDate)
                      ?.times.map((time) => {
                        const isSlotSelected = selectedSlot === time;
                        return (
                          <button
                            key={time}
                            onClick={() => setSelectedSlot(time)}
                            className={cn(
                              "p-2 rounded-xl text-center text-xs font-medium transition border flex items-center justify-center gap-1.5",
                              isSlotSelected
                                ? "bg-indigo-600 border-indigo-500 text-white shadow-sm"
                                : "bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700"
                            )}
                          >
                            <Clock className="w-3.5 h-3.5 opacity-70" />
                            <span>{time}</span>
                          </button>
                        );
                      })}
                  </div>
                </div>
              </div>

              {/* Step 3: Team Context / Notes */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                  3. Case or Pitch Context
                </span>
                <textarea
                  value={teamNotes}
                  onChange={(e) => setTeamNotes(e.target.value)}
                  rows={2}
                  placeholder="e.g. Preparing for SCG Case Challenge, need feedback on unit economics..."
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition"
                />
              </div>

              {/* Price Breakdown (Showcasing MatchUp 20% platform commission from Slide 5 & 6) */}
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5 text-[11px]">
                <div className="flex justify-between text-slate-400">
                  <span>Mentor Rate:</span>
                  <span>฿{selectedPackage.priceThb - platformFee} THB</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>MatchUp Guarantee & Booking Fee (20%):</span>
                  <span className="text-indigo-400">฿{platformFee} THB</span>
                </div>
                <div className="pt-1.5 border-t border-slate-800 flex justify-between font-bold text-xs text-white">
                  <span>Total Simulated Payment:</span>
                  <span className="text-emerald-400 font-mono text-sm">
                    ฿{selectedPackage.priceThb} THB
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer CTA */}
        {!isSuccess && (
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
            <div>
              <span className="text-[10px] text-slate-400 block">Total Due</span>
              <span className="text-base font-extrabold text-emerald-400 font-mono">
                ฿{selectedPackage.priceThb}
              </span>
            </div>

            <button
              onClick={handleCompleteBooking}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition flex items-center justify-center gap-1.5"
            >
              <CreditCard className="w-4 h-4" />
              <span>Confirm Simulated Booking</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
