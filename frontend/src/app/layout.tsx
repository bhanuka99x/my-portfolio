'use client';

import type { Metadata } from "next";

import "../styles/index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LoadingProvider, useLoading } from "../context/LoadingContext";


function LayoutContent({ children }: { children: React.ReactNode }) {
  const { loading } = useLoading();
  
  return (
    <>
      {!loading && <Header />}
      {children}
      {/* {!loading && <Footer />} */}
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
        <LoadingProvider>
          <LayoutContent>{children}</LayoutContent>
        </LoadingProvider>
      </body>
    </html>
  );
}
