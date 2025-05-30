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
    degree: "Master of Science in Usability Engineering",
    school: "Hochschule Rhein Waal",
    location: "Kamp Linfort, Germany",
    duration: "2025 - present",
  },
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
    title: "Junior Software Developer",
    company: "Unisoft BD Ltd.",
    location: "Dhaka, Bangladesh",
    duration: "May 2017 - Dec 2018",
    responsibilities: [
      "Developed and maintained web applications using React and Node.js",
      "Collaborated with cross-functional teams to deliver high-quality software",
      "Implemented RESTful APIs and integrated third-party services",
      "Participated in code reviews and contributed to team knowledge sharing",
    ],
  },
  {
    title: "Intern Software Engineer",
    company: "Unisoft BD Ltd.",
    location: "Dhaka, Bangladesh",
    duration: "Jan 2017 - April 2017",
    responsibilities: [
      "Assisted in developing web applications using HTML, CSS, and JavaScript",
      "Learned best practices in software development and version control",
      "Participated in daily stand-ups and sprint planning meetings",
      "Contributed to documentation and testing of software features",
    ],
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
    title: "Task Management App",
    description:
      "Collaborative tool with real-time updates, team collaboration, and task filtering built using Next.js and MongoDB.",
    technologies: ["Next.js", "MongoDB", "Socket.io", "TypeScript", "Prisma"],
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
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
    title: "Social Media Dashboard",
    description:
      "Analytics platform for social media with real-time data visualization and automated reporting.",
    technologies: ["React", "D3.js", "Firebase", "Chart.js", "Material-UI"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Crypto Trading Bot",
    description:
      "Automated crypto trading bot with ML strategies, portfolio optimization, and risk management.",
    technologies: ["Python", "TensorFlow", "Django", "Redis", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "AI Content Generator",
    description:
      "GPT-powered tool that generates blog posts, social media content, and marketing copy.",
    technologies: ["React", "OpenAI API", "Node.js", "MongoDB", "AWS"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];
