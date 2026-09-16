import { motion } from "framer-motion";

export default function SectionHeading({
  index,
  title,
  description,
  align = "left",
}: {
  index: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-[13px] text-accent-soft">{index}</span>
        <span className="h-px w-8 bg-base-border" />
        <h2 className="text-2xl font-semibold text-ink sm:text-[28px]">{title}</h2>
      </div>
      {description && (
        <p className={`max-w-xl text-[15px] leading-relaxed text-ink-muted ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
