export interface SkillCategory {
  id: number;
  category: string;
  icon: string;
  color: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 1,
    category: "Programming Languages",
    icon: "Code2",
    color: "from-blue-400 to-cyan-400",
    skills: [
      "TypeScript",
      "JavaScript",
      "SQL",
      "Java",
      "C#",
      "HTML5",
      "CSS3",
      "Python"
    ],
  },
  {
    id: 2,
    category: "Frontend Development & UI/UX",
    icon: "Palette",
    color: "from-purple-400 to-pink-400",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
      "Redux",
      "State Management",
      "Component-Based Architecture",
      "Responsive Design",
    ],
  },
  {
    id: 3,
    category: "Backend Development",
    icon: "Server",
    color: "from-green-400 to-emerald-400",
    skills: [
      "Node.js",
      "Express.js",
      ". NET Core",
      "RESTful APIs",
      "Api design",
      "WebSockets",
      "Stripe payment gateway",
      "JWT",
      "firebase Auth",
      "supabase Auth",
    ],
  },
  {
    id: 4,
    category: "Database Management",
    icon: "Database",
    color: "from-orange-400 to-red-400",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Supabase",
      "Firebase",
      "Prisma ORM",
      "Database Design",
    ],
  },
  {
    id: 5,
    category: "DevOps & Deployment",
    icon: "Cloud",
    color: "from-cyan-400 to-blue-400",
    skills: [
      "Docker",
      "CI/CD (GitHub Actions)",
      "Linux Server",
      "Nginx",
      "SSL/TLS (Certbot)",
      "AWS (EC2/S3)",
    ],
  },
  {
    id: 6,
    category: "Testing & QA",
    icon: "TestTube",
    color: "from-yellow-400 to-amber-400",
    skills: [
      "Unit Testing (Vitest/Jest)",
      "Integration Testing",
      "E2E Testing (Cypress)",
      "API Testing (Postman)",
      "Error Monitoring (Sentry)",
    ],
  },
  {
    id: 7,
    category: "System Architecture",
    icon: "Boxes",
    color: "from-indigo-400 to-purple-400",
    skills: [
      "System Design",
      "Design Patterns",
      "Clean Architecture",
      "Microservices",
      "Load Balancing",
      "Scalable Infrastructure",
    ],
  },
  {
    id: 8,
    category: "Developer Tools",
    icon: "Wrench",
    color: "from-slate-400 to-gray-400",
    skills: [
      "Git & GitHub",
      "VS Code",
      "GitHub Copilot",
      "Ai agents",
      "Cursor AI",
      "Antigravity",
      "Vite",
      "Postman",
    ],
  },
  {
    id: 9,
    category: "Professional Skills",
    icon: "Users",
    color: "from-rose-400 to-pink-400",
    skills: [
      "End-to-End Ownership",
      "Async Communication",
      "Strategic Planning",
      "Problem Solving",
      "Continuous Learning",
      "Time Management",
      "Team Collaboration",
      "Communication"
    ],
  },
];
