'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import LoadingScreen from "@/src/components/LoadingScreen";
import HeroSection from '@/src/components/sections/hero/HeroSection';
import SkillsSection from '@/src/components/sections/skill/SkillsSection';
import ExperienceSection from '@/src/components/sections/experience/ExperienceSection';
import ProjectsSection from '@/src/components/sections/project/ProjectsSection';
import ContactSection from '@/src/components/sections/contact/ContactSection';
import { useLoading } from "@/src/context/LoadingContext";

// Dynamic import for AboutSection to avoid SSR issues with react-pdf
const AboutSection = dynamic(() => import('@/src/components/sections/about/AboutSection'), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-400"></div></div>
});


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
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  ); 
}