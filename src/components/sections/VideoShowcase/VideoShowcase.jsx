import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Sparkles,
} from "lucide-react";

import Reveal from "../../common/Reveal";
import SectionHeading from "../../common/SectionHeading";
import videoShowCase1 from "../../../assets/videos/videoShowCase1.mp4"  
import videoShowCase2 from "../../../assets/videos/videoShowcase2.mp4"  
import videoShowCase3 from "../../../assets/videos/videoShowcase3.mp4"  


function VideoShowcase() {
  const videos = [
    {
      number: "01",
      title: "The Art of Makeup",
      subtitle: "Professional Techniques",
      video: videoShowCase1,
      size: "large",
    },
    {
      number: "02",
      title: "Makeup in Motion",
      subtitle: "Creative Beauty Looks",
      video: videoShowCase2,
      size: "small",
    },
    {
      number: "03",
      title: "Bridal Beauty",
      subtitle: "Elegant Bridal Looks",
      video: videoShowCase3,
      size: "small",
    },
  ];

  return (
    <section
      id="videos"
      className="relative overflow-hidden bg-[#FFF9F6] py-24 sm:py-32"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-0 top-20 h-[350px] w-[350px] rounded-full bg-[#C9A45C]/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#7B1735]/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <SectionHeading
          eyebrow="Inside The Academy"
          title="Watch the artistry come alive."
          description="A glimpse into the world of professional makeup, creative techniques and beautiful transformations."
        />

        {/* Video Grid */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {/* Large Video */}
          <Reveal direction="right" className="lg:row-span-2">
            <VideoCard
              video={videos[0]}
              large
            />
          </Reveal>

          {/* Small Videos */}
          <Reveal direction="left" delay={0.1}>
            <VideoCard video={videos[1]} />
          </Reveal>

          <Reveal direction="left" delay={0.2}>
            <VideoCard video={videos[2]} />
          </Reveal>
        </div>

        {/* Bottom Quote */}
        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-col items-center text-center">
            <Sparkles
              size={22}
              className="text-[#C9A45C]"
            />

            <p
              className="
                mt-4
                max-w-2xl
                font-['Cormorant_Garamond']
                text-2xl
                italic
                leading-relaxed
                text-[#7B1735]
                sm:text-3xl
              "
            >
              "Beauty is an art — and every artist begins by learning
              the right technique."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


/* --------------------------------
   VIDEO CARD
--------------------------------- */

function VideoCard({ video, large = false }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[2rem]
        bg-[#4A1728]
        shadow-[0_20px_60px_rgba(74,23,40,0.12)]
        ${large ? "h-[560px] sm:h-[650px]" : "h-[270px] sm:h-[310px]"}
      `}
    >
      {/* Video */}
      <video
        src={video.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-105
        "
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#2D0C18]/90
          via-[#4A1728]/20
          to-transparent
        "
      />

      {/* Top Number */}
      <div className="absolute left-6 top-6 flex items-center gap-3">
        <span
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/10
            font-['DM_Sans']
            text-xs
            font-semibold
            text-white
            backdrop-blur-md
          "
        >
          {video.number}
        </span>

        <span className="font-['DM_Sans'] text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
          Academy
        </span>
      </div>

      {/* Play Button */}
      {/* <motion.div
        whileHover={{
          scale: 1.12,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          flex
          h-16
          w-16
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/30
          bg-white/15
          text-white
          opacity-80
          backdrop-blur-md
          transition-all
          duration-300
          group-hover:bg-[#C9A45C]
          group-hover:text-[#4A1728]
          group-hover:opacity-100
        "
      >
        <Play
          size={22}
          fill="currentColor"
          className="ml-1"
        />
      </motion.div> */}

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <p className="font-['DM_Sans'] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E8C98F]">
          {video.subtitle}
        </p>

        <div className="mt-2 flex items-end justify-between gap-4">
          <h3
            className={`
              font-['Cormorant_Garamond']
              font-semibold
              leading-tight
              text-white
              ${large ? "text-4xl sm:text-5xl" : "text-3xl"}
            `}
          >
            {video.title}
          </h3>

          <motion.div
            whileHover={{
              rotate: 45,
            }}
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/10
              text-white
              backdrop-blur-md
            "
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </div>
      </div>

      {/* Gold Border Hover */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[2rem]
          border
          border-transparent
          transition-colors
          duration-500
          group-hover:border-[#C9A45C]/40
        "
      />
    </motion.div>
  );
}

export default VideoShowcase;