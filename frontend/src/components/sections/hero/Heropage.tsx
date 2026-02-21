"use client";
import React from "react";
import Galaxy from "@/components/Galaxy";
import LightPillar from "@/components/LightPillar";
import  Beams  from "@/components/Beams";
import { motion } from "framer-motion";
import { NotebookPen, PencilRuler, Code, Bug, Warehouse } from "lucide-react";
import { dynamicWord } from "@/types";
import "@/styles/hero.css";

const Heropage = () => {
  const dynamicWords: dynamicWord[] = [
    { id: 1, icon: <NotebookPen />, word: "Planning" },
    { id: 2, icon: <PencilRuler />, word: "Designing" },
    { id: 3, icon: <Code />, word: "Coding" },
    { id: 4, icon: <Bug />, word: "Testing" },
    { id: 5, icon: <Warehouse />, word: "Deploying" },
  ];

  return (
    <div id="home" className="relative w-full h-screen rounded-b-4xl overflow-hidden bg-black flex items-center">
      {/* Galaxy Background */}
      <div className="absolute inset-0 z-0">
        <Beams
    beamWidth={3}
    beamHeight={25}
    beamNumber={10}
    lightColor="#ffffff"
    speed={3.2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={30}
  />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 sm:px-6 lg:px-20 flex flex-col items-center text-center">
        <div className="text-[#e8f5fd] font-bilmond space-y-5  flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold transition-all duration-500 flex items-center mx-auto justify-center">
            Beyond
        
            <span className="inline-block relative h-12 w-48 ml-5  align-middle text-left">
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
                  className="tex-blue-50 absolute left-0  text-5xl"
                >
                  {item.word}
                </motion.span>
              ))}
            </span>
          </h1>
          
          <h2 className="font-semibold text-[40px] md:text-[60px] lg:text-[70px] leading-tight">
            Turning complex problems <br />
            into elegant reality.
          </h2>

          <p className="text-lg md:text-xl mt-10 max-w-2xl text-white tracking-wider text-center">
            I'm Bhanuka Gihan, a Software Engineer turning innovative ideas
            into robust, high-performance code.
          </p>

          <div className="mt-12 flex justify-center">
            <button className=" bg-white rounded-full w-60 h-16 lg:w-72 lg:h-18 transition-transform duration-300 hover:scale-105">
              <span className=" text-black font-bilmond font-semibold tracking-wide  text-xl">See My Work</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;

