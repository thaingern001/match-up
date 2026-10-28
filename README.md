# MatchUp — Interactive Pitch Demonstration Prototype

> **"Find Your Team, Build Your Edge"**  
> *The End-to-End Competition Ecosystem: Discover → Match → Grow*

An interactive browser-based pitch prototype built for investor and stakeholder demonstrations. It communicates MatchUp's core value proposition through a seamless three-stage customer journey: **Discover → Match → Grow**.

---

## 🚀 Pitch Narrative & Demo Journey

### 1. Discover — Competition Hub
* **Search & Filter**: Real-time keyword search across challenges, tags, and formats with category filters (*Case Competition, Hackathon, Design, Tech & AI, FinTech*).
* **Challenge Detail Modal**: Inspect problem statements, timelines, eligibility, judging criteria, and prize pools (e.g. *SCG Case Challenge 2024* with ฿200,000 prize).
* **Bookmarking**: Save competitions for later tracking with instant badge counters.
* **Direct Transition**: Click **"Find Teammates for this Challenge"** to immediately launch the matching flow pre-scoped to that challenge.

### 2. Connect — Swipe-to-Match
* **High-Signal Teammate Cards**: Rich profiles featuring verified student badges (*Top 3 Google Solution Challenge, Chula Design Sprint Champion*), portfolio links, and target challenge tags.
* **Weekly Availability Matrix**: Active day indicators (`[M] [T] [W] [TH] [F] [SA] [SU]`) addressing the core user pain of ghosting and uncertain commitment.
* **Tactile Swipe Controls**: Pass (✕), Super Like (⭐), Like (💚), and Rewind (↺) with micro-interactions.
* **Mutual Match Celebration**: Liking or Super Liking **Fah** triggers a celebratory modal with confetti, team synergy breakdown (Strategy + UI/UX), and direct chat initiation.
* **Simulated Interactive Chat**: Realistic simulated chat with Fah featuring suggested icebreakers, instant typing indicator, and responsive automated replies.

### 3. Grow — Mentor Marketplace & Toolkits
* **Champion Mentor Network**: Browse verified mentors including *P'Mint* (ex-McKinsey intern), *P'Golf* (National Pitch Champion), *P'Jane* (Agoda ML Engineer), and *P'Tee* (LINE MAN Wongnai Lead UX).
* **Tiered Packages (Pitch Deck Slide 6 Alignment)**:
  * **Deck Review (฿199 - ฿299)**: Written slide-by-slide feedback within 24h.
  * **Private Strategy Call (฿349 - ฿449)**: 30-min 1-on-1 model refinement.
  * **Storytelling (฿599 - ฿799)**: 45-60 min narrative & data visualization consultation.
  * **Mock Pitch (฿699 - ฿899)**: 60-min live simulation with judge-style questioning.
  * **All-in Champion Package (฿1,490 - ฿1,990)**: 1 deck review + 2 mock pitches.
* **Interactive Booking Flow**: Step-by-step booking with package picker, date & time slot selection, team notes, and transparent 20% platform fee breakdown.
* **Resource Toolkit**: Downloadable previews of winning McKinsey 10-slide case decks, case interview frameworks, and team charter accountability agreements.

---

## 🎛️ Presenter Features (Pitch Companion Bar)

Designed specifically for live pitching to judges and investors:
* **1-Click Stage Stepper**: Instantly jump between *1. Discover*, *2. Match*, *3. Chat*, *4. Mentors*, and *5. Toolkit*.
* **⚡ Instant Match (Fah)**: Trigger the mutual match celebration with one click anytime during a presentation.
* **🔄 Reset Demo**: Instantly restore all swipes, bookmarks, chats, and bookings to a clean initial state.
* **📑 Pitch Deck Reference**: Open a slide deck modal displaying the problem statement (Slide 2), solution pillars (Slide 3), value proposition map (Slide 4), and revenue model (Slides 5 & 6) alongside the live prototype.
* **📱 Viewport Toggle**: Switch between a centered photorealistic iPhone smartphone frame and a fullscreen responsive web layout.

---

## 🛠️ Tech Stack

* **Framework**: Next.js 16 (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **Icons**: Lucide React
* **Confetti & Effects**: canvas-confetti
* **Architecture**: 100% client-side deterministic state (Zero backend / database dependencies for 100% reliable offline/live demonstrations)
* **Deployment**: Optimized for Vercel

---

## 📦 Local Setup Instructions

### Prerequisites
* Node.js 18+ (tested on Node v22)
* npm 9+

### Installation & Run
```bash
# 1. Clone repository or navigate to workspace
cd match-up

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Build production bundle
npm run build

# Start production server
npm run start
```

---

## ☁️ Deploy to Vercel

This project is configured out-of-the-box for instant zero-configuration deployment on Vercel:

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the repository into your [Vercel Dashboard](https://vercel.com/new).
3. Keep default settings (Next.js preset, build command `npm run build`, output directory `.next`).
4. Click **Deploy**.
