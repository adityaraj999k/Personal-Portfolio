export const navLinks = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Achievements", href: "achievements" },
  { label: "Contact", href: "contact" },
] as const;

export type NavHref = (typeof navLinks)[number]["href"];
