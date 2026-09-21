import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Sparkles,
} from "lucide-react";

import SectionHeading from "../../common/SectionHeading";
import Reveal from "../../common/Reveal";
import Button from "../../common/Button";

import CourseCard from "./CourseCard";
import courseData from "../../../data/courseData";

function Course() {
  return (
    <section
      id="course"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-[#E8B7C3]/15 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Heading */}
        <SectionHeading
          eyebrow="The Training"
          title="Learn the skills that bring a look to life."
          description="A practical learning journey covering makeup, hair styling, colour understanding, products and hands-on techniques."
        />

        {/* Course info banner */}
        <Reveal delay={0.1}>
          <div className="relative mt-14 overflow-hidden rounded-[2rem] bg-[#4A1728] p-7 shadow-[0_25px_70px_rgba(74,23,40,0.15)] sm:p-9">

            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#C9A45C]/15 blur-[80px]" />

            <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

              <div>
                <div className="flex items-center gap-2">
                  <CalendarDays
                    size={16}
                    className="text-[#C9A45C]"
                  />

                  <span className="font-['DM_Sans'] text-[10px] font-semibold uppercase tracking-[0.25em] text-[#DCC9CE]">
                    New Batch
                  </span>
                </div>

                <h3 className="mt-3 font-['Cormorant_Garamond'] text-3xl font-semibold text-white sm:text-4xl">
                  Starting 20 October
                </h3>

                <p className="mt-2 font-['DM_Sans'] text-sm text-[#DCC9CE]">
                  Begin your professional beauty learning journey.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5">
                  <span className="font-['DM_Sans'] text-xs font-medium text-[#F3D7B3]">
                    Limited Seats
                  </span>
                </div>

                <Button
                  href="#booking"
                  variant="gold"
                  className="shrink-0"
                >
                  Enquire Now
                  <ArrowRight size={15} />
                </Button>
              </div>

            </div>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {courseData.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
            />
          ))}

        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-[2rem] border border-[#C9A45C]/20 bg-[#FFF9F6] p-7 text-center sm:flex-row sm:text-left">

            <div className="flex items-center gap-4">

              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#C9A45C]/15 text-[#C9A45C] sm:flex"
              >
                <Sparkles size={20} />
              </motion.div>

              <div>
                <h4 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#4A1728]">
                  Ready to start learning?
                </h4>

                <p className="mt-1 font-['DM_Sans'] text-xs text-[#6F5B61]">
                  Reserve your place for the upcoming batch.
                </p>
              </div>
            </div>

            <Button href="#booking" variant="primary">
              Book Your Seat
              <ArrowRight size={16} />
            </Button>

          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default Course;