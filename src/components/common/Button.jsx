import { motion } from "framer-motion";

function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300";

  const variants = {
    primary:
      "bg-[#7B1735] text-white shadow-[0_10px_30px_rgba(123,23,53,0.25)] hover:bg-[#64122B] hover:shadow-[0_14px_35px_rgba(123,23,53,0.35)]",

    gold:
      "bg-[#C9A45C] text-white shadow-[0_10px_30px_rgba(201,164,92,0.25)] hover:bg-[#B58F4D] hover:shadow-[0_14px_35px_rgba(201,164,92,0.35)]",

    outline:
      "border border-[#7B1735]/30 bg-white text-[#7B1735] hover:border-[#7B1735] hover:bg-[#7B1735] hover:text-white",

    light:
      "bg-white text-[#7B1735] shadow-lg hover:bg-[#FFF7F8]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: {
      scale: 1.04,
      y: -2,
    },
    whileTap: {
      scale: 0.97,
    },
    transition: {
      duration: 0.2,
    },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}

export default Button;