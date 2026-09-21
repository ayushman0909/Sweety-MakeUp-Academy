import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

function PageLoader() {
  return (
    <motion.div
      initial={{
        opacity: 1,
        scale: 1,
      }}
      animate={{
        opacity: 0,
        scale: 1.03,
      }}
      transition={{
        opacity: {
          duration: 1.2,
          delay: 1.6,
          ease: [0.76, 0, 0.24, 1],
        },
        scale: {
          duration: 1.2,
          delay: 1.6,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      className="
        pointer-events-none
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#4A1728]
      "
    >
      {/* Ambient Glow */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#C9A45C]/10
          blur-[100px]
        "
      />

      {/* Main Content */}
      <div className="relative z-10 text-center">

        {/* Sparkle Circle */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
            rotate: -20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
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
            shadow-[0_0_40px_rgba(201,164,92,0.12)]
          "
        >
          <motion.div
            animate={{
              rotate: [0, 8, -8, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles size={25} />
          </motion.div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.9,
            delay: 0.35,
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

        {/* Subtitle */}
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
            letterSpacing: "0.1em",
          }}
          animate={{
            opacity: 1,
            y: 0,
            letterSpacing: "0.3em",
          }}
          transition={{
            duration: 0.8,
            delay: 0.65,
            ease: "easeOut",
          }}
          className="
            mt-2
            font-['DM_Sans']
            text-[9px]
            font-semibold
            uppercase
            text-[#DCC9CE]
          "
        >
          Makeup Academy
        </motion.p>

        {/* Loading Line */}
        <div className="mx-auto mt-7 h-px w-32 overflow-hidden bg-white/10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.4,
              delay: 0.4,
              ease: "easeInOut",
            }}
            className="
              h-full
              w-full
              bg-[#C9A45C]
            "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default PageLoader;