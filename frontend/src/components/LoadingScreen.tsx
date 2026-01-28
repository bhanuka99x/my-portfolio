'use client'

import { motion } from "framer-motion";
import { barsItem } from "../types";

export default function LoadingScreen() {
  const bars: barsItem[] = [
    {id:1, delay: "delay-0"},
    {id:2, delay: "delay-200"},
    {id:3, delay: "delay-400"},
    {id:4, delay: "delay-600"},
    {id:5, delay: "delay-800"}, 
    {id:6, delay: "delay-1000"},
  ];

  return (
    <div className="min-h-screen w-full relative flex flex-col justify-center items-center overflow-hidden">

      <div className="flex items-center pb-5 overflow-hidden z-10">
        {bars.map(bar => (
          <motion.div 
            initial={{y:0}}
            animate={{y:[0,-40,0]}}
            transition={{duration:1.3, ease:"easeInOut", repeat:Infinity, repeatType:"loop", delay: bar.id * 0.2}}
            key={bar.id} 
            className="w-1.5 h-10 rounded-3xl bg-amber-400 mx-1"
          />
        ))}
      </div>

      <motion.div
        initial={{opacity:1}}
        animate={{opacity:0}}
        transition={{duration:2, ease:"easeInOut", repeat:Infinity, repeatType:"mirror"}}
        className="z-10"
      >
        <h1 className="text-white text-3xl font-bold font-bilmond tracking-wider">bhanuka99x</h1>
      </motion.div>

      <div className="z-10 text-white mt-5 font-bilmond tracking-wider">
        <span>please wait...</span>
      </div>
    </div>
  );
}