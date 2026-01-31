"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Rocket,
  Users,
  Award,
  Coffee,
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowLeft,
} from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "../../../styles/about.css";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs`;

export default function AboutSection() {
  const [showCV, setShowCV] = useState(false);
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  const stats = [
    {
      label: "Years Experience",
      value: "1+",
      icon: <Award className="w-5 h-5" />,
    },
    {
      label: "Projects Completed",
      value: "13+",
      icon: <Rocket className="w-5 h-5" />,
    },
    {
      label: "Happy Clients",
      value: "30+",
      icon: <Users className="w-5 h-5" />,
    },
    {
      label: "Cups of Coffee",
      value: "∞",
      icon: <Coffee className="w-5 h-5" />,
    },
  ];

  const skills = [
    {
      name: "Frontend Development",
      level: 95,
      icon: <Code2 className="w-5 h-5" />,
    },
    { name: "UI/UX Design", level: 88, icon: <Palette className="w-5 h-5" /> },
    {
      name: "Backend Development",
      level: 85,
      icon: <Code2 className="w-5 h-5" />,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:contact@example.com",
      label: "Email",
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
    <section
      id="about"
      className="min-h-screen text-white  py-20  font-bilmond"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <motion.span className="text-amber-400">Me</motion.span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Side - Image & Status */}
          <div className="relative">
            <div className="relative group">
              {/* Image Container */}
              {!showCV ? (
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-2 overflow-hidden">
                  <img
                    src="/images/about.jpg"
                    alt="Bhanuka Gihan"
                    className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition duration-500"
                  />

                  {/* CV Buttons */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[calc(100%-3rem)]">
                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowCV(true)}
                        className="animated-button backdrop-blur-sm mx-auto bg-gray-700"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="arr-2"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                        <span className="text">View My Resume</span>
                        <span className="circle"></span>
                        <svg
                          viewBox="0 0 24 24"
                          className="arr-1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 overflow-hidden">
                  {/* CV Viewer */}
                  <div
                    className="bg-gray-900 rounded-2xl overflow-auto relative"
                    style={{ height: "600px" }}
                  >
                    <div className="flex flex-col items-center p-4">
                      <Document
                        file="/cv/se-intern.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={
                          <div className="flex items-center justify-center h-96 text-white">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-400"></div>
                          </div>
                        }
                        error={
                          <div className="flex items-center justify-center h-96 text-white">
                            <p>Failed to load PDF file.</p>
                          </div>
                        }
                      >
                        {Array.from(new Array(numPages), (el, index) => (
                          <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            width={Math.min(window.innerWidth * 0.4, 600)}
                            className="mb-4"
                          />
                        ))}
                      </Document>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => setShowCV(false)}
                      className="flex-1 flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/20 hover:border-amber-400/50 transition-all duration-300"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Back
                    </button>
                    <a
                      href="/cv/se-intern.pdf"
                      download="Bhanuka_Gihan_CV.pdf"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-amber-400/50 hover:scale-105 transition-all duration-300"
                    >
                      <Download className="w-5 h-5" />
                      Download CV
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white/5 backdrop-blur-sm  rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-300">
              <h3 className="text-3xl font-bold mb-4 text-[#e8f5fd]">
                Hi, I'm <span className="text-amber-400">Bhanuka Gihan</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed tracking-wide mb-4 font-NeueHaas">
                A passionate{" "}
                <span className="text-amber-400 font-semibold">
                  Software Engineer
                </span>{" "}
                specializing in creating seamless digital experiences. I
                transform complex problems into elegant, scalable solutions that
                users love.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed tracking-wide font-NeueHaas">
                With a strong foundation in{" "}
                <span className="text-blue-400 font-semibold">
                  full-stack development
                </span>{" "}
                and a keen eye for design, I bridge the gap between
                functionality and aesthetics. My goal is to build products that
                not only work flawlessly but also deliver exceptional user
                experiences.
              </p>
            </div>

            {/* Skills Progress */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-300">
              <h4 className="text-2xl font-bold mb-6 text-[#e8f5fd]">
                Core Skills
              </h4>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-amber-400">{skill.icon}</div>
                        <span className="text-gray-200 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-amber-400 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-amber-400 to-blue-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid - Full Width Bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-amber-400/30 hover:scale-105 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="text-amber-400 group-hover:scale-110 transition-transform duration-300 mb-3">
                  {stat.icon}
                </div>
                <span className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </span>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
