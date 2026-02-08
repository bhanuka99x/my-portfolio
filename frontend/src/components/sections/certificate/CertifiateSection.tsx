"use client";
import React from "react";
import { motion } from "framer-motion";
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
      color: "from-green-400 to-emerald-400",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      id: 2,
      year: "2018 - 2022",
      title: "Bachelor's Degree",
      institution: "University of Colombo",
      location: "Colombo, Sri Lanka",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      color: "from-blue-400 to-cyan-400",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      id: 3,
      year: "2018 - 2022",
      title: "Master Degree",
      institution: "University of Moratuwa",
      location: "Moratuwa, Sri Lanka",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      color: "from-purple-400 to-pink-400",
      icon: <Award className="w-5 h-5" />,
    },
  ];

  const TimelineCard = ({
    item,
    index,
    delay,
  }: {
    item: any;
    index: number;
    delay: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative group max-w-xl  "
    >
      {/* Timeline Dot */}
      <div
        className={`absolute -left-[21px]  top-6 w-10 h-10 rounded-full bg-white flex items-center justify-center border-4 border-black z-10 group-hover:scale-125 transition-transform duration-300`}
      >
        <div className="text-black">{item.icon}</div>
      </div>

      {/* Card */}
      <div className="ml-8  backdrop-blur-sm  rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300  cursor-pointer">
        <div className="relative">
          {/* Year */}
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-3">
            <Calendar className="w-4 h-4" />
            {item.year}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
            {item.title}
          </h3>

          {/* Institution/Company */}
          <div className="text-gray-300 font-semibold mb-2">
            {item.institution || item.company}
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
            <MapPin className="w-4 h-4" />
            {item.location}
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed font-NeueHaas">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="certificates"
      className="min-h-screen py-20 font-bilmond overflow-hidden "
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl  md:text-6xl font-bold mb-4 text-center bg-gradient-to-bl from-blue-300 to-blue-50 bg-clip-text text-transparent">
          Educations
          {/* Education & <span className="text-amber-400">Experience</span> */}
        </h2>
        <p className="text-gray-400 text-lg  mx-auto text-center font-NeueHaas">
          My academic journey and professional experience
        </p>
      </motion.div>
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-10 bg-blue-900/10 rounded-4xl">
        {/* Education Column */}
        <div className="">
          <div className="relative max-w-7xl mx-auto  ">
            {/* Timeline Line */}
            <div className="absolute left-0 mx-auto justify-center top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-200 to-blue-200"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <TimelineCard
                  key={item.id}
                  item={item}
                  index={index}
                  delay={index * 0.15}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
