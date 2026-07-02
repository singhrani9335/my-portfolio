import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Admin Dashboard",
    description:
      "Modern admin dashboard with authentication, analytics charts and responsive UI.",
    image: "/projects/dashboard.jpg", // Image hai
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/singhrani9335",
    demo: "https://vercel.com",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Professional portfolio website built with modern UI, animations and clean design system.",
    image: "/projects/portfolio.jpg", // Image hai
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/singhrani9335",
    demo: "https://vercel.com",
  },
  {
    id: 3,
    title: "E-Commerce UI",
    description:
      "High-quality e-commerce frontend with smooth UX and responsive design.",
    image: "/projects/ecommerce.jpg", // Image hai
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/singhrani9335",
    demo: "https://vercel.com",
  },
];