"use client";

import React from "react";
import { motion } from "framer-motion";
import Beams from "@/components/Beams";
import { ArrowDown } from "lucide-react";

export default function Heropage() {
  const dynamicWords = ["Planning", "Designing", "Coding", "Testing", "Deploying"];

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center bg-black overflow-hidden font-NeueHaas select-none">
      {/* Dynamic Background Beams */}
      <div className="absolute opacity-50 inset-0 z-0">
        <Beams 
          beamWidth={4} 
          beamHeight={40} 
          beamNumber={12} 
          lightColor="#ffffff" 
          speed={2.8} 
          noiseIntensity={1.5} 
          scale={0.15} 
          rotation={25} 
        />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-20 py-32 flex flex-col justify-between h-full min-h-screen">
        {/* Top Note */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4">
            
            <span className="text-white/60 text-[10px] uppercase font-bold lg:ml-2.5  tracking-[0.4em]">Design-Driven Architect</span>
          </div>
          <div className="flex items-center gap-4 text-white/60 text-[10px] uppercase font-bold tracking-[0.2em]">
            <span>Based in Kegalle</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Working Globally</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-10 mt-20 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-[18vw] lg:text-[10rem] font-bilmond text-white leading-[0.8] tracking-tighter uppercase whitespace-nowrap overflow-visible flex flex-col">
              <span >Beyond</span>
              <div className="flex items-center gap-8 -mt-2">
                <span className="text-white/20 italic font-medium lowercase font-NeueHaas tracking-normal text-[8vw] lg:text-[6.5rem]">the</span>
                <span className="relative h-[1em] w-[6em] overflow-hidden align-middle mt-4 lg:mt-0 ">
                  {dynamicWords.map((word, i) => (
                    <motion.span
                      key={word}
                      initial={{ opacity: 0, y: "100%" }}
                      animate={{ 
                        opacity: [0, 1, 1, 0], 
                        y: ["100%", "0%", "0%", "-100%"] 
                      }}
                      transition={{
                        duration: 3,
                        ease: [0.76, 0, 0.24, 1],
                        repeat: Infinity,
                        delay: i * 3,
                        repeatDelay: (dynamicWords.length - 1) * 3
                      }}
                      className="absolute left-0 text-[12vw] lg:text-[9.5rem] pt-2 lg:pt-10  text-white font-bilmond"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="max-w-xl text-white/40 tracking-wide text-lg md:text-xl font-light leading-relaxed lg:text-left text-center  py-6"
            >
              Transforming complex technical problems into elegant digital architecture through pixel-perfect implementation and strategic engineering.
            </motion.p>
          </motion.div>

          <div className="flex flex-wrap pb-10 items-center  mx-auto justify-center lg:mx-0 lg:justify-start  gap-8 pt-6">
            <a 
              href="#projects" 
              className="group relative h-16 px-12 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center overflow-hidden transition-colors hover:border-white"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 text-xs font-bold uppercase tracking-[0.3em] text-white group-hover:text-black transition-colors">See My Work</span>
            </a>
            <div className="flex items-center gap-4 text-white/20 hover:text-white transition-colors cursor-pointer group/scroll">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll Down</span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/scroll:border-white transition-colors">
                <ArrowDown className="w-4 h-4 mt-1.5 animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Detail */}
        <div className="mt-20 lg:mt-0 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-white/20 text-[9px] uppercase tracking-[0.4em] ">Concept // Deployment</span>
            <div className="flex gap-4 items-center">
              <span className="text-white  tracking-[0.2em] uppercase text-[10px]">Software Engineer</span>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-white/40 tracking-[0.2em]  uppercase text-[10px]">2026</span>
            </div>
          </div>
          <div className="flex items-center gap-12">
            <div className="flex flex-col gap-1 items-end">
              <span className="text-white/20 text-[9px] uppercase tracking-[0.2em] ">Email Reach</span>
              <span className="text-white/60 hover:text-white/30 transition-colors cursor-pointer text-xs   tracking-[0.2em]">bhanuka99xdev@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
