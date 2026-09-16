import { motion } from "framer-motion";
import { ArrowUpRight, Download, ArrowRight } from "lucide-react";
import { profile } from "../data/profile";
import Badge from "../components/Badge";
import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";
import CodePanel from "../components/CodePanel";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-fade [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]"
      />

      <div className="container-shell relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <Badge pulse>{profile.availability.toUpperCase()}</Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-display-sm font-bold text-ink sm:text-display-md lg:text-display-lg"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-br from-slate-950 via-slate-800 to-slate-600 dark:from-white dark:via-ink dark:to-ink-muted bg-clip-text text-transparent">
              Aditya Raj Kushwaha.
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 text-lg font-medium text-ink-muted sm:text-xl">
            {profile.role} building scalable web experiences.
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-ink-muted">
            I build full-stack applications end to end — from React interfaces to
            the APIs and databases behind them — and sharpen my problem-solving
            through data structures and algorithms every day.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Button variant="primary" onClick={() => scrollTo("projects")} icon={<ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />}>
              View My Work
            </Button>
            <Button
              as="a"
              href={profile.resumeUrl}
              download
              variant="secondary"
              icon={<Download size={15} />}
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
              className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-ink-muted transition-colors hover:text-ink"
            >
              Let's Connect
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="h-5 w-px bg-base-border" />
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <CodePanel />
        </motion.div>
      </div>
    </section>
  );
}
