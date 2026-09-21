import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Play,
  Sparkles,
  Volume2,
} from "lucide-react";

function GalleryCard({ item, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  // Open modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsOpen(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);

      // Prevent background scrolling
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* =========================
          GALLERY CARD
      ========================== */}
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.7,
          delay: index * 0.08,
        }}
        onClick={openModal}
        className="
          group
          relative
          isolate
          h-full
          min-h-[320px]
          cursor-pointer
          overflow-hidden
          rounded-[2rem]
          bg-[#4A1728]
          shadow-[0_20px_60px_rgba(74,23,40,0.12)]
        "
      >
        {/* Media */}
        <div className="absolute inset-0">
          {item.type === "video" ? (
            <video
              src={item.src}
              muted
              loop
              playsInline
              preload="metadata"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />
          ) : (
            <img
              src={item.src}
              alt={item.title}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />
          )}

          {/* Dark overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#2A0D19]/90
              via-[#2A0D19]/20
              to-transparent
            "
          />

          {/* Hover overlay */}
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              bg-[#2A0D19]/0
              transition-all
              duration-500
              group-hover:bg-[#2A0D19]/30
            "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-white/20
                text-white
                opacity-0
                backdrop-blur-md
                transition-all
                duration-300
                group-hover:opacity-100
              "
            >
              {item.type === "video" ? (
                <Play
                  size={20}
                  fill="currentColor"
                />
              ) : (
                <Sparkles size={20} />
              )}
            </motion.div>
          </div>
        </div>

        {/* Video indicator */}
        {item.type === "video" && (
          <div
            className="
              absolute
              left-5
              top-5
              z-10
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-white/20
              text-white
              backdrop-blur-md
            "
          >
            <Play
              size={16}
              fill="currentColor"
            />
          </div>
        )}

        {/* Content */}
        <div
          className="
            relative
            z-10
            flex
            h-full
            min-h-[320px]
            flex-col
            justify-end
            p-6
            sm:p-7
          "
        >
          <div className="flex items-center gap-2">
            <Sparkles
              size={13}
              className="text-[#C9A45C]"
            />

            <span
              className="
                font-['DM_Sans']
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/70
              "
            >
              {item.category}
            </span>
          </div>

          <h3
            className="
              mt-2
              font-['Cormorant_Garamond']
              text-3xl
              font-semibold
              text-white
            "
          >
            {item.title}
          </h3>
        </div>
      </motion.article>

      {/* =========================
          LIGHTBOX / MODAL
      ========================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              fixed
              inset-0
              z-[200]
              flex
              items-center
              justify-center
              bg-[#1A0710]/75
              p-4
              backdrop-blur-xl
              sm:p-8
            "
            onClick={closeModal}
          >
            {/* Modal Container */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                flex
                max-h-[90vh]
                max-w-6xl
                items-center
                justify-center
                overflow-hidden
                rounded-[1.5rem]
                bg-black
                shadow-[0_30px_100px_rgba(0,0,0,0.5)]
                sm:rounded-[2rem]
              "
              onClick={(event) => event.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeModal}
                className="
                  absolute
                  right-4
                  top-4
                  z-30
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/40
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-[#7B1735]
                "
                aria-label="Close preview"
              >
                <X size={20} />
              </button>

              {/* =====================
                  IMAGE PREVIEW
              ====================== */}
              {item.type === "image" && (
                <motion.img
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={item.src}
                  alt={item.title}
                  className="
                    max-h-[88vh]
                    max-w-[92vw]
                    object-contain
                  "
                />
              )}

              {/* =====================
                  VIDEO PREVIEW
              ====================== */}
              {item.type === "video" && (
                <div className="relative">
                  <video
                    ref={videoRef}
                    src={item.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="
                      max-h-[88vh]
                      max-w-[92vw]
                      object-contain
                    "
                  />

                  {/* Sound hint */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-16
                      left-1/2
                      flex
                      -translate-x-1/2
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/20
                      bg-black/50
                      px-4
                      py-2
                      text-xs
                      text-white/90
                      backdrop-blur-md
                    "
                  >
                    <Volume2 size={14} />
                    <span>Play with sound</span>
                  </div>
                </div>
              )}

              {/* Bottom Info */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  z-20
                  bg-gradient-to-t
                  from-black/80
                  via-black/40
                  to-transparent
                  px-5
                  pb-5
                  pt-12
                  sm:px-7
                  sm:pb-7
                "
              >
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={13}
                    className="text-[#C9A45C]"
                  />

                  <span
                    className="
                      font-['DM_Sans']
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-white/70
                    "
                  >
                    {item.category}
                  </span>
                </div>

                <h3
                  className="
                    mt-1
                    font-['Cormorant_Garamond']
                    text-2xl
                    font-semibold
                    text-white
                    sm:text-3xl
                  "
                >
                  {item.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default GalleryCard;