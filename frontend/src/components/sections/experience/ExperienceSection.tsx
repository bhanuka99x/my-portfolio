"use client";
import React from "react";
import { motion } from "framer-motion";
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

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "Remote",
      period: "2024 - Present",
      type: "Full-time",
      icon: <Rocket className="w-5 h-5" />,
      description:
        "Leading the development of scalable web applications using Next.js, Node.js, and PostgreSQL. Architecting microservices and implementing CI/CD pipelines.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led a team of 5 developers in agile environment",
        "Implemented automated testing, increasing code coverage to 85%",
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "Colombo, Sri Lanka",
      period: "2022 - 2024",
      type: "Full-time",
      icon: <Code className="w-5 h-5" />,
      description:
        "Developed and maintained multiple client projects, focusing on React.js frontend and Node.js backend development with modern best practices.",
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Integrated payment gateways (Stripe, PayPal, PayHere)",
        "Built RESTful APIs serving 10K+ daily requests",
      ],
      technologies: ["React", "Node.js", "Express", "MySQL", "Redis"],
      color: "from-purple-400 to-pink-400",
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "Creative Web Studio",
      location: "Remote",
      period: "2021 - 2022",
      type: "Contract",
      icon: <Users className="w-5 h-5" />,
      description:
        "Collaborated with designers and senior developers to build responsive websites and web applications for small to medium businesses.",
      achievements: [
        "Converted 20+ Figma designs to pixel-perfect responsive websites",
        "Improved website performance scores to 90+ on Lighthouse",
        "Learned and applied modern frontend frameworks",
      ],
      technologies: ["JavaScript", "React", "Tailwind CSS", "Firebase"],
      color: "from-green-400 to-emerald-400",
    },
    {
      id: 4,
      title: "Freelance Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2020 - 2021",
      type: "Freelance",
      icon: <Award className="w-5 h-5" />,
      description:
        "Started freelancing journey, building websites and web applications for local businesses and international clients through various platforms.",
      achievements: [
        "Completed 10+ freelance projects with 5-star ratings",
        "Built strong client relationships and repeat business",
        "Mastered full-stack development fundamentals",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
      color: "from-amber-400 to-orange-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="experience"
      className="min-h-screen text-white py-20 font-bilmond overflow-hidden"
    >
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
            Work <span className="text-amber-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-NeueHaas">
            My professional journey in building innovative digital solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-blue-400 to-purple-400 transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center border-4 border-black z-10 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-black">{exp.icon}</div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-28 md:ml-0 md:w-[calc(50%-4rem)] ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500"
                  >
                    {/* Gradient Glow */}
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${exp.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
                    ></div>

                    {/* Content */}
                    <div className="relative">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <span className="px-3 py-1 bg-amber-400/20 backdrop-blur-sm border border-amber-400/30 text-amber-400 text-xs font-bold rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <div className="text-lg font-semibold text-gray-300 mb-3">
                          {exp.company}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-amber-400" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-blue-400" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-4 font-NeueHaas">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-amber-400 mb-2 uppercase tracking-wide">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-gray-400 text-sm font-NeueHaas"
                            >
                              <ArrowRight className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-bold text-blue-400 mb-2 uppercase tracking-wide">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-xs text-gray-300 group-hover:bg-white/20 group-hover:border-blue-400/30 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block md:w-[calc(50%-4rem)]"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/10 to-blue-400/10 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 text-gray-300">
            <Briefcase className="w-5 h-5 text-amber-400" />
            <span className="font-NeueHaas">
              Want to work together? Let's connect!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
