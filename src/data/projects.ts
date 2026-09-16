export interface Project {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
  accent: "indigo" | "teal";
  links?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    title: "Blood Donation Portal",
    period: "Jan 2025 — Mar 2026",
    description:
      "A full-stack platform connecting blood donors with recipients, built with a React frontend and a Node.js backend, plus a companion Android app for mobile access.",
    highlights: [
      "Built the frontend in React and the backend in Node.js for a complete donor-to-recipient platform",
      "Designed REST APIs to move data smoothly between the web platform and the database",
      "Built a companion Android app with MIT App Inventor to extend access to mobile users",
      "Structured the API layer as the single interface between the database and every client",
    ],
    stack: ["React", "Node.js", "MongoDB", "MySQL", "API Development"],
    accent: "indigo",
  },
  {
    title: "Crop & Fertilizer Recommendation Advisor",
    period: "Jun 2026 — Aug 2026",
    description:
      "A C++ console application that recommends profitable crop combinations within a budget, using classic optimization algorithms rather than guesswork.",
    highlights: [
      "Modeled crop selection as a 0/1 Knapsack problem, combining Greedy and Dynamic Programming approaches",
      "Implemented arrays, structures, linear search and bubble sort to manage and compare crop data",
      "Added file handling to persist records and generate readable reports",
      "Built out algorithm comparison so different strategies could be evaluated side by side",
    ],
    stack: ["C++", "Dynamic Programming", "Greedy Algorithms", "File Handling"],
    accent: "teal",
  },
];
