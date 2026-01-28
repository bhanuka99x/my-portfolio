"use client";
import React, { useState } from "react";
import {
  Quote,
  Star,
  Linkedin,
  Mail,
  Building2,
  User,
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
} from "lucide-react";

export default function RecommendationSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const recommendations = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Senior Product Manager",
      company: "Tech Innovations Inc.",
      image: "/images/person1.jpg",
      rating: 5,
      recommendation:
        "Working with Bhanuka has been an absolute pleasure. His technical expertise in full-stack development is outstanding, and he consistently delivers high-quality work ahead of schedule. His problem-solving skills and attention to detail are exceptional.",
      relationship: "Worked together on 3 projects",
      linkedinUrl: "https://linkedin.com/in/example",
      email: "sarah.johnson@example.com",
      skills: ["React", "Next.js", "TypeScript", "Problem Solving"],
      date: "December 2025",
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "StartupHub",
      image: "/images/person2.jpg",
      rating: 5,
      recommendation:
        "Bhanuka is one of the most talented developers I've had the opportunity to work with. His deep understanding of modern web technologies and his ability to architect scalable solutions is remarkable. A true asset to any team.",
      relationship: "Direct Manager for 2 years",
      linkedinUrl: "https://linkedin.com/in/example",
      email: "michael.chen@example.com",
      skills: ["System Architecture", "Node.js", "PostgreSQL", "Leadership"],
      date: "November 2025",
      color: "from-purple-400 to-pink-400",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Lead Designer",
      company: "Creative Studio",
      image: "/images/person3.jpg",
      rating: 5,
      recommendation:
        "Bhanuka's ability to bridge the gap between design and development is impressive. He brought our design visions to life with pixel-perfect implementations and smooth animations. His collaborative approach made the entire process seamless.",
      relationship: "Collaborated on 5+ projects",
      linkedinUrl: "https://linkedin.com/in/example",
      email: "emily.rodriguez@example.com",
      skills: ["UI/UX Implementation", "Tailwind CSS", "Framer Motion"],
      date: "October 2025",
      color: "from-green-400 to-emerald-400",
    },
    {
      id: 4,
      name: "David Kim",
      position: "Engineering Manager",
      company: "Global Solutions Corp",
      image: "/images/person4.jpg",
      rating: 5,
      recommendation:
        "I highly recommend Bhanuka for any full-stack development role. His expertise in both frontend and backend technologies, combined with his DevOps knowledge, makes him a versatile and valuable team member. Always goes above and beyond.",
      relationship: "Worked together for 1.5 years",
      linkedinUrl: "https://linkedin.com/in/example",
      email: "david.kim@example.com",
      skills: ["Full Stack", "Docker", "CI/CD", "AWS"],
      date: "September 2025",
      color: "from-orange-400 to-red-400",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      position: "Project Manager",
      company: "Digital Agency Pro",
      image: "/images/person5.jpg",
      rating: 5,
      recommendation:
        "Bhanuka is not only technically brilliant but also an excellent communicator. He keeps stakeholders informed, meets deadlines consistently, and handles challenges with professionalism. His work ethic is exemplary.",
      relationship: "Managed 4 projects together",
      linkedinUrl: "https://linkedin.com/in/example",
      email: "lisa.anderson@example.com",
      skills: ["Communication", "Time Management", "Agile", "React"],
      date: "August 2025",
      color: "from-yellow-400 to-amber-400",
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Senior Developer",
      company: "Tech Ventures",
      image: "/images/person6.jpg",
      rating: 5,
      recommendation:
        "Having Bhanuka on our team elevated everyone's performance. He's always willing to help, share knowledge, and mentor junior developers. His code quality and best practices set a high standard for the entire team.",
      relationship: "Team member for 2 years",
      linkedinUrl: "https://linkedin.com/in/example",
      email: "james.wilson@example.com",
      skills: ["Mentorship", "Code Review", "Best Practices", "TypeScript"],
      date: "July 2025",
      color: "from-indigo-400 to-purple-400",
    },
  ];

  const nextRecommendation = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length);
  };

  const prevRecommendation = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? recommendations.length - 1 : prev - 1
    );
  };

  const currentRec = recommendations[currentIndex];

  return (
    <section
      id="recommendations"
      className="min-h-screen text-white py-20 font-bilmond overflow-hidden "
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Client <span className="text-amber-400">Recommendations</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-NeueHaas">
            Testimonials from clients and colleagues I've had the pleasure of working with
          </p>
        </div>

        {/* Featured Recommendation Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500">
            {/* Gradient Glow */}
            <div
              className={`absolute -inset-0.5 bg-gradient-to-r ${currentRec.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
            ></div>

            <div className="relative p-8 md:p-12">
              {/* Quote Icon */}
              <div
                className={`absolute top-8 right-8 opacity-10 bg-gradient-to-br ${currentRec.color} p-4 rounded-2xl`}
              >
                <Quote className="w-16 h-16 text-white" />
              </div>

              {/* Header Section */}
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-8">
                {/* Avatar */}
                <div className="relative">
                  <div
                    className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${currentRec.color} p-1`}
                  >
                    <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center">
                      <User className="w-12 h-12 text-white/50" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-amber-400 rounded-full p-2 border-4 border-gray-900">
                    <ThumbsUp className="w-4 h-4 text-black" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {currentRec.name}
                  </h3>
                  <p className="text-amber-400 font-semibold mb-1">
                    {currentRec.position}
                  </p>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <Building2 className="w-4 h-4" />
                    <span>{currentRec.company}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(currentRec.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm font-NeueHaas">
                    {currentRec.relationship}
                  </p>
                </div>

                {/* Date */}
                <div className="text-sm text-gray-500 font-NeueHaas">
                  {currentRec.date}
                </div>
              </div>

              {/* Recommendation Text */}
              <div className="mb-8">
                <p className="text-gray-300 text-lg leading-relaxed font-NeueHaas italic">
                  "{currentRec.recommendation}"
                </p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {currentRec.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm text-gray-300 group-hover:bg-white/20 group-hover:border-amber-400/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Contact Links */}
              <div className="flex gap-4">
                <a
                  href={currentRec.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl text-blue-400 hover:bg-blue-500/30 hover:scale-105 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm font-semibold">LinkedIn</span>
                </a>
                <a
                  href={`mailto:${currentRec.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/20 backdrop-blur-sm border border-amber-400/30 rounded-xl text-amber-400 hover:bg-amber-400/30 hover:scale-105 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-semibold">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevRecommendation}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-full hover:bg-white/10 hover:border-amber-400/50 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {recommendations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-3 bg-amber-400"
                      : "w-3 h-3 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextRecommendation}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-full hover:bg-white/10 hover:border-amber-400/50 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* All Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((rec, index) => (
            <button
              key={rec.id}
              onClick={() => setCurrentIndex(index)}
              className={`group relative bg-white/5 backdrop-blur-sm border rounded-2xl p-6 text-left transition-all duration-500 ${
                index === currentIndex
                  ? "border-amber-400/50 bg-white/[0.07]"
                  : "border-white/10 hover:bg-white/[0.07] hover:border-white/20"
              }`}
            >
              {/* Gradient Glow */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${rec.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
              ></div>

              <div className="relative">
                {/* Avatar & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${rec.color} p-0.5`}
                  >
                    <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                      <User className="w-6 h-6 text-white/50" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold">{rec.name}</h4>
                    <p className="text-gray-400 text-sm">{rec.position}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rec.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Short Recommendation */}
                <p className="text-gray-400 text-sm leading-relaxed font-NeueHaas line-clamp-3 mb-3">
                  "{rec.recommendation}"
                </p>

                {/* Company */}
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <Building2 className="w-3 h-3" />
                  <span>{rec.company}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-gradient-to-r from-amber-400/10 to-blue-400/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <ThumbsUp className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-4xl font-bold text-amber-400 mb-2">
                {recommendations.length}+
              </div>
              <div className="text-gray-400 text-sm">Recommendations</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-blue-400 fill-blue-400" />
              </div>
              <div className="text-4xl font-bold text-blue-400 mb-2">5.0</div>
              <div className="text-gray-400 text-sm">Average Rating</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Building2 className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-4xl font-bold text-green-400 mb-2">
                {new Set(recommendations.map((r) => r.company)).size}
              </div>
              <div className="text-gray-400 text-sm">Companies</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <User className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-400 text-sm">Would Recommend</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 font-NeueHaas mb-4">
            Want to work together? Let's create something amazing!
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold px-10 py-4 rounded-2xl hover:shadow-lg hover:shadow-amber-400/50 hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
