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

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/bhanuka99x",
      color: "hover:bg-gray-400/20 hover:text-gray-400",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/bhanuka99x",
      color: "hover:bg-blue-400/20 hover:text-blue-400",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      url: "https://twitter.com/bhanuka99x",
      color: "hover:bg-sky-400/20 hover:text-sky-400",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url: "https://instagram.com/bhanuka99x",
      color: "hover:bg-pink-400/20 hover:text-pink-400",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="bg-blue-100/5 backdrop-blur-sm border-t border-white/10 rounded-t-[60px] text-white font-bilmond relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full  " />
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-12 relative z-10">
        {/* Main Footer Content - Centered */}
        <div className="flex flex-col items-center mb-6">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center font-bilmond justify-center gap-2 mb-3">
              <Code2 className="w-7 h-7 text-white" />
              <span className="text-5xl ">bhanuka99x</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 font-bilmond max-w-2xl">
              Crafting innovative digital solutions with modern technologies.
              Turning complex problems into elegant, scalable applications.
            </p>
             
            {/* Social Links */}
            <div className="flex gap-2 justify-center mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={` backdrop-blur-sm  p-2.5 rounded-lg transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Links - Horizontal & Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-400 hover:text-white transition-all duration-300 text-sm font-NeueHaas"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-6"></div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-3"
        >
          {/* Copyright */}
          <div className="text-gray-400 text-xs font-NeueHaas text-center md:text-left md:flex-1 md:text-center">
            © {currentYear} <span className="text-amber-400">bhanuka99x</span>. 
            All rights reserved. Made with{" "}
            <Heart className="w-3 h-3 inline text-red-400 animate-pulse" /> and{" "}
            <Code2 className="w-3 h-3 inline text-blue-400" />
          </div>
          
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-2.5 rounded-lg hover:bg-amber-400/20 hover:border-amber-400/50 hover:scale-110 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors duration-300" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
