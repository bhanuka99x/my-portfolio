"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Rocket, 
  Users, 
  Award, 
  Coffee,
  Github,
  Linkedin,
  Mail
} from "lucide-react";

export default function AboutSection() {
  const stats = [
    { label: "Years Experience", value: "3+", icon: <Award className="w-5 h-5" /> },
    { label: "Projects Completed", value: "50+", icon: <Rocket className="w-5 h-5" /> },
    { label: "Happy Clients", value: "30+", icon: <Users className="w-5 h-5" /> },
    { label: "Cups of Coffee", value: "∞", icon: <Coffee className="w-5 h-5" /> },
  ];

  const skills = [
    { name: "Frontend Development", level: 95, icon: <Code2 className="w-5 h-5" /> },
    { name: "UI/UX Design", level: 88, icon: <Palette className="w-5 h-5" /> },
    { name: "Backend Development", level: 85, icon: <Code2 className="w-5 h-5" /> },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:contact@example.com", label: "Email" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="min-h-screen text-white py-20 font-bilmond">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-amber-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Side - Image & Status */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              {/* Image Container */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-2 overflow-hidden">
                <img
                  src="/images/about.png"
                  alt="Bhanuka Gihan"
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition duration-500"
                />
                
                {/* Status Badge */}
                <div className="absolute top-6 right-6 bg-green-500/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 border border-white/20">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  <span className="text-white text-sm font-semibold">Open to Work</span>
                </div>

                {/* Download CV Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[calc(100%-3rem)]"
                >
                  <button className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold px-8 py-4 rounded-2xl hover:shadow-lg hover:shadow-amber-400/50 hover:scale-105 transition-all duration-300">
                    Download CV
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center gap-4 mt-8"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 hover:border-amber-400/50 hover:scale-110 transition-all duration-300 group"
                >
                  <div className="text-white group-hover:text-amber-400 transition-colors duration-300">
                    {link.icon}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            
            {/* Introduction */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-300">
              <h3 className="text-3xl font-bold mb-4 text-[#e8f5fd]">
                Hi, I'm <span className="text-amber-400">Bhanuka Gihan</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-NeueHaas">
                A passionate <span className="text-amber-400 font-semibold">Software Engineer</span> specializing in creating seamless digital experiences. 
                I transform complex problems into elegant, scalable solutions that users love.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed font-NeueHaas">
                With a strong foundation in <span className="text-blue-400 font-semibold">full-stack development</span> and a keen eye for design, 
                I bridge the gap between functionality and aesthetics. My goal is to build products that not only work flawlessly 
                but also deliver exceptional user experiences.
              </p>
            </div>

            {/* Skills Progress */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-300">
              <h4 className="text-2xl font-bold mb-6 text-[#e8f5fd]">Core Skills</h4>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-amber-400">{skill.icon}</div>
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-amber-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-amber-400 to-blue-400 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

        {/* Stats Grid - Full Width Bottom */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-amber-400/30 hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-amber-400 group-hover:scale-110 transition-transform duration-300 mb-3">
                  {stat.icon}
                </div>
                <span className="text-4xl font-bold text-white mb-2">{stat.value}</span>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
