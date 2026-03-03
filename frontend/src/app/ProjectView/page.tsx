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
  ChevronRight
} from "lucide-react";

// This would ideally come from a shared constants file
const projects = [
  {
  id: 1,
  title: "TabTask - Team Task Management Platform",
  category: "SaaS",
  company: "Oxymai (PVT) LTD",
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
  liveUrl: "https://example.com",
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
    "/images/bgRemove/p8.png"
  ],
  technologies: ["React 19", "Node.js", "Firebase", "Socket.io", "Replicate AI", "Tailwind CSS", "Vite"],
  liveUrl: "https://example.com",
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
        "Backend uses Socket.io rooms (per user and per folder) to emit granular events (bgRemove:start, bgRemove:progress, bgRemove:complete, bgRemove:error). The React frontend subscribes to these events via a singleton WebSocket service, automatically reconnecting up to 5 times on failure."
    },
    {
      title: "Bulk Folder Processing with ZIP Export",
      description:
        "Users can upload up to 50 images at once into named folders, trigger AI processing in bulk, and download all results as a single ZIP file.",
      implementation:
        "Folder lifecycle is managed across Firestore documents with atomic status tracking (uploaded → queued → processing → completed). The Node.js backend uses the 'archiver' library to stream-compress processed images into a ZIP on demand, served directly without temporary disk storage."
    },
    {
      title: "Credit-Based Usage System with Atomic Transactions",
      description:
        "Each processed image costs 2 credits. The system prevents race conditions, double-deductions, and negative balances even under concurrent requests.",
      implementation:
        "Implemented using Firestore transactions (db.runTransaction) that read and write credits atomically. If processing fails, credits are restored server-side. All credit operations are protected by Firebase Auth middleware that verifies JWT tokens and matches userId from route params to prevent impersonation."
    },
    {
      title: "Multi-Layer Security Architecture",
      description:
        "The platform implements enterprise-grade security across transport, application, and data layers — protecting against XSS, CSRF, file injection, and API abuse.",
      implementation:
        "Security stack includes: Helmet.js with custom CSP headers, CORS whitelist via environment config, multi-tier rate limiting (express-rate-limit per endpoint type), MIME-type + extension + null-byte file validation via Multer, and AES-256-GCM encrypted localStorage for client-side data using the Web Crypto API with PBKDF2 key derivation."
    }
  ]
},

  // Adding placeholders for others to match ProjectsSection IDs
 {
  id: 3,
  title: "Reframer — AI Video Resizer",
  category: "SaaS / AI Tool",
  status: "Live",
  description:
    "AI-powered video reframing SaaS with token-based monetization, multi-aspect-ratio output, Chrome extension support, Firebase Auth, and a real-time conversion dashboard.",
  images: [
    "/images/reframer/p1.png",
    "/images/reframer/p2.png",
    "/images/reframer/p3.png",
    "/images/reframer/p4.png",
    "/images/reframer/p5.png",
  ],
  technologies: ["React 19", "Vite", "Node.js", "Express", "Firebase", "Replicate AI", "Framer Motion", "Tailwind CSS"],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/example",
  featured: true,
  color: "from-violet-500 to-indigo-500",
  longDescription:
    "Reframer is a full-stack AI SaaS platform that intelligently reframes videos for any social media format — TikTok (9:16), YouTube (16:9), Instagram (1:1), Cinematic (21:9), and 3 more — using Luma AI's 'reframe-video' model via the Replicate API. The platform ships as both a web app and a Chrome Extension (Manifest V3) with side-panel support, sharing the same backend. The backend is a RESTful Express API secured with Firebase Admin JWT verification, per-route rate limiting, and Multer file validation (500MB cap, MIME-type checked). Users manage their account through a full profile dashboard with avatar upload to Firebase Storage, email change with verification flow, password reset, and plan management. Files are stored securely and auto-deleted after 7 days via signed URL expiry.",
  features: [
    {
      title: "AI-Powered Video Reframing via Luma AI + Replicate",
      description:
        "Users upload a video, pick an aspect ratio (1:1, 3:4, 4:3, 9:16, 16:9, 9:21, 21:9), and optionally write an AI prompt — the platform intelligently reframes the shot with subject tracking, zero manual cropping.",
      implementation:
        "The video is uploaded to Firebase Storage first, generating a signed URL. That URL is sent to the Luma 'reframe-video' model through the Replicate SDK. The controller handles the full pipeline: upload original → deduct tokens → call Replicate → download processed output → re-upload processed video to Firebase Storage → update Firestore metadata with both URLs and a 'processed' status flag. Tokens are automatically refunded server-side in the catch block if Replicate fails, preventing silent credit losses.",
    },
    {
      title: "Token-Based Usage System with Failure Refunds",
      description:
        "Each video conversion costs 5 tokens. The system blocks conversions on insufficient balance and automatically restores tokens if AI processing fails — no silent credit losses.",
      implementation:
        "Token balance is pre-checked client-side from Firestore before hitting the API. On the server, tokens are deducted via deductTokens() only after a successful Firebase Storage upload. If the Replicate processing step throws, an addTokens() call in the catch block restores the exact deducted amount. The client also redirects to the pricing section if the user runs out — prompting an upsell without breaking the flow.",
    },
    {
      title: "Chrome Extension with Manifest V3 & Side Panel",
      description:
        "The full platform is also available as a Chrome Extension that opens in Chrome's native side panel — users can reframe videos directly from their browser without switching tabs.",
      implementation:
        "Built with Vite + React as a separate app in the /extention directory, sharing the same Firebase Auth and backend API. Uses Chrome Manifest V3 with a background.js service worker to handle extension lifecycle. CORS on the Express backend explicitly whitelists chrome-extension:// origins via a regex pattern. A custom build script copies manifest.json and background.js into the Vite dist output for direct Chrome loading.",
    },
    {
      title: "Secure REST API with JWT Auth, Rate Limiting & File Validation",
      description:
        "Every endpoint is protected by Firebase Admin JWT verification. Rate limiting shields against abuse, and every uploaded file is validated for format, MIME type, and size before processing begins.",
      implementation:
        "A custom authMiddleware extracts Bearer tokens and calls admin.auth().verifyIdToken() — the decoded UID scopes all Firestore and Storage operations per user. Two rate limiters are applied: GeneralRequestLimiter (100 req / 5s) and historyGetLimiter (5 req / min). Multer validates uploads with an allowedMimetypes whitelist (MP4/AVI/MOV/MKV/WEBM) and enforces a strict 500MB size cap before any data is written.",
    },
    {
      title: "Full User Profile System with Secure Email Change Flow",
      description:
        "Users can update their display name, profile photo, and email address. Email changes are protected by a verification flow — the new address must be confirmed before it takes effect.",
      implementation:
        "Profile photos are uploaded directly to Firebase Storage under reframer-profile-images/{uid} using uploadBytes, with getDownloadURL providing the accessible URL. Name and image changes update both Firebase Auth (updateProfile) and Firestore simultaneously. Email changes use verifyBeforeUpdateEmail() from Firebase Auth — the new email is stored as pendingEmail in Firestore until the link is clicked. Error cases (requires-recent-login, email-already-in-use) are caught and surfaced to the user via a custom alert context.",
    },
  ],
},

  {
    id: 4,
    title: "Creative Agency Portfolio",
    category: "Portfolio",
    description: "Stunning portfolio website for a creative agency with smooth animations and interactive elements.",
    image: "/images/beautiful-shot-snowy-mountain-sunset.jpg",
    technologies: ["Next.js", "GSAP", "Three.js", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    color: "from-orange-400 to-red-400",
    longDescription: "An award-worthy portfolio project showcasing high-end animations and interactive WebGL components. Designed to leave a lasting impression on visitors.",
    features: ["Smooth GSAP animations", "Interactive Three.js elements", "Responsive design", "Dynamic case studies"]
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    category: "Web App",
    description: "Comprehensive fitness tracking application with workout plans, nutrition tracking, and progress analytics.",
    image: "/images/beautiful-shot-snowy-mountain-sunset.jpg",
    technologies: ["React", "Express", "MySQL", "Chart.js", "JWT"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    color: "from-blue-400 to-cyan-400",
    longDescription: "A complete health and fitness companion that helps users track their physical activities and diet, providing visual feedback through interactive charts.",
    features: ["Workout logging", "Calorie counter", "Progress visualization", "Social sharing"]
  },
  {
    id: 6,
    title: "Restaurant Booking System",
    category: "Web App",
    description: "Online reservation system for restaurants with menu management, booking calendar, and customer reviews.",
    image: "/images/beautiful-shot-snowy-mountain-sunset.jpg",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "WebSocket"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    color: "from-indigo-400 to-purple-400",
    longDescription: "A sophisticated booking solution and management system for restaurants, allowing customers to book tables and browse menus in real-time.",
    features: ["Real-time table tracking", "Automated email confirmations", "Staff management dashboard", "Online menu editing"]
  }
];

function ProjectContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");
  const project = projects.find((p) => p.id === Number(id)) || projects[0];
  
  // Image Slider Logic
  const [currentImg, setCurrentImg] = React.useState(0);
  const projectImages = project.images || [project.image];

  const nextImg = React.useCallback(() => {
    setCurrentImg((prev) => (prev + 1) % projectImages.length);
  }, [projectImages.length]);

  const prevImg = React.useCallback(() => {
    setCurrentImg((prev) => (prev - 1 + projectImages.length) % projectImages.length);
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
            <span className="text-sm font-medium tracking-wide">Back to Projects</span>
          </button>
          
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
          </div>
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
                {project.title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 === 1 ? "text-white/30" : "text-white"}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="text-xl text-white/60 leading-relaxed max-w-xl">
                {project.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 lg:justify-end">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Role</span>
                <span className="text-sm font-medium">Software Engineer</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Year</span>
                <span className="text-sm font-medium">2026</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Deliverable</span>
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
                    onClick={(e) => { e.preventDefault(); prevImg(); }}
                    className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all pointer-events-auto"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={(e) => { e.preventDefault(); nextImg(); }}
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
                    Built with scalability and performance in mind, this project represents the pinnacle 
                    of modern web development practices. Every line of code was crafted to ensure the 
                    best possible user experience while maintaining a clean, maintainable codebase.
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
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <h3 className="text-lg font-bold text-white tracking-tight group-hover:translate-x-1 transition-transform duration-300">
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
                            <span className="text-[10px] uppercase tracking-wider text-white/40 font-bold shrink-0 mt-0.5">How:</span>
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
                    className="group relative flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold overflow-hidden transition-all duration-300"
                  >
                    <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center justify-between w-full group-hover:text-black transition-colors duration-300">
                      Launch Project
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </a>
                  <button 
                    disabled
                    className="group relative flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 font-bold overflow-hidden cursor-not-allowed w-full text-left"
                  >
                    <span className="absolute inset-0 bg-red-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center justify-between w-full group-hover:text-red-400 transition-colors duration-300">
                      <span className="group-hover:hidden">View Source Code</span>
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
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
      </div>
    }>
      <ProjectContent />
    </Suspense>
  );
}
