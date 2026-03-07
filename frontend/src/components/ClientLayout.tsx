'use client';

import { useLoading } from "../context/LoadingContext";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { loading } = useLoading();
  
  return (
    <>
      {!loading && <Header />}
      {children}
      {!loading && <Footer />}
    </>
  );
}
