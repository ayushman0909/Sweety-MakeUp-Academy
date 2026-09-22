import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Sparkles,
  Star,
} from "lucide-react";

import Button from "../../common/Button";
import Reveal from "../../common/Reveal";

import founderImage from "../../../assets/images/founder.jpeg";

function Founder() {
  return (
    <section
      id="founder"
      className="
        relative
        overflow-hidden
        bg-[#4A1728]
        py-24
        sm:py-32
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#C9A45C]/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -right-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#E8B7C3]/10
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage:
              "linear-gradient(#F3D7B3 1px, transparent 1px), linear-gradient(90deg, #F3D7B3 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[0.85fr_1fr]
            lg:gap-20
          "
        >

          {/* ================= IMAGE ================= */}

          <Reveal direction="right">
            <div className="relative mx-auto w-full max-w-[500px]">

              {/* Decorative ring */}

              <div
                className="
                  absolute
                  -inset-5
                  rounded-[2.5rem]
                  border
                  border-dashed
                  border-[#C9A45C]/35
                "
              />

              {/* Image glow */}

              <div
                className="
                  absolute
                  -inset-6
                  rounded-[2.5rem]
                  bg-[#C9A45C]/10
                  blur-2xl
                "
              />

              {/* Image */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[2.5rem]
                  border-8
                  border-white/95
                  bg-white
                  shadow-[0_30px_80px_rgba(0,0,0,0.3)]
                "
              >
                <img
                  src={founderImage}
                  alt="Founder and makeup educator"
                  loading="lazy"
                  decoding="async"
                  className="
                    aspect-[4/5]
                    h-full
                    w-full
                    object-cover
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#2A0D19]/45
                    via-transparent
                    to-transparent
                  "
                />
              </div>

              {/* ================= CERTIFICATION BADGE ================= */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -right-3
                  top-10
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-[#C9A45C]/30
                  bg-[#FFF9F6]
                  px-4
                  py-3
                  shadow-[0_15px_40px_rgba(0,0,0,0.2)]
                  sm:-right-7
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-[#7B1735]/10
                    text-[#C9A45C]
                  "
                >
                  <Award size={17} />
                </div>

                <div>
                  <p
                    className="
                      font-['DM_Sans']
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#8B6872]
                    "
                  >
                    Certified
                  </p>

                  <p
                    className="
                      font-['Cormorant_Garamond']
                      text-lg
                      font-semibold
                      text-[#7B1735]
                    "
                  >
                    Lakmé
                  </p>
                </div>
              </motion.div>

              {/* ================= TOP RANKER BADGE ================= */}

              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="
                  absolute
                  -left-3
                  bottom-10
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/60
                  bg-[#FFF9F6]
                  px-4
                  py-3
                  shadow-[0_15px_40px_rgba(0,0,0,0.2)]
                  sm:-left-7
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-[#C9A45C]/15
                    text-[#C9A45C]
                  "
                >
                  <Star
                    size={16}
                    className="fill-[#C9A45C]"
                  />
                </div>

                <div>
                  <p
                    className="
                      font-['DM_Sans']
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#8B6872]
                    "
                  >
                    Achievement
                  </p>

                  <p
                    className="
                      font-['Cormorant_Garamond']
                      text-lg
                      font-semibold
                      text-[#7B1735]
                    "
                  >
                    Top Ranker
                  </p>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* ================= CONTENT ================= */}

          <div className="max-w-2xl">

            <Reveal direction="left">

              {/* Eyebrow */}

              <div className="flex items-center gap-3">
                <Sparkles
                  size={16}
                  className="text-[#C9A45C]"
                />

                <span
                  className="
                    font-['DM_Sans']
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#C9A45C]
                  "
                >
                  Meet Your Mentor
                </span>
              </div>

              {/* Heading */}

              <h2
                className="
                  mt-5
                  font-['Cormorant_Garamond']
                  text-5xl
                  font-semibold
                  leading-[0.95]
                  text-[#FFF9F6]
                  sm:text-6xl
                  md:text-7xl
                "
              >
                Beauty is an art,
                <span className="block italic text-[#F3D7B3]">
                  and I love teaching it.
                </span>
              </h2>

              {/* Divider */}

              <div className="my-7 flex items-center gap-3">
                <span className="h-px w-12 bg-[#C9A45C]" />

                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A45C]" />

                <span className="h-px w-12 bg-[#C9A45C]" />
              </div>

              {/* Name */}

              <p
                className="
                  font-['Great_Vibes']
                  text-4xl
                  text-[#C9A45C]
                  sm:text-5xl
                "
              >
                Sweety
              </p>

              <p
                className="
                  mt-1
                  font-['DM_Sans']
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white/60
                "
              >
                Founder • Makeup Artist • Beauty Educator
              </p>

              {/* Description */}

              <div
                className="
                  mt-7
                  space-y-4
                  font-['DM_Sans']
                  text-sm
                  leading-7
                  text-white/70
                  sm:text-base
                "
              >
                <p>
                  With a passion for beauty, creativity and
                  professional artistry, my journey has always
                  been about helping people feel confident in
                  their own beauty.
                </p>

                <p>
                  After professional training and certification
                  with Lakmé, I wanted to create a learning
                  environment where aspiring makeup artists can
                  understand not only the techniques, but also
                  the confidence and discipline behind professional
                  makeup artistry.
                </p>

                <p>
                  Through practical demonstrations, guided
                  learning and hands-on practice, my goal is to
                  help every student develop skills they can
                  confidently carry into their own professional
                  journey.
                </p>
              </div>

              {/* Credentials */}

              <div
                className="
                  mt-8
                  grid
                  grid-cols-2
                  gap-3
                  sm:grid-cols-3
                "
              >
                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                    backdrop-blur-sm
                  "
                >
                  <Award
                    size={18}
                    className="text-[#C9A45C]"
                  />

                  <p
                    className="
                      mt-3
                      font-['Cormorant_Garamond']
                      text-xl
                      font-semibold
                      text-white
                    "
                  >
                    Lakmé
                  </p>

                  <p
                    className="
                      mt-1
                      font-['DM_Sans']
                      text-[9px]
                      uppercase
                      tracking-[0.15em]
                      text-white/50
                    "
                  >
                    Certified
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                    backdrop-blur-sm
                  "
                >
                  <Star
                    size={18}
                    className="text-[#C9A45C]"
                  />

                  <p
                    className="
                      mt-3
                      font-['Cormorant_Garamond']
                      text-xl
                      font-semibold
                      text-white
                    "
                  >
                    Top Ranker
                  </p>

                  <p
                    className="
                      mt-1
                      font-['DM_Sans']
                      text-[9px]
                      uppercase
                      tracking-[0.15em]
                      text-white/50
                    "
                  >
                    Achievement
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                    backdrop-blur-sm
                    col-span-2
                    sm:col-span-1
                  "
                >
                  <Sparkles
                    size={18}
                    className="text-[#C9A45C]"
                  />

                  <p
                    className="
                      mt-3
                      font-['Cormorant_Garamond']
                      text-xl
                      font-semibold
                      text-white
                    "
                  >
                    Practical
                  </p>

                  <p
                    className="
                      mt-1
                      font-['DM_Sans']
                      text-[9px]
                      uppercase
                      tracking-[0.15em]
                      text-white/50
                    "
                  >
                    Learning
                  </p>
                </div>
              </div>

              {/* Quote */}

              <div
                className="
                  mt-8
                  border-l-2
                  border-[#C9A45C]
                  pl-5
                "
              >
                <p
                  className="
                    font-['Cormorant_Garamond']
                    text-xl
                    italic
                    leading-relaxed
                    text-[#F3D7B3]
                    sm:text-2xl
                  "
                >
                  “My goal is not just to teach makeup,
                  but to help every student discover the
                  confidence behind the artistry.”
                </p>
              </div>

              {/* CTA */}

              <Button
                href="#booking"
                variant="gold"
                className="mt-8"
              >
                Learn With Me
                <ArrowRight size={16} />
              </Button>

            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;