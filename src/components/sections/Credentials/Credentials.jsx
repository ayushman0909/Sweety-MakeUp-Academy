import { motion } from "framer-motion";
import {
  Award,
  BookOpenCheck,
  Sparkles,
  Trophy,
} from "lucide-react";

import Reveal from "../../common/Reveal";
import SectionHeading from "../../common/SectionHeading";

function Credentials() {
  const credentials = [
    {
      icon: Award,
      number: "01",
      title: "Lakmé Certified",
      description:
        "Professional makeup knowledge developed through Lakmé training and learning.",
    },
    {
      icon: Trophy,
      number: "02",
      title: "Certified Top Ranker",
      description:
        "Recognised as a top ranker during the professional learning journey.",
    },
    {
      icon: BookOpenCheck,
      number: "03",
      title: "Practical Learning",
      description:
        "Focus on understanding techniques through demonstrations and hands-on practice.",
    },
    {
      icon: Sparkles,
      number: "04",
      title: "Creative Approach",
      description:
        "Learn to understand face structure, products and techniques with a creative approach.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FFF9F6] py-24 sm:py-32">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#C9A45C]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <SectionHeading
          eyebrow="Credentials & Approach"
          title="Learn from experience. Practice with purpose."
          description="A professional learning environment built around knowledge, technique and hands-on practice."
        />

        {/* Cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.number}
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="
                    group
                    relative
                    isolate
                    h-full
                    overflow-hidden
                    rounded-[1.75rem]
                    border
                    border-[#7B1735]/10
                    bg-white
                    p-7
                    shadow-[0_15px_50px_rgba(74,23,40,0.06)]
                  "
                >
                  {/* Hover Background */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-0
                      origin-bottom
                      scale-y-0
                      bg-[#7B1735]
                      transition-transform
                      duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:scale-y-100
                    "
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Top Row */}
                    <div className="flex items-start justify-between">
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-2xl
                          bg-[#7B1735]/10
                          text-[#7B1735]
                          transition-all
                          duration-300
                          group-hover:bg-white/10
                          group-hover:text-[#F3D7B3]
                        "
                      >
                        <Icon size={22} />
                      </div>

                      <span
                        className="
                          font-['Cormorant_Garamond']
                          text-2xl
                          font-semibold
                          text-[#C9A45C]/50
                          transition-colors
                          duration-300
                          group-hover:text-[#C9A45C]
                        "
                      >
                        {item.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        mt-8
                        font-['Cormorant_Garamond']
                        text-2xl
                        font-semibold
                        text-[#4A1728]
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mt-3
                        font-['DM_Sans']
                        text-sm
                        leading-6
                        text-[#6F5B61]
                        transition-colors
                        duration-300
                        group-hover:text-[#E8D9DE]
                      "
                    >
                      {item.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className="mt-7 flex items-center gap-2">
                      <span
                        className="
                          h-px
                          w-8
                          bg-[#C9A45C]
                          transition-all
                          duration-500
                          group-hover:w-14
                        "
                      />

                      <Sparkles
                        size={12}
                        className="
                          text-[#C9A45C]
                          transition-transform
                          duration-500
                          group-hover:rotate-180
                        "
                      />
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <Reveal delay={0.2}>
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mx-auto mb-5 h-px w-16 bg-[#C9A45C]" />

            <p
              className="
                font-['Cormorant_Garamond']
                text-2xl
                italic
                leading-relaxed
                text-[#7B1735]
                sm:text-3xl
              "
            >
              "The goal is not just to teach makeup —
              <span className="text-[#C9A45C]">
                {" "}it's to build confidence through skill.
              </span>
              "
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Credentials;