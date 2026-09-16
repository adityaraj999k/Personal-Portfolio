import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import SectionHeading from "../components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-base-borderSoft">
      <div className="container-shell">
        <SectionHeading
          index="02"
          title="Skills"
          description="The languages, frameworks, and tools I reach for when building something real."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-base-border bg-base-raised/40 p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-base-raised/70"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-soft transition-colors group-hover:bg-accent/20">
                <group.icon size={18} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-[15px] font-semibold text-ink">{group.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink-faint">
                {group.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-base-border bg-base-soft px-2.5 py-1 font-mono text-[11.5px] text-ink-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
