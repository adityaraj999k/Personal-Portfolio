import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { projects } from "../data/projects";
import SectionHeading from "../components/SectionHeading";

const accentMap = {
  indigo: {
    glow: "bg-accent/20",
    ring: "border-accent/30",
    text: "text-accent-soft",
    dot: "bg-accent",
  },
  teal: {
    glow: "bg-signal-teal/15",
    ring: "border-signal-teal/30",
    text: "text-signal-teal",
    dot: "bg-signal-teal",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-base-borderSoft">
      <div className="container-shell">
        <SectionHeading
          index="03"
          title="Projects"
          description="A closer look at what I've built end to end — the problem, the approach, and the stack."
        />

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => {
            const accent = accentMap[project.accent];
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-base-border bg-base-raised/30 lg:grid-cols-[0.85fr_1.15fr]"
              >
                {/* visual panel */}
                <div className="relative flex items-center justify-center overflow-hidden border-b border-base-border bg-base-soft p-10 lg:border-b-0 lg:border-r">
                  <div
                    aria-hidden
                    className={`absolute -inset-16 -z-0 ${accent.glow} blur-[90px]`}
                  />
                  <div className="relative z-10 flex w-full flex-col gap-3">
                    <div className={`flex items-center gap-2 font-mono text-[12px] ${accent.text}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
                      {project.period}
                    </div>
                    <div className="rounded-xl border border-base-border bg-base-raised/70 p-5 backdrop-blur-sm">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className={`rounded-md border px-2.5 py-1 font-mono text-[11px] text-ink-muted ${accent.ring}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* content */}
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <h3 className="text-xl font-semibold text-ink sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted">
                    {project.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-[13.5px] text-ink-muted">
                        <CheckCircle2 size={15} className={`mt-0.5 shrink-0 ${accent.text}`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
