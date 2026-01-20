import { section } from "framer-motion/client"
import { motion } from "framer-motion";
import { NotebookPen,PencilRuler,Code,Bug,Warehouse } from "lucide-react";

import { dynamicWord } from "@/src/types";

export default function Home() {

  const dynamicWords: dynamicWord[] = [
    {id:1, icon: <NotebookPen />, word: "Planning" },
    {id:2, icon: <PencilRuler />, word: "Designing" },
    {id:3, icon: <Code />, word: "Coding" },
    {id:4, icon: <Bug />, word: "Testing" },
    {id:5, icon: <Warehouse />, word: "Deploying" }
  ]
  return (
    <section className="">
  <div className="relative max-w-[1920px]  lg:h-[700px] md:h-screen h-screen mx-auto justify-center items-center transform transition-all duration-500 ">
    {/* <video src="/videos/hero.mp4" className="absolute lg:mt-35 md:mt-0 mt-0 w-full h-full rounded-4xl object-cover opacity-10 transition-all duration-300" autoPlay loop muted></video> */}
    <div className="relative z-10 flex items-start justify-start h-full">
      <div className=" text-white font-bilmond text-6xl font-semibold lg:pl-20 md:pl-10 pl-5 lg:pt-100 md:pt-40 pt-32 space-y-5">
          
          <h1>Beyond 
            <span className="inline-block relative h-12 ml-5 pt-4 ">
            {dynamicWords.map((item) => (
              <motion.span 
              initial={{opacity:0, y:20}}
              animate={{opacity: [0, 1, 1, 0], y: [30, 0, 0, -30]}}
              transition={{
                duration: 3,
                ease:"easeInOut", 
                repeat:Infinity,
                delay: (item.id - 1) * 3,
                repeatDelay: (dynamicWords.length - 1) * 3
              }}
              key={item.id} 
              className="text-amber-400  absolute w-5 h-5 left-0"
              > {item.icon} </motion.span>
            ))}
          
            </span>
            <span className="inline-block relative w-40 h-12 ml-15">
            {dynamicWords.map((item) => (
              <motion.span 
              initial={{opacity:0, y:20}}
              animate={{opacity: [0, 1, 1, 0], y: [30, 0, 0, -30]}}
              transition={{
                duration: 3,
                ease:"easeInOut", 
                repeat:Infinity,
                delay: (item.id - 1) * 3,
                repeatDelay: (dynamicWords.length - 1) * 3
              }}
              key={item.id} 
              className="text-amber-400 absolute left-0"
              > {item.word} </motion.span>
            ))}
            </span>
            </h1>
          <h1>Turning complex problems</h1>
          <h1>into elegant reality.</h1>
      </div>
    </div>
  </div>
  </section>
  );
}