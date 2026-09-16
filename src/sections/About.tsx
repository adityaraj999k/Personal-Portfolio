import { motion } from "framer-motion";
import { profile } from "../data/profile";
import SectionHeading from "../components/SectionHeading";
import profileImg from "../assets/profile.jpg";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-shell">
        <SectionHeading
          index="01"
          title="About"
          description="A quick look at who I am and where I'm headed."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[300px] lg:mx-0"
          >
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/10 blur-2xl"
            />
            <div className="overflow-hidden rounded-2xl border border-base-border bg-base-raised shadow-panel">
              <img
                src={profileImg}
                alt={profile.name}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl border border-base-border bg-base-raised/60 px-4 py-3">
              <span className="text-[13px] font-medium text-ink">{profile.location}</span>
              <span className="flex h-2 w-2 rounded-full bg-signal-teal" />
            </div>
          </motion.div>

          {/* copy + facts */}
          <div className="flex flex-col gap-10">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl text-[16px] leading-relaxed text-ink-muted"
            >
              {profile.summary}
            </motion.p>

            <motion.dl
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2"
            >
              {profile.quickFacts.map((fact) => (
                <div key={fact.label} className="border-l-2 border-base-border pl-4">
                  <dt className="text-[12.5px] text-ink-faint">{fact.label}</dt>
                  <dd className="mt-1 text-[14.5px] font-medium text-ink">{fact.value}</dd>
                </div>
              ))}
            </motion.dl>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-base-border bg-base-raised/50 px-4 py-5 text-center transition-colors hover:border-accent/40"
                >
                  <div className="text-xl font-bold text-ink sm:text-2xl">{stat.value}</div>
                  <div className="mt-1 text-[11.5px] leading-tight text-ink-faint">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
