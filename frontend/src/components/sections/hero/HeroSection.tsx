"use client";
import { motion } from "framer-motion";
import { NotebookPen, PencilRuler, Code, Bug, Warehouse } from "lucide-react";

import { dynamicWord } from "@/src/types";
import "@/src/styles/hero.css";

export default function HeroSection() {
  const dynamicWords: dynamicWord[] = [
    { id: 1, icon: <NotebookPen />, word: "Planning" },
    { id: 2, icon: <PencilRuler />, word: "Designing" },
    { id: 3, icon: <Code />, word: "Coding" },
    { id: 4, icon: <Bug />, word: "Testing" },
    { id: 5, icon: <Warehouse />, word: "Deploying" },
  ];

  return (
    <section id="home" className=" px-4">
      <div className="relative max-w-[1600px]  md:h-screen h-screen mx-auto justify-center items-center transform transition-all duration-500 overflow-hidden">
        {/* Video positioned on the right side as background */}
        <div className="absolute right-0 top-0 h-full max-w-7xl border lg:block">
          <video 
            src="/videos/fish.mp4" 
            className="w-full object-cover" 
            autoPlay 
            loop 
            muted
            playsInline
          />
        </div>
        
        <div className="relative z-10 flex items-start justify-start h-full">
          <div className=" text-[#e8f5fd] font-bilmond text-6xl lg:pl-20 md:pl-10 pl-5 lg:pt-80 md:pt-40 pt-32 space-y-5">
            <h1 className="font-semibold transition-all duration-500 ">
              Beyond
              <span className="inline-block relative h-12 ml-4 ">
                {dynamicWords.map((item) => (
                  <motion.span
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: [0, 1, 1, 0], y: [30, 0, 0, -30] }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: (item.id - 1) * 3,
                      repeatDelay: (dynamicWords.length - 1) * 3,
                    }}
                    className="
                    
        mt-1 lg:mt-0
        absolute left-0
        w-13 h-13
        flex items-center justify-center
        rounded-full
        bg-[#d0e6ff]
        
        text-black
        backdrop-blur-sm
      "
                  >
                    {item.icon}
                  </motion.span>
                ))}
              </span>
              <span className="inline-block relative w-40 h-12 ml-15">
                {dynamicWords.map((item) => (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: [0, 1, 1, 0], y: [30, 0, 0, -30] }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: (item.id - 1) * 3,
                      repeatDelay: (dynamicWords.length - 1) * 3,
                    }}
                    key={item.id}
                    className="text-amber-400 absolute  mt-4 sm:mt-0 md:mt-0 lg:mt-0 left-0"
                  >
                    {" "}
                    {item.word}{" "}
                  </motion.span>
                ))}
              </span>
            </h1>
            <h1 className="font-semibold text-[40px] md:text-[60px] lg:text-[60px] text-center md:text-left lg:text-left mt-10 lg:mt-0 transition-all duration-500">Turning complex problems</h1>
            <h1 className="font-semibold text-center md:text-[60px] md:text-left lg:text-left text-[40px] lg:text-[60px] transition-all duration-500">into elegant reality.</h1>
            <div className=" ">
              <p className="text-lg mt-10 max-w-4xl text-center md:text-left lg:text-left mx-auto tracking-wider transition-all duration-800">
                I'm Bhanuka Gihan, a Software Engineer turning innovative ideas into robust, high-performance code.
              </p>
            </div>

            <div className="mt-10   flex justify-center md:justify-start lg:justify-start">
              <button 
              className="gradient-button w-60 h-15  lg:w-80 lg:h-18 transition-transform duration-300">
              <span
              className="gradient-text"
              >See My Work</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
