"use client";
import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Briefcase,
  Code,
  Award,
  CheckCircle2,
  Lightbulb,
  FolderGit2,
} from "lucide-react";
import { experiences, Experience } from "@/constants/experience";

function ExperienceDetailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const experienceId = searchParams.get("id");

  const experience = experiences.find(
    (exp: Experience) => exp.id === Number(experienceId)
  );

  if (!experience) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Experience Not Found</h1>
          <button
            onClick={() => router.push("/#experience")}
            className="px-6 py-3 bg-amber-400 text-black rounded-lg font-semibold hover:bg-amber-500 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-20 font-bilmond">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => router.push("/#experience")}
          className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Experiences</span>
        </button>

        {/* Header */}
        <div className="mb-12">
          <div
            className={`inline-block px-4 py-2 bg-linear-to-r ${experience.color} rounded-full text-black font-bold mb-4`}
          >
            {experience.type}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {experience.title}
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-300 mb-6">
            {experience.company}
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-400" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-amber-400" />
            Overview
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed font-NeueHaas whitespace-pre-line">
            {experience.detailedDescription}
          </p>
        </div>

        {/* Key Achievements */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-amber-400" />
            Key Achievements
          </h3>
          <div className="grid gap-4">
            {experience.achievements.map((achievement: string, index: number) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                <span className="text-gray-300 font-NeueHaas">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Responsibilities */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-blue-400" />
            Key Responsibilities
          </h3>
          <ul className="space-y-3">
            {experience.responsibilities.map((responsibility: string, index: number) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-300 font-NeueHaas"
              >
                <span className="text-blue-400 font-bold mt-1">•</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <FolderGit2 className="w-6 h-6 text-purple-400" />
            Notable Projects
          </h3>
          <div className="grid gap-6">
            {experience.projects.map((project: any, index: number) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <h4 className="text-xl font-bold mb-3 text-amber-400">
                  {project.name}
                </h4>
                <p className="text-gray-300 mb-4 font-NeueHaas">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies & Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Technologies */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Code className="w-6 h-6 text-green-400" />
              Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {experience.technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className={`px-4 py-2 bg-linear-to-r ${experience.color} text-black font-semibold rounded-lg`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Skills Developed</h3>
            <div className="flex flex-wrap gap-3">
              {experience.skills.map((skill: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 border border-white/20 text-gray-300 rounded-lg hover:bg-white/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-2xl">Loading...</div>
        </div>
      }
    >
      <ExperienceDetailContent />
    </Suspense>
  );
}
