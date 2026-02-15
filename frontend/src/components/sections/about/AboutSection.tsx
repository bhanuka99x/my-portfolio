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

import { skill } from "@/constants/about";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs`;

export default function AboutSection() {
  const [showCV, setShowCV] = useState(false);
  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  // Icon mapping
  const iconMap: { [key: string]: React.ReactNode } = {
    Code2: <Code2 className="w-5 h-5" />,
    Palette: <Palette className="w-5 h-5" />,
  };

  return (
    <section
      id="about"
      className="min-h-screen text-white  py-20  font-bilmond  "
    >
      <motion.div 
      initial={{ opacity: 0, zoom: 300 }}
      animate={{ opacity: 1, zoom: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      
      className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 border-2 border-dashed border-white/30 rounded-4xl p-15 ">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center">
          {/* Picture and Name - Aligned Horizontally */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-10 w-full">
            <div className="relative  backdrop-blur-sm border border-white/20 rounded-full p-10 overflow-hidden aspect-square w-32 md:w-48 lg:w-56 flex-shrink-0 group">
              <img
                src="/images/about.jpg"
                alt="Bhanuka Gihan"
                className="w-full h-full object-cover rounded-full transform scale-125 group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className=" rounded-3xl transition-all duration-300">
              <h3 className="text-4xl md:text-6xl lg:text-5xl font-bold text-[#e8f5fd] text-center md:text-left leading-tight">
                Hi, I'm{" "}
                <span className=" ">
                  {" "}
                  Bhanuka Gihan <br className="hidden md:block" />
                </span>
                <span className="text-white text-6xl">A Software Engineer</span>
              </h3>
            </div>
          </div>
        </div>

        {/* Text content below Image and Name */}
        <div className="mt-2 space-y-6 max-w-4xl mx-auto">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed tracking-wide font-NeueHaas text-center md:text-left">
            A passionate{" "}
            <span className="bg-gradient-to-t from-blue-300 to-blue-50 text-transparent bg-clip-text font-semibold">
              Software Engineer
            </span>{" "}
            specializing in creating seamless digital experiences. I transform
            complex problems into elegant, scalable solutions that users love.
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed tracking-wide font-NeueHaas text-center md:text-left">
            With a strong foundation in{" "}
            <span className="bg-gradient-to-t from-blue-400 to-blue-50 text-transparent bg-clip-text font-semibold">
              full-stack development
            </span>{" "}
            and a keen eye for design, I bridge the gap between functionality
            and aesthetics. My goal is to build products that not only work
            flawlessly but also deliver exceptional user experiences.
          </p>

          {!showCV && (
            <div className="mt-6 flex flex-col md:flex-row items-center gap-6 ">
              {/* Left Side: Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-5 w-full md:w-auto">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-white/30 text-white font-bold rounded-full transition-all duration-300 text-center"
                >
                  Contact Me
                </a>

                <button
                  onClick={() => setShowCV(true)}
                  className="animated-button backdrop-blur-sm bg-gray-700/50 border border-white/10"
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

              {/* Separator */}
              <div className="hidden md:block w-px h-10 bg-white/20" />

              {/* Mobile Separator */}
              <div className="block md:hidden w-20 h-px bg-white/10" />

              {/* Right Side: Social Icons */}
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5  rounded-full text-white hover:text-amber-400 hover:border-amber-400/50 hover:bg-white/10 transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5   rounded-full text-white hover:text-amber-400 hover:border-amber-400/50 hover:bg-white/10 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="p-3 bg-white/5  rounded-full text-white hover:text-amber-400 hover:border-amber-400/50 hover:bg-white/10 transition-all duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          )}
        </div>

        {showCV && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 overflow-hidden w-full max-w-4xl h-[90vh] flex flex-col">
              {/* CV Viewer */}
              <div className="bg-gray-900 rounded-2xl overflow-auto relative flex-1">
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
                        width={Math.min(window.innerWidth * 0.8, 800)}
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
          </div>
        )}

        {/* Stats Grid - Full Width Bottom (if needed later) */}
      </motion.div>
    </section>
  );
}
