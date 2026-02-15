"use client";
import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  ArrowRight,
  Code,
  Rocket,
  Users,
  Award,
} from "lucide-react";
import Link from "next/link";
import { experiences } from "@/constants/experience";

export default function ExperienceSection() {
  const iconMap: any = {
    Code: <Code className="w-5 h-5" />,
    Rocket: <Rocket className="w-5 h-5" />,
    Users: <Users className="w-5 h-5" />,
    Award: <Award className="w-5 h-5" />,
  };

  return (
    <section
      id="experience"
      className="min-h-screen text-white py-12 sm:py-16 md:py-20 font-bilmond overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className=" mb-12 sm:mb-14 md:mb-16 text-right">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4">
            Work 
            <div></div>
            <span className="text-white text-8xl">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-6 md:left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-white/60 lg:transform lg:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                } flex-row`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-4 sm:left-6 md:left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center border-4 border-black z-10 hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-black">{iconMap[exp.icon]}</div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-16 sm:ml-20 md:ml-28 lg:ml-0 lg:w-[calc(50%-4rem)] ${
                    index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                  }`}
                >
                  <Link href={`/view_experience?id=${exp.id}`}>
                    <div className="group     rounded-2xl sm:rounded-3xl   transition-all duration-500 cursor-pointer">
                      
              
                      {/* Content */}
                      <div className="relative">
                        {/* Header */}
                        <div className="mb-3 sm:mb-4 bg-white p-6 rounded-3xl rounded-tr-2xl">
                          
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl text-black font-semibold  transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <span className="px-3 py-1 mt-2 tracking-wide  backdrop-blur-sm border text-black text-xs  rounded-full self-start">
                              {exp.type}
                            </span>
                          </div>
                          <div className="text-base sm:text-lg tracking-wider font-semibold text-gray-600 mb-2 sm:mb-3">
                            {exp.company}
                          </div>
                        
                          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4  flex-shrink-0" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4  flex-shrink-0" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 px-5 py-6 rounded-3xl backdrop-blur-sm">
                        {/* Description */}
                        <p className="text-gray-300 px-5 tracking-wide text-sm sm:text-base text-center leading-relaxed mb-3 sm:mb-4 font-NeueHaas">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-3 sm:mb-4 px-5">
                          <h4 className="text-xs sm:text-sm tracking-wide text-white mb-2 uppercase ">
                            Key Achievements
                          </h4>
                          <ul className="space-y-1.5 sm:space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm font-NeueHaas"
                              >
                                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white flex-shrink-0 mt-0.5" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-xs sm:text-sm  text-white mb-2 uppercase tracking-wide">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-2.5 sm:px-3 py-1 bg-black/30   backdrop-blur-sm rounded-md text-[14px] text-gray-300  transition-all duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* View More Indicator */}
                        <div className="mt-4 flex items-center gap-2 text-white  text-sm group-hover:gap-4 transition-all duration-300">
                          <span>View Full Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden lg:block lg:w-[calc(50%-4rem)]"></div>
              </div>
            ))}
            
          </div>
          
        </div>  
      </div>
    </section>
  );
}
