// Central profile data — edit everything about "you" here.
// This file is the single source of truth used across the site.

export const profile = {
  name: "Aditya Raj Kushwaha",
  firstName: "Aditya",
  role: "Computer Science Engineer",
  tagline: "Building scalable web experiences.",
  location: "Phagwara, Punjab, India",
  availability: "Available for software engineering opportunities",
  email: "adityaraj999k@gmail.com",
  github: "https://github.com/adityaraj999k",
  githubHandle: "github.com/adityaraj999k",
  linkedin: "https://www.linkedin.com/in/aditya-raj-kushwah/",
  linkedinHandle: "linkedin.com/in/aditya-raj-kushwah",
  resumeUrl: "/aditya-raj-kushwaha-resume.pdf",

  summary:
    "I'm a Computer Science Engineering student focused on full-stack development and problem solving. I like turning ideas into working products — from React interfaces to the APIs and databases behind them — and I sharpen that thinking daily through data structures and algorithms.",

  quickFacts: [
    { label: "Based in", value: "Phagwara, Punjab, India" },
    { label: "Studying", value: "B.Tech, Computer Science Engineering" },
    { label: "Focus", value: "Full-Stack Development & DSA" },
    { label: "Direction", value: "Software Engineer, product-based teams" },
  ],

  // Keep numbers honest — pulled directly from real projects/certificates.
  stats: [
    { value: "2", label: "Major Projects" },
    { value: "5+", label: "Certifications" },
    { value: "Full-Stack", label: "Development Focus" },
    { value: "Open", label: "To Opportunities" },
  ],
} as const;
