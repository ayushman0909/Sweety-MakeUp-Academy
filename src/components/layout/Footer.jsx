import { motion } from "framer-motion";
import {
  
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#3A1322] text-white">

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#C9A45C]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-['Great_Vibes'] text-5xl text-[#F3D7B3]">
              Sweety
            </div>

            <p className="mt-1 font-['DM_Sans'] text-xs uppercase tracking-[0.3em] text-[#D6B7BE]">
              Makeover Academy
            </p>

            <p className="mt-6 max-w-md font-['DM_Sans'] text-sm leading-7 text-[#DCC9CE]">
              Learn professional makeup, hair styling and beauty techniques
              through practical, hands-on training.
            </p>

            {/* Social */}
            {/* <div className="mt-7 flex gap-3">
              <motion.a
                href="#"
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-[#C9A45C]"
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-[#C9A45C]"
                aria-label="Facebook"
              >
                <Facebook size={17} />
              </motion.a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Cormorant_Garamond'] text-2xl text-[#F3D7B3]">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {[
                ["About", "#about"],
                ["Course", "#course"],
                ["Gallery", "#gallery"],
                ["FAQ", "#faq"],
                ["Book Your Seat", "#booking"],
              ].map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  className="group flex items-center gap-1 font-['DM_Sans'] text-sm text-[#DCC9CE] transition hover:text-white"
                >
                  {name}
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Cormorant_Garamond'] text-2xl text-[#F3D7B3]">
              Contact
            </h3>

            <div className="mt-5 flex flex-col gap-4">

              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-[#C9A45C]"
                />

                <p className="font-['DM_Sans'] text-sm leading-6 text-[#DCC9CE]">
                  Motihari, Bihar
                </p>
              </div>

              <div className="flex gap-3">
                <Phone
                  size={18}
                  className="mt-1 shrink-0 text-[#C9A45C]"
                />

                <p className="font-['DM_Sans'] text-sm text-[#DCC9CE]">
                 +919572808952
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col justify-between gap-3 font-['DM_Sans'] text-xs text-[#BFAAB1] sm:flex-row">
            <p>
              © {year} Sweety Makeover Academy. All rights reserved.
            </p>

            <p>
              Professional Makeup & Beauty Training
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;