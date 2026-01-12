'use client'

import { useEffect,useState } from "react";
import { color, delay, motion } from "framer-motion";


//import components here
import home from './Home/page'
import { div } from "framer-motion/client";




export default function LoadingPage() {

const[loading,setLoading]=useState(true);

const bars = [
  {id:1,delay: "delay-0",},
  {id:2,delay: "delay-200",},
  {id:3,delay: "delay-400",},
  {id:4,delay: "delay-600",},
  {id:5,delay: "delay-800",}, 
  {id:6,delay: "delay-1000",},
  

]
 
  return (
<div className="min-h-screen w-full relative flex flex-col justify-center items-center overflow-hidden ">
    <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 20% 10%, #000000 20%, #010133 100%)",
    }}
  />
    
   <div className="flex items-center pb-5  overflow-hidden  z-10">
    {bars.map(bar => (
      <motion.div 
      initial={{y:0,}}
      animate={{y:[0,-40,0], }}
      transition={{duration:1.5, ease:"easeInOut", repeat:Infinity, repeatType:"loop", delay: bar.id * 0.2}}
      key={bar.id} 
      className={`w-1.5 h-10 rounded-3xl bg-amber-400 mx-1`}></motion.div>
    ))}

   </div>


    <motion.div
    initial={{opacity:1}}
    animate={{opacity:0}}
    transition={{duration:2, ease:"easeInOut",repeat:Infinity, repeatType:"mirror"}}
    onAnimationComplete={()=>setLoading(false)}
    className="z-10"
    >
      {loading && (
        <h1 className="text-white text-3xl font-bold font-bilmond tracking-wider ">bhanuka99x</h1>
      )}
    </motion.div>

    <div className="z-10 text-white mt-5  font-bilmond tracking-wider">
         <span>please wait...</span>
    </div>

</div>
  )
}
