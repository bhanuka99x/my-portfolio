'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/src/components/LoadingScreen";
import HeroSection from '@/src/components/sections/hero/HeroSection';
import AboutSection from '@/src/components/sections/about/AboutSection';
import SkillsSection from '@/src/components/sections/skill/SkillsSection';
import ExperienceSection from '@/src/components/sections/experience/ExperienceSection';
import ProjectsSection from '@/src/components/sections/project/ProjectsSection';
import ContactSection from '@/src/components/sections/contact/ContactSection';
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
      {/* <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection /> */}
    </>
  ); 
}