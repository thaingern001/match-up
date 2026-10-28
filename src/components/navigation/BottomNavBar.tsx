"use client";

import React from "react";
import { useDemo, TabType } from "@/context/DemoContext";
import { Trophy, Sparkles, GraduationCap, FolderKanban, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: TabType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number | string;
}

export function BottomNavBar() {
  const { activeTab, setActiveTab, chatMessages, matchedCandidate } = useDemo();

  const navItems: NavItem[] = [
    { id: "hub", label: "Discover", icon: Trophy },
    { id: "match", label: "Match", icon: Sparkles, badge: matchedCandidate ? "1" : undefined },
    { id: "mentors", label: "Mentors", icon: GraduationCap },
    { id: "resources", label: "Toolkit", icon: FolderKanban },
    { id: "inbox", label: "Chat", icon: MessageSquare, badge: chatMessages.length > 1 ? chatMessages.length - 1 : undefined },
  ];

  return (
    <nav className="sticky bottom-0 z-30 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800/80 px-2 py-1.5 shadow-2xl">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 group",
                isActive ? "text-indigo-400 font-semibold" : "text-slate-400 hover:text-slate-200"
              )}
            >
              <div className="relative">
                <Icon
                  className={cn(
                    "w-5 h-5 transition-transform duration-200 group-active:scale-90",
                    isActive ? "scale-110 text-indigo-400" : "text-slate-400"
                  )}
                />

                {/* Badge indicator */}
                {item.badge && (
                  <span className="absolute -top-1.5 -right-2.5 flex items-center justify-center min-w-4 h-4 px-1 rounded-full bg-rose-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-slate-950 animate-pulse">
                    {item.badge}
                  </span>
                )}
              </div>

              <span className="text-[11px] mt-1 tracking-tight">{item.label}</span>

              {/* Active bar glow indicator */}
              {isActive && (
                <div className="absolute -bottom-1 w-6 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-rose-400 shadow-sm shadow-indigo-500" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
