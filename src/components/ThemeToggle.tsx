import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      className={`relative flex h-9 w-9 items-center justify-center rounded-lg border border-base-border bg-base-soft/80 text-ink-muted transition-colors hover:border-accent/40 hover:bg-base-raised hover:text-ink focus-visible:outline-none ${className}`}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="dark-icon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Sun size={17} className="text-amber-300 drop-shadow-[0_0_8px_rgba(252,211,77,0.4)]" />
          </motion.div>
        ) : (
          <motion.div
            key="light-icon"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Moon size={17} className="text-accent" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
