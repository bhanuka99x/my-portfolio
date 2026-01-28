"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  Layers,
  Sparkles,
  Filter,
  ArrowUpRight,
} from "lucide-react";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web App", "E-Commerce", "Portfolio", "SaaS"];

  const projects = [
    {
      id: 1,
      title: "AI Task Management Platform",
      category: "SaaS",
      description:
        "A modern task management platform with AI-powered suggestions, real-time collaboration, and advanced analytics dashboard.",
      image: "/images/project1.jpg",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "tRPC"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: 2,
      title: "E-Commerce Marketplace",
      category: "E-Commerce",
      description:
        "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      image: "/images/project2.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
      color: "from-purple-400 to-pink-400",
    },
    {
      id: 3,
      title: "Real Estate Portal",
      category: "Web App",
      description:
        "Property listing platform with advanced search, virtual tours, and real-time chat for buyers and sellers.",
      image: "/images/project3.jpg",
      technologies: ["Next.js", "Supabase", "Tailwind", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      color: "from-green-400 to-emerald-400",
    },
    {
      id: 4,
      title: "Creative Agency Portfolio",
      category: "Portfolio",
      description:
        "Stunning portfolio website for a creative agency with smooth animations and interactive elements.",
      image: "/images/project4.jpg",
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
      image: "/images/project5.jpg",
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
      image: "/images/project6.jpg",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "WebSocket"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      color: "from-indigo-400 to-purple-400",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <section
      id="projects"
      className="min-h-screen text-white py-20 font-bilmond"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="text-amber-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-NeueHaas">
            A showcase of my recent work - from concept to deployment
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-lg shadow-amber-400/50"
                  : "bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-white/10 hover:border-amber-400/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20 bg-amber-400/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 border border-white/20">
                    <Sparkles className="w-3 h-3 text-black" />
                    <span className="text-black text-xs font-bold">
                      Featured
                    </span>
                  </div>
                )}

                {/* Gradient Glow */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
                ></div>

                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  {/* Placeholder with gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="w-16 h-16 text-white/20" />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm border border-white/30 p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm border border-white/30 p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 relative">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-400/20 backdrop-blur-sm border border-blue-400/30 text-blue-400 text-xs font-bold rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300 mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 font-NeueHaas">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-xs text-gray-400 group-hover:bg-white/10 group-hover:border-amber-400/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-amber-400/10 to-blue-400/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">30+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">
                100%
              </div>
              <div className="text-gray-400 text-sm">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">
                24/7
              </div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6 font-NeueHaas">
            Have a project in mind? Let's bring it to life together!
          </p>
          <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold px-10 py-4 rounded-2xl hover:shadow-lg hover:shadow-amber-400/50 hover:scale-105 transition-all duration-300">
            Start a Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
