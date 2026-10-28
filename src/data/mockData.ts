import { Competition, Candidate, Mentor, ResourceItem, ChatMessage, MentorshipPackage } from "@/types";

export const MOCK_PACKAGES: MentorshipPackage[] = [
  {
    id: "deck_review",
    name: "Deck Review",
    priceThb: 249,
    priceRangeText: "199 - 299 THB",
    durationText: "Asynchronous feedback",
    deliverables: "Written line-by-line feedback & slide markup for up to 15 slides within 24h.",
  },
  {
    id: "private_call",
    name: "Private Strategy Call",
    priceThb: 399,
    priceRangeText: "349 - 449 THB",
    durationText: "30-minute video call",
    deliverables: "1-on-1 session to refine your core business model, unit economics, and Q&A strategy.",
  },
  {
    id: "storytelling",
    name: "Storytelling & Pitch Craft",
    priceThb: 699,
    priceRangeText: "599 - 799 THB",
    durationText: "45 - 60 minute consultation",
    deliverables: "Deep-dive consultation focusing on narrative flow, hook structure, and data visualization.",
  },
  {
    id: "mock_pitch",
    name: "Judge-Style Mock Pitch",
    priceThb: 799,
    priceRangeText: "699 - 899 THB",
    durationText: "60-minute live session",
    deliverables: "5-min pitch presentation followed by 50 mins of aggressive judge-style cross-examination.",
    popular: true,
  },
  {
    id: "full_package",
    name: "All-in Champion Package",
    priceThb: 1690,
    priceRangeText: "1,490 - 1,990 THB",
    durationText: "Multi-session bundle",
    deliverables: "Includes 1 full deck review + 2 progressive mock pitches before finals.",
  },
];

export const MOCK_COMPETITIONS: Competition[] = [
  {
    id: "scg-case-2024",
    title: "SCG Case Challenge 2024",
    organizer: "SCG Chemicals & Innovation",
    category: "Case Competition",
    deadline: "2024-05-31",
    daysRemaining: 14,
    datesText: "Deadline: 31 May 2024",
    location: "Online / Bangkok Final",
    isOnline: true,
    prizePool: "฿200,000",
    teamSize: "4 Members",
    tags: ["Case Competition", "Sustainability", "ESG", "Top Tier"],
    featured: true,
    description: "Tackle Thailand's largest circular economy and sustainable packaging case. Compete with top university talent across the ASEAN region for cash prizes and fast-tracked management trainee interviews.",
    problemStatement: "How can SCG accelerate decarbonization in consumer packaging while improving margin resilience against virgin polymer volatility over a 3-year investment horizon?",
    requirements: [
      "Open to enrolled undergraduate & graduate students in Thailand/ASEAN",
      "Strict team composition: Exactly 4 members",
      "Deliverable: 10-slide executive pitch deck (.pdf) + financial appendix"
    ],
    timeline: [
      { phase: "Registration & Case Release", date: "May 10 - May 24", description: "Case prompt downloads open" },
      { phase: "First Round Submission", date: "May 31, 23:59 ICT", description: "Executive slide deck upload" },
      { phase: "Semi-Final Pitches", date: "June 15, 2024", description: "Top 12 teams live virtual pitch" },
      { phase: "Grand Finals at SCG HQ", date: "June 28, 2024", description: "In-person presentations to C-suite" }
    ],
    judgingCriteria: [
      { criterion: "Strategic Rigor & Financial Feasibility", weight: "35%" },
      { criterion: "Innovation & Sustainability Impact", weight: "25%" },
      { criterion: "Implementation Roadmap & Risk Mitigation", weight: "20%" },
      { criterion: "Slide Clarity & Storytelling", weight: "20%" }
    ],
    lookingForRoles: ["UI/UX Designer", "Financial Modeler", "Strategy Lead", "Presenter"]
  },
  {
    id: "tech-for-good-2024",
    title: "Tech for Good Hackathon 2024",
    organizer: "National Tech Alliance",
    category: "Hackathon",
    deadline: "2024-05-27",
    daysRemaining: 10,
    datesText: "25 - 27 May 2024",
    location: "Bangkok, Thailand",
    isOnline: false,
    prizePool: "฿150,000",
    teamSize: "3 - 5 Members",
    tags: ["Hackathon", "Social Impact", "AI / Mobile", "In-Person"],
    featured: true,
    description: "A 48-hour intensive building sprint addressing accessibility, civic tech, and educational equity in Southeast Asia. Free food, 24/7 venue access, and technical mentors.",
    problemStatement: "Build working software prototypes that empower under-resourced public school teachers or bridge healthcare navigation for elderly citizens.",
    requirements: [
      "Teams of 3 to 5 members",
      "Functional working prototype required on demo day",
      "Open-source repository with commit history during hackathon"
    ],
    timeline: [
      { phase: "Team Formation & Warmup", date: "May 24, 2024", description: "Ideation & sponsor API keys" },
      { phase: "Hacking Sprint (48 Hours)", date: "May 25-26, 2024", description: "Continuous building & mentor checkpoints" },
      { phase: "Demo Day & Judging", date: "May 27, 2024", description: "3-minute live pitch + 2-minute Q&A" }
    ],
    judgingCriteria: [
      { criterion: "Technical Execution & Architecture", weight: "35%" },
      { criterion: "Social Impact & Community Relevance", weight: "30%" },
      { criterion: "User Experience & Accessibility", weight: "20%" },
      { criterion: "Pitch & Demonstration", weight: "15%" }
    ],
    lookingForRoles: ["Full-Stack Dev", "Mobile Engineer", "UI/UX Designer", "Product Lead"]
  },
  {
    id: "creative-biz-hack-2024",
    title: "Creative Business Hack 2024",
    organizer: "Creative Economy Agency (CEA)",
    category: "Hackathon",
    deadline: "2024-06-10",
    daysRemaining: 24,
    datesText: "Deadline: 10 June 2024",
    location: "Bangkok, Thailand",
    isOnline: false,
    prizePool: "฿120,000",
    teamSize: "3 - 4 Members",
    tags: ["Innovation", "Creative Economy", "Design Thinking"],
    featured: false,
    description: "Reinvent cultural tourism and creative soft power products through tech-enabled consumer experiences and sustainable business models.",
    problemStatement: "Design a commercial product, platform, or experience that doubles tourist engagement in secondary provincial creative districts.",
    requirements: [
      "Interdisciplinary teams encouraged (Design + Business + Tech)",
      "High-fidelity prototype and 3-minute video pitch"
    ],
    timeline: [
      { phase: "Online Submission", date: "June 10, 2024", description: "Concept deck & video" },
      { phase: "Top 20 Bootcamp", date: "June 22, 2024", description: "Design sprint workshop" },
      { phase: "Final Pitch", date: "July 05, 2024", description: "Public exhibition & awards" }
    ],
    judgingCriteria: [
      { criterion: "Creativity & Originality", weight: "30%" },
      { criterion: "Business Viability & Scalability", weight: "30%" },
      { criterion: "Cultural Sensitivity & Community Benefit", weight: "25%" },
      { criterion: "Prototype Quality", weight: "15%" }
    ],
    lookingForRoles: ["Brand Designer", "Marketing Strategist", "Creative Technologist"]
  },
  {
    id: "fintech-ai-cup-2024",
    title: "FinTech AI Innovation Cup 2024",
    organizer: "ASEAN Banking Federation",
    category: "FinTech",
    deadline: "2024-07-15",
    daysRemaining: 48,
    datesText: "Deadline: 15 July 2024",
    location: "Online / Virtual",
    isOnline: true,
    prizePool: "฿300,000",
    teamSize: "2 - 4 Members",
    tags: ["FinTech", "GenAI", "Financial Inclusion", "Regional"],
    featured: false,
    description: "Leverage Generative AI and open banking APIs to create micro-wealth, intelligent budgeting, or SME fraud-detection tools.",
    problemStatement: "How might autonomous AI agents help unbanked gig-economy workers qualify for fair credit and automate risk-managed savings?",
    requirements: [
      "Must utilize simulated financial API sandbox",
      "Teams of 2 to 4 members"
    ],
    timeline: [
      { phase: "Sandbox Access", date: "June 01, 2024", description: "API documentation released" },
      { phase: "Code & Architecture Submission", date: "July 15, 2024", description: "GitHub repository + benchmark tests" },
      { phase: "Virtual Finals", date: "July 28, 2024", description: "Live investor demo day" }
    ],
    judgingCriteria: [
      { criterion: "AI Model Accuracy & Architecture", weight: "40%" },
      { criterion: "Financial Viability & Regulatory Fit", weight: "30%" },
      { criterion: "User Security & Trust", weight: "20%" },
      { criterion: "User Experience", weight: "10%" }
    ],
    lookingForRoles: ["ML Engineer", "Quantitative Analyst", "Full-Stack Dev"]
  },
  {
    id: "chula-design-sprint-2024",
    title: "Chula Design Sprint 2024",
    organizer: "Chulalongkorn University Design Guild",
    category: "Design",
    deadline: "2024-06-20",
    daysRemaining: 34,
    datesText: "Deadline: 20 June 2024",
    location: "Hybrid / Bangkok",
    isOnline: true,
    prizePool: "฿80,000",
    teamSize: "2 - 3 Members",
    tags: ["UI/UX Design", "Design Sprint", "Figma", "Design System"],
    featured: false,
    description: "A fast-paced 5-day design challenge focused on next-generation digital interfaces for university learning and mental wellness.",
    problemStatement: "Design a mobile interface that reduces student cognitive overload during exam season with personalized spatial study sessions.",
    requirements: [
      "Interactive clickable Figma prototype",
      "Case study detailing user research, wireframes, and design system"
    ],
    timeline: [
      { phase: "Brief Drop", date: "June 15, 2024", description: "Design prompt revealed" },
      { phase: "Submission", date: "June 20, 2024", description: "Figma link + design rationale" },
      { phase: "Showcase & Awards", date: "June 26, 2024", description: "Industry jury review" }
    ],
    judgingCriteria: [
      { criterion: "Interaction Design & Ergonomics", weight: "40%" },
      { criterion: "Design System Consistency", weight: "30%" },
      { criterion: "Empathy & User Research Validation", weight: "30%" }
    ],
    lookingForRoles: ["UI/UX Designer", "User Researcher", "Design Lead"]
  }
];

export const MOCK_CANDIDATES: Candidate[] = [
  {
    id: "fah",
    name: "Fah",
    yearAndUni: "3rd Year · Chulalongkorn University",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    role: "UX/UI Designer",
    tagline: "Obsessed with clean design systems & data-rich case competition decks",
    bio: "Product design student passionate about turning complex business frameworks into sleek, high-converting slides. Won 1st place at Chula Design Sprint 2023. Currently building my portfolio for management consulting and high-growth tech internships.",
    lookingFor: "SCG Case Challenge: Looking for business strategy, financial modeling, and presentation skills.",
    skills: [
      { name: "UI/UX", level: "Expert" },
      { name: "Figma", level: "Expert" },
      { name: "User Research", level: "Advanced" },
      { name: "Slide Aesthetics", level: "Expert" },
      { name: "Design Systems", level: "Advanced" }
    ],
    availableDays: ["M", "W", "F"],
    verifiedBadge: "🥇 Top 3 Google Solution Challenge '23 · Verified CU Student",
    achievements: [
      "1st Place — Chula Design Sprint 2023",
      "Top 3 — Google Solution Challenge Thailand 2023",
      "Designed winning deck for SCG ESG Ideathon (Regional)"
    ],
    portfolioUrl: "behance.net/fah-design",
    portfolioPlatform: "Behance & Figma Community",
    matchedChallengeId: "scg-case-2024",
    matchedChallengeTitle: "SCG Case Challenge 2024",
    compatibilityScore: 98
  },
  {
    id: "alex",
    name: "Alex",
    yearAndUni: "2nd Year · KMUTT",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80",
    role: "Full-Stack Dev · AI Prototyper",
    tagline: "Shipping full-stack MVPs in 48 hours with FastAPI & Next.js",
    bio: "Computer science sophomore with 4 hackathon trophies. Specializing in rapid API integrations, LLM workflows, and responsive frontend implementation.",
    lookingFor: "Tech for Good Hackathon: Looking for UI/UX designer and business strategy lead.",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "Next.js", level: "Advanced" },
      { name: "Prototyping", level: "Expert" },
      { name: "FastAPI", level: "Advanced" },
      { name: "Weekend Availability", level: "Expert" }
    ],
    availableDays: ["T", "TH", "SA", "SU"],
    verifiedBadge: "🚀 4x Hackathon Finalist · Verified KMUTT Student",
    achievements: [
      "Winner — BKK Hack 2023 (Civic Tech Track)",
      "Top 5 — LINE Thailand Developer Hackathon",
      "Built open-source civic transportation alert bot"
    ],
    portfolioUrl: "github.com/alex-dev",
    portfolioPlatform: "GitHub & Devpost",
    matchedChallengeId: "tech-for-good-2024",
    matchedChallengeTitle: "Tech for Good Hackathon 2024",
    compatibilityScore: 94
  },
  {
    id: "pim",
    name: "Pim",
    yearAndUni: "4th Year · Thammasat (BBA)",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80",
    role: "Financial Analyst & Strategy",
    tagline: "Ex-Big 4 Advisory Intern · DCF modeling & unit economics specialist",
    bio: "Senior finance major who loves crunching unit economics and building defensible market entry models. Looking to round out my case competition portfolio before graduating.",
    lookingFor: "SCG Case Challenge / FinTech: Looking for technical architecture and design leads.",
    skills: [
      { name: "Financial Modeling", level: "Expert" },
      { name: "Market Sizing", level: "Expert" },
      { name: "GTM Strategy", level: "Advanced" },
      { name: "DCF / Valuation", level: "Advanced" }
    ],
    availableDays: ["M", "T", "TH"],
    verifiedBadge: "🏆 Champion Thammasat National Case '23 · Verified TU Student",
    achievements: [
      "1st Place — Thammasat Undergraduate Case Competition",
      "Passed CFA Level 1 Candidate",
      "Completed 6-month consulting internship at Big 4"
    ],
    portfolioUrl: "linkedin.com/in/pim-finance",
    portfolioPlatform: "LinkedIn & Case Portfolio",
    matchedChallengeId: "scg-case-2024",
    matchedChallengeTitle: "SCG Case Challenge 2024",
    compatibilityScore: 91
  },
  {
    id: "beam",
    name: "Beam",
    yearAndUni: "3rd Year · Mahidol University",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    role: "Pitch Lead & Storyteller",
    tagline: "National debate champion · Turning technical data into memorable narratives",
    bio: "Communications and business double minor. Focused on hooking judge attention in the first 30 seconds and fielding tough executive Q&A rounds without breaking sweat.",
    lookingFor: "Creative Business Hack: Looking for developers and product designers.",
    skills: [
      { name: "Public Speaking", level: "Expert" },
      { name: "Storytelling", level: "Expert" },
      { name: "Slide Polish", level: "Advanced" },
      { name: "Q&A Handling", level: "Expert" }
    ],
    availableDays: ["M", "W", "F", "SA"],
    verifiedBadge: "🎙️ Best Speaker ASEAN Youth Debate · Verified Mahidol Student",
    achievements: [
      "Best Speaker Award — Thailand Parliamentary Debate",
      "Coached 2 winning startup pitch teams",
      "Bilingual presentation in Thai & English"
    ],
    portfolioUrl: "youtube.com/@beam-pitches",
    portfolioPlatform: "Pitch Video Showcase",
    matchedChallengeId: "creative-biz-hack-2024",
    matchedChallengeTitle: "Creative Business Hack 2024",
    compatibilityScore: 89
  },
  {
    id: "ken",
    name: "Ken",
    yearAndUni: "Masters · Chulalongkorn Engineering",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
    role: "Machine Learning Engineer",
    tagline: "Kaggle Competitor · LLM agents and predictive modeling",
    bio: "Computer engineering grad student researching retrieval-augmented generation and financial time-series predictions. Ready to take on serious technical hackathons.",
    lookingFor: "FinTech AI Innovation Cup: Seeking business strategy and UI/UX teammates.",
    skills: [
      { name: "PyTorch", level: "Expert" },
      { name: "LLM Agents", level: "Expert" },
      { name: "Data Science", level: "Advanced" },
      { name: "MLOps", level: "Intermediate" }
    ],
    availableDays: ["SA", "SU", "F"],
    verifiedBadge: "📊 Kaggle Grandmaster · Verified Masters Student",
    achievements: [
      "Top 1% — Global Kaggle NLP Challenge",
      "Co-authored paper at NeurIPS Student Workshop",
      "Built open-source Thai language tokenizer"
    ],
    portfolioUrl: "github.com/ken-ml",
    portfolioPlatform: "GitHub & Kaggle",
    matchedChallengeId: "fintech-ai-cup-2024",
    matchedChallengeTitle: "FinTech AI Innovation Cup 2024",
    compatibilityScore: 88
  }
];

export const MOCK_MENTORS: Mentor[] = [
  {
    id: "mint",
    name: "P'Mint",
    title: "Strategy & Management Consulting",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewCount: 48,
    startingPriceThb: 449,
    bio: "Ex-McKinsey summer consultant and Chulalongkorn BBA first-class honors. Mentored 14 podium-winning teams across HSBC, SCG, and L'Oreal Brandstorm case challenges.",
    credentials: [
      "Ex-McKinsey & Company Summer Business Analyst",
      "1st Place Global Winner — HSBC Business Case Competition",
      "Guest Judge for 3 National University Case Cups"
    ],
    specialties: ["Case Frameworks", "Issue Trees", "Financial Soundness", "Q&A Defense"],
    availablePackages: MOCK_PACKAGES,
    availableSlots: [
      { date: "Tomorrow, May 22", times: ["18:00 - 18:45", "19:00 - 19:45", "20:30 - 21:15"] },
      { date: "Thursday, May 23", times: ["17:30 - 18:15", "19:00 - 19:45"] },
      { date: "Saturday, May 25", times: ["10:00 - 10:45", "14:00 - 14:45", "16:00 - 16:45"] }
    ]
  },
  {
    id: "golf",
    name: "P'Golf",
    title: "Pitching & High-Stakes Storytelling",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviewCount: 62,
    startingPriceThb: 599,
    bio: "National Pitch Champion 2023 and startup founder backed by 500 Global. Has helped over 80 students turn disjointed bullet points into compelling, judge-pleasing narrative arcs.",
    credentials: [
      "Winner — Techstars Startup Pitch Weekend Thailand",
      "Raised ฿15M seed funding for student tech venture",
      "Delivered 120+ keynote presentations"
    ],
    specialties: ["Executive Presence", "Hook & Story Arc", "Slide Redesign", "Judge Psychology"],
    availablePackages: MOCK_PACKAGES,
    availableSlots: [
      { date: "Tomorrow, May 22", times: ["19:00 - 20:00", "20:30 - 21:30"] },
      { date: "Friday, May 24", times: ["18:00 - 19:00", "20:00 - 21:00"] },
      { date: "Sunday, May 26", times: ["13:00 - 14:00", "15:30 - 16:30"] }
    ]
  },
  {
    id: "jane",
    name: "P'Jane",
    title: "Data & AI Architecture",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewCount: 35,
    startingPriceThb: 349,
    bio: "Senior ML Engineer at Agoda, KMUTT Computer Science Alum. Expert in technical architecture reviews, realistic feasibility scoring, and live demo rehearsal for tech hackathons.",
    credentials: [
      "Senior Machine Learning Engineer @ Agoda",
      "3x Hackathon Grand Prize Winner (FinTech & AI)",
      "Technical Advisory Mentor at Chula Tech Incubation"
    ],
    specialties: ["System Architecture", "Feasibility Audits", "Demo Day Checklist", "API Strategy"],
    availablePackages: MOCK_PACKAGES,
    availableSlots: [
      { date: "Wednesday, May 22", times: ["20:00 - 20:30", "21:00 - 21:30"] },
      { date: "Thursday, May 23", times: ["19:30 - 20:00", "20:30 - 21:00"] },
      { date: "Saturday, May 25", times: ["11:00 - 11:30", "13:30 - 14:00"] }
    ]
  },
  {
    id: "tee",
    name: "P'Tee",
    title: "Product & UI/UX Design",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80",
    rating: 5.0,
    reviewCount: 41,
    startingPriceThb: 499,
    bio: "Lead Product Designer at LINE MAN Wongnai. Mentors teams on rapid Figma design systems, usability heuristic validation, and making pitch decks look institutional-grade.",
    credentials: [
      "Lead Product Designer @ LINE MAN Wongnai",
      "Ex-Agoda UX Design Specialist",
      "Speaker at UX Thailand Conference 2023"
    ],
    specialties: ["Figma Systems", "Slide Visual Hierarchy", "User Journey Flow", "Prototype Polish"],
    availablePackages: MOCK_PACKAGES,
    availableSlots: [
      { date: "Thursday, May 23", times: ["18:30 - 19:15", "20:00 - 20:45"] },
      { date: "Friday, May 24", times: ["17:00 - 17:45", "18:30 - 19:15"] }
    ]
  }
];

export const MOCK_RESOURCES: ResourceItem[] = [
  {
    id: "res-1",
    title: "Winning Deck Template — McKinsey 10-Slide Case Format",
    category: "Winning Decks",
    description: "Battle-tested slide templates used by champion teams in national consulting and business case competitions. Includes problem definition, MECE issue tree, financial modeling output, and risk mitigation matrix.",
    pagesOrReadTime: "12 Slides (.pptx & Figma)",
    rating: 4.9,
    downloadsCount: 1420,
    tags: ["Slide Deck", "Strategy", "Consulting", "Must Have"],
    format: "Slide Deck",
    keyTakeaways: [
      "Executive summary slide with structured Minto Pyramid logic",
      "Pre-styled financial waterfall and sensitivity tables",
      "Ready-to-use competitive positioning radar charts",
      "Strict color palette conforming to top consulting guidelines"
    ],
    author: "MatchUp Strategy Guild & P'Mint"
  },
  {
    id: "res-2",
    title: "Case Interview & Competition Frameworks Masterguide",
    category: "Case Guides",
    description: "A compact field guide breaking down the 7 most frequent case competition types: Market Entry, Profitability Diagnosis, Digital Transformation, M&A Synergy, and ESG Circularity.",
    pagesOrReadTime: "28 Pages Guide",
    rating: 4.8,
    downloadsCount: 980,
    tags: ["Frameworks", "Market Sizing", "Financials"],
    format: "PDF",
    keyTakeaways: [
      "Step-by-step market sizing cheat sheet for Thailand & Southeast Asia",
      "Unit economics formulas (CAC, LTV, Payback, Margin contribution)",
      "How to avoid cookie-cutter frameworks and customize for local judges",
      "Real sample questions asked by corporate judges during finals"
    ],
    author: "P'Mint (ex-McKinsey Summer Analyst)"
  },
  {
    id: "res-3",
    title: "Past Winning Case: SCG Green Innovation 1st Place Solution",
    category: "Past Solutions",
    description: "Full confidential case breakdown of the 2023 1st place championship submission. Includes judge scores, original slide deck, financial appendix, and the verbatim transcript of the 10-minute Q&A defense.",
    pagesOrReadTime: "Full Case Breakdown",
    rating: 5.0,
    downloadsCount: 2150,
    tags: ["SCG", "Actual Winner", "Circular Economy"],
    format: "PDF",
    keyTakeaways: [
      "Real 10-slide championship deck with judge margin annotations",
      "Why the team won: Defensible unit economics vs vague sustainability buzzwords",
      "How the team handled the CFO's aggressive NPV calculation objection",
      "Complete timeline breakdown from day 1 to stage trophy"
    ],
    author: "Team CircularEdge (SCG 2023 Champions)"
  },
  {
    id: "res-4",
    title: "High-Performance Team Charter & 4-Week Milestone Toolkit",
    category: "Toolkits",
    description: "Prevent ghosting, uneven workloads, and deadline crises. Standard operating agreement template for newly formed student competition teams, complete with responsibility matrices and check-in cadences.",
    pagesOrReadTime: "Interactive Notion & Sheets",
    rating: 4.9,
    downloadsCount: 1670,
    tags: ["Team Agreement", "Accountability", "Notion", "Templates"],
    format: "Notion",
    keyTakeaways: [
      "Mutual commitment covenant: availability locks and ghosting policy",
      "RACI role assignment matrix for Case & Tech competitions",
      "4-week automated milestone tracker with Gantt visualization",
      "Post-competition debrief and portfolio documentation template"
    ],
    author: "MatchUp Community Operations"
  }
];

export const INITIAL_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: "sys-1",
    senderId: "system",
    text: "🎉 You and Fah matched for SCG Case Challenge 2024! Fah is currently online.",
    timestamp: "Just now",
    isUser: false
  }
];

export const SCRIPTED_ICEBREAKERS = [
  "Hey Fah! Saw your UX portfolio. We're assembling a team for SCG Case Challenge!",
  "Hi Fah! I'm leading the financial & business strategy for SCG. Would love to team up!",
  "Loved your Chula Design Sprint work! Free for a quick 15-min alignment call tonight?",
  "Hey Fah, we noticed you're free M/W/F — that matches our team work sessions perfectly!"
];
