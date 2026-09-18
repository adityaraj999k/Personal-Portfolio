import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "../components/SectionHeading";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: profile.githubHandle,
    href: profile.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinHandle,
    href: profile.linkedin,
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-base-borderSoft">
      <div className="container-shell">
        <SectionHeading
          index="06"
          title="Contact"
          description="Open to software engineering roles, internships, and interesting collaborations."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold leading-snug text-ink sm:text-[30px]">
              Have a role or a project in mind?
              <br />
              <span className="text-ink-muted">Let's talk.</span>
            </h3>
            <p className="mt-4 max-w-sm text-[14.5px] leading-relaxed text-ink-muted">
              I'm currently based in {profile.location.split(",")[0]} and open to
              opportunities with product-based teams. The fastest way to reach me
              is email — I read every message.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-ink px-5 py-3 text-[14px] font-medium text-base shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset] transition-all hover:opacity-90 hover:-translate-y-0.5 dark:hover:bg-white"
            >
              Say hello
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {channels.map((channel, i) => (
              <motion.a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`group flex flex-col justify-between gap-6 rounded-xl border border-base-border bg-base-raised/40 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 ${
                  i === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent-soft">
                    <channel.icon size={16} strokeWidth={1.75} />
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="text-ink-faint opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <div>
                  <p className="text-[12px] text-ink-faint">{channel.label}</p>
                  <p className="mt-0.5 truncate text-[13.5px] font-medium text-ink">
                    {channel.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
