import { motion } from "framer-motion";
import {
  CheckCircle2,
  GraduationCap,
  Heart,
  Sparkles,
  Users,
} from "lucide-react";

import Reveal from "../../common/Reveal";
import SectionHeading from "../../common/SectionHeading";

function Experience() {
  const experiencePoints = [
    {
      icon: GraduationCap,
      title: "Learn",
      description:
        "Understand professional makeup concepts, products, tools and techniques step by step.",
    },
    {
      icon: Users,
      title: "Observe",
      description:
        "Watch guided demonstrations and understand how professional techniques are applied.",
    },
    {
      icon: CheckCircle2,
      title: "Practice",
      description:
        "Work on practical techniques and improve through hands-on learning.",
    },
    {
      icon: Heart,
      title: "Create",
      description:
        "Develop your own creative approach and build confidence with every look.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#4A1728] py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#C9A45C]/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#B85C78]/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <SectionHeading
          eyebrow="The Learning Experience"
          title="From learning to creating."
          description="A practical journey designed to help you understand professional techniques, practice with confidence and develop your creative skills."
        />

        {/* Main Content */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Left Visual */}
          <Reveal direction="right">
            <div className="relative">
              {/* Main Box */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-sm
                  sm:p-10
                "
              >
                {/* Decorative Circle */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    -right-20
                    -top-20
                    h-56
                    w-56
                    rounded-full
                    border
                    border-[#C9A45C]/20
                  "
                />

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    -bottom-24
                    -left-24
                    h-64
                    w-64
                    rounded-full
                    border
                    border-[#C9A45C]/10
                  "
                />

                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A45C]/15 text-[#C9A45C]">
                    <Sparkles size={28} />
                  </div>

                  <p className="mt-8 font-['DM_Sans'] text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
                    Professional Approach
                  </p>

                  <h3 className="mt-4 font-['Cormorant_Garamond'] text-4xl font-semibold leading-tight text-white sm:text-5xl">
                    Learn the technique.
                    <span className="block text-[#E8C98F]">
                      Build your confidence.
                    </span>
                  </h3>

                  <p className="mt-5 max-w-md font-['DM_Sans'] text-sm leading-7 text-[#E8D9DE]">
                    Every learner gets the opportunity to understand the
                    process, observe professional techniques and practise
                    them step by step.
                  </p>

                  {/* Mini Stats */}
                  <div className="mt-10 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <span className="block font-['Cormorant_Garamond'] text-3xl font-semibold text-[#C9A45C]">
                        01
                      </span>

                      <span className="mt-1 block font-['DM_Sans'] text-xs uppercase tracking-wider text-[#DCC9CE]">
                        Guided Learning
                      </span>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <span className="block font-['Cormorant_Garamond'] text-3xl font-semibold text-[#C9A45C]">
                        02
                      </span>

                      <span className="mt-1 block font-['DM_Sans'] text-xs uppercase tracking-wider text-[#DCC9CE]">
                        Hands-on Practice
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Right Journey */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[25px] top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-[#C9A45C]/60 via-white/10 to-transparent sm:block" />

            <div className="space-y-5">
              {experiencePoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal
                    key={item.title}
                    direction="left"
                    delay={index * 0.1}
                  >
                    <motion.div
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.3 }}
                      className="
                        group
                        relative
                        flex
                        gap-5
                        rounded-[1.5rem]
                        border
                        border-white/10
                        bg-white/[0.04]
                        p-5
                        backdrop-blur-sm
                        transition-colors
                        duration-300
                        hover:border-[#C9A45C]/30
                        hover:bg-white/[0.07]
                        sm:p-6
                      "
                    >
                      {/* Icon */}
                      <div
                        className="
                          relative
                          z-10
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          bg-[#C9A45C]/10
                          text-[#C9A45C]
                          transition-all
                          duration-300
                          group-hover:bg-[#C9A45C]
                          group-hover:text-[#4A1728]
                        "
                      >
                        <Icon size={21} />
                      </div>

                      {/* Text */}
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-['DM_Sans'] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A45C]">
                            0{index + 1}
                          </span>

                          <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-white">
                            {item.title}
                          </h3>
                        </div>

                        <p className="mt-2 font-['DM_Sans'] text-sm leading-6 text-[#DCC9CE]">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;