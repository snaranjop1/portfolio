export interface Project {
  slug: string;
  name: string;
  type: "work" | "personal";
  url?: string;
  github?: string;
  imageSrc?: string;
  stack: string[];
  isInProgress?: boolean;
}

export const projects: Project[] = [
  {
    slug: "datascope",
    name: "DataScope",
    type: "work",
    url: "https://datascope.io",
    stack: [
      "React",
      "React Query",
      "Material UI",
      "Zustand",
      "Firebase",
      "TypeScript",
    ],
  },
  {
    slug: "cobralo",
    name: "Cóbralo",
    type: "personal",
    url: "https://cobralo.app",
    github: "https://github.com/snaranjop1/cobralo",
    imageSrc: "/cobralo-screenshot.webp",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Shadcn",
      "Tailwind",
      "Zustand",
      "TipTap",
    ],
  },
  {
    slug: "gol-data",
    name: "Gol Data",
    type: "personal",
    isInProgress: true,
    stack: ["Next.js", "TypeScript", "AI"],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
