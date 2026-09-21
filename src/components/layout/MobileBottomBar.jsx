import { motion } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";

function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#7B1735]/10 bg-[#FFF9F6]/95 px-3 py-2 shadow-[0_-10px_30px_rgba(74,23,40,0.12)] backdrop-blur-xl lg:hidden">

      <div className="mx-auto flex max-w-md gap-2">

        {/* Call */}
        <motion.a
          href="tel:"
          whileTap={{ scale: 0.96 }}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#7B1735]/20 bg-white py-3 font-['DM_Sans'] text-xs font-semibold text-[#7B1735]"
        >
          <Phone size={16} />
          Call
        </motion.a>

        {/* Booking */}
        <motion.a
          href="#booking"
          whileTap={{ scale: 0.96 }}
          className="flex flex-[1.4] items-center justify-center gap-2 rounded-full bg-[#7B1735] py-3 font-['DM_Sans'] text-xs font-semibold text-white shadow-lg"
        >
          <CalendarCheck size={16} />
          Book Your Seat
        </motion.a>

      </div>
    </div>
  );
}

export default MobileBottomBar;