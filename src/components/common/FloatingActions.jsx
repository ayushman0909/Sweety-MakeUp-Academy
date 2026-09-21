import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-7 w-7"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16 2.5C8.544 2.5 2.5 8.544 2.5 16c0 2.37.62 4.596 1.706 6.527L2.4 29.6l7.29-1.765A13.43 13.43 0 0 0 16 29.5c7.456 0 13.5-6.044 13.5-13.5S23.456 2.5 16 2.5Zm0 24.55c-2.09 0-4.03-.63-5.65-1.71l-.405-.24-4.325 1.048 1.05-4.207-.265-.432A10.94 10.94 0 1 1 16 27.05Z"
        clipRule="evenodd"
      />

      <path d="M21.95 18.42c-.326-.163-1.93-.952-2.23-1.06-.3-.11-.52-.163-.74.163-.217.326-.843 1.06-1.033 1.277-.19.217-.38.244-.706.082-.326-.163-1.374-.506-2.617-1.615-.967-.862-1.62-1.926-1.81-2.252-.19-.326-.02-.502.143-.665.147-.147.326-.38.489-.57.163-.19.217-.326.326-.543.109-.217.054-.407-.027-.57-.082-.163-.74-1.78-1.013-2.438-.267-.64-.538-.553-.74-.564l-.63-.011c-.217 0-.57.082-.87.407-.3.326-1.14 1.114-1.14 2.716s1.168 3.15 1.331 3.367c.163.217 2.298 3.51 5.566 4.92.778.336 1.385.537 1.858.687.78.248 1.49.213 2.053.129.626-.094 1.93-.789 2.202-1.55.272-.76.272-1.413.19-1.55-.081-.136-.299-.217-.625-.38Z" />
    </svg>
  );
}

function FloatingActions() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/+919572808952"
        target="_blank"
        rel="noreferrer"
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 1.8,
          type: "spring",
          stiffness: 180,
          damping: 12,
        }}
        whileHover={{
          scale: 1.08,
          y: -3,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="
          fixed
          bottom-24
          right-5
          z-40
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_10px_30px_rgba(37,211,102,0.35)]
          transition-shadow
          duration-300
          hover:shadow-[0_14px_35px_rgba(37,211,102,0.45)]
          sm:bottom-7
          sm:right-7
        "
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </motion.a>

      {/* Back to Top */}
      <motion.button
        type="button"
        onClick={scrollToTop}
        whileHover={{
          scale: 1.08,
          y: -3,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="
          fixed
          bottom-24
          left-5
          z-40
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-[#C9A45C]/30
          bg-white
          text-[#7B1735]
          shadow-lg
          sm:bottom-7
          sm:left-auto
          sm:right-24
        "
        aria-label="Back to top"
      >
        <ArrowUp size={17} />
      </motion.button>
    </>
  );
}

export default FloatingActions;