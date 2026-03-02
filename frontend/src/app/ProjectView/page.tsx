"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Globe, 
  Calendar, 
  Tag, 
  ShieldCheck,
  Building2,
  ArrowUpRight
} from "lucide-react";

// This would ideally come from a shared constants file
const projects = [
  {
    id: 1,
    title: "Task Management Platform",
    category: "SaaS",
    company: "Oxymai (PVT) LTD",
    description:
      "A modern task management platform with AI-powered suggestions, real-time collaboration, and advanced analytics dashboard.",
    image: "/project/Screenshot_104.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "tRPC"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
    color: "from-blue-400 to-cyan-400",
    longDescription: "This task management platform was built to streamline team workflows using cutting-edge technologies. It features a robust real-time synchronization engine, allowing multiple users to collaborate on tasks simultaneously. The AI component provides intelligent task prioritization and workload suggestions based on historical data.",
    features: [
      {
        title: "Real-time collaboration",
        description: "Enables multiple users to edit and view tasks simultaneously without page refreshes.",
        implementation: "Implemented using WebSockets and Socket.io for bi-directional communication, ensuring sub-100ms latency."
      },
      {
        title: "AI-driven task prioritization",
        description: "Automatically organizes user workloads based on deadlines, importance, and historical completion rates.",
        implementation: "Developed using OpenAI API integrations with custom prompt engineering to analyze task metadata."
      },
      {
        title: "Comprehensive analytics dashboard",
        description: "Provides deep insights into team productivity and project progress through interactive visualizations.",
        implementation: "Built with Tremor and Recharts, processing large datasets efficiently with Next.js Server Components."
      }
    ]
  },
  {
    id: 2,
    title: "E-Commerce Marketplace",
    category: "E-Commerce",
    description:
      "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
    image: "/images/beautiful-shot-snowy-mountain-sunset.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
    color: "from-purple-400 to-pink-400",
    longDescription: "A scalable e-commerce solution designed for high-traffic marketplaces. It includes a custom-built inventory management system, multi-vendor support, and integrated payment processing via Stripe. The frontend is optimized for conversion with a clean, responsive design.",
    features: [
      {
        title: "Secure payment processing",
        description: "A robust checkout system that handles multiple currencies and payment methods securely.",
        implementation: "Integrated Stripe Elements with webhooks to handle asynchronous payment events and inventory updates."
      },
      {
        title: "Advanced search & filtering",
        description: "Allows customers to find products instantly across thousands of listings with multiple criteria.",
        implementation: "Utilized MongoDB Atlas Search with custom indexing to provide fast, fuzzy search capabilities."
      }
    ]
  },
  // Adding placeholders for others to match ProjectsSection IDs
  {
    id: 3,
    title: "Real Estate Portal",
    category: "Web App",
    description: "Property listing platform with advanced search, virtual tours, and real-time chat for buyers and sellers.",
    image: "/images/beautiful-shot-snowy-mountain-sunset.jpg",
    technologies: ["Next.js", "Supabase", "Tailwind", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
    color: "from-green-400 to-emerald-400",
    longDescription: "A specialized real estate platform focusing on user experience. It provides high-quality virtual tours and seamless communication between agents and potential buyers.",
    features: ["3D Virtual Tours", "Map-based search", "Real-time chat", "Document sharing"]
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
    color: "from-yellow-400 to-amber-400",
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

  return (
    <div className="min-h-screen bg-black text-white font-NeueHaas selection:bg-amber-400/30">
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
              className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-amber-400 transition-colors flex items-center gap-2"
            >
              Live Demo <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold rounded-full uppercase tracking-widest">
                  {project.category}
                </span>
                {project.company && (
                   <span className="flex items-center gap-1.5 text-white/40 text-xs font-medium uppercase tracking-widest">
                    <Building2 className="w-3.5 h-3.5" />
                    {project.company}
                   </span>
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
                <span className="text-sm font-medium">Full Stack Developer</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Year</span>
                <span className="text-sm font-medium">2024</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Deliverable</span>
                <span className="text-sm font-medium">Web Application</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[16/9] w-full rounded-[2rem] overflow-hidden border border-white/10 mb-20 group">
             <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-amber-400 rounded-full" />
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
                  <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
                    Core Engineering
                  </h2>
                  <div className="h-px grow bg-gradient-to-r from-amber-400/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 gap-12">
                  {project.features?.map((feature: any, i: number) => (
                    <div key={i} className="group relative">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        {/* Number & Title */}
                        <div className="md:col-span-4">
                          <div className="flex items-center gap-3 mb-2">
                             <span className="text-[10px] font-mono text-white/20 group-hover:text-amber-400/50 transition-colors">
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
                    <span className="w-1 h-1 rounded-full bg-amber-400" />
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
                    className="flex items-center justify-between p-4 rounded-2xl bg-white text-black font-bold hover:bg-amber-400 transition-all group"
                  >
                    Launch Project
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-all group"
                  >
                    View Source Code
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}

export default function ProjectView() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-400"></div>
      </div>
    }>
      <ProjectContent />
    </Suspense>
  );
}
