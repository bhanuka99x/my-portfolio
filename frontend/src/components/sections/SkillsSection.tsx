"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Server,
  Database,
  Cloud,
  TestTube,
  Shield,
  Wrench,
  Users,
  Layout,
  Lock,
  GitBranch,
  Terminal,
  Globe,
  Boxes,
  Zap,
} from "lucide-react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skillsData = [
    {
      id: 1,
      category: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-400",
      skills: [
        "TypeScript",
        "JavaScript (ES6+)",
        "SQL",
        "Java",
        "C#",
        "Bash/Shell Scripting",
        "HTML5",
        "CSS3",
      ],
    },
    {
      id: 2,
      category: "Frontend Development & UI/UX",
      icon: <Palette className="w-6 h-6" />,
      color: "from-purple-400 to-pink-400",
      skills: [
        "React.js",
        "Next.js (App Router)",
        "Tailwind CSS",
        "Framer Motion",
        "Redux / Zustand",
        "Figma",
        "Responsive Design",
      ],
    },
    {
      id: 3,
      category: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-400 to-emerald-400",
      skills: [
        "Node.js",
        "Express.js",
        "NestJS",
        "RESTful APIs",
        "WebSockets",
        "tRPC",
        "Stripe / PayPal",
        "JWT & OAuth 2.0",
      ],
    },
    {
      id: 4,
      category: "Database Management",
      icon: <Database className="w-6 h-6" />,
      color: "from-orange-400 to-red-400",
      skills: [
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Supabase",
        "Prisma ORM",
        "Database Design",
        "Indexing",
      ],
    },
    {
      id: 5,
      category: "DevOps & Deployment",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-cyan-400 to-blue-400",
      skills: [
        "Docker",
        "CI/CD (GitHub Actions)",
        "Linux Server",
        "Nginx",
        "SSL/TLS (Certbot)",
        "DNS Configuration",
        "AWS (EC2/S3)",
      ],
    },
    {
      id: 6,
      category: "Testing & QA",
      icon: <TestTube className="w-6 h-6" />,
      color: "from-yellow-400 to-amber-400",
      skills: [
        "Unit Testing (Vitest/Jest)",
        "E2E Testing (Playwright)",
        "API Testing (Postman)",
        "Error Monitoring (Sentry)",
      ],
    },
    {
      id: 7,
      category: "System Architecture",
      icon: <Boxes className="w-6 h-6" />,
      color: "from-indigo-400 to-purple-400",
      skills: [
        "System Design",
        "Microservices",
        "OWASP Top 10",
        "Load Balancing",
        "Scalable Infrastructure",
      ],
    },
    {
      id: 8,
      category: "Developer Tools",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-slate-400 to-gray-400",
      skills: [
        "Git & GitHub",
        "VS Code",
        "GitHub Copilot",
        "Cursor AI",
        "Vite",
        "Turborepo",
      ],
    },
    {
      id: 9,
      category: "Professional Skills",
      icon: <Users className="w-6 h-6" />,
      color: "from-rose-400 to-pink-400",
      skills: [
        "End-to-End Ownership",
        "Async Communication",
        "Strategic Planning",
        "Problem Solving",
        "Continuous Learning",
        "Time Management",
      ],
    },
  ];

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
  };

  return (
    <section id="skills" className="min-h-screen text-white py-20 font-bilmond">
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
            Technical <span className="text-amber-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-NeueHaas">
            A comprehensive toolkit for building robust, scalable, and modern web applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              onHoverStart={() => setActiveCategory(category.category)}
              onHoverEnd={() => setActiveCategory(null)}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500 cursor-pointer"
            >
              {/* Gradient Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
              ></div>

              {/* Content */}
              <div className="relative">
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`bg-gradient-to-br ${category.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-black">{category.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm text-gray-300 group-hover:bg-white/20 group-hover:border-amber-400/30 group-hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <div className="absolute top-0 right-0 bg-amber-400/20 backdrop-blur-sm border border-amber-400/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
                  {category.skills.length} skills
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-amber-400/10 to-blue-400/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
              <div className="text-gray-400 text-sm">Total Technologies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">9</div>
              <div className="text-gray-400 text-sm">Skill Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">3+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-gray-400 text-sm">Learning Mindset</div>
            </div>
          </div>
        </motion.div>

        {/* Certifications or Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 font-NeueHaas">
            💡 Constantly learning and adapting to new technologies and industry best practices
          </p>
        </motion.div>
      </div>
    </section>
  );
}
