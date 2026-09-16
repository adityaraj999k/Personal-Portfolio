import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/nav";
import { profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      <div
        className={`flex w-full max-w-[1180px] items-center justify-between rounded-xl border px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? "border-base-border bg-base-soft/80 shadow-panel backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 text-[14px] font-semibold tracking-tight text-ink"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/15 font-mono text-[13px] text-accent-soft">
            A
          </span>
          <span className="hidden sm:inline">{profile.firstName} Raj</span>
        </button>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href;
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative rounded-lg px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-200 ${
                  isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-base-raised"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <ThemeToggle />
          <Button
            as="a"
            href={profile.resumeUrl}
            download
            variant="secondary"
            className="!px-4 !py-2 text-[13px]"
          >
            Resume
          </Button>
        </div>

        {/* mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-base-border bg-base-soft/80 text-ink"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-4 top-[64px] rounded-xl border border-base-border bg-base-soft/95 p-2 shadow-panel backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full rounded-lg px-4 py-3 text-left text-[14px] font-medium transition-colors ${
                  activeId === link.href
                    ? "bg-base-raised text-ink"
                    : "text-ink-muted hover:bg-base-raised/60 hover:text-ink"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={profile.resumeUrl}
              download
              className="mt-1 block w-full rounded-lg border border-base-border px-4 py-3 text-center text-[14px] font-medium text-ink"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
