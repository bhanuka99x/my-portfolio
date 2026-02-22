"use client";

import React from "react";
import { motion } from "framer-motion";
import Beams from "@/components/Beams";
import { ArrowDown } from "lucide-react";

export default function Heropage() {
  const dynamicWords = ["Planning", "Designing", "Coding", "Testing", "Deploying"];

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col bg-black overflow-hidden font-NeueHaas select-none">
      {/* Texture Overlay */}
      <div className="absolute inset-0 z-1 opacity-[0.02] pointer-events-none bg-[url('/images/noise.png')] mix-blend-overlay" />
      
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Beams 
          beamWidth={2} 
          beamHeight={50} 
          beamNumber={8} 
          lightColor="#ffffff" 
          speed={1.2} 
          noiseIntensity={1} 
          scale={0.2} 
          rotation={15} 
        />
      </div>

      <div className="relative z-10 w-full max-w-450 mx-auto px-6 lg:px-12 flex flex-col flex-1">
        {/* Header Area */}
        <div className="flex justify-between items-start py-10 border-b border-white/5">
          <div className="flex flex-col gap-1">
            <span className="text-white text-[11px] font-bold uppercase tracking-[0.3em]">Bhanuka Gihan</span>
            <span className="text-white/30 text-[9px] uppercase tracking-[0.4em]">Integrated Software Engineer</span>
          </div>
          <div className="hidden md:flex items-center gap-12">
            <div className="flex flex-col items-end gap-1">
              <span className="text-white/20 text-[8px] uppercase tracking-[0.4em]">Status</span>
              <span className="text-white/60 text-[9px] uppercase font-medium tracking-[0.2em]">Open to work</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-white/20 text-[8px] uppercase tracking-[0.4em]">Location</span>
              <span className="text-white/60 text-[9px] uppercase font-medium tracking-[0.2em]">Kegalle, Sri Lanaka</span>
            </div>
          </div>
        </div>

        {/* Hero Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-20 lg:py-0">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-[14vw] lg:text-[11rem] font-bilmond text-white leading-[0.85] tracking-tight uppercase flex flex-col">
                <span className="opacity-40">Creative</span>
                <span className="relative h-[1em] overflow-hidden">
                  {dynamicWords.map((word, i) => (
                    <motion.span
                      key={word}
                      initial={{ y: "100%" }}
                      animate={{ 
                        y: ["100%", "0%", "0%", "-100%"] 
                      }}
                      transition={{
                        duration: 3.5,
                        ease: [0.76, 0, 0.24, 1],
                        repeat: Infinity,
                        delay: i * 3.5,
                        repeatDelay: (dynamicWords.length - 1) * 3.5
                      }}
                      className="absolute left-0 text-white italic"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              </h1>
            </motion.div>
          </div>

          <div className="lg:col-span-4 lg:pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col gap-10 max-w-sm"
            >
              <div className="flex items-center gap-4">
                
                <p className="text-white/40 text-sm md:text-xl text-center lg:text-left font-light leading-relaxed tracking-wider">
                  Architecting high-performance digital solutions with a focus on structural integrity and minimal elegance.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <a 
                  href="#projects" 
                  className="group flex items-center gap-6"
                >
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                    <ArrowDown className="w-5 h-5 text-white/40 group-hover:text-black -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/60 group-hover:text-white transition-colors">See Projects</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 mt-auto">
          <div className="flex gap-12 order-2 md:order-1">
            <div className="flex flex-col gap-1 text-center md:text-left">
              <span className="text-white/15 text-[8px] uppercase tracking-[0.4em]">Expertise</span>
              <span className="text-white/40 text-[9px] uppercase font-bold tracking-widest">Full-Stack Development</span>
            </div>
            <div className="flex flex-col gap-1 text-center md:text-left">
              <span className="text-white/15 text-[8px] uppercase tracking-[0.4em]">Availability</span>
              <span className="text-white/40 text-[9px] uppercase font-bold tracking-widest">Remote / Global</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 order-1 md:order-2">
            <span className="text-white/15 text-[8px] uppercase tracking-[0.4em]">© 2026</span>
            <div className="w-1 h-1 rounded-full bg-white/10" />
            <span className="text-white/30 text-[9px] uppercase font-bold tracking-widest">Bhanuka Gihan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
