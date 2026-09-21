import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import Button from "../common/Button";
import logo from "../../assets/images/logo.webp"

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    {
      label: "Home",
      href: "#home",
      id: "home",
    },
    {
      label: "About",
      href: "#about",
      id: "about",
    },
    {
      label: "Course",
      href: "#course",
      id: "course",
    },
    {
      label: "Gallery",
      href: "#gallery",
      id: "gallery",
    },
    {
      label: "FAQ",
      href: "#faq",
      id: "faq",
    },
  ];

  /* =========================================
     SCROLL + ACTIVE SECTION
  ========================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navItems
        .map((item) =>
          document.getElementById(item.id)
        )
        .filter(Boolean);

      const scrollPosition =
        window.scrollY + 200;

      let current = "home";

      sections.forEach((section) => {
        if (
          scrollPosition >=
          section.offsetTop
        ) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =========================================
     SCROLL FUNCTION
  ========================================== */

  const goToSection = (id) => {
    const section =
      document.getElementById(id);

    if (!section) {
      console.log(
        `Section #${id} not found`
      );
      return;
    }

    setActiveSection(id);

    /*
      Mobile menu pehle close karo.
      Uske baad scroll karo.
    */
    setIsOpen(false);

    setTimeout(() => {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 180);
  };

  /* =========================================
     NAV LINK CLICK
  ========================================== */

  const handleNavClick = (event, id) => {
    event.preventDefault();

    goToSection(id);
  };

  /* =========================================
     LOGO CLICK
  ========================================== */

  const handleLogoClick = (event) => {
    event.preventDefault();

    goToSection("home");
  };

  /* =========================================
     BOOKING CLICK
  ========================================== */

  const handleBookingClick = (event) => {
    event.preventDefault();

    goToSection("booking");
  };

  return (
    <>
      {/* =====================================
          NAVBAR
      ====================================== */}

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          transition-all
          duration-500

          ${
            isScrolled
              ? "bg-[#FFF9F6]/90 shadow-[0_10px_40px_rgba(74,23,40,0.08)] backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-20
            max-w-7xl
            items-center
            justify-between
            px-6
            sm:px-8
            lg:px-10
          "
        >
          {/* =================================
              LOGO + BRAND
          ================================== */}

          <a
            href="#home"
            onClick={handleLogoClick}
            className="
              group
              flex
              items-center
              gap-3
            "
          >
            {/* Logo */}

            <motion.div
              whileHover={{
                scale: 1.06,
                rotate: 2,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                relative
                h-15
                w-15
                shrink-0
                overflow-hidden
                rounded-full
                bg-[#FFF9F6]
              "
            >
              <img
                src={logo}
                alt="Sweety Makeup Academy"
                className="
                  h-full
                  w-full
                  rounded-full
                  object-cover
                "
              />
            </motion.div>

            {/* Brand Text */}

            <div className="leading-none">
              <div
                className="
                  font-['Great_Vibes']
                  text-2xl
                  text-[#7B1735]
                "
              >
                Sweety
              </div>

              <div
                className="
                  mt-1
                  font-['DM_Sans']
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#8B6872]
                "
              >
                Makeup Academy
              </div>
            </div>
          </a>

          {/* =================================
              DESKTOP NAVIGATION
          ================================== */}

          <nav
            className="
              hidden
              items-center
              gap-7
              lg:flex
            "
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(event) =>
                  handleNavClick(
                    event,
                    item.id
                  )
                }
                className={`
                  relative
                  py-2
                  font-['DM_Sans']
                  text-xs
                  font-semibold
                  transition-colors
                  duration-300

                  ${
                    activeSection === item.id
                      ? "text-[#7B1735]"
                      : "text-[#6F5B61] hover:text-[#7B1735]"
                  }
                `}
              >
                {item.label}

                {activeSection === item.id && (
                  <motion.span
                    layoutId="navbar-active"
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      mx-auto
                      h-0.5
                      rounded-full
                      bg-[#C9A45C]
                    "
                  />
                )}
              </a>
            ))}
          </nav>

          {/* =================================
              DESKTOP BOOKING
          ================================== */}

          <div className="hidden lg:block">
            <Button
              href="#booking"
              onClick={handleBookingClick}
              variant="primary"
            >
              Book Your Seat
              <ArrowUpRight size={16} />
            </Button>
          </div>

          {/* =================================
              MOBILE MENU BUTTON
          ================================== */}

          <button
            type="button"
            onClick={() =>
              setIsOpen((previous) => !previous)
            }
            className="
              relative
              z-[70]
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[#7B1735]/10
              bg-white
              text-[#7B1735]
              shadow-sm
              lg:hidden
            "
            aria-label={
              isOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>

        {/* =================================
            MOBILE MENU
        ================================== */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-[60]
                overflow-hidden
                border-t
                border-[#7B1735]/10
                bg-[#FFF9F6]
                shadow-[0_15px_40px_rgba(74,23,40,0.08)]
                lg:hidden
              "
            >
              <nav
                className="
                  flex
                  flex-col
                  gap-1
                  px-6
                  py-5
                "
              >
                {navItems.map(
                  (item, index) => (
                    <motion.button
                      key={item.id}
                      type="button"
                      onClick={() =>
                        goToSection(item.id)
                      }
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.05,
                      }}
                      className={`
                        block
                        w-full
                        cursor-pointer
                        rounded-xl
                        border-0
                        px-4
                        py-3
                        text-left
                        font-['DM_Sans']
                        text-sm
                        font-semibold
                        transition-all
                        duration-200

                        ${
                          activeSection ===
                          item.id
                            ? "bg-[#7B1735]/5 text-[#7B1735]"
                            : "text-[#6F5B61] hover:bg-[#7B1735]/5 hover:text-[#7B1735]"
                        }
                      `}
                    >
                      {item.label}
                    </motion.button>
                  )
                )}

                {/* =========================
                    MOBILE BOOKING
                ========================== */}

                <motion.button
                  type="button"
                  onClick={() =>
                    goToSection("booking")
                  }
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    mt-3
                    w-full
                    cursor-pointer
                    rounded-full
                    border-0
                    bg-[#7B1735]
                    px-5
                    py-3.5
                    text-center
                    font-['DM_Sans']
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_10px_30px_rgba(123,23,53,0.20)]
                  "
                >
                  Book Your Seat
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

export default Navbar;