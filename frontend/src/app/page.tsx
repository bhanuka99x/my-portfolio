'use client'

import { useEffect,useState } from "react";
import { motion } from "framer-motion";


//import components here
import home from './Home/page'




export default function LoadingPage() {

const[loading,setLoading]=useState(true);


 
  return (
<div className="min-h-screen w-full relative flex flex-col justify-center items-center ">
    <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
    }}
  />
 
</div>
  )
}
