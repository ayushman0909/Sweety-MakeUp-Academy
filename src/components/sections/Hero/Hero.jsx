import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Sparkles,
  Star,
} from "lucide-react";

import Button from "../../common/Button";
import hero1 from "../../../assets/images/hero1.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#FFF9F6] pt-24"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large glow */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#E8B7C3]/25 blur-[100px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[550px] w-[550px] rounded-full bg-[#C9A45C]/15 blur-[120px]"
        />

        {/* Decorative circles */}
        <div className="absolute left-[8%] top-[25%] h-3 w-3 rounded-full bg-[#C9A45C]" />

        <div className="absolute right-[12%] top-[20%] h-2 w-2 rounded-full bg-[#7B1735]/50" />

        <div className="absolute bottom-[25%] left-[45%] h-2 w-2 rounded-full bg-[#C9A45C]/60" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#7B1735 1px, transparent 1px), linear-gradient(90deg, #7B1735 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-16">

          {/* ================= LEFT ================= */}

          <div className="max-w-2xl">

            {/* Small badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9A45C]/30 bg-white/70 px-4 py-2 backdrop-blur-md"
            >
              <Sparkles
                size={14}
                className="text-[#C9A45C]"
              />

              <span className="font-['DM_Sans'] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7B1735] sm:text-xs">
                Professional Makeup Training
              </span>
            </motion.div>

            {/* Heading */}
            <div className="overflow-hidden">

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                }}
                className="font-['Great_Vibes'] text-4xl text-[#C9A45C] sm:text-5xl"
              >
                Your Beauty Journey
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.25,
                }}
                className="mt-1 font-['Cormorant_Garamond'] text-5xl font-semibold leading-[0.95] text-[#4A1728] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
              >
                Starts

                <span className="block italic text-[#7B1735]">
                  Here.
                </span>
              </motion.h1>

            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="mt-7 max-w-xl font-['DM_Sans'] text-sm leading-7 text-[#6F5B61] sm:text-base"
            >
              Learn professional makeup and beauty techniques through
              practical, hands-on training designed to build real confidence
              and professional skills.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.6,
              }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button href="#booking" variant="primary">
                Reserve Your Seat
                <ArrowRight size={16} />
              </Button>

              <Button href="#course" variant="outline">
                Explore Course
              </Button>
            </motion.div>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
              className="mt-9 flex flex-wrap gap-x-6 gap-y-3"
            >

              <div className="flex items-center gap-2">

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7B1735]/10">
                  <Star
                    size={13}
                    className="fill-[#C9A45C] text-[#C9A45C]"
                  />
                </div>

                <span className="font-['DM_Sans'] text-xs font-medium text-[#5E454C]">
                  Lakmé Certified
                </span>

              </div>

              <div className="h-6 w-px bg-[#7B1735]/10" />

              <div className="flex items-center gap-2">

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7B1735]/10">
                  <Sparkles
                    size={13}
                    className="text-[#C9A45C]"
                  />
                </div>

                <span className="font-['DM_Sans'] text-xs font-medium text-[#5E454C]">
                  Certified Top Ranker
                </span>

              </div>

            </motion.div>

          </div>

          {/* ================= RIGHT IMAGE ================= */}

          <div className="relative mx-auto w-full max-w-[520px]">

            {/* Rotating decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-5 rounded-[45%] border border-dashed border-[#C9A45C]/40"
            />

            {/* Outer frame */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >

              {/* Image glow */}
              <div className="absolute -inset-5 rounded-[2rem] bg-[#7B1735]/10 blur-2xl" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-[0_30px_80px_rgba(74,23,40,0.18)]">

                <motion.img
                  src={hero1}
                  alt="Professional makeup and beauty"
                  className="h-[520px] w-full object-cover sm:h-[620px]"
                  initial={{ scale: 1.04 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                />

                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3A1322]/35 via-transparent to-transparent" />

              </div>

              {/* ================= FLOATING BADGE 1 ================= */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-5 top-14 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-[0_15px_40px_rgba(74,23,40,0.15)] backdrop-blur-md sm:-left-10"
              >
                <p className="font-['DM_Sans'] text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8B6872]">
                  Certified
                </p>

                <p className="mt-1 font-['Cormorant_Garamond'] text-lg font-semibold text-[#7B1735]">
                  Lakmé
                </p>
              </motion.div>

              {/* ================= FLOATING BADGE 2 ================= */}

              <motion.div
                animate={{
                  y: [0, 12, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -right-4 bottom-24 rounded-2xl border border-[#C9A45C]/30 bg-[#FFF9F6]/95 px-4 py-3 shadow-[0_15px_40px_rgba(74,23,40,0.15)] backdrop-blur-md sm:-right-8"
              >
                <p className="font-['DM_Sans'] text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8B6872]">
                  Achievement
                </p>

                <p className="mt-1 font-['Cormorant_Garamond'] text-lg font-semibold text-[#7B1735]">
                  Top Ranker
                </p>
              </motion.div>

              {/* ================= GOLD FLOATING DOT ================= */}

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: 360,
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="absolute -right-2 top-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A45C] text-white shadow-xl sm:-right-5"
              >
                <Sparkles size={20} />
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#7B1735]/60 md:flex"
      >
        <span className="font-['DM_Sans'] text-[9px] font-semibold uppercase tracking-[0.25em]">
          Explore
        </span>

        <ArrowDown size={15} />
      </motion.a>

    </section>
  );
}

export default Hero;