export type Category = 
  | "All"
  | "Case Competition"
  | "Hackathon"
  | "Design"
  | "Tech & AI"
  | "FinTech";

export interface Competition {
  id: string;
  title: string;
  organizer: string;
  organizerLogo?: string;
  category: Category;
  deadline: string;
  daysRemaining: number;
  datesText: string;
  location: string;
  isOnline: boolean;
  prizePool: string;
  teamSize: string;
  tags: string[];
  featured?: boolean;
  description: string;
  problemStatement: string;
  requirements: string[];
  timeline: {
    phase: string;
    date: string;
    description: string;
  }[];
  judgingCriteria: {
    criterion: string;
    weight: string;
  }[];
  lookingForRoles: string[];
}

export interface Candidate {
  id: string;
  name: string;
  yearAndUni: string;
  avatar: string;
  role: string;
  tagline: string;
  bio: string;
  lookingFor: string;
  skills: {
    name: string;
    level: "Expert" | "Advanced" | "Intermediate";
  }[];
  availableDays: ("M" | "T" | "W" | "TH" | "F" | "SA" | "SU")[];
  verifiedBadge?: string;
  achievements: string[];
  portfolioUrl?: string;
  portfolioPlatform?: string;
  matchedChallengeId?: string;
  matchedChallengeTitle?: string;
  compatibilityScore: number;
}

export type MentorshipPackageType = 
  | "deck_review"
  | "private_call"
  | "storytelling"
  | "mock_pitch"
  | "full_package";

export interface MentorshipPackage {
  id: MentorshipPackageType;
  name: string;
  priceThb: number;
  priceRangeText: string;
  durationText: string;
  deliverables: string;
  popular?: boolean;
}

export interface Mentor {
  id: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  startingPriceThb: number;
  bio: string;
  credentials: string[];
  specialties: string[];
  availablePackages: MentorshipPackage[];
  availableSlots: {
    date: string;
    times: string[];
  }[];
}

export interface ResourceItem {
  id: string;
  title: string;
  category: "Winning Decks" | "Case Guides" | "Past Solutions" | "Toolkits";
  description: string;
  pagesOrReadTime: string;
  rating: number;
  downloadsCount: number;
  tags: string[];
  format: "PDF" | "Figma" | "Notion" | "Slide Deck";
  keyTakeaways: string[];
  author: string;
}

export interface ChatMessage {
  id: string;
  senderId: "user" | "fah" | "system";
  text: string;
  timestamp: string;
  isUser: boolean;
}

export interface BookingRecord {
  id: string;
  mentorId: string;
  mentorName: string;
  mentorAvatar: string;
  packageName: string;
  priceThb: number;
  date: string;
  timeSlot: string;
  teamNotes: string;
  status: "Confirmed" | "Scheduled";
  createdAt: string;
}
