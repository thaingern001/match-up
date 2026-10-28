"use client";

import React, { useState } from "react";
import { useDemo } from "@/context/DemoContext";
import {
  FolderKanban,
  FileText,
  Download,
  Bookmark,
  Star,
  Sparkles,
  CheckCircle2,
  X,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { ResourceItem } from "@/types";
import { cn } from "@/lib/utils";

export function ResourceLibrary() {
  const {
    resources,
    selectedResource,
    setSelectedResource,
    savedResourceIds,
    toggleSaveResource,
  } = useDemo();

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [downloadSuccessModal, setDownloadSuccessModal] = useState<ResourceItem | null>(null);

  const categories = ["All", "Winning Decks", "Case Guides", "Past Solutions", "Toolkits"];

  const filteredResources = resources.filter((r) => {
    if (activeCategory === "All") return true;
    return r.category === activeCategory;
  });

  const handleDownload = (res: ResourceItem) => {
    setDownloadSuccessModal(res);
  };

  return (
    <div className="pb-24 px-4 pt-4 max-w-lg mx-auto space-y-4">
      {/* Title */}
      <div>
        <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          Competition Resource Toolkit
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Verified templates, winning case presentations, and frameworks from champion teams.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition border text-xs",
              activeCategory === cat
                ? "bg-indigo-600 text-white border-indigo-500 shadow-sm"
                : "bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resources Cards List (Wireframe Slide 12 & 13) */}
      <div className="space-y-3">
        {filteredResources.map((res) => {
          const isSaved = savedResourceIds.includes(res.id);

          return (
            <div
              key={res.id}
              className="rounded-2xl bg-slate-900 border border-slate-800 p-4 space-y-3 shadow-lg hover:border-slate-700 transition"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-md">
                      {res.format}
                    </span>
                    <span className="text-xs text-slate-400">{res.pagesOrReadTime}</span>
                  </div>
                  <h3 className="font-bold text-sm text-white leading-snug">{res.title}</h3>
                </div>

                <button
                  onClick={() => toggleSaveResource(res.id)}
                  className={cn(
                    "p-2 rounded-xl transition border shrink-0",
                    isSaved
                      ? "bg-rose-500/20 border-rose-500/40 text-rose-400"
                      : "bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white"
                  )}
                  title={isSaved ? "Saved" : "Save to My Toolkit"}
                >
                  <Bookmark className={cn("w-4 h-4", isSaved && "fill-rose-400")} />
                </button>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">{res.description}</p>

              {/* Author & Stats */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-slate-200">{res.rating}</span>
                  <span>({res.downloadsCount} downloads)</span>
                </div>
                <span className="text-slate-400 truncate max-w-[150px]">{res.author}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => setSelectedResource(res)}
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 text-center transition"
                >
                  View Preview & Outline
                </button>

                <button
                  onClick={() => handleDownload(res)}
                  className="py-2 px-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-md shadow-indigo-600/30 active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Resource Detail & Preview Modal */}
      {selectedResource && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-t-3xl sm:rounded-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-md">
                  {selectedResource.format}
                </span>
                <span className="text-xs text-slate-400">{selectedResource.category}</span>
              </div>
              <button
                onClick={() => setSelectedResource(null)}
                className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-4 text-xs text-slate-300">
              <div>
                <h3 className="text-base font-bold text-white mb-1">{selectedResource.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedResource.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Deliverables & Takeaways
                </h4>
                <ul className="space-y-2">
                  {selectedResource.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-800/40 text-xs">
                <span className="font-bold text-indigo-300 block mb-0.5">Author Verification</span>
                <p className="text-slate-300">Curated by {selectedResource.author} for student competitions.</p>
              </div>
            </div>

            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  toggleSaveResource(selectedResource.id);
                }}
                className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition"
              >
                {savedResourceIds.includes(selectedResource.id) ? "Saved in Toolkit" : "Save to My Toolkit"}
              </button>

              <button
                onClick={() => {
                  const res = selectedResource;
                  setSelectedResource(null);
                  handleDownload(res);
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/30 transition"
              >
                <Download className="w-4 h-4" />
                <span>Download Sample Files</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Simulated Download Notification Toast/Dialog */}
      {downloadSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-800 p-5 text-center shadow-2xl space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Download className="w-6 h-6 animate-bounce" />
            </div>
            <h4 className="font-bold text-white text-base">Resource Downloaded</h4>
            <p className="text-xs text-slate-300">
              <strong className="text-white">{downloadSuccessModal.title}</strong> has been saved to your team workspace downloads.
            </p>
            <button
              onClick={() => setDownloadSuccessModal(null)}
              className="w-full py-2 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
