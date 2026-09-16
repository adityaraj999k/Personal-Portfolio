import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certificates } from "../data/achievements";
import SectionHeading from "../components/SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad border-t border-base-borderSoft">
      <div className="container-shell">
        <SectionHeading
          index="05"
          title="Achievements"
          description="Certifications I've completed along the way."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-4 rounded-xl border border-base-border bg-base-raised/40 p-5 transition-colors hover:border-accent/30"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent-soft">
                <Award size={16} strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="text-[14.5px] font-semibold leading-snug text-ink">
                  {cert.title}
                </h3>
                <p className="mt-1.5 text-[12.5px] text-ink-faint">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
