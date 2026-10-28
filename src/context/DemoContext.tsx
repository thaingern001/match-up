"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  Competition,
  Candidate,
  Mentor,
  ResourceItem,
  ChatMessage,
  BookingRecord,
  MentorshipPackage,
} from "@/types";
import {
  MOCK_COMPETITIONS,
  MOCK_CANDIDATES,
  MOCK_MENTORS,
  MOCK_RESOURCES,
  INITIAL_CHAT_MESSAGES,
} from "@/data/mockData";
import confetti from "canvas-confetti";

export type TabType = "hub" | "match" | "mentors" | "resources" | "inbox";

interface DemoContextType {
  // Navigation
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;

  // Presentation & Device Controls
  viewMode: "mobile-frame" | "fullscreen";
  setViewMode: (mode: "mobile-frame" | "fullscreen") => void;
  showPitchDeckModal: boolean;
  setShowPitchDeckModal: (show: boolean) => void;
  selectedPitchSlide: number;
  setSelectedPitchSlide: (slide: number) => void;

  // Competitions
  competitions: Competition[];
  selectedCompetition: Competition | null;
  setSelectedCompetition: (comp: Competition | null) => void;
  bookmarkedIds: string[];
  toggleBookmark: (id: string) => void;
  filterByChallengeId: string | null;
  setFilterByChallengeId: (id: string | null) => void;
  findTeammatesForCompetition: (comp: Competition) => void;

  // Candidates / Swipe to Match
  candidates: Candidate[];
  currentCandidateIndex: number;
  currentCandidate: Candidate | null;
  swipedHistory: { candidateId: string; action: "pass" | "like" | "superlike" }[];
  matchedCandidate: Candidate | null;
  setMatchedCandidate: (candidate: Candidate | null) => void;
  swipeCurrentCandidate: (action: "pass" | "like" | "superlike") => void;
  rewindLastSwipe: () => void;
  resetDeck: () => void;
  triggerInstantMatch: () => void;

  // Simulated Chat
  chatMessages: ChatMessage[];
  sendUserMessage: (text: string) => void;
  isFahTyping: boolean;

  // Mentors & Booking
  mentors: Mentor[];
  selectedMentorForBooking: Mentor | null;
  setSelectedMentorForBooking: (mentor: Mentor | null) => void;
  selectedPackageForBooking: MentorshipPackage | null;
  setSelectedPackageForBooking: (pkg: MentorshipPackage | null) => void;
  bookedSessions: BookingRecord[];
  confirmBooking: (
    mentor: Mentor,
    pkg: MentorshipPackage,
    date: string,
    timeSlot: string,
    teamNotes: string
  ) => void;

  // Resources
  resources: ResourceItem[];
  selectedResource: ResourceItem | null;
  setSelectedResource: (res: ResourceItem | null) => void;
  savedResourceIds: string[];
  toggleSaveResource: (id: string) => void;

  // Global Demo Reset
  resetDemo: () => void;
  jumpToStep: (step: "discover" | "match" | "chat" | "mentors" | "toolkit") => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function DemoProvider({ children }: { children: React.ReactNode }) {
  // Navigation & Frame View
  const [activeTab, setActiveTab] = useState<TabType>("hub");
  const [viewMode, setViewMode] = useState<"mobile-frame" | "fullscreen">("mobile-frame");
  const [showPitchDeckModal, setShowPitchDeckModal] = useState<boolean>(false);
  const [selectedPitchSlide, setSelectedPitchSlide] = useState<number>(1);

  // Competitions
  const [competitions] = useState<Competition[]>(MOCK_COMPETITIONS);
  const [selectedCompetition, setSelectedCompetition] = useState<Competition | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(["scg-case-2024"]);
  const [filterByChallengeId, setFilterByChallengeId] = useState<string | null>(null);

  // Candidates & Swipes
  const [candidates] = useState<Candidate[]>(MOCK_CANDIDATES);
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState<number>(0);
  const [swipedHistory, setSwipedHistory] = useState<
    { candidateId: string; action: "pass" | "like" | "superlike" }[]
  >([]);
  const [matchedCandidate, setMatchedCandidate] = useState<Candidate | null>(null);

  // Chat State
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(INITIAL_CHAT_MESSAGES);
  const [isFahTyping, setIsFahTyping] = useState<boolean>(false);

  // Mentors & Booking
  const [mentors] = useState<Mentor[]>(MOCK_MENTORS);
  const [selectedMentorForBooking, setSelectedMentorForBooking] = useState<Mentor | null>(null);
  const [selectedPackageForBooking, setSelectedPackageForBooking] = useState<MentorshipPackage | null>(null);
  const [bookedSessions, setBookedSessions] = useState<BookingRecord[]>([]);

  // Resources
  const [resources] = useState<ResourceItem[]>(MOCK_RESOURCES);
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [savedResourceIds, setSavedResourceIds] = useState<string[]>(["res-1"]);

  const currentCandidate =
    currentCandidateIndex < candidates.length ? candidates[currentCandidateIndex] : null;

  // Bookmark Toggle
  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Find Teammates CTA flow from Competition Card/Modal
  const findTeammatesForCompetition = (comp: Competition) => {
    setSelectedCompetition(null);
    setFilterByChallengeId(comp.id);
    setActiveTab("match");
    // Ensure Fah (or matching candidate) is prioritized at top
    const fahIndex = candidates.findIndex((c) => c.id === "fah");
    if (fahIndex !== -1 && fahIndex >= currentCandidateIndex) {
      setCurrentCandidateIndex(fahIndex);
    }
  };

  // Trigger celebration confetti
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#6366F1", "#EC4899", "#8B5CF6", "#F59E0B", "#10B981"],
      });
    } catch {
      // Fallback safe if canvas-confetti is SSR
    }
  };

  // Swipe Action
  const swipeCurrentCandidate = (action: "pass" | "like" | "superlike") => {
    if (!currentCandidate) return;

    const candidate = currentCandidate;
    setSwipedHistory((prev) => [...prev, { candidateId: candidate.id, action }]);

    // Fah is the deterministic mutual match
    if (candidate.id === "fah" && (action === "like" || action === "superlike")) {
      setTimeout(() => {
        setMatchedCandidate(candidate);
        triggerConfetti();
      }, 250);
    }

    setCurrentCandidateIndex((prev) => prev + 1);
  };

  // Rewind Swipe
  const rewindLastSwipe = () => {
    if (currentCandidateIndex > 0) {
      setCurrentCandidateIndex((prev) => prev - 1);
      setSwipedHistory((prev) => prev.slice(0, -1));
    }
  };

  // Reset Deck
  const resetDeck = () => {
    setCurrentCandidateIndex(0);
    setSwipedHistory([]);
  };

  // Instant Match presenter shortcut
  const triggerInstantMatch = () => {
    const fah = candidates.find((c) => c.id === "fah") || candidates[0];
    setActiveTab("match");
    setMatchedCandidate(fah);
    triggerConfetti();
  };

  // Simulated Chat Messaging
  const sendUserMessage = (text: string) => {
    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      senderId: "user",
      text,
      timestamp: "Just now",
      isUser: true,
    };
    setChatMessages((prev) => [...prev, newMsg]);

    // Simulate Fah typing and responding
    setIsFahTyping(true);
    setTimeout(() => {
      setIsFahTyping(false);
      const fahReplies = [
        "Hey! Thanks so much for reaching out! I was actually hoping to find someone strong in financial modeling and strategy for SCG.",
        "That timing works nicely for me! Let's do a quick sync on Discord/Google Meet to divide up the case research?",
        "Awesome! I've already started sketching some Figma wireframes for the circular packaging product concept.",
      ];
      // Pick next response based on count
      const replyText = fahReplies[Math.min(chatMessages.length % fahReplies.length, fahReplies.length - 1)];

      const fahMsg: ChatMessage = {
        id: `msg-fah-${Date.now()}`,
        senderId: "fah",
        text: replyText,
        timestamp: "Just now",
        isUser: false,
      };
      setChatMessages((prev) => [...prev, fahMsg]);
    }, 1200);
  };

  // Mentorship Booking Confirmation
  const confirmBooking = (
    mentor: Mentor,
    pkg: MentorshipPackage,
    date: string,
    timeSlot: string,
    teamNotes: string
  ) => {
    const newBooking: BookingRecord = {
      id: `bk-${Date.now()}`,
      mentorId: mentor.id,
      mentorName: mentor.name,
      mentorAvatar: mentor.avatar,
      packageName: pkg.name,
      priceThb: pkg.priceThb,
      date,
      timeSlot,
      teamNotes,
      status: "Confirmed",
      createdAt: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    };
    setBookedSessions((prev) => [newBooking, ...prev]);
    setSelectedMentorForBooking(null);
    setSelectedPackageForBooking(null);
    triggerConfetti();
  };

  // Save Resource Toggle
  const toggleSaveResource = (id: string) => {
    setSavedResourceIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Reset entire demo state to pristine
  const resetDemo = () => {
    setActiveTab("hub");
    setSelectedCompetition(null);
    setBookmarkedIds(["scg-case-2024"]);
    setFilterByChallengeId(null);
    setCurrentCandidateIndex(0);
    setSwipedHistory([]);
    setMatchedCandidate(null);
    setChatMessages(INITIAL_CHAT_MESSAGES);
    setIsFahTyping(false);
    setSelectedMentorForBooking(null);
    setSelectedPackageForBooking(null);
    setBookedSessions([]);
    setSelectedResource(null);
    setSavedResourceIds(["res-1"]);
  };

  // 1-Click Pitch Steps
  const jumpToStep = (step: "discover" | "match" | "chat" | "mentors" | "toolkit") => {
    switch (step) {
      case "discover":
        setActiveTab("hub");
        setSelectedCompetition(null);
        setFilterByChallengeId(null);
        break;
      case "match":
        setActiveTab("match");
        setFilterByChallengeId("scg-case-2024");
        setCurrentCandidateIndex(0);
        break;
      case "chat":
        setActiveTab("inbox");
        break;
      case "mentors":
        setActiveTab("mentors");
        break;
      case "toolkit":
        setActiveTab("resources");
        break;
    }
  };

  return (
    <DemoContext.Provider
      value={{
        activeTab,
        setActiveTab,
        viewMode,
        setViewMode,
        showPitchDeckModal,
        setShowPitchDeckModal,
        selectedPitchSlide,
        setSelectedPitchSlide,
        competitions,
        selectedCompetition,
        setSelectedCompetition,
        bookmarkedIds,
        toggleBookmark,
        filterByChallengeId,
        setFilterByChallengeId,
        findTeammatesForCompetition,
        candidates,
        currentCandidateIndex,
        currentCandidate,
        swipedHistory,
        matchedCandidate,
        setMatchedCandidate,
        swipeCurrentCandidate,
        rewindLastSwipe,
        resetDeck,
        triggerInstantMatch,
        chatMessages,
        sendUserMessage,
        isFahTyping,
        mentors,
        selectedMentorForBooking,
        setSelectedMentorForBooking,
        selectedPackageForBooking,
        setSelectedPackageForBooking,
        bookedSessions,
        confirmBooking,
        resources,
        selectedResource,
        setSelectedResource,
        savedResourceIds,
        toggleSaveResource,
        resetDemo,
        jumpToStep,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error("useDemo must be used within a DemoProvider");
  }
  return context;
}
