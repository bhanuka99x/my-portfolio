'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingScreen from "../components/LoadingScreen";
import Home from './Hero/page';


export default function RootPage() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // router.push('/Home'); 
    }, 3000); 
    
    return () => clearTimeout(timer);
  }, [router]);

  if (loading) {
    return <LoadingScreen />;
  }

  return <Home />; 
}