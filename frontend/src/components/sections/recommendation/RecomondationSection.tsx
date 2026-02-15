"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
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
  return (
    <section
      id="recommendations"
      className=" text-white py-10 pb-30 font-bilmond  border-red-500 overflow-hidden "
    >
      <div className=" w-full  border-r-amber-600 overflow-hidden ">
        {/* Section Header */}
        <div className="text-center   mb-16 justify-center  mx-auto">
          <h2 className="text-5xl text-white bg-clip-text text-transparent  md:text-6xl font-bold mb-4">
            Client <span className="">Recommendations</span>
          </h2>
     
        </div>
        {/* Auto-Scrolling Infinite Loop */}
        <div className="w-full overflow-hidden relative  [mask-image:linear-gradient(to_right,transparent,black_30%,black_70%,transparent)]  ">
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-4"
          >
            {/* First Set */}
            {recommendations.map((rec, index) => (
              <motion.button
                key={`first-${rec.id}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setCurrentIndex(index)}
                className={`group relative  backdrop-blur-lg border rounded-2xl p-6 text-left transition-all duration-500 w-[350px] flex-shrink-0 ${
                  index === currentIndex
                    ? "  border-white/10  "
                    : "border-white/10 "
                }`}
              >
                <div className="relative">
                  {/* Avatar & Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1">
                      <h4 className="text-white text-[19px]">{rec.name}</h4>
                      <p className="text-gray-400 text-sm">{rec.position}</p>
                    </div>
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
              </motion.button>
            ))}
            {/* Second Set - Duplicate for seamless loop */}
            {recommendations.map((rec, index) => (
              <motion.button
                key={`second-${rec.id}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setCurrentIndex(index)}
                className={`group relative  backdrop-blur-lg border rounded-2xl p-6 text-left transition-all duration-500 w-[350px] flex-shrink-0 ${
                  index === currentIndex
                    ? "  border-white/10  "
                    : "border-white/10 "
                }`}
              >
                <div className="relative">
                  {/* Avatar & Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1">
                      <h4 className="text-white text-[19px]">{rec.name}</h4>
                      <p className="text-gray-400 text-sm">{rec.position}</p>
                    </div>
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
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
