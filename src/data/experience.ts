export interface TimelineItem {
  type: "Training" | "Education";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  points?: string[];
}

export const timeline: TimelineItem[] = [
  {
    type: "Training",
    title: "Data Structures & Algorithm Designing using C++",
    organization: "Centre for Professional Enhancement, Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "Jul 2026",
    description:
      "Hands-on training applying core DSA concepts to a real optimization problem rather than isolated exercises.",
    points: [
      "Built a C++ console-based agriculture optimization system using Greedy Algorithms and Dynamic Programming (0/1 Knapsack)",
      "Implemented arrays, structures, linear search, bubble sort and file handling for crop management and reporting",
    ],
  },
  {
    type: "Education",
    title: "B.Tech, Computer Science and Engineering",
    organization: "Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "Since Aug 2024",
    description: "Currently pursuing — CGPA: 7.5",
  },
  {
    type: "Education",
    title: "Intermediate",
    organization: "Dawn The Higher",
    location: "Prayagraj, Uttar Pradesh",
    period: "Apr 2023 — Mar 2024",
    description: "Percentage: 67%",
  },
  {
    type: "Education",
    title: "Matriculation",
    organization: "Dawn The Higher",
    location: "Prayagraj, Uttar Pradesh",
    period: "Apr 2021 — Mar 2022",
    description: "Percentage: 85%",
  },
];
