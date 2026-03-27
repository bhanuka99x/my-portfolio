"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  Code2,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Github", url: "https://github.com/bhanuka99x", icon: <Github className="w-4 h-4" /> },
    { name: "LinkedIn", url: "https://linkedin.com/in/bhanuka99x", icon: <Linkedin className="w-4 h-4" /> },
    { name: "Twitter", url: "https://twitter.com/bhanuka99x", icon: <Twitter className="w-4 h-4" /> },
    { name: "Instagram", url: "https://instagram.com/bhanuka99x", icon: <Instagram className="w-4 h-4" /> },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/5 overflow-hidden font-NeueHaas">
      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-blue-500/20 to-transparent opacity-50" />
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 pb-20">
          
          {/* Left Side: Socials & Back to Top */}
          <div className="flex flex-col gap-12 items-start w-full lg:w-auto order-2 lg:order-1">
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.4)", color: "#fff", backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/30 transition-all duration-300 backdrop-blur-sm"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 hover:text-white transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all duration-500">
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </div>
              Ascend to Top
            </button>
          </div>

          {/* Right Side: Brand Identity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 lg:text-right order-1 lg:order-2 w-full lg:w-auto"
          >
            <h2 className="text-5xl lg:text-7xl font-bilmond tracking-tighter uppercase text-white leading-none">
              BHANUKA // <br />
              <span className="text-white/20">GIHAN</span>
            </h2>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">
                Software Engineer
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium">
                Designing Scalable Digital Solutions
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 scale-75 md:scale-100 items-center md:items-start opacity-50">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white font-bold">
              © {currentYear} // ALL RIGHTS RESERVED
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-medium">
              Designed & Developed by Bhanuka Gihan
            </span>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center md:items-end gap-1">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Local Time</span>
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest">SL (GMT+5:30)</span>
            </div>
            
            <motion.div 
              animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}


