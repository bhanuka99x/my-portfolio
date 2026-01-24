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

  const services = [
    { name: "Web Development", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "Backend Development", href: "#" },
    { name: "API Development", href: "#" },
    { name: "DevOps Services", href: "#" },
    { name: "Consulting", href: "#" },
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
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 text-white font-bilmond">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-8 h-8 text-amber-400" />
                <span className="text-2xl font-bold">{"</> bhanuka99x"}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-NeueHaas">
                Crafting innovative digital solutions with modern technologies.
                Turning complex problems into elegant, scalable applications.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
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
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-xl transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-4 text-amber-400">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block text-sm font-NeueHaas"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-4 text-amber-400">
                Services
              </h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block text-sm font-NeueHaas"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-4 text-amber-400">
                Get In Touch
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@bhanuka.dev"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm group"
                  >
                    <Mail className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-NeueHaas">hello@bhanuka.dev</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+94771234567"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm group"
                  >
                    <Phone className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-NeueHaas">+94 77 123 4567</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span className="font-NeueHaas">Colombo, Sri Lanka</span>
                  </div>
                </li>
              </ul>

              {/* Availability Badge */}
              <div className="mt-6 bg-green-400/10 border border-green-400/20 rounded-xl p-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-green-400 text-xs font-semibold">
                  Available for Freelance
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8"></div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Copyright */}
          <div className="text-gray-400 text-sm font-NeueHaas text-center md:text-left">
            © {currentYear} <span className="text-amber-400">Bhanuka Gihan</span>. 
            All rights reserved. Made with{" "}
            <Heart className="w-4 h-4 inline text-red-400 animate-pulse" /> and{" "}
            <Code2 className="w-4 h-4 inline text-blue-400" />
          </div>

          {/* Additional Links */}
          <div className="flex items-center gap-6 text-sm font-NeueHaas">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-xl hover:bg-amber-400/20 hover:border-amber-400/50 hover:scale-110 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-colors duration-300" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
