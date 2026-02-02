"use client";
import React, { useState } from "react";
import {
  Code2,
  Palette,
  Server,
  Database,
  Cloud,
  TestTube,
  Wrench,
  Users,
  Boxes,
} from "lucide-react";
import { skillsData } from "@/src/constants/skills";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Icon mapping
  const iconMap: { [key: string]: React.ReactNode } = {
    Code2: <Code2 className="w-6 h-6" />,
    Palette: <Palette className="w-6 h-6" />,
    Server: <Server className="w-6 h-6" />,
    Database: <Database className="w-6 h-6" />,
    Cloud: <Cloud className="w-6 h-6" />,
    TestTube: <TestTube className="w-6 h-6" />,
    Boxes: <Boxes className="w-6 h-6" />,
    Wrench: <Wrench className="w-6 h-6" />,
    Users: <Users className="w-6 h-6" />,
  };

  return (
    <section id="skills" className="min-h-screen text-white py-20 font-bilmond overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-amber-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-NeueHaas">
            A comprehensive toolkit for building robust, scalable, and modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={category.id}
              onMouseEnter={() => setActiveCategory(category.category)}
              onMouseLeave={() => setActiveCategory(null)}
              className="group relative bg-white/5 backdrop-blur-sm  rounded-3xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500 cursor-pointer"
            >
              {/* Gradient Glow Effect */}
          

              {/* Content */}
              <div className="relative">
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-2xl tracking-wide  text-white  transition-colors duration-300">
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-sm tracking-wide text-gray-300 group-hover:bg-white/20  group-hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

               
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-gradient-to-r from-amber-400/10 to-blue-400/10 backdrop-blur-sm  rounded-3xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
              <div className="text-gray-400 text-sm">Total Technologies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">9</div>
              <div className="text-gray-400 text-sm">Skill Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">1+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-gray-400 text-sm">Learning Mindset</div>
            </div>
          </div>
        </div>

        {/* Certifications or Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 font-NeueHaas">
             Constantly learning and adapting to new technologies and industry best practices
          </p>
        </div>
      </div>
    </section>
  );
}
