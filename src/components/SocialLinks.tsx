import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

const links = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-base-border text-ink-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-ink hover:shadow-glow"
        >
          <Icon size={17} strokeWidth={1.75} />
        </a>
      ))}
    </div>
  );
}
