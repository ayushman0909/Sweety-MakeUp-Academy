import { motion } from "framer-motion";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <motion.div
      className={`mx-auto flex max-w-3xl flex-col ${alignment}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      {eyebrow && (
        <span className="mb-3 font-['DM_Sans'] text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
          {eyebrow}
        </span>
      )}

      <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold leading-tight text-[#4A1728] sm:text-5xl md:text-6xl">
        {title}
      </h2>

      <div className="my-5 flex items-center gap-3">
        <span className="h-px w-10 bg-[#C9A45C]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#C9A45C]" />
        <span className="h-px w-10 bg-[#C9A45C]" />
      </div>

      {description && (
        <p className="max-w-2xl font-['DM_Sans'] text-sm leading-7 text-[#6F5B61] sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;