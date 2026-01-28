"use client";
import React, { useState } from "react";
import {
  Award,
  ExternalLink,
  Calendar,
  Building2,
  CheckCircle2,
  Star,
  Filter,
} from "lucide-react";

export default function CertificateSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web Development", "Cloud & DevOps", "Programming", "Security"];

  const certificates = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      provider: "Amazon Web Services",
      date: "December 2025",
      category: "Cloud & DevOps",
      credentialId: "AWS-SA-2025-12345",
      credentialUrl: "https://aws.amazon.com/verification",
      description: "Professional-level certification for designing distributed systems on AWS",
      skills: ["AWS", "Cloud Architecture", "S3", "EC2", "Lambda"],
      featured: true,
      color: "from-orange-400 to-amber-400",
      logo: "🏆",
    },
    {
      id: 2,
      title: "Professional Scrum Master I",
      provider: "Scrum.org",
      date: "November 2025",
      category: "Project Management",
      credentialId: "PSM-I-567890",
      credentialUrl: "https://scrum.org/verify",
      description: "Demonstrates fundamental level of Scrum mastery",
      skills: ["Scrum", "Agile", "Team Leadership", "Sprint Planning"],
      featured: true,
      color: "from-blue-400 to-cyan-400",
      logo: "🎯",
    },
    {
      id: 3,
      title: "Next.js Developer Certification",
      provider: "Vercel",
      date: "October 2025",
      category: "Web Development",
      credentialId: "NEXT-DEV-2025-789",
      credentialUrl: "https://vercel.com/verify",
      description: "Expert-level proficiency in Next.js and React development",
      skills: ["Next.js", "React", "TypeScript", "Server Components"],
      featured: false,
      color: "from-purple-400 to-pink-400",
      logo: "⚡",
    },
    {
      id: 4,
      title: "Docker Certified Associate",
      provider: "Docker Inc.",
      date: "September 2025",
      category: "Cloud & DevOps",
      credentialId: "DCA-2025-456",
      credentialUrl: "https://docker.com/verify",
      description: "Demonstrates expertise in containerization and orchestration",
      skills: ["Docker", "Kubernetes", "Container Orchestration", "CI/CD"],
      featured: false,
      color: "from-cyan-400 to-blue-400",
      logo: "🐳",
    },
    {
      id: 5,
      title: "TypeScript Advanced Certification",
      provider: "Microsoft",
      date: "August 2025",
      category: "Programming",
      credentialId: "MS-TS-ADV-123",
      credentialUrl: "https://microsoft.com/verify",
      description: "Advanced TypeScript patterns and best practices",
      skills: ["TypeScript", "Advanced Types", "Generics", "Decorators"],
      featured: false,
      color: "from-blue-500 to-indigo-500",
      logo: "📘",
    },
    {
      id: 6,
      title: "Certified Ethical Hacker",
      provider: "EC-Council",
      date: "July 2025",
      category: "Security",
      credentialId: "CEH-2025-999",
      credentialUrl: "https://eccouncil.org/verify",
      description: "Expertise in information security and ethical hacking",
      skills: ["Security", "Penetration Testing", "Network Security", "OWASP"],
      featured: true,
      color: "from-red-400 to-pink-500",
      logo: "🔒",
    },
  ];

  const filteredCertificates =
    activeFilter === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === activeFilter);

  return (
    <section
      id="certificates"
      className="min-h-screen text-white py-20 font-bilmond overflow-hidden "
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Certifications & <span className="text-amber-400">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-NeueHaas">
            Professional certifications validating my expertise and continuous learning
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-lg shadow-amber-400/50"
                  : "bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-white/10 hover:border-amber-400/50"
              }`}
            >
              <span className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                {category}
              </span>
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500"
            >
              {/* Featured Badge */}
              {cert.featured && (
                <div className="absolute top-4 right-4 z-20 bg-amber-400/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 border border-white/20">
                  <Star className="w-3 h-3 text-black fill-black" />
                  <span className="text-black text-xs font-bold">Featured</span>
                </div>
              )}

              {/* Gradient Glow */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
              ></div>

              {/* Certificate Header */}
              <div className="relative">
                <div
                  className={`h-32 bg-gradient-to-br ${cert.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-50">{cert.logo}</div>
                  </div>
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6 relative">
                {/* Provider Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-4 h-4 text-amber-400" />
                  <span className="text-xs text-gray-400 font-NeueHaas">
                    {cert.provider}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300 mb-2">
                  {cert.title}
                </h3>

                {/* Date */}
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500 font-NeueHaas">
                    {cert.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 font-NeueHaas">
                  {cert.description}
                </p>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-400/20 backdrop-blur-sm border border-blue-400/30 text-blue-400 text-xs font-bold rounded-full">
                    {cert.category}
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-xs text-gray-400 group-hover:bg-white/10 group-hover:border-amber-400/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Credential Info & Link */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-gray-500 font-mono">
                      {cert.credentialId}
                    </span>
                  </div>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-400 font-semibold text-sm hover:gap-2 transition-all duration-300"
                  >
                    Verify
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-gradient-to-r from-amber-400/10 to-blue-400/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <Award className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-4xl font-bold text-amber-400 mb-2">
                {certificates.length}+
              </div>
              <div className="text-gray-400 text-sm">Certifications</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-blue-400 fill-blue-400" />
              </div>
              <div className="text-4xl font-bold text-blue-400 mb-2">
                {certificates.filter((c) => c.featured).length}
              </div>
              <div className="text-gray-400 text-sm">Featured Awards</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Building2 className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-4xl font-bold text-green-400 mb-2">
                {new Set(certificates.map((c) => c.provider)).size}
              </div>
              <div className="text-gray-400 text-sm">Providers</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <CheckCircle2 className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-400 text-sm">Verified</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 font-NeueHaas">
            Committed to continuous learning and professional development
          </p>
        </div>
      </div>
    </section>
  );
}
