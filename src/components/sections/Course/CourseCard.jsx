import { motion } from "framer-motion";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

function CourseCard({ course, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      className="group relative isolate overflow-hidden rounded-[1.75rem] border border-[#7B1735]/10 bg-white p-7 shadow-[0_15px_50px_rgba(74,23,40,0.06)]"
    >
      {/* Hover Background */}
      <div
        className="
          pointer-events-none
          absolute inset-0 z-0
          origin-bottom
          scale-y-0
          bg-[#7B1735]
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:scale-y-100
        "
      />

      {/* Card Content */}
      <div className="relative z-10">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div
            className="
              flex h-12 w-12 items-center justify-center rounded-2xl
              bg-[#7B1735]/10
              text-[#7B1735]
              transition-all duration-300
              group-hover:bg-white/10
              group-hover:text-[#F3D7B3]
            "
          >
            <Sparkles size={20} />
          </div>

          <span
            className="
              font-['Cormorant_Garamond']
              text-3xl
              font-semibold
              text-[#C9A45C]/50
              transition-colors duration-300
              group-hover:text-[#C9A45C]
            "
          >
            {course.number}
          </span>
        </div>

        {/* Title */}
        <h3
          className="
            mt-7
            font-['Cormorant_Garamond']
            text-3xl
            font-semibold
            text-[#4A1728]
            transition-colors duration-300
            group-hover:text-white
          "
        >
          {course.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-3
            min-h-[72px]
            font-['DM_Sans']
            text-sm
            leading-6
            text-[#6F5B61]
            transition-colors duration-300
            group-hover:text-[#E8D9DE]
          "
        >
          {course.description}
        </p>

        {/* Topics */}
        <div className="mt-6 space-y-2.5">
          {course.topics.map((topic) => (
            <div
              key={topic}
              className="flex items-center gap-2"
            >
              <span
                className="
                  flex h-5 w-5 shrink-0
                  items-center justify-center
                  rounded-full
                  bg-[#C9A45C]/15
                  text-[#C9A45C]
                  transition-colors duration-300
                  group-hover:bg-white/10
                "
              >
                <Check size={11} />
              </span>

              <span
                className="
                  font-['DM_Sans']
                  text-xs
                  text-[#6F5B61]
                  transition-colors duration-300
                  group-hover:text-[#E8D9DE]
                "
              >
                {topic}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="
            mt-7
            flex items-center justify-between
            border-t border-[#7B1735]/10
            pt-5
            transition-colors duration-300
            group-hover:border-white/10
          "
        >
          <span
            className="
              font-['DM_Sans']
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#8B6872]
              transition-colors duration-300
              group-hover:text-[#DCC9CE]
            "
          >
            Practical Focus
          </span>

          <motion.div
            whileHover={{ rotate: 45 }}
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-full
              border border-[#7B1735]/15
              text-[#7B1735]
              transition-colors duration-300
              group-hover:border-white/20
              group-hover:text-white
            "
          >
            <ArrowUpRight size={16} />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

export default CourseCard;