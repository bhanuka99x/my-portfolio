'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingScreen from "../components/LoadingScreen";
import Home from './Hero/page';
import {useLoading} from "../context/LoadingContext";


export default function RootPage() {
  const { loading, setLoading } = useLoading();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 
    
    return () => clearTimeout(timer);
  }, [router,setLoading]);

  if (loading) {
    return <LoadingScreen />;
  }

  return <Home />; 
}