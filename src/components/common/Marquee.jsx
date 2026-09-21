import { motion } from "framer-motion";

function Marquee() {
  const items = [
    "MAKEUP",
    "HAIR STYLING",
    "BRIDAL LOOKS",
    "PRACTICAL TRAINING",
    "LAKMÉ CERTIFIED",
    "TOP RANKER",
  ];

  return (
    <section className="overflow-hidden border-y border-[#C9A45C]/20 bg-[#4A1728] py-4">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center"
          >
            <span className="mx-6 whitespace-nowrap font-['Cormorant_Garamond'] text-lg font-medium uppercase tracking-[0.18em] text-[#F8E8D0] sm:text-xl">
              {item}
            </span>

            <span className="text-[#C9A45C]">✦</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Marquee;