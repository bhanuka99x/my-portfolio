'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/src/components/LoadingScreen";
import HeroSection from '@/src/components/sections/HeroSection';
import AboutSection from '@/src/components/sections/AboutSection';
import { useLoading } from "@/src/context/LoadingContext";


export default function HomePage() {
  const { loading, setLoading } = useLoading();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    
    return () => clearTimeout(timer);
  }, [router, setLoading]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  ); 
}