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
    title: "Software Engineer",
    company: "Oxymai(PVT) Ltd",
    location: "Colombo, Sri Lanka",
    period: "2025 - 2026",
    type: "Full-time",
    icon: "Code",
    description:
      "Developed and maintained multiple client projects, focusing on React.js frontend and Node.js backend development with modern best practices.",
    achievements: [
      "Delivered 15+ client projects on time and within budget",
      "Integrated payment gateways (Stripe, PayPal, PayHere)",
      "Built RESTful APIs serving 10K+ daily requests",
    ],
    technologies: ["React", "Node.js", "Express", "MySQL", "Redis"],
    color: "from-purple-400 to-pink-400",
    detailedDescription: `As a Software Engineer at Oxymai, I played a pivotal role in developing and maintaining enterprise-level web applications. My responsibilities included full-stack development, code reviews, and mentoring junior developers.

I worked closely with cross-functional teams including designers, product managers, and QA engineers to deliver high-quality solutions that met client requirements and exceeded expectations.`,
    responsibilities: [
      "Designed and implemented scalable RESTful APIs using Node.js and Express",
      "Developed responsive and intuitive user interfaces using React.js and modern CSS frameworks",
      "Integrated third-party payment gateways including Stripe, PayPal, and PayHere",
      "Optimized database queries and implemented caching strategies using Redis",
      "Conducted code reviews and mentored junior developers",
      "Collaborated with DevOps team for CI/CD pipeline implementation",
      "Participated in agile ceremonies and sprint planning",
    ],
    projects: [
      {
        name: "E-Commerce Platform",
        description:
          "Built a full-featured e-commerce platform with payment integration, inventory management, and order tracking",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      },
      {
        name: "Customer Relationship Management System",
        description:
          "Developed a CRM system for managing customer data, sales pipeline, and marketing campaigns",
        technologies: ["Next.js", "Express", "MySQL", "Redis"],
      },
      {
        name: "Real-time Chat Application",
        description:
          "Created a real-time messaging platform with WebSocket integration and file sharing capabilities",
        technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      },
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
    period: "2020 - 2021",
    type: "Freelance",
    icon: "Award",
    description:
      "Started freelancing journey, building websites and web applications for local businesses and international clients through various platforms.",
    achievements: [
      "Completed 10+ freelance projects with 5-star ratings",
      "Built strong client relationships and repeat business",
      "Mastered full-stack development fundamentals",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
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
