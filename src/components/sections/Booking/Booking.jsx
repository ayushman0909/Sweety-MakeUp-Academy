import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  MapPin,
  Sparkles,
} from "lucide-react";

import Reveal from "../../common/Reveal";
import SectionHeading from "../../common/SectionHeading";

import BookingForm from "./BookingForm";

function Booking() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-[#F8EEE9] py-24 sm:py-32"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-[-150px] top-20 h-[450px] w-[450px] rounded-full bg-[#C9A45C]/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-150px] right-[-150px] h-[500px] w-[500px] rounded-full bg-[#7B1735]/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <SectionHeading
          eyebrow="Reserve Your Place"
          title="Start your beauty journey."
          description="Take the first step towards learning professional makeup and beauty techniques through guided, practical training."
        />

        {/* Main Layout */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          {/* Left Information */}
          <Reveal direction="right">
            <div className="lg:sticky lg:top-32">
              <div
                className="
                  overflow-hidden
                  rounded-[2rem]
                  bg-[#4A1728]
                  p-8
                  shadow-[0_20px_60px_rgba(74,23,40,0.12)]
                  sm:p-10
                "
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9A45C]/15 text-[#C9A45C]">
                  <Sparkles size={25} />
                </div>

                <p className="mt-8 font-['DM_Sans'] text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
                  New Batch
                </p>

                <h3
                  className="
                    mt-3
                    font-['Cormorant_Garamond']
                    text-4xl
                    font-semibold
                    leading-tight
                    text-white
                    sm:text-5xl
                  "
                >
                  20 October
                  <span className="block text-[#E8C98F]">
                    2026
                  </span>
                </h3>

                <p className="mt-5 font-['DM_Sans'] text-sm leading-7 text-[#DCC9CE]">
                  Fill out the enquiry form and share your details.
                  We will connect with you regarding the upcoming
                  batch.
                </p>

                {/* Details */}
                <div className="mt-8 space-y-3">
                  <InfoRow
                    icon={CalendarDays}
                    text="New batch starting 20 October"
                  />

                  <InfoRow
                    icon={MapPin}
                    text="Motihari, Bihar"
                  />

                  <InfoRow
                    icon={CheckCircle2}
                    text="Practical learning approach"
                  />
                </div>

                {/* Decorative Line */}
                <div className="mt-9 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#C9A45C]" />
                  <Sparkles
                    size={13}
                    className="text-[#C9A45C]"
                  />
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                <p className="mt-5 font-['Cormorant_Garamond'] text-lg italic text-[#E8D9DE]">
                  Learn with purpose. Create with confidence.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="left" delay={0.1}>
            <BookingForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}


/* --------------------------------
   INFO ROW
--------------------------------- */

function InfoRow({ icon: Icon, text }) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-white/10
        bg-white/[0.04]
        px-4
        py-3
      "
    >
      <Icon
        size={17}
        className="shrink-0 text-[#C9A45C]"
      />

      <span className="font-['DM_Sans'] text-xs text-[#DCC9CE]">
        {text}
      </span>
    </motion.div>
  );
}

export default Booking;