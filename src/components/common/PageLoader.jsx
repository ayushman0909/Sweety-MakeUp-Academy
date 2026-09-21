import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

function PageLoader() {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 0,
        pointerEvents: "none",
      }}
      transition={{
        opacity: {
          duration: 0.9,
          delay: 1.8,
          ease: [0.65, 0, 0.35, 1],
        },
      }}
      className="
        fixed
        inset-0
        z-100
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#4A1728]
        will-change-[opacity]
      "
    >
      {/* =================================
          AMBIENT GLOW
      ================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          h-70
          w-70
          rounded-full
          bg-[#C9A45C]/10
          blur-[80px]
          will-change-transform
        "
      />

      {/* =================================
          MAIN CONTENT
      ================================== */}

      <div className="relative z-10 text-center">

        {/* =================================
            SPARKLE CIRCLE
        ================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.75,
            y: 8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.75,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            border-[#C9A45C]/40
            bg-[#4A1728]
            text-[#C9A45C]
            shadow-[0_0_35px_rgba(201,164,92,0.12)]
          "
        >
          <motion.div
            animate={{
              rotate: [0, 6, -6, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles size={25} />
          </motion.div>
        </motion.div>

        {/* =================================
            BRAND NAME
        ================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.75,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-5
            font-['Great_Vibes']
            text-4xl
            text-[#F3D7B3]
          "
        >
          Sweety
        </motion.div>

        {/* =================================
            SUBTITLE
        ================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="
            mt-2
            font-['DM_Sans']
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.3em]
            text-[#DCC9CE]
          "
        >
          Makeup Academy
        </motion.p>

        {/* =================================
            LOADING LINE
        ================================== */}

        <div
          className="
            mx-auto
            mt-7
            h-px
            w-32
            overflow-hidden
            bg-white/10
          "
        >
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "100%",
            }}
            transition={{
              duration: 1.3,
              delay: 0.25,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="
              h-full
              w-full
              bg-[#C9A45C]
              will-change-transform
            "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default PageLoader;