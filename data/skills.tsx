import { Skill } from "@/types/skill";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export const skills: Skill[] = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    level: 95,
    color: "#f97316",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    level: 90,
    color: "#3b82f6",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    level: 88,
    color: "#facc15",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    level: 82,
    color: "#2563eb",
  },
  {
    name: "React.js",
    icon: <FaReact />,
    level: 92,
    color: "#22d3ee",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    level: 85,
    color: "#ffffff",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    level: 95,
    color: "#38bdf8",
  },
  {
    name: "Git & Version Control",
    icon: <FaGitAlt />,
    level: 80,
    color: "#ef4444",
  },
];