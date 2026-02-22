"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, X, Download } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
  const [showCV, setShowCV] = useState(false);

  return (
    <section id="about" className="relative min-h-screen py-32 px-6 lg:px-20 overflow-hidden  selection:bg-white selection:text-black">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-linear-to-bl from-white/5 to-transparent rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15vw] lg:text-[12rem] font-bilmond leading-[0.85] tracking-tighter uppercase text-white"
          >
            About // <br />
            <span className="text-white/20">The Mind</span>
          </motion.h2>
        </div>

        <div className="flex lg:hidden justify-center mb-6">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border border-white/10">
            <Image
              src="/images/about.jpg"
              alt="Profile"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-20 items-start">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            <div className="space-y-8">
              <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[0.9]">
                Software Engineer <br />
                <span className="text-white/40">& System Architect</span>
              </h3>
              
              <p className="text-white/70 font-NeueHaas leading-relaxed text-xl md:text-2xl max-w-3xl font-light tracking-tight italic">
                "I transform complex technical problems into elegant, scalable digital experiences that bridge the gap between functionality and high-end aesthetics."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
              <div className="space-y-4">
                <span className="text-white/20 font-mono text-[10px] tracking-[0.5em] uppercase">The Vision // 01</span>
                <p className="text-white/60 font-NeueHaas leading-relaxed text-lg">
                  Specializing in full-stack architecture, I focus on building robust systems that don't just work—they perform. Every line of code is written with scalability and security in mind.
                </p>
              </div>
              <div className="space-y-4">
                <span className="text-white/20 font-mono text-[10px] tracking-[0.5em] uppercase">The Craft // 02</span>
                <p className="text-white/60 font-NeueHaas leading-relaxed text-lg">
                  My design-driven approach ensures that technical robustness is always paired with exceptional user experience. I believe software should be as beautiful as it is functional.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-6 pt-6">
              <button 
                onClick={() => setShowCV(true)}
                className="group flex items-center gap-4 text-sm uppercase tracking-[0.3em] font-bold text-white hover:text-white/70 transition-colors"
              >
                View Resume
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              <div className="flex items-center gap-4">
                {[
                  { icon: <Github />, url: "https://github.com/bhanuka99x" },
                  { icon: <Linkedin />, url: "https://linkedin.com/in/bhanuka99x" },
                  { icon: <Mail />, url: "mailto:hello@bhanuka.com" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.url}
                    className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-all"
                  >
                    {React.cloneElement(social.icon as React.ReactElement<{size:number}>, { size: 18 })}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl  transition-all duration-700 ease-out group">
              <Image
                src="/images/about.jpg"
                alt="Profile"
                fill
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Design elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-white/20 rounded-bl-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-r border-t border-white/20 rounded-tr-3xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* CV Modal */}
      <AnimatePresence>
        {showCV && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-5xl h-[85vh] bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden flex flex-col relative"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-neutral-900/50">
                <div className="flex flex-col">
                  <span className="text-white font-bold tracking-[0.2em] uppercase text-xs">Full Resume</span>
                  <span className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Bhanuka.CV.2024.pdf</span>
                </div>
                <div className="flex gap-4">
                  <a 
                    href="/cv/resume.pdf" 
                    download 
                    className="flex items-center gap-2 px-6 h-12 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-colors"
                  >
                    Download <Download size={14} />
                  </a>
                  <button 
                    onClick={() => setShowCV(false)}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
                  >
                    <X className="text-white" size={20} />
                  </button>
                </div>
              </div>

              {/* CV Preview */}
              <div className="flex-1 w-full bg-[#1e1e1e]">
                <iframe 
                  src="/cv/resume.pdf" 
                  className="w-full h-full border-none"
                  title="Resume"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutSection;
