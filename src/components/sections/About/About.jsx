import { motion } from "framer-motion";
import { ArrowUpRight, Heart, Sparkles } from "lucide-react";

import Reveal from "../../common/Reveal";
import SectionHeading from "../../common/SectionHeading";
import Button from "../../common/Button";
import poster from "../../../assets/images/poster.webp";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#E8B7C3]/15 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <SectionHeading
          eyebrow="The Story Behind The Academy"
          title="Beauty is not just a skill. It's an art."
          description="A learning space created to turn passion for beauty into confidence, creativity and professional skills."
        />

        {/* Main content */}
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ================= IMAGE ================= */}

          <Reveal direction="left">
            <div className="relative mx-auto max-w-lg">

              {/* Decorative frame */}
              <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-[#C9A45C]/40" />

              <div className="relative overflow-hidden rounded-[2rem] bg-[#F6E9E8] p-2 shadow-[0_30px_80px_rgba(74,23,40,0.12)]">

                <motion.img
                  src={poster}
                  alt="Sweety Makeover Academy"
                  className="h-[520px] w-full rounded-[1.5rem] object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Floating label */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-7 left-7 flex items-center gap-3 rounded-2xl border border-white/50 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7B1735] text-white">
                    <Heart size={17} fill="currentColor" />
                  </div>

                  <div>
                    <p className="font-['DM_Sans'] text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8B6872]">
                      Learn With
                    </p>

                    <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#4A1728]">
                      Passion
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Gold dot */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: {
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="absolute -right-5 -top-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A45C] text-white shadow-xl"
              >
                <Sparkles size={22} />
              </motion.div>
            </div>
          </Reveal>

          {/* ================= TEXT ================= */}

          <Reveal direction="right" delay={0.15}>
            <div>

              <span className="font-['Great_Vibes'] text-3xl text-[#C9A45C]">
                About The Journey
              </span>

              <h3 className="mt-2 font-['Cormorant_Garamond'] text-4xl font-semibold leading-tight text-[#4A1728] sm:text-5xl">
                From learning the craft
                <span className="block italic text-[#7B1735]">
                  to teaching it.
                </span>
              </h3>

              <div className="mt-7 space-y-5 font-['DM_Sans'] text-sm leading-7 text-[#6F5B61] sm:text-base">
                <p>
                  Makeup is more than applying products. It is about
                  understanding the face, choosing the right techniques and
                  creating a look with confidence.
                </p>

                <p>
                  After learning professional makeup techniques from Lakmé
                  and achieving a certified top-ranker position, the vision
                  is now to share that knowledge with aspiring makeup artists.
                </p>

                <p>
                  The academy focuses on practical learning so students can
                  understand not only <span className="font-semibold text-[#7B1735]">what</span> to
                  do, but also <span className="font-semibold text-[#7B1735]">why</span> and
                  <span className="font-semibold text-[#7B1735]"> how</span> to do it.
                </p>
              </div>

              {/* Mini highlights */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">

                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-[#7B1735]/10 bg-[#FFF9F6] p-4"
                >
                  <p className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#7B1735]">
                    01
                  </p>

                  <p className="mt-1 font-['DM_Sans'] text-xs font-medium text-[#6F5B61]">
                    Learn Professionally
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-[#7B1735]/10 bg-[#FFF9F6] p-4"
                >
                  <p className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#7B1735]">
                    02
                  </p>

                  <p className="mt-1 font-['DM_Sans'] text-xs font-medium text-[#6F5B61]">
                    Practice Hands-On
                  </p>
                </motion.div>

              </div>

              <div className="mt-8">
                <Button href="#course" variant="outline">
                  Discover The Course
                  <ArrowUpRight size={16} />
                </Button>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

export default About;