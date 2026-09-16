import type { LucideIcon } from "lucide-react";
import { Code2, Layers, Database, Users } from "lucide-react";

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  description: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: Code2,
    description: "Core languages I write and think in.",
    items: ["C++", "JavaScript", "C", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    description: "Tools I use to ship on the frontend and backend.",
    items: ["React", "Node.js", "HTML & CSS", "Bootstrap"],
  },
  {
    title: "Tools & Platforms",
    icon: Database,
    description: "Where the data and infrastructure live.",
    items: ["MySQL", "MongoDB"],
  },
  {
    title: "Working Style",
    icon: Users,
    description: "How I operate on a team.",
    items: ["Problem-Solving", "Team Work", "Quick Learner", "Adaptability"],
  },
];
