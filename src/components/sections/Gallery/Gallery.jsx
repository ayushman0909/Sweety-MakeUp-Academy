import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import Reveal from "../../common/Reveal";
import SectionHeading from "../../common/SectionHeading";
import Button from "../../common/Button";

import galleryData from "../../../data/galleryData";
import GalleryCard from "./GalleryCard";

function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#FFF9F6] py-24 sm:py-32"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-[-150px] top-[20%] h-[400px] w-[400px] rounded-full bg-[#C9A45C]/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-100px] right-[-100px] h-[400px] w-[400px] rounded-full bg-[#7B1735]/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <SectionHeading
          eyebrow="Our Work"
          title="Beauty, detail & artistry."
          description="Explore a glimpse of the makeup artistry, bridal looks and creative work that inspire the learning journey."
        />

        {/* Gallery */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {galleryData.map((item, index) => (
            <div
              key={item.id}
              className={`
                ${
                  item.size === "large"
                    ? "lg:row-span-2"
                    : ""
                }
              `}
            >
              <GalleryCard
                item={item}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col items-center text-center">
            <div className="flex items-center gap-2">
              <Sparkles
                size={17}
                className="text-[#C9A45C]"
              />

              <span
                className="
                  font-['DM_Sans']
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#7B1735]
                "
              >
                More artistry awaits
              </span>

              <Sparkles
                size={17}
                className="text-[#C9A45C]"
              />
            </div>

            <p
              className="
                mt-4
                max-w-xl
                font-['Cormorant_Garamond']
                text-2xl
                italic
                text-[#6F5B61]
                sm:text-3xl
              "
            >
              Every look tells a story.
            </p>

            <Button
              href="#booking"
              variant="primary"
              className="mt-7"
            >
              Enquire About The Course
              <ArrowRight size={17} />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Gallery;