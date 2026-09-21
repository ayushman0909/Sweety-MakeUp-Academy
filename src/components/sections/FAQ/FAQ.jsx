import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  MessageCircleQuestion,
  Sparkles,
} from "lucide-react";

import Reveal from "../../common/Reveal";
import SectionHeading from "../../common/SectionHeading";
import Button from "../../common/Button";

import faqData from "../../../data/faqData";

function FAQ() {
  const [activeId, setActiveId] = useState(1);

  const toggleFAQ = (id) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#FFF9F6] py-24 sm:py-32"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute right-[-150px] top-20 h-[450px] w-[450px] rounded-full bg-[#C9A45C]/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-150px] left-[-150px] h-[400px] w-[400px] rounded-full bg-[#7B1735]/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Everything you want to know."
          description="A few common questions about the academy, learning experience and upcoming batch."
        />

        {/* FAQ Layout */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          {/* Left Side */}
          <Reveal direction="right">
            <div className="lg:sticky lg:top-32">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  bg-[#4A1728]
                  p-8
                  shadow-[0_20px_60px_rgba(74,23,40,0.12)]
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
                    pointer-events-none
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

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9A45C]/15 text-[#C9A45C]">
                    <MessageCircleQuestion size={25} />
                  </div>

                  <p className="mt-8 font-['DM_Sans'] text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
                    Need More Information?
                  </p>

                  <h3 className="mt-3 font-['Cormorant_Garamond'] text-4xl font-semibold leading-tight text-white">
                    Still have a question?
                  </h3>

                  <p className="mt-4 font-['DM_Sans'] text-sm leading-7 text-[#DCC9CE]">
                    If you want to know more about the course, learning
                    experience or upcoming batch, send an enquiry and get
                    the details you need.
                  </p>

                  <Button
                    href="#booking"
                    variant="gold"
                    className="mt-7"
                  >
                    Ask Your Question
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Questions */}
          <div className="space-y-4">
            {faqData.map((item, index) => {
              const isOpen = activeId === item.id;

              return (
                <Reveal
                  key={item.id}
                  direction="left"
                  delay={index * 0.06}
                >
                  <motion.div
                    layout
                    className={`
                      group
                      overflow-hidden
                      rounded-[1.5rem]
                      border
                      bg-white
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "border-[#7B1735]/20 shadow-[0_15px_45px_rgba(74,23,40,0.08)]"
                          : "border-[#7B1735]/10 shadow-[0_8px_30px_rgba(74,23,40,0.04)]"
                      }
                    `}
                  >
                    {/* Question Button */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(item.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                    >
                      {/* Number */}
                      <span
                        className={`
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          font-['Cormorant_Garamond']
                          text-lg
                          font-semibold
                          transition-all
                          duration-300
                          ${
                            isOpen
                              ? "bg-[#7B1735] text-white"
                              : "bg-[#7B1735]/5 text-[#7B1735]"
                          }
                        `}
                      >
                        {String(item.id).padStart(2, "0")}
                      </span>

                      {/* Question */}
                      <span
                        className={`
                          flex-1
                          font-['Cormorant_Garamond']
                          text-xl
                          font-semibold
                          transition-colors
                          duration-300
                          sm:text-2xl
                          ${
                            isOpen
                              ? "text-[#7B1735]"
                              : "text-[#4A1728]"
                          }
                        `}
                      >
                        {item.question}
                      </span>

                      {/* Arrow */}
                      <motion.span
                        animate={{
                          rotate: isOpen ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          transition-colors
                          duration-300
                          ${
                            isOpen
                              ? "bg-[#C9A45C] text-[#4A1728]"
                              : "bg-[#7B1735]/5 text-[#7B1735]"
                          }
                        `}
                      >
                        <ChevronDown size={17} />
                      </motion.span>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <div className="px-5 pb-6 pl-[4.5rem] pr-5 sm:px-6 sm:pb-7 sm:pl-[5.5rem]">
                            <div className="mb-4 h-px w-12 bg-[#C9A45C]" />

                            <p className="font-['DM_Sans'] text-sm leading-7 text-[#6F5B61]">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Bottom Accent */}
        <Reveal delay={0.2}>
          <div className="mt-16 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C9A45C]" />

            <Sparkles
              size={15}
              className="text-[#C9A45C]"
            />

            <span className="h-px w-10 bg-[#C9A45C]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FAQ;