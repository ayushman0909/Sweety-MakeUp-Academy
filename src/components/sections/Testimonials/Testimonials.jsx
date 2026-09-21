import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

import Reveal from "../../common/Reveal";
import SectionHeading from "../../common/SectionHeading";

import testimonialsData from "../../../data/testimonialsData";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonialsData[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex(
      (prev) => (prev + 1) % testimonialsData.length
    );
  };

  const previousTestimonial = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + testimonialsData.length) %
        testimonialsData.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#4A1728] py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-[-100px] h-[450px] w-[450px] rounded-full bg-[#C9A45C]/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-100px] h-[500px] w-[500px] rounded-full bg-[#B85C78]/10 blur-[150px]" />

      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        {/* Heading */}
        <div className="text-white">
          <SectionHeading
            eyebrow="Student Experiences"
            title="Learn. Practice. Grow."
            description="Every learner brings a different story. The goal is to create an environment where knowledge turns into confidence and practical skill."
          />
        </div>

        {/* Testimonial Card */}
        <Reveal delay={0.15}>
          <div className="relative mt-16">
            {/* Decorative Quote */}
            <div className="pointer-events-none absolute -left-5 -top-8 hidden sm:block">
              <Quote
                size={90}
                strokeWidth={1}
                className="text-[#C9A45C]/10"
              />
            </div>

            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.05]
                p-8
                backdrop-blur-md
                sm:p-12
                lg:p-16
              "
            >
              {/* Gold line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute left-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                >
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        fill="currentColor"
                        className="text-[#C9A45C]"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <blockquote
                    className="
                      mt-7
                      max-w-3xl
                      font-['Cormorant_Garamond']
                      text-3xl
                      font-medium
                      leading-relaxed
                      text-white
                      sm:text-4xl
                      lg:text-5xl
                    "
                  >
                    “{activeTestimonial.text}”
                  </blockquote>

                  {/* Student */}
                  <div className="mt-9 flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-[#C9A45C]/15
                        text-[#C9A45C]
                      "
                    >
                      <Sparkles size={20} />
                    </div>

                    <div>
                      <p className="font-['DM_Sans'] text-sm font-semibold text-white">
                        {activeTestimonial.name}
                      </p>

                      <p className="mt-1 font-['DM_Sans'] text-xs text-[#DCC9CE]">
                        {activeTestimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-7">
                {/* Dots */}
                <div className="flex items-center gap-2">
                  {testimonialsData.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                      className={`
                        h-1.5
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          index === activeIndex
                            ? "w-10 bg-[#C9A45C]"
                            : "w-5 bg-white/20 hover:bg-white/40"
                        }
                      `}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={previousTestimonial}
                    aria-label="Previous testimonial"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      text-white
                      transition-all
                      duration-300
                      hover:border-[#C9A45C]
                      hover:bg-[#C9A45C]
                      hover:text-[#4A1728]
                    "
                  >
                    <ArrowLeft size={17} />
                  </button>

                  <button
                    type="button"
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      text-white
                      transition-all
                      duration-300
                      hover:border-[#C9A45C]
                      hover:bg-[#C9A45C]
                      hover:text-[#4A1728]
                    "
                  >
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom Stats */}
        <Reveal delay={0.25}>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
              <span className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#C9A45C]">
                01
              </span>
              <p className="mt-1 font-['DM_Sans'] text-[10px] uppercase tracking-[0.18em] text-[#DCC9CE]">
                Learn
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
              <span className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#C9A45C]">
                02
              </span>
              <p className="mt-1 font-['DM_Sans'] text-[10px] uppercase tracking-[0.18em] text-[#DCC9CE]">
                Practice
              </p>
            </div>

            <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center sm:col-span-1">
              <span className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#C9A45C]">
                03
              </span>
              <p className="mt-1 font-['DM_Sans'] text-[10px] uppercase tracking-[0.18em] text-[#DCC9CE]">
                Create
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Testimonials;