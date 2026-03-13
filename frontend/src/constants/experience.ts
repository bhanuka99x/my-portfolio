export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  icon: string;
  description: string;
  achievements: string[];
  technologies: string[];
  color: string;
  detailedDescription: string;
  responsibilities: string[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
  }[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "Oxymai(PVT) Ltd",
    location: "Kegalle, Sri Lanka",
    period: "2025 - 2026",
    type: "Full-time",
    icon: "Code",
    description:
      "Developed and maintained multiple client projects, focusing on React.js frontend and Node.js backend development with modern best practices.",
    achievements: [
      "Delivered 12+ full-stack client projects on time and under budget.",
      "Built a SaaS task management platform with complex Role-Based Access Control (RBAC).",
      "Integrated Replicate AI API for automated image background removal and video reframing.",
      "Boosted backend performance and reduced data retrieval times using Redis caching.",
      "Hardened APIs and implemented secure authentication via Firebase and Supabase Auth.",
    ],
    technologies: [
      "React.js", 
      "Next.js", 
      "TypeScript", 
      "Tailwind CSS", 
      "Node.js", 
      "Express.js", 
      "PostgreSQL", 
      "Sequelize (ORM)", 
      "Redis", 
      "Supabase", 
      "Firebase", 
      "Microsoft Azure", 
      "Jest"
    ],
    color: "from-purple-400 to-pink-400",
    detailedDescription: `As a Software Engineer at Oxymai, I specialized in full-stack development, building secure and scalable SaaS applications using React, Node.js, Express, and Tailwind CSS. A significant part of my role involved architecting a complex task management system with intricate role-based permission levels. 

I focused heavily on backend performance and security, implementing API hardening, Redis caching, and robust authentication flows utilizing both Firebase and Supabase Auth. Additionally, I integrated third-party AI services like the Replicate API for advanced media processing - including automated image background removal and video reframing - delivering high-quality, enterprise-level solutions that met exact business requirements.`,
    responsibilities: [
      "Designed and maintained scalable RESTful APIs using Node.js, Express, and modern ORMs",
      "Developed responsive and intuitive user interfaces utilizing React.js and Tailwind CSS",
      "Integrated critical third-party services, including payment gateways like Stripe",
      "Managed database structures and implemented data caching strategies to ensure smooth data flow",
      "Conducted thorough code reviews and maintained code quality",
      "Participated actively in agile ceremonies, sprint planning, and collaborative problem-solving",
    ],
    projects: [
      {
        name: "Enterprise Task Management SaaS",
        description:
          "Engineered a comprehensive task management platform featuring complex Role-Based Access Control (RBAC), real-time updates, secure authentication, and automated deployment pipelines.",
        technologies: ["React", "Node.js", "Express", "PostgreSQL", "Supabase Auth", "Redis", "Playwright", "JWT", "Stripe", "WebSocket", "CI/CD"],
      },
      {
        name: "AI Image Background Remover",
        description:
          "Built an AI-powered SaaS application for automated image background removal, utilizing the Replicate API for processing and WebSockets for real-time status updates.",
        technologies: ["React", "Node.js", "Express", "Firebase", "Firebase Auth", "Replicate API", "WebSocket"],
      },
      {
        name: "AI Video Reframer Tool",
        description:
          "Developed a video processing application that automates video reframing using the Replicate AI API, ensuring secure access via Firebase Auth and real-time progress tracking.",
        technologies: ["React", "Node.js", "Express", "Firebase Auth", "Replicate API", "WebSocket"],
      }
    ],
    skills: [
      "Full-Stack Development",
      "API Design & Development",
      "Database Optimization",
      "Payment Gateway Integration",
      "Agile Methodology",
      "Code Review",
      "Team Collaboration",
    ],
  },
  {
    id: 4,
    title: "Freelance Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2023 - 2024",
    type: "Freelance",
    icon: "Award",
    description:
      "Started freelancing journey, building websites and web applications for local businesses and international clients through various platforms.",
    achievements: [
      "Completed 10+ freelance projects with 5-star ratings",
      "Built strong client relationships and repeat business",
      "Mastered full-stack development fundamentals",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", ""],
    color: "from-amber-400 to-orange-400",
    detailedDescription: `Launched my freelancing career by offering web development services to small and medium-sized businesses. This experience taught me not only technical skills but also client management, project estimation, and business communication.

Working independently helped me develop strong problem-solving skills and the ability to learn new technologies quickly to meet diverse client requirements.`,
    responsibilities: [
      "Gathered client requirements and translated them into technical specifications",
      "Designed and developed custom websites using modern web technologies",
      "Integrated content management systems for easy client content updates",
      "Implemented SEO best practices to improve website visibility",
      "Provided ongoing maintenance and technical support",
      "Managed project timelines and delivered within budget",
    ],
    projects: [
      {
        name: "Restaurant Website & Booking System",
        description:
          "Created a restaurant website with online table booking and menu management",
        technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap"],
      },
      {
        name: "Portfolio Websites",
        description:
          "Built multiple portfolio websites for photographers, designers, and artists",
        technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
      },
      {
        name: "Small Business Website",
        description:
          "Developed corporate websites for local businesses with contact forms and service showcases",
        technologies: ["WordPress", "PHP", "CSS"],
      },
    ],
    skills: [
      "Web Development",
      "Client Communication",
      "Project Management",
      "WordPress Development",
      "SEO Optimization",
      "Responsive Design",
    ],
  },
];
