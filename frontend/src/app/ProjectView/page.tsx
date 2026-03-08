"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Globe,
  Calendar,
  Tag,
  ShieldCheck,
  Building2,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// This would ideally come from a shared constants file
const projects = [
  {
    id: 1,
    title: "TabTask - Team Task Management Platform",
    category: "SaaS",
    company: "Oxymai (PVT) LTD",
    status: "Ongoing Development",
    description:
      "A collaborative team task management platform with organization-based workspaces, real-time sync via WebSockets, Kanban boards, analytics dashboard, notes, bookmarks, and a granular role-based permissions system.",
    images: [
      "/images/taskManagment/p1.png",
      "/images/taskManagment/p2.png",
      "/images/taskManagment/p3.png",
      "/images/taskManagment/p4.png",
      "/images/taskManagment/p5.png",
      "/images/taskManagment/p6.png",
    ],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Socket.IO",
      "Redis",
      "Supabase Auth",
      "AWS S3",
      "JWT",
      "Framer Motion",
      "Recharts",
    ],
    liveUrl: "http://tabtaskorg-tabtask-web-1tqw4h-fb49fa-139-59-233-104.traefik.me",
    githubUrl: "https://github.com/example",
    featured: true,
    color: "from-blue-400 to-cyan-400",
    longDescription:
      "TabTask is a full-stack team task management SaaS platform built for Oxymai (PVT) LTD. It supports multiple organizations per user, each with its own Kanban board, groups, members, and granular permission controls. The platform features real-time bi-directional communication using Socket.IO - tasks, groups, and member changes propagate instantly across all connected clients without any page refresh. Authentication is handled through a hybrid system combining custom JWT tokens and Supabase Auth (with OAuth support). Redis is used as a caching layer to optimize API response times and reduce database load. Additional productivity tools include a rich Notes module, a Bookmarks manager, a Project Planner, an Analytics dashboard with charts, and an Archived Lists view.",
    features: [
      {
        title: "Real-time Collaboration via WebSockets",
        description:
          "All task, group, and member changes are broadcast instantly to every connected user within the same organization or group, eliminating the need for manual page refreshes.",
        implementation:
          "Implemented using Socket.IO on the Express backend with authenticated socket middleware (JWT + Supabase token verification). Users are placed in namespaced rooms (org_{id}, group_{id}, user_{id}) and events like task_created, task_updated, group_updated, and member_added are emitted to the appropriate rooms on every mutation.",
      },
      {
        title: "Organization-based Workspaces with Role & Permission System",
        description:
          "Users can create or join multiple organizations. Each organization has a full role hierarchy (Owner → Admin → Member) with 15+ granular, individually togglable permissions per member.",
        implementation:
          "Built with Sequelize ORM on PostgreSQL. The OrganizationMembers table stores per-member flags such as canAddTask, canEditTask, canDeleteTask, canCreateGroup, viewPrivateBoard, manageMembers, etc. Every API endpoint in OrganizationController and TabTaskController checks these permissions before performing any mutation.",
      },
      {
        title: "Kanban Board with Subtasks, Timers & Drag-and-Drop",
        description:
          "A fully interactive Kanban board where tasks can be dragged between columns (Today, This Week, Done, Private, etc.), assigned to members, given priorities, time estimates, constraint dates, and broken down into subtasks.",
        implementation:
          "Frontend built with @dnd-kit/core and @hello-pangea/dnd for drag-and-drop. Backend task model stores columnId, priority (high/medium/low), estimate, timeSpent, timerStartedAt, constraintDate, and constraintType fields. Task reordering increments the order field of sibling tasks atomically in PostgreSQL via Sequelize.",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Provides productivity insights including task completion rates, time spent per list, done task history, and productivity scoring through interactive charts and stat cards.",
        implementation:
          "Dashboard composed of modular React components (AnalyticsChart, AnalyticsStats, ProductivityCards, TimeByList, DoneTasks) powered by Recharts for data visualization. Data is fetched from the backend task and organization endpoints and rendered with Framer Motion animated transitions.",
      },
      {
        title: "Hybrid Authentication (JWT + Supabase Auth)",
        description:
          "Supports both custom email/password login with JWT and Supabase-powered OAuth logins (Google, GitHub). Email verification and password reset flows are included.",
        implementation:
          "Backend uses a hybrid auth strategy: Supabase Admin client verifies Supabase tokens and falls back to jsonwebtoken for custom JWTs — both on REST middleware (authController) and WebSocket handshake (socket.js). Passwords are hashed with bcryptjs. Nodemailer handles email verification and password reset emails.",
      },
      {
        title: "Redis Caching & Performance Optimization",
        description:
          "API responses for frequently accessed resources (organization lists, member lists, task lists) are cached in Redis to minimize database round-trips and reduce latency.",
        implementation:
          "Redis client configured with ioredis/redis on a remote VPS with reconnection strategy and keep-alive pings every 5 minutes. Cache keys follow a structured pattern (cache:{userId}:/api/...) and are selectively invalidated on every mutation using the invalidateCache() utility with glob-pattern key matching.",
      },
      {
        title: "Notes & Bookmarks Manager",
        description:
          "Users can create personal rich-text notes and save bookmarks, both organized into custom folders with full CRUD support.",
        implementation:
          "Separate Sequelize models (Note, NotesFolder, Bookmark, BookmarksFolder) with dedicated Express route controllers. Frontend has independent component trees under /notes and /bookmarks routes, rendered within the shared DashboardLayout.",
      },
    ],
  },

  {
    id: 2,
    title: "AI Background Remover",
    category: "SaaS / AI Tool",
    status: "Ongoing Development",
    description:
      "Full-stack AI-powered background removal platform with real-time WebSocket processing, credit-based usage system, bulk folder management, and secure Firebase authentication.",
    images: [
      "/images/bgRemove/p1.png",
      "/images/bgRemove/p2.png",
      "/images/bgRemove/p3.png",
      "/images/bgRemove/p4.png",
      "/images/bgRemove/p5.png",
      "/images/bgRemove/p6.png",
      "/images/bgRemove/p7.png",
      "/images/bgRemove/p8.png",
    ],
    technologies: [
      "React 19",
      "Node.js",
      "Firebase",
      "Socket.io",
      "Replicate AI",
      "Tailwind CSS",
      "Vite",
    ],
    liveUrl: "https://removebg-fr-nib6uo-bd6825-139-59-233-104.traefik.me",
    githubUrl: "https://github.com/example",
    featured: true,
    color: "from-blue-400 to-indigo-500",
    longDescription:
      "A production-ready SaaS platform that leverages the Replicate AI API to remove image backgrounds automatically. The system supports both single-image and bulk processing through a smart folder management system. A real-time WebSocket layer (Socket.io) delivers live progress updates to clients during AI processing. The entire platform is secured with Firebase Authentication using JWT verification, per-user rate limiting, AES-256-GCM encrypted local storage, and Firestore atomic credit transactions to prevent double-spending. The frontend is built with React 19 + Vite with a clean, responsive Tailwind design.",
    features: [
      {
        title: "Real-Time AI Processing with WebSocket",
        description:
          "Users see live, second-by-second progress updates as the AI removes image backgrounds — no polling, no page refresh.",
        implementation:
          "Backend uses Socket.io rooms (per user and per folder) to emit granular events (bgRemove:start, bgRemove:progress, bgRemove:complete, bgRemove:error). The React frontend subscribes to these events via a singleton WebSocket service, automatically reconnecting up to 5 times on failure.",
      },
      {
        title: "Bulk Folder Processing with ZIP Export",
        description:
          "Users can upload up to 50 images at once into named folders, trigger AI processing in bulk, and download all results as a single ZIP file.",
        implementation:
          "Folder lifecycle is managed across Firestore documents with atomic status tracking (uploaded → queued → processing → completed). The Node.js backend uses the 'archiver' library to stream-compress processed images into a ZIP on demand, served directly without temporary disk storage.",
      },
      {
        title: "Credit-Based Usage System with Atomic Transactions",
        description:
          "Each processed image costs 2 credits. The system prevents race conditions, double-deductions, and negative balances even under concurrent requests.",
        implementation:
          "Implemented using Firestore transactions (db.runTransaction) that read and write credits atomically. If processing fails, credits are restored server-side. All credit operations are protected by Firebase Auth middleware that verifies JWT tokens and matches userId from route params to prevent impersonation.",
      },
      {
        title: "Multi-Layer Security Architecture",
        description:
          "The platform implements enterprise-grade security across transport, application, and data layers — protecting against XSS, CSRF, file injection, and API abuse.",
        implementation:
          "Security stack includes: Helmet.js with custom CSP headers, CORS whitelist via environment config, multi-tier rate limiting (express-rate-limit per endpoint type), MIME-type + extension + null-byte file validation via Multer, and AES-256-GCM encrypted localStorage for client-side data using the Web Crypto API with PBKDF2 key derivation.",
      },
    ],
  },

  // Adding placeholders for others to match ProjectsSection IDs
  {
    id: 3,
    title: "Reframer - AI Video Resizer",
    category: "SaaS / AI Tool",
    status: "Live",
    description:
      "AI-powered video reframing SaaS with token-based monetization, multi-aspect-ratio output, Chrome extension support, Firebase Auth, and a real-time conversion dashboard.",
    images: [
      "/images/reFramer/p1.png",
      "/images/reFramer/p2.png",
      "/images/reFramer/p3.png",
      "/images/reFramer/p4.png",
      "/images/reFramer/p5.png",
    ],
    technologies: [
      "React 19",
      "Vite",
      "Node.js",
      "Express",
      "Firebase",
      "Replicate AI",
      "Framer Motion",
      "Tailwind CSS",
    ],
    liveUrl: "https://reframmer-fr-jzhlpl-956995-139-59-233-104.traefik.me/",
    githubUrl: "https://github.com/example",
    featured: true,
    color: "from-violet-500 to-indigo-500",
    longDescription:
      "Reframer is a full-stack AI SaaS platform that intelligently reframes videos for any social media format - TikTok (9:16), YouTube (16:9), Instagram (1:1), Cinematic (21:9), and 3 more - using Luma AI's 'reframe-video' model via the Replicate API. The platform ships as both a web app and a Chrome Extension (Manifest V3) with side-panel support, sharing the same backend. The backend is a RESTful Express API secured with Firebase Admin JWT verification, per-route rate limiting, and Multer file validation (500MB cap, MIME-type checked). Users manage their account through a full profile dashboard with avatar upload to Firebase Storage, email change with verification flow, password reset, and plan management. Files are stored securely and auto-deleted after 7 days via signed URL expiry.",
    features: [
      {
        title: "AI-Powered Video Reframing via Luma AI + Replicate",
        description:
          "Users upload a video, pick an aspect ratio (1:1, 3:4, 4:3, 9:16, 16:9, 9:21, 21:9), and optionally write an AI prompt - the platform intelligently reframes the shot with subject tracking, zero manual cropping.",
        implementation:
          "The video is uploaded to Firebase Storage first, generating a signed URL. That URL is sent to the Luma 'reframe-video' model through the Replicate SDK. The controller handles the full pipeline: upload original → deduct tokens → call Replicate → download processed output → re-upload processed video to Firebase Storage → update Firestore metadata with both URLs and a 'processed' status flag. Tokens are automatically refunded server-side in the catch block if Replicate fails, preventing silent credit losses.",
      },
      {
        title: "Token-Based Usage System with Failure Refunds",
        description:
          "Each video conversion costs 5 tokens. The system blocks conversions on insufficient balance and automatically restores tokens if AI processing fails - no silent credit losses.",
        implementation:
          "Token balance is pre-checked client-side from Firestore before hitting the API. On the server, tokens are deducted via deductTokens() only after a successful Firebase Storage upload. If the Replicate processing step throws, an addTokens() call in the catch block restores the exact deducted amount. The client also redirects to the pricing section if the user runs out - prompting an upsell without breaking the flow.",
      },
      {
        title: "Chrome Extension with Manifest V3 & Side Panel",
        description:
          "The full platform is also available as a Chrome Extension that opens in Chrome's native side panel - users can reframe videos directly from their browser without switching tabs.",
        implementation:
          "Built with Vite + React as a separate app in the /extention directory, sharing the same Firebase Auth and backend API. Uses Chrome Manifest V3 with a background.js service worker to handle extension lifecycle. CORS on the Express backend explicitly whitelists chrome-extension:// origins via a regex pattern. A custom build script copies manifest.json and background.js into the Vite dist output for direct Chrome loading.",
      },
      {
        title: "Secure REST API with JWT Auth, Rate Limiting & File Validation",
        description:
          "Every endpoint is protected by Firebase Admin JWT verification. Rate limiting shields against abuse, and every uploaded file is validated for format, MIME type, and size before processing begins.",
        implementation:
          "A custom authMiddleware extracts Bearer tokens and calls admin.auth().verifyIdToken() - the decoded UID scopes all Firestore and Storage operations per user. Two rate limiters are applied: GeneralRequestLimiter (100 req / 5s) and historyGetLimiter (5 req / min). Multer validates uploads with an allowedMimetypes whitelist (MP4/AVI/MOV/MKV/WEBM) and enforces a strict 500MB size cap before any data is written.",
      },
      {
        title: "Full User Profile System with Secure Email Change Flow",
        description:
          "Users can update their display name, profile photo, and email address. Email changes are protected by a verification flow - the new address must be confirmed before it takes effect.",
        implementation:
          "Profile photos are uploaded directly to Firebase Storage under reframer-profile-images/{uid} using uploadBytes, with getDownloadURL providing the accessible URL. Name and image changes update both Firebase Auth (updateProfile) and Firestore simultaneously. Email changes use verifyBeforeUpdateEmail() from Firebase Auth - the new email is stored as pendingEmail in Firestore until the link is clicked. Error cases (requires-recent-login, email-already-in-use) are caught and surfaced to the user via a custom alert context.",
      },
    ],
  },

  {
    id: 4,
    title: "VocabVerse - Smart Vocabulary Chrome Extension",
    category: "Chrome Extension / EdTech",
    // status: "Live",
    description:
      "A full-stack Chrome Extension that lets users save any word from any webpage into organized folders, with real-time DOM highlighting, auto-translation, calendar-based learning history, offline caching, and a competitive leaderboard — built with React 19, Firebase, and Chrome MV3.",
    images: [
      "/images/VocabVerse/p1.png",
      "/images/VocabVerse/p2.png",
      "/images/VocabVerse/p3.png",
      "/images/VocabVerse/p4.png",
      "/images/VocabVerse/p5.png",
    ],
    technologies: [
      "React 19",
      "Vite",
      "Firebase Auth",
      "Firestore",
      "Firebase Storage",
      "Chrome Extension MV3",
      "Google Translate API",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
    color: "from-cyan-400 to-blue-500",
    longDescription:
      "VocabVerse is a production-grade Chrome Extension and web app that transforms how users build vocabulary. Highlight any word on any website, right-click, and save it into named Firestore folders in one click — no copy-pasting, no tab switching. A background service worker (Manifest V3) captures the selected word along with its full sentence context by walking the DOM, then writes to both chrome.storage.local and Firestore simultaneously. The content script highlights every saved word across all visited pages in real time, showing a hover popup with the translated meaning. Built with React 19 + Vite, the extension and web app share the same Firebase Auth session. Features include calendar-based learning history, a global leaderboard, offline-first caching, auto logout, and a full user profile with Firebase Storage avatar uploads.",
    features: [
      {
        title: "One-Click Word Capture via Chrome Context Menu",
        description:
          "Select any word on any webpage, right-click, pick a folder, and VocabVerse saves the word along with its sentence context and source URL — all in under a second. Folders in the context menu update in real time as users create or delete them.",
        implementation:
          "The background.js MV3 service worker registers chrome.contextMenus entries dynamically using onSnapshot on the user's Firestore folders collection — new folders appear in the right-click menu instantly without a browser restart. On click, chrome.scripting.executeScript injects getSentenceContext() into the active tab, which uses the Selection API and a regex sentence splitter to extract the surrounding sentence. The word, sentence, source URL, and folderId are written to chrome.storage.local first (offline resilience), then pushed to Firestore via addDoc with a serverTimestamp.",
      },
      {
        title: "Real-Time Word Highlighting Across All Websites",
        description:
          "Every word ever saved is highlighted across all websites the user visits — turning passive browsing into active vocabulary reinforcement with zero manual effort. Hovering a highlighted word shows a live translation popup.",
        implementation:
          "content.js runs on every page via <all_urls> permission. On load it reads active_user_uid and user_words from chrome.storage.local and walks the DOM using recursive TreeWalker logic to find all text nodes matching saved words via a combined RegExp. Matches are wrapped in <mark class='vv-highlight'> elements. A chrome.storage.onChanged listener re-runs the highlight pass whenever words or settings change. Each mark has a mouseenter listener that calls the Google Translate proxy API (translate.googleapis.com) for a translation tooltip, with a debounced mouseleave to dismiss it.",
      },
      {
        title: "Organized Folder System with Offline-First Caching",
        description:
          "Users create, rename, and delete vocabulary folders. Each card shows total words, learned count, and a progress bar. The extension stays fully functional offline — all Firestore reads are backed by a 1-hour chrome.storage cache.",
        implementation:
          "Foldersection.jsx uses chromeStorageGet/chromeStorageSet helper functions that transparently fall back to localStorage in dev environments. On mount, it checks a folders_cache_{uid} entry — if the cache timestamp is within 1 hour, data renders instantly from cache. An onSnapshot listener keeps Firestore data live. Add/rename/delete operations update both Firestore and the cache atomically. saveAllUserWords() flattens all folder words into user_words[uid] in chrome.storage — keeping the content script highlight list always in sync with folder state.",
      },
      {
        title: "Auto-Translation with Google Translate API & Firestore Caching",
        description:
          "Words inside folders are automatically translated to the user's chosen language (Sinhala, Tamil, Spanish, German, and more). Translations are persisted in Firestore — no repeated API calls on subsequent views.",
        implementation:
          "FolderWordsView.jsx fires a Google Translate API v2 POST for each word that lacks a stored translation for the current target language. The language is read from chrome.storage.local (with localStorage fallback) and kept live via a chrome.storage.onChanged listener — changing the language in Settings instantly re-translates the current word list. Translated text and a translationLang code are written back to each word document in Firestore via updateDoc, so future loads use cached translations without any extra API calls.",
      },
      {
        title: "Calendar Learning History with Month & Week Views",
        description:
          "A visual calendar shows exactly which words were saved on each day, with switchable month and week views. Clicking any day opens a popup showing all words saved that day, with translation and deletion support.",
        implementation:
          "Calendarsection.jsx fetches all folders and words from Firestore on first load, normalising both Firestore Timestamp and ISO string createdAt formats into a wordsByDate map keyed by YYYY-MM-DD. The map is cached in chrome.storage under calendarWords_{uid} with a 1-hour TTL. The month grid is computed purely client-side from a Date object — padding leading/trailing cells for proper day alignment. Popup.jsx supports inline translation via LibreTranslate and soft-deletes words from the calendar by updating both local state and the chrome.storage cache without a full re-fetch.",
      },
      {
        title: "Global Leaderboard with All / Monthly / Yearly Filters",
        description:
          "A competitive leaderboard ranks all platform users by total saved words, with All-Time, Monthly, and Yearly time filters to keep motivation high at every stage of learning.",
        implementation:
          "LeaderBoard.jsx fetches the full users collection, then iterates each user's nested folders and words sub-collections, applying an isInFilter() date check on createdAt Firestore Timestamps per the selected time window. Results are sorted descending by totalWords and cached under leaderboard_cache_v1 in chrome.storage with a 60-minute TTL, preventing expensive multi-collection Firestore reads on every navigation. Rank 1/2/3 receive Crown and Medal icons (lucide-react); lower ranks show a numbered pill badge.",
      },
      {
        title: "Firebase Auth, Auto-Logout Guard & Full Profile Management",
        description:
          "Users sign in via email/password or Google OAuth. A 15-minute inactivity auto-logout protects accounts. Users can update their display name, avatar (stored in Firebase Storage), and password from a dedicated profile page.",
        implementation:
          "Firebase Auth handles both email/password and Google sign-in (signInWithPopup). On login, the UID is written to chrome.storage as active_user_uid so the content script scopes word highlighting per user. AutoLogout.jsx attaches mousemove, keydown, and click listeners to reset a setTimeout — after 15 minutes of inactivity, auth.signOut() fires and the user is redirected to /login. UserProfile.jsx uploads avatars to Firebase Storage under users/{uid}/profile.jpg via uploadBytes/getDownloadURL, updating both Auth (updateProfile) and Firestore atomically. All dashboard routes are guarded by a ProtectedRoute HOC using onAuthStateChanged.",
      },
    ],
  },
  {
    id: 5,
    title: "TabTask V2 - Full-Stack Personal Productivity Extension",
    category: "Chrome Extension / SaaS / Full-Stack",
    description:
      "A full-stack personal productivity browser extension for Chrome and Firefox — built with React 19 + Vite and a Node.js + Socket.io backend. Centralises task management, Pomodoro timer, smart reminders, rich notes, bookmarks, and an analytics dashboard into a single new-tab experience. Powered by Supabase Auth, PostgreSQL via Sequelize ORM, real-time Socket.io sync, and a 4-tier freemium subscription system with an integrated admin panel.",
    images: [
      "/images/Taskbee/p1.png",
      "/images/Taskbee/p2.png",
      "/images/Taskbee/p3.png",
      "/images/Taskbee/p4.png",
      "/images/Taskbee/p5.png",
      "/images/Taskbee/p6.png",
      "/images/Taskbee/p7.png",
      "/images/Taskbee/p8.png",
      "/images/Taskbee/p9.png",
    ],
    technologies: [
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "Framer Motion",
      "Socket.io",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize ORM",
      "Supabase Auth",
      "Radix UI",
      "@hello-pangea/dnd",
      "JWT",
      "Nodemailer",
      "Winston",
      "React Icons",
    ],
    liveUrl: "https://chromewebstore.google.com/",
    githubUrl: "https://github.com/example",
    featured: true,
    color: "from-violet-400 to-indigo-500",
    longDescription:
      "TabTask V2 is a production-grade, full-stack personal productivity browser extension for Chrome and Firefox. The frontend is a React 19 + Vite SPA compiled as a browser extension via @crxjs/vite-plugin, styled with Tailwind CSS v4 and Radix UI component primitives, and animated with Framer Motion throughout. The backend runs on Node.js + Express with a Socket.io layer backed by PostgreSQL via Sequelize ORM, and uses Supabase for email-based authentication, email verification, and password recovery. Real-time sync across browser tabs is achieved through a bidirectional Socket.io channel secured by custom JWT socket tokens stored in Chrome's chrome.storage API. The application architecture nests 9 React context providers — Auth, Socket, Timer, Labels, Bookmarks, Notes, Notifications, Reminders, and Theme — enabling seamless global state access across all feature modules without prop drilling. A full offline mode is implemented: an internet connectivity checker detects network loss, gracefully halts socket reconnection attempts, and validates locally cached credentials via a validateLocalAuth() fallback so users retain access to their data. The freemium subscription system enforces 4 tiers server-side (Free, Monthly $9.99, Yearly $99.99, Lifetime $299.99), with a dedicated Admin Panel SPA served at /admin. Production security is hardened with Express rate limiting, Helmet CSP configuration, CORS whitelisting, and structured Winston logging.",
    features: [
      {
        title: "Task Management with Drag-and-Drop Boards",
        description:
          "A personal task management system organised into customisable boards. Tasks support priority levels, due dates, colour labels, checklists, file attachments, comments, time tracking, and archiving. Tasks can be reordered within a board or moved between boards with smooth drag-and-drop, with all changes synced in real time via Socket.io.",
        implementation:
          "TaskContainer.jsx uses @hello-pangea/dnd's DragDropContext, Droppable, and Draggable for drag-and-drop within and across boards. CRUD operations emit Socket.io events (task:create, task:updated, task:moved, tasks:reordered) and update local boardData state on server-confirmed responses. Board state is also pushed to the Chrome background script via chrome.runtime.sendMessage({ action: 'updateTaskBoardData' }) to keep the right-click context menu in sync with the user's current boards.",
      },
      {
        title: "Pomodoro Timer with Task Time Tracking",
        description:
          "A built-in Pomodoro timer that attaches to individual tasks, tracking accumulated elapsed time across work sessions. Configurable work and break intervals, session history logging, and real-time elapsed_time sync across browser tabs via Socket.io events.",
        implementation:
          "TimerContext.jsx manages all timer state using useRef for interval tracking to avoid stale closure bugs. When a timer is paused or stopped, the server emits timer:paused and timer:stopped events with taskId and elapsedTime. TaskContainer.jsx handles these to update the task's elapsed_time in local state. Completed Pomodoro sessions are saved to the pomodoroSession PostgreSQL model via a socket handler, making session history available to the Analytics dashboard.",
      },
      {
        title: "Supabase Auth with Socket JWT Token System",
        description:
          "Complete authentication covering email/password signup with email verification, forgot password via Supabase recovery links, and persistent session management. A separate socket JWT token is issued post-login and stored in Chrome's chrome.storage API, used solely to authenticate the Socket.io connection independently of the Supabase session.",
        implementation:
          "AuthContext.jsx wraps Supabase's onAuthStateChange and exposes currentUser, session, isAuthenticated, and loading. App.jsx parses URL hash params (type=recovery, type=signup) on mount to route into ResetPassword or EmailVerification flows. On login, saveSocketToken() writes the token to Chrome storage; initializeSocket() reads it via getSocketToken() and passes it in the Socket.io auth object. On jwt expired errors, clearSocketToken() removes the stale token and reconnect() retries with the active Supabase session token.",
      },
      {
        title: "Smart Reminders with Live Alarm Popup",
        description:
          "A reminders module with one-time and repeating schedules (daily, weekly), managed via a dedicated UI with create/edit/delete flows. When a reminder fires, a full-screen alarm popup appears over the entire extension UI — supporting snooze and dismiss — regardless of which tab the user is on.",
        implementation:
          "Server-side scheduling uses node-schedule in reminderHandlers.js. On trigger, the server emits a reminder:alarm Socket.io event; ReminderContext.jsx sets activeAlarm state. App.jsx renders ReminderAlarmPopup globally outside all route trees so it overlays any active screen. Snooze emits a reschedule event to the server with a configurable delay offset. ReminderList.jsx uses react-masonry-css for a responsive card layout with Framer Motion entry animations.",
      },
      {
        title: "Rich Notes with Folder Tree Organisation",
        description:
          "A full notes module with a three-pane layout: collapsible folder tree, notes list, and rich text editor. Notes and folders can be nested, renamed, and moved. Full-text search returns highlighted snippet previews across all notes.",
        implementation:
          "NotesContext.jsx (30KB) manages notes and folder state synced via Socket.io noteshandlers.js. Notes.jsx composes NoteFolderTree, NotesList, and NoteEditor in a three-column layout that collapses to a single-panel drawer on small screens. NoteSearch.jsx applies a 300ms debounce over note content and titles, wrapping match character ranges in styled highlight spans for in-context snippet previews. Folder CRUD emits socket events handled by noteFolder Sequelize model associations.",
      },
      {
        title: "Productivity Analytics Dashboard",
        description:
          "A multi-widget analytics dashboard presenting task completion trends, time distribution across boards, Pomodoro focus session history, board performance breakdowns, task priority distribution, and a composite productivity score — all computed server-side from PostgreSQL aggregations.",
        implementation:
          "Analytics.jsx composes 7 sub-components: TaskCompletionChart, TimeDistributionChart, ProductivityScore, BoardPerformance, FocusSessions, PerformanceSummary, and TaskPriorities. Data is fetched via REST endpoints backed by userAnalytics Sequelize model queries. Charts use custom SVG with Framer Motion pathLength animations on mount. ProductivityScore.jsx computes a weighted composite from task completion rate, on-time delivery ratio, focus session minutes, and board activity.",
      },
      {
        title: "4-Tier Freemium Subscription & Admin Panel",
        description:
          "An in-extension subscription page with animated pricing cards for 4 tiers (Free, Monthly, Yearly, Lifetime), a full feature comparison table, and an FAQ accordion — all with Framer Motion scroll animations. Tier limits are enforced server-side. A separate Admin Panel SPA at /admin allows managing users, subscriptions, and system notifications.",
        implementation:
          "SubscriptionPage.jsx uses Framer Motion whileInView for pricing card and comparison table animations, with selectedPlan state driving card border/button styles. Server-side enforcement runs in Socket.io middleware via subscription model associations — the connection_established event returns tier, isPaid, and planName stored in SocketContext's subscriptionStatus. The Admin Panel is a separately built Vite SPA served as static files via Express, with a Helmet CSP override allowing unsafe-eval for the admin bundle.",
      },
    ],
  },
  {
    id: 6,
    title: "Envio - Envato Bulk Video Generator",
    category: "Chrome Extension / Content Automation",
    description:
      "A production-ready Chrome Extension that automates Envato VideoGen — generate hundreds of AI videos in bulk from text prompts, auto-download them locally, and scale stock content production effortlessly. Comes with a high-conversion marketing landing page built in React 19 + Vite, deployed on Firebase Hosting.",
    images: [
      "/images/Envio/p1.png",
      "/images/Envio/p2.png",
      "/images/Envio/p3.png",
      "/images/Envio/p4.png",
    ],
    technologies: [
      "React 19",
      "Vite",
      "Tailwind CSS 4",
      "Framer Motion",
      "AOS",
      "Chrome Extension MV3",
      "React Router DOM v7",
      "react-icons",
      "Lucide React",
      "Firebase Hosting",
      "Flowbite React",
    ],
    liveUrl:
      "https://enviogen.web.app/",
    githubUrl: "https://github.com/example",
    featured: true,
    color: "from-lime-400 to-green-500",
    longDescription:
      "Envio is a production-grade Chrome Extension that eliminates the bottleneck of manual Envato VideoGen usage. Instead of generating one AI video at a time — which requires clicking through the same steps repeatedly — Envio injects automation directly into the Envato VideoGen interface through a Chrome Manifest V3 extension. Users paste a bulk list of prompts, configure generation settings (style, dimensions, output format), and hit 'Start'. The extension then automatically cycles through each prompt on the Envato VideoGen platform, triggers generation, waits for completion, and initiates the download — all without any user interaction. The extension is paired with a fully responsive marketing landing page built in React 19 + Vite (Tailwind CSS 4), featuring scroll-triggered animations via Framer Motion and AOS, a before/after comparison table, use-case video showcases, an accordion FAQ, and a live YouTube demo embed. The landing page is deployed on Firebase Hosting and ranks on Google via structured SEO with sitemap, robots.txt, and keyword-optimised copy. Listed on the Chrome Web Store and featured on Product Hunt.",
    features: [
      {
        title: "Bulk Prompt Processing via Chrome Extension (MV3)",
        description:
          "Users submit a list of prompts through the extension popup. Envio processes them sequentially on the Envato VideoGen page — generating and downloading each video fully automatically. No repetitive clicking, no tab management.",
        implementation:
          "The MV3 service worker injects a content script into the Envato VideoGen tab using chrome.scripting.executeScript. The content script reads the queued prompt list from chrome.storage.local, fills the VideoGen prompt input programmatically via the DOM, triggers the generate action, then uses a MutationObserver to detect when the generated video element appears. On detection, it programmatically clicks the download button and fires chrome.storage.local.set to advance to the next prompt. A configurable delay between iterations prevents rate-limiting. The extension popup (React + Vite) provides the prompt list editor with add/remove/import-CSV controls and a progress indicator showing current prompt index.",
      },
      {
        title: "Auto-Download on Generation Completion",
        description:
          "Every generated video is automatically saved to the user's local downloads folder the moment Envato VideoGen finishes rendering it — no manual download button clicks required. Supports sessions of hundreds of videos without supervision.",
        implementation:
          "The content script uses a MutationObserver targeting the VideoGen results container. When a video element with a valid src URL is detected, it creates a hidden <a> element with the download attribute and programmatically clicks it — triggering the browser's native download manager. The downloaded filename is prefixed with the prompt index and sanitised prompt text for easy organisation. If a download fails or the video src is missing after a timeout, the extension logs the failure to chrome.storage.local and proceeds to the next prompt, ensuring batch jobs don't silently stall.",
      },
      {
        title: "High-Conversion Landing Page with Animated UI",
        description:
          "A fully-designed marketing site built in React 19 + Vite that showcases the extension with animated sections, a live demo video, use-case cards with looping video backgrounds, a before/after comparison table, and multiple CTAs that deep-link directly to the Chrome Web Store install page.",
        implementation:
          "The landing page uses Framer Motion for entrance animations (initial/animate with spring physics) and AOS for scroll-triggered fade-ins across all sections. The HeroSection renders a GIF demo of the extension in action with a stat grid (10K+ videos, 500+ creators). The Whychoose section displays AI-generated feature images with staggered fade-in via motion.div viewport detection. The BeforeAfter section renders a styled HTML table comparing Envio vs manual workflow across 10 dimensions (speed, automation, scalability, cost, etc). UseCases renders four looping background videos (seo.mp4, game.mp4, local.mp4, nft.mp4) inside 4:5 aspect-ratio cards. The FAQ uses AnimatePresence for smooth accordion expand/collapse with height transitions.",
      },
      {
        title: "Product Hunt Launch & Chrome Web Store Listing",
        description:
          "Envio was publicly launched on Product Hunt and listed on the Chrome Web Store, making it discoverable by thousands of Envato creators and content automation enthusiasts globally.",
        implementation:
          "The HeroSection embeds the official Product Hunt featured badge via the api.producthunt.com embed image endpoint, linking to the product page. The landing page includes a direct Chrome Web Store CTA deep-linking to the extension install page (gfiokclkcjplfodojgegbnfdoicpphip). Firebase Hosting serves the landing page from a custom domain with fast global CDN delivery. The public/ directory includes a hand-crafted sitemap.xml with page, section, and article URLs, a robots.txt with Googlebot directives, and a verified google01bee0396ba526a8.html for Google Search Console ownership.",
      },
      {
        title: "SEO-Optimised Landing Page with Keyword Architecture",
        description:
          "The landing page is built to rank for high-intent keywords like 'Envato bulk video generator', 'Chrome extension for Envato automation', and 'mass AI video generation'. All on-page SEO signals are manually crafted — not auto-generated.",
        implementation:
          "The index.html includes a fully structured <head> with a descriptive <title>, meta description targeting key intent phrases, Open Graph tags for social sharing, and Twitter card meta. The KEYWORD_RESEARCH.md and SEO_CHECKLIST.md files (tracked in the repo) document the keyword strategy, target queries, and implementation status. Section IDs (herosection, features, Howitworks, benefits, difference, usecase, faq) match the sitemap URL fragment identifiers for internal deep-linking. The Footer renders keyword-rich anchor text links (e.g. 'Bulk AI video Generator', 'Mass Envato Automation', 'Envato Automate Guide') to boost topical relevance signals.",
      },
      {
        title: "Responsive Design with Mobile-First Architecture",
        description:
          "Every section of the landing page — from the hero to the footer — is fully responsive and tested across mobile, tablet, and desktop viewports. The mobile nav collapses into a smooth slide-down drawer with a dark overlay.",
        implementation:
          "All layouts use Tailwind CSS 4 responsive breakpoint utilities (sm:, md:, lg:) with Flexbox and CSS Grid. The Navbar renders a hamburger button on small screens that toggles a max-h-0 → max-h-screen transition on the mobile drawer div, driven by a React useState hook. The HeroSection stat grid switches from 1-column on mobile to 4-column on md+. The Benefits section renders a 2-column xl: grid on large screens and a stacked layout on mobile. All images use responsive max-w-[] constraints with mx-auto and object-contain to prevent layout shifts.",
      },
    ],
  },
  {
    id: 7,
    title: "Autopik - Bulk AI Image Generator Chrome Extension",
    category: "Chrome Extension / AI Automation",
    description:
      "A production-grade Chrome Extension that automates Freepik Pikaso's AI image generation pipeline — bulk-generate hundreds of images from CSV, manual prompts, or AI-generated prompts, then auto-download them instantly. Launched on Product Hunt, with 10,000+ images generated, 5,000+ active users, and a 4.9 Chrome Web Store rating.",
    images: [
      "/images/Autopik/p1.png",
      "/images/Autopik/p2.png",
      "/images/Autopik/p3.png",
      "/images/Autopik/p4.png",
      "/images/Autopik/p5.png",
    ],
    technologies: [
      "React 19",
      "Vite",
      "TailwindCSS 4",
      "Framer Motion",
      "AOS",
      "Chrome Extension MV3",
      "React Router DOM",
      "Lucide React",
      "React Icons",
      "SEO Structured Data",
      "Firebase Hosting",
    ],
    liveUrl:
      "https://autopik.web.app/",
    githubUrl: "https://github.com/example",
    featured: true,
    color: "from-blue-500 to-cyan-400",
    longDescription:
      "Autopik is a Chrome Extension (Manifest V3) and production-deployed landing page that fully automates the Freepik Pikaso AI image generation workflow. Instead of manually entering prompts one-by-one, Autopik lets users upload a CSV file with hundreds of prompts, type them manually, or let built-in AI generate them — then auto-feeds each prompt into Freepik Pikaso, triggers generation, and auto-downloads every output to the user's device. The landing page itself is engineered for SEO and conversion — built with React 19 + Vite + TailwindCSS 4, featuring JSON-LD structured data, AOS scroll animations, Framer Motion hero animations, animated stat counters, a YouTube demo embed, a live comparison table, FAQ accordion, and a fully responsive Navbar with hash-based scroll navigation. The product launched on Product Hunt and is live on the Chrome Web Store with 5,000+ active users and a 4.9 star rating.",
    features: [
      {
        title: "Three Prompt Input Modes — CSV, Manual & AI-Generated",
        description:
          "Users choose how to feed prompts: upload a CSV file (bulk rows processed automatically), type prompts manually into the extension's input field, or let Autopik's built-in AI generate high-converting prompts. All three modes feed the Freepik Pikaso image engine without manual clicks.",
        implementation:
          "The extension's content script injects into the Freepik Pikaso tab and programmatically populates the prompt input, triggers the generate button via DOM events, and waits for image generation to complete before proceeding to the next prompt. CSV parsing is handled client-side using the FileReader API — each row becomes a queued prompt. The AI prompt generator calls an external LLM endpoint and populates the queue automatically. A queue controller manages sequential processing with configurable delays to avoid rate-limiting, writing state to chrome.storage.local for persistence across popup open/close cycles.",
      },
      {
        title: "Fully Automated Bulk Image Generation & Auto-Download",
        description:
          "Once started, Autopik runs fully hands-free — it generates images from every prompt in the queue and auto-downloads each result to the user's local device immediately after generation completes. No clicking, no waiting, no manual saves.",
        implementation:
          "A MV3 background service worker coordinates the automation pipeline: it injects the content script into the active Freepik Pikaso tab via chrome.scripting.executeScript, which uses MutationObserver to detect when an image generation finishes by watching for the download button to appear in the DOM. On detection, it programmatically clicks the download button, triggers the browser's native download via the chrome.downloads API, then signals the service worker to advance to the next prompt. Progress state (current index, total, status) is written to chrome.storage.local and reflected live in the extension popup.",
      },
      {
        title: "SEO-Optimized, High-Conversion Marketing Landing Page",
        description:
          "The Autopik landing page is engineered for organic discovery and maximum conversion — structured data, animated counters, comparison table, YouTube demo, FAQ accordion, and a sticky navbar — all built to rank for 'bulk AI image generator' and 'Freepik automation' keywords.",
        implementation:
          "The landing page uses a dedicated SEOStructuredData.jsx component that injects JSON-LD SoftwareApplication schema directly into the document head at render time, including name, description, category, and Chrome Web Store URL — giving Google rich snippet eligibility. An AOS (Animate On Scroll) library handles scroll-triggered reveals for all section elements, initialized globally in component useEffects. Framer Motion powers hero entrance animations (x-axis slide-ins per headline line, opacity transitions) and the animated stat counters in the hero use setInterval-driven state updates converging to final values (10,000+ images, 5,000+ users, 4.9 rating). The sticky Navbar with hash-based scroll navigation uses react-router-dom's useLocation + getElementById scrollIntoView for smooth section jumping from any page.",
      },
      {
        title: "Live Comparison Table — Manual vs Autopik",
        description:
          "A data-driven side-by-side comparison table shows exactly how Autopik outperforms manual Freepik usage across 6 key metrics — image generation speed (10x), bulk processing, download method, time for 100 images (30 min vs 5+ hrs), workflow type, and user interaction — culminating in a 'Save 90% of your time' result callout.",
        implementation:
          "AutopikComparison.jsx renders a 3-column grid for each comparison row from a comparisonData array. Each row is animated with Framer Motion's whileInView + IntersectionObserver for staggered scroll reveals (delay: idx * 0.1). The result footer uses a CSS @keyframes shimmer animation defined inline. AOS data attributes supplement with custom durations on header elements.",
      },
      {
        title: "Who Can Benefit — Audience Segmentation with Use Cases",
        description:
          "The landing page segments Autopik's target audiences into 5 groups — Stock Media Contributors, Designers, Social Media Creators, Marketing Teams, and E-commerce Owners — each with tailored benefits, plus a 4-panel 'Unlimited Possibilities' use case section for Bloggers, Agencies, Artists, and Educators.",
        implementation:
          "BenefitCard.jsx maps over a benefits array and animates each card in with Framer Motion's whileInView. Each card renders its benefit bullets with staggered x-axis Framer Motion reveals. UseCaseCard.jsx uses alternating left/right x-offset entrance animations (index % 2 === 0 ? -50 : 50) for a dynamic scroll experience. Both sections use TailwindCSS 4 responsive grid layouts (md:grid-cols-2 lg:grid-cols-5) for fluid multi-column presentation.",
      },
      {
        title: "Product Hunt Launch & Chrome Web Store Integration",
        description:
          "Autopik was commercially launched on Product Hunt with an official badge embed in the hero section. The Chrome Web Store listing drives real installs, and the hero stat counters (10,000+ images, 5,000+ users, 4.9 rating) reflect live traction — demonstrating real-world adoption and product-market fit.",
        implementation:
          "The Product Hunt badge is rendered as a standard <img> tag with the official Product Hunt embed URL, wrapped in an <a> linking to the product listing — immediately establishing social proof in the first viewport. The Chrome Web Store 'Install Now' CTA button appears in the Navbar, Hero, WhyChoose section, How It Works section, and Use Cases section — creating a persistent high-density CTA presence throughout the scroll journey. The extension's Chrome Web Store URL with UTM tracking parameters is consistently used across all CTA links for attribution tracking.",
      },
    ],
  },

  {
    id: 8,
    title: "ImageFX Automator - SaaS Product Landing Page",
    category: "Landing Page / SaaS",
    description:
      "A conversion-focused SaaS landing page for a live Chrome Extension product — built with React 19 + Vite. Features scroll-triggered animations, an interactive before/after workflow comparison, auto-scrolling AI image gallery, testimonials slider, FAQ accordion, and production-grade SEO. Deployed on Firebase at imagefxautomator.com and listed on Product Hunt.",
    images: [
      "/images/ImageFx/p1.png",
      "/images/ImageFx/p2.png",
      "/images/ImageFx/p3.png",
      "/images/ImageFx/p4.png",
      "/images/ImageFx/p5.png",
    ],
    technologies: [
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "AOS Animations",
      "Lucide React",
      "Feather Icons",
      "React Scroll",
      "React Router DOM",
      "Firebase Hosting",
      "Flowbite",
      "React Icons",
    ],
    liveUrl: "https://imagefx.web.app/",
    githubUrl: "https://github.com/example",
    featured: true,
    color: "from-indigo-400 to-purple-500",
    longDescription:
      "ImageFX Automator Landing Page is a production-deployed SaaS marketing site for a real, monetized Chrome Extension. The site is structured as a React 19 + Vite SPA with a dark glassmorphism aesthetic, Tailwind CSS v4 utility styling, and scroll-triggered AOS animations throughout. The hero section features a parallax mouse-tracking gradient background with animated entry transitions and live Chrome Web Store stats (10K+ images generated, 50+ users, 5-star rating). A 5-step 'How It Works' flow embeds a YouTube demo video with a custom glowing border effect. The before/after comparison panel uses an IntersectionObserver to animate side-by-side workflow cards showing manual vs. automated productivity. A continuous auto-scrolling image gallery showcases AI-generated outputs. The testimonials section is a manual slider supporting 3-up card display with dot navigation. The FAQ accordion uses animated max-height transitions for smooth open/close. Every page section is reachable via smooth-scroll navigation links. SEO is implemented end-to-end: HTML meta tags, Open Graph, Twitter Card, Schema.org JSON-LD SoftwareApplication markup, sitemap.xml, robots.txt, and a canonical URL. The site is deployed on Firebase Hosting with a custom domain and Google Search Console verified.",
    features: [
      {
        title: "Animated Hero Section with Live Product Stats",
        description:
          "Full-screen hero with a mouse-tracking parallax gradient, animated headline entrance, dual CTA buttons (Chrome Web Store install + smooth-scroll demo), a Product Hunt follow badge, and live stat counters (10K+ images, 50+ users, 5★ Chrome rating).",
        implementation:
          "BodyContent.jsx uses useState for visibility and mousePosition. A useEffect adds a mousemove listener that updates mousePosition on every frame, which drives a CSS gradient overlay via inline style. Entry animations are CSS transition classes toggled by an isVisible flag set on mount. Stats are static values from the Chrome Web Store review count and Google Analytics data, rendered as a flex row below the CTA buttons.",
      },
      {
        title: "Before/After Workflow Comparison Panel",
        description:
          "Side-by-side cards compare the old manual ImageFX workflow (1 hour → 100 images, rated SLOW) against the automated workflow (2 hours → 1000 images, rated ULTRA FAST). On mobile, a toggle switch lets users flip between the two views.",
        implementation:
          "BeforeAfterSection.jsx uses an IntersectionObserver (threshold: 0.1) to trigger entry animations via a CSS scale + opacity transition. The ComparisonCard sub-component is reused for both panels, receiving type ('before'/'after') and data as props. Desktop layout uses CSS Grid 2-col with an absolutely-positioned animated arrow between the cards. Mobile layout conditionally renders the active card based on an activeTab state driven by two toggle buttons.",
      },
      {
        title: "Auto-Scrolling AI Image Gallery",
        description:
          "A full-width, seamless looping image strip showcasing AI-generated stock images produced by the extension. The scroll pauses on hover to let users inspect individual images.",
        implementation:
          "Slider.jsx renders a deduplicated array of 12 images (originals + duplicates) inside a flex container. The infinite scroll is driven by a @keyframes streamScroll CSS animation defined in slider.css, applied to the flex wrapper via a Tailwind custom class. The hover:pause-animation class sets animation-play-state: paused on the wrapper element.",
      },
      {
        title: "YouTube Demo Embed with Glowing Border Effect",
        description:
          "The 'How It Works' section centres a YouTube tutorial video inside a glassmorphism card with a pulsing purple-to-blue gradient glow border that intensifies on hover.",
        implementation:
          "Howitworks.jsx renders a 16:9 responsive iframe (padding-bottom: 56.25% trick) inside a relative container. The glow is an absolutely-positioned sibling div with a blur filter and a gradient background, opacity 75 at rest and opacity 100 on group-hover via Tailwind group class. AOS data attributes handle the zoom-in scroll entrance animation.",
      },
      {
        title: "Testimonials Carousel with Dot Navigation",
        description:
          "A 3-up sliding testimonial carousel with 5 real-world user reviews, left/right chevron controls, and dynamic dot indicators. Each card features a star rating, blockquote, user avatar, role, and a category icon.",
        implementation:
          "WhatUsersSaySection.jsx tracks currentSlide state and maxSlide (testimonials.length - slidesToShow). The slider track uses a CSS transform: translateX() driven by currentSlide, calculated as -(currentSlide * (100 / slidesToShow))%. Width of the track is set to (testimonials.length / slidesToShow * 100)%. Dot indicators map over maxSlide + 1 entries, applying gradient-width expansion to the active dot. An IntersectionObserver on the slider wrapper triggers the fade-in entry animation.",
      },
      {
        title: "Full-Stack SEO Implementation",
        description:
          "End-to-end SEO covering HTML meta tags, Open Graph and Twitter Card sharing metadata, Schema.org JSON-LD SoftwareApplication structured data, a sitemap.xml, robots.txt, canonical URL, Google Search Console HTML file verification, and a visually-hidden SEO content component for keyword density.",
        implementation:
          "index.html carries all static meta, OG, Twitter, and JSON-LD tags. SEOContent.jsx renders a sr-only div with h2/h3/p/ul content targeting long-tail keywords (bulk AI image generation, Google Labs ImageFX automation, stock contributor software). sitemap.xml and robots.txt are in /public. The Google Search Console verification file (google01bee0396ba526a8.html) is also in /public. Firebase Hosting serves all static assets with the custom domain imagefxautomator.com.",
      },
      {
        title: "Smooth-Scroll Navigation & Accessible FAQ Accordion",
        description:
          "A sticky navbar with react-scroll smooth-scroll links to all sections (Features, How It Works, Who Can Use, FAQ), plus a fully animated FAQ accordion using max-height CSS transitions for smooth open/close without layout shift.",
        implementation:
          "Navigation.jsx uses the Link component from react-scroll with smooth={true} and duration={800}. FAQSection.jsx manages two Sets in state — activeItems for open panels and visibleItems for scroll-entrance animations. Toggling an FAQ item calls toggleItem() which adds/removes the index from activeItems. The answer panel uses max-h-0/max-h-96 + opacity Tailwind classes with a 500ms CSS transition, avoiding JavaScript-driven height calculations entirely.",
      },
    ],
  },
];

function ProjectContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");
  const project = projects.find((p) => p.id === Number(id)) || projects[0];

  // Image Slider Logic
  const [currentImg, setCurrentImg] = React.useState(0);
  const projectImages = project.images || [project.images];

  const nextImg = React.useCallback(() => {
    setCurrentImg((prev) => (prev + 1) % projectImages.length);
  }, [projectImages.length]);

  const prevImg = React.useCallback(() => {
    setCurrentImg(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length,
    );
  }, [projectImages.length]);

  // Auto-navigate logic
  React.useEffect(() => {
    if (projectImages.length <= 1) return;

    const interval = setInterval(() => {
      nextImg();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [nextImg, projectImages.length]);

  return (
    <div className="min-h-screen bg-black text-white font-NeueHaas selection:bg-blue-400/30">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium tracking-wide">
              Back to Projects
            </span>
          </button>
{/* 
          <div className="flex items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold overflow-hidden flex items-center gap-2 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
                Live Demo <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          </div> */}
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
            <div>
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-blue-400/10 border border-blue-400/20 text-blue-400 text-xs font-bold rounded-full uppercase tracking-widest">
                    {project.category}
                  </span>
                  {project.company && (
                    <span className="flex items-center gap-1.5 text-white/40 text-xs font-medium uppercase tracking-widest">
                      <Building2 className="w-3.5 h-3.5" />
                      {project.company}
                    </span>
                  )}
                </div>
                {(project as any).status && (
                  <div>
                    <span className="px-3 py-1  border-red-500/20 text-red-500 text-xs font-bold rounded-full uppercase tracking-widest animate-pulse">
                      {(project as any).status}
                    </span>
                  </div>
                )}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                {project.title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={i % 2 === 1 ? "text-white/30" : "text-white"}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>
              <p className="text-xl text-white/60 leading-relaxed max-w-xl">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-6 lg:justify-end">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
                  Role
                </span>
                <span className="text-sm font-medium">Software Engineer</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
                  Year
                </span>
                <span className="text-sm font-medium">2026</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
                  Deliverable
                </span>
                <span className="text-sm font-medium">Web Application</span>
              </div>
            </div>
          </div>

          {/* Hero Image / Slider Section */}
          <div className="relative aspect-[16/9] w-full rounded-[2rem] overflow-hidden border border-white/5 mb-20 group bg-white/[0.01]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={projectImages[currentImg]}
                  alt={`${project.title} - Image ${currentImg + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls (Only if multiple images exist) */}
            {projectImages.length > 1 && (
              <>
                <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      prevImg();
                    }}
                    className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all pointer-events-auto"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      nextImg();
                    }}
                    className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all pointer-events-auto"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Progress Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {projectImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImg(i)}
                      className={`h-1 rounded-full transition-all duration-300 ${i === currentImg ? "w-8 bg-white" : "w-2 bg-white/20"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-blue-400 rounded-full" />
                  Overview
                </h2>
                <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                  <p>{project.longDescription}</p>
                  <p>
                    Built with scalability and performance in mind, this project
                    represents the pinnacle of modern web development practices.
                    Every line of code was crafted to ensure the best possible
                    user experience while maintaining a clean, maintainable
                    codebase.
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-12">
                  <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
                    Core Engineering
                  </h2>
                  <div className="h-px grow bg-gradient-to-r from-blue-400/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 gap-12">
                  {project.features?.map((feature: any, i: number) => (
                    <div key={i} className="group relative">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        {/* Number & Title */}
                        <div className="md:col-span-4">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] font-mono text-white/20 group-hover:text-blue-400/50 transition-colors">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <h3 className="text-lg  text-white tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                              {feature.title}
                            </h3>
                          </div>
                        </div>

                        {/* Descriptions */}
                        <div className="md:col-span-8 flex flex-col gap-4">
                          <p className="text-white/50 text-sm leading-relaxed border-l border-white/5 pl-6 group-hover:border-white/20 transition-colors">
                            {feature.description}
                          </p>

                          <div className="pl-6 flex items-start gap-2">
                            <span className="text-[10px] uppercase tracking-wider text-white/40 font-bold shrink-0 mt-0.5">
                              How:
                            </span>
                            <p className="text-[11px] text-white/30 leading-relaxed font-medium italic">
                              {feature.implementation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-10">
              <div className="sticky top-32">
                <div className="mb-10">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-6 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-400" />
                    Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm font-medium text-white/60 hover:text-white transition-colors cursor-default after:content-[','] last:after:content-[''] after:mr-1.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-8 border-t border-white/5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 text-white  overflow-hidden transition-all duration-300"
                  >
                    <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center justify-between w-full group-hover:text-black transition-colors duration-300">
                      Live Project
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </a>
                  <button
                    disabled
                    className="group relative flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10  overflow-hidden cursor-not-allowed w-full text-left"
                  >
                    <span className="absolute inset-0 bg-red-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center justify-between w-full group-hover:text-red-400 transition-colors duration-300">
                      <span className="group-hover:hidden">
                        View Source Code
                      </span>
                      <span className="hidden group-hover:inline flex items-center gap-2">
                        Not allowed to view code
                      </span>
                      <Github className="w-5 h-5 opacity-50" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}

export default function ProjectView() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
        </div>
      }
    >
      <ProjectContent />
    </Suspense>
  );
}
