// src/data/skillData.js
import { Code, Database, Globe } from "lucide-react";

// ------------------ skills ------------------

export const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    skills: [
      "JavaScript",
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "Figma",
      "UI/UX",
    ],
  },
  {
    title: "Backend",
    icon: Globe,
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
    skills: [
      "Python",
      "Node.js",
      "Express.js",
      "Django",
      "REST APIs",
      "GraphQL",
      "Microservices",
    ],
  },
  {
    title: "Database & Tools",
    icon: Database,
    color: "from-purple-500 to-violet-500",
    bgColor: "from-purple-50 to-violet-50",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
      "Git",
      "Docker",
      "CI/CD",
    ],
  },
];

// ------------------ Education ------------------

export const education = [
  {
    degree: "Master of Science in Information Engineering & Computer Science",
    school: "Hochschule Rhein Waal",
    location: "Kamp Linfort, Germany",
    duration: "2019 - 2023",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Asia Pacific",
    location: "Dhaka, Bangladesh",
    duration: "2013 - 2017",
  },
];

// ------------------ Experience ------------------

export const experiences = [
  {
    title: "Frontend Developer",
    company: "CLS Soft",
    location: "Mannheim, Baden-Württemberg, Germany",
    duration: "November 2022 - October 2023",
  },
  {
    title: "IT Suppor",
    company: "BA Business Advice GmbH",
    location: "Cologne, North Rhine-Westphalia, Germany",
    duration: "February 2022 - October 2022",
  },

  {
    title: "Junior Software Developer",
    company: "Unisoft BD Ltd.",
    location: "Dhaka, Bangladesh",
    duration: "May 2017 - Dec 2018",
  },
  {
    title: "Intern Software Engineer",
    company: "Unisoft BD Ltd.",
    location: "Dhaka, Bangladesh",
    duration: "Jan 2017 - April 2017",
  },
];

// ------------------ Projects ------------------

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with user authentication, payment processing, and inventory management.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Role-Based Dashboard",
    description:
      "Dynamic dashboard application with role-based access control, real-time data updates, and customizable widgets.",
    technologies: [
      "React",
      "MongoDB",
      ,
      "JavaScript",
      "Node.js",
      "Authentication",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: "https://role-based-dashboard-phi.vercel.app/",
    githubUrl: "https://github.com/MokabbirMisho/Role-Based-Dashboard",
  },
  {
    title: "Weather Dashboard",
    description:
      "Location-based weather app with interactive charts and detailed forecasts powered by weather APIs.",
    technologies: ["Vue.js", "Express.js", "Weather API", "Chart.js", "CSS3"],
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "AI-Powered Chatbot",
    description:
      "Conversational AI chatbot for customer support with natural language processing and sentiment analysis.",
    technologies: ["React", "TypeScript", "Open AI", "Bun", "shadcn/ui"],
    image:
      "https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/MokabbirMisho/AI-Chatbot",
  },
  {
    title: "German Housing Market Analysis & Forecasting",
    description:
      "Analyzed historical housing data from major German cities to uncover trends in house prices, rental rates, vacancy rates, and rental demand. Built a predictive model using linear regression to forecast average house prices for the years 2025, 2030, and 2035.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib & Seaborn",
    ],
    image:
      "https://images.unsplash.com/vector-1741055269272-f30d1e737eb9?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: "https://example.com",
    githubUrl:
      "https://github.com/MokabbirMisho/German-Housing-Market-Analysis-Forecasting",
  },
  {
    title: "Business Performance Dashboard – Data Analytics",
    description:
      "Developed an interactive business intelligence dashboard to analyze and forecast company performance across Sales, Marketing, Finance, and Supply Chain, enabling data-driven decisions through KPI tracking and predictive insights.",
    technologies: [
      "Power BI",
      "Microsoft Excel",
      "MySQL",
      "Statistics",
      "Data Visualization",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    liveUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiYjI0ZTEzNjUtZmI1Ni00YzVkLWFhOGMtMmZiMmQ0NWNhM2Y1IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
    githubUrl: "https://github.com",
  },
];
