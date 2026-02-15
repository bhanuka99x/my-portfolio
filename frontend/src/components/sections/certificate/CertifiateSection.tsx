"use client";
import React from "react";
import {
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  Award,
  BookOpen,
} from "lucide-react";

export default function CertificateSection() {
  const educationData = [
    {
      id: 1,
      year: "2018 - 2022",
      title: "High School Degree",
      institution: "Metropolitan High School",
      location: "Colombo, Sri Lanka",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      color: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      icon: <BookOpen className="w-8 h-8 text-green-400" />,
    },
    {
      id: 2,
      year: "2018 - 2022",
      title: "Bachelor's Degree",
      institution: "University of Colombo",
      location: "Colombo, Sri Lanka",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      color: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
    },
    {
      id: 3,
      year: "2018 - 2022",
      title: "Master Degree",
      institution: "University of Moratuwa",
      location: "Moratuwa, Sri Lanka",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      color: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      icon: <Award className="w-8 h-8 text-purple-400" />,
    },
  ];

  return (
    <section
      id="certificates"
      className="relative min-h-screen py-20 font-bilmond overflow-hidden"
    >
      {/* Section Header */}
      <div className="text-center mb-16 mx-auto max-w-6xl px-4">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white text-right opacity-90">
          Educations
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col gap-12">
          {educationData.map((edu, index) => (
            <div 
              key={edu.id} 
              className="relative p-8 md:p-14 rounded-[48px] bg-[#0a0a0a] border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden group min-h-[22rem] md:min-h-[26rem] flex items-center"
            >
              {/* Decorative accent background */}
              <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] -z-10 group-hover:opacity-100 opacity-30 transition-opacity duration-700 ${
                index === 0 ? 'bg-blue-500/20' : index === 1 ? 'bg-emerald-500/20' : 'bg-purple-500/20'
              }`} />

              <div className="flex flex-col md:flex-row gap-8 w-full items-start">
                {/* Left: Icon & Badge */}
                <div className="flex flex-col items-center gap-4 shrink-0">
                  <div className={`p-5 rounded-2xl border border-white/10 shadow-xl ${
                    index === 0 ? 'bg-blue-500/10' : index === 1 ? 'bg-emerald-500/10' : 'bg-purple-500/10'
                  }`}>
                    {edu.icon}
                  </div>
                  <div className="hidden md:flex flex-col items-center gap-2">
                    <div className="h-20 w-px bg-gradient-to-b from-white/20 to-transparent" />
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold rotate-180 [writing-mode:vertical-lr]">
                      Education
                    </span>
                  </div>
                </div>

                {/* Right: Details */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col gap-1 mb-6">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-blue-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.year}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-gray-500 text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-bold mt-3 text-white tracking-tight">
                      {edu.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-gray-400 font-medium">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-6 h-6 rounded-full border border-black bg-gray-800" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 font-medium italic">Verified Credentials</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
