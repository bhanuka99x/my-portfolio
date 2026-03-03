"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ExternalLink,
  Github,
  Sparkles,
  ArrowUpRight,
  Building2,
} from "lucide-react";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const router = useRouter();

  const handleProjectClick = (projectId: number) => {
    router.push(`/ProjectView?id=${projectId}`);
  };

  const categories = useMemo(() => ["All", "Web App", "E-Commerce", "Portfolio", "SaaS"], []);

  const projects = useMemo(() => [
   {
  id: 1,
  title: "TabTask - Team Task Management Platform",
  category: "SaaS",
  company: "Oxymai (PVT) LTD",
  description:
    "A collaborative team task management platform with organization-based workspaces, real-time sync via Socket.IO, Kanban boards with drag-and-drop, advanced analytics, and a granular role-based permissions system.",
  image: "/project/Screenshot_104.png",
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
    "Supabase",
    "AWS S3",
    "JWT",
  ],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/example",
  featured: true,
  color: "from-blue-400 to-cyan-400",
},

   {
  id: 2,
  title: "AI Background Remover",
  category: "SaaS / AI Tool",
  company: "Oxymai (PVT) LTD",
  status: "Ongoing Development",
  description:
    "Full-stack AI-powered background removal platform with real-time WebSocket processing, credit-based usage system, bulk folder management, and secure Firebase authentication.",
  image: "/images/bgRemove/p2.png",
  technologies: ["React", "Node.js", "Firebase", "Socket.io", "Replicate AI"],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/example",
  featured: true,
  color: "from-blue-400 to-indigo-500",
},

 {
  id: 3,
  title: "Reframer - AI Video Resizer",
  category: "SaaS / AI Tool",
  company: "Oxymai (PVT) LTD",
  description:
    "AI-powered video reframing SaaS with token-based monetization, multi-aspect-ratio output, Chrome extension support, Firebase Auth, and a real-time conversion dashboard.",
  image: "/images/reframer/p1.png",
  technologies: ["React 19", "Vite", "Node.js", "Express", "Firebase", "Replicate AI", "Framer Motion", "Tailwind CSS"],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/example",
  featured: true,
  color: "from-violet-500 to-indigo-500",
},


    {
      id: 4,
      title: "Creative Agency Portfolio",
      category: "Portfolio",
      description:
        "Stunning portfolio website for a creative agency with smooth animations and interactive elements.",
      image: "/images/beautiful-shot-snowy-mountain-sunset.jpg",
      technologies: ["Next.js", "GSAP", "Three.js", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      color: "from-orange-400 to-red-400",
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      category: "Web App",
      description:
        "Comprehensive fitness tracking application with workout plans, nutrition tracking, and progress analytics.",
      image: "/images/beautiful-shot-snowy-mountain-sunset.jpg",
      technologies: ["React", "Express", "MySQL", "Chart.js", "JWT"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      color: "from-yellow-400 to-amber-400",
    },
    {
      id: 6,
      title: "Restaurant Booking System",
      category: "Web App",
      description:
        "Online reservation system for restaurants with menu management, booking calendar, and customer reviews.",
      image: "/images/beautiful-shot-snowy-mountain-sunset.jpg",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "WebSocket"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      color: "from-indigo-400 to-purple-400",
    },
  ], []);

  const filteredProjects = useMemo(() => 
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter),
    [activeFilter, projects]
  );

  return (
    <section
      id="projects"
      className="min-h-screen text-white py-16 font-NeueHaas"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        <div className="mb-10 sm:mb-14">
          <p className="text-[11px] tracking-[0.28em] uppercase text-white/40 mb-3">Selected Work</p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Featured <span className="text-white/35">Projects</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap border transition-colors ${
                activeFilter === category
                  ? "bg-white text-black border-white"
                  : "border-white/15 text-white/65 hover:text-white hover:border-white/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group relative bg-black border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 h-125 flex flex-col will-change-transform cursor-pointer"
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-white px-3 py-1 rounded-full flex items-center gap-2 border border-white/20">
                  <Sparkles className="w-3 h-3 text-black" />
                  <span className="text-black text-xs font-bold">Featured</span>
                </div>
              )}

                <div className="relative h-48 bg-gray-800 overflow-hidden transform-gpu">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    className="object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                  />
                </div>

                <div className="p-6 relative flex flex-col grow overflow-hidden">
                  <div className="flex flex-col gap-3 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-blue-400/20 backdrop-blur-sm  border-blue-400/30 text-blue-400 text-xs  rounded-full">
                        {project.category}
                      </span>
                      {(project as any).company && (
                        <div className="flex items-center gap-1.5 text-gray-400">
                          <Building2 className="w-3.5 h-3.5" />
                          <span className="text-[10px] uppercase tracking-wider font-bold">
                            {(project as any).company}
                          </span>
                        </div>
                      )}
                    </div>
                    {(project as any).status && (
                      <div>
                        <span className="px-2 py-0.5  border-red-500/30 text-red-500 text-[10px] font-bold rounded-full animate-pulse">
                          {(project as any).status}
                        </span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl  text-white group-hover:text-blue-400 transition-colors duration-300 mb-3 line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 font-NeueHaas line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 overflow-hidden">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-xs text-gray-400 group-hover:bg-white/10 group-hover:border-blue-400/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-gray-500 py-1">+{project.technologies.length - 4}</span>
                    )}
                  </div>

                   <div className="mt-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project.id);
                      }}
                      className="inline-flex items-center gap-2 text-blue-200 text-sm hover:gap-3 transition-all duration-300"
                    >
                      View Project
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
