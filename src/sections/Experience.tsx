import { motion } from "framer-motion";
import { GraduationCap, Terminal } from "lucide-react";
import { timeline } from "../data/experience";
import SectionHeading from "../components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-base-borderSoft">
      <div className="container-shell">
        <SectionHeading
          index="04"
          title="Experience"
          description="My training and academic path so far."
        />

        <div className="relative flex flex-col gap-8 pl-8 sm:pl-10">
          <div className="absolute bottom-2 left-[15px] top-2 w-px bg-base-border sm:left-[19px]" />

          {timeline.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-base-border bg-base-soft text-ink-muted sm:-left-10 sm:h-8 sm:w-8">
                {entry.type === "Training" ? (
                  <Terminal size={13} />
                ) : (
                  <GraduationCap size={13} />
                )}
              </span>

              <div className="rounded-xl border border-base-border bg-base-raised/40 p-5 transition-colors hover:border-accent/30 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full border border-base-border px-2.5 py-1 font-mono text-[11px] text-ink-faint">
                    {entry.type}
                  </span>
                  <span className="text-[12.5px] text-ink-faint">{entry.period}</span>
                </div>
                <h3 className="mt-3 text-[16px] font-semibold text-ink">{entry.title}</h3>
                <p className="mt-1 text-[13.5px] text-ink-muted">
                  {entry.organization} · {entry.location}
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-muted">
                  {entry.description}
                </p>
                {entry.points && (
                  <ul className="mt-3 flex flex-col gap-2">
                    {entry.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-[13px] text-ink-faint">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
