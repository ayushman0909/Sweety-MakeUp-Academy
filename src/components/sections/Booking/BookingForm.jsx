import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  Send,
  Sparkles,
} from "lucide-react";

import Button from "../../common/Button";
import { submitBooking } from "../../../services/bookingService";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    experience: "",
    course: "",
    batch: "20 October 2026",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  setStatus("loading");

  try {
    await submitBooking(formData);

    setStatus("success");
  } catch (error) {
    console.error("Booking submission error:", error);

    setStatus("error");
  }
};

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="
          flex
          min-h-[520px]
          flex-col
          items-center
          justify-center
          rounded-[2rem]
          border
          border-[#C9A45C]/20
          bg-white
          p-8
          text-center
          shadow-[0_20px_60px_rgba(74,23,40,0.08)]
          sm:p-12
        "
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 180,
            delay: 0.15,
          }}
          className="
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-[#7B1735]/10
            text-[#7B1735]
          "
        >
          <CheckCircle2 size={42} />
        </motion.div>

        <Sparkles
          size={20}
          className="mt-7 text-[#C9A45C]"
        />

        <h3
          className="
            mt-4
            font-['Cormorant_Garamond']
            text-4xl
            font-semibold
            text-[#4A1728]
            sm:text-5xl
          "
        >
          Enquiry Received
        </h3>

        <p className="mt-4 max-w-md font-['DM_Sans'] text-sm leading-7 text-[#6F5B61]">
          Thank you for your interest. Your enquiry details have been
          submitted successfully. We will get back to you with the
          next steps.
        </p>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              phone: "",
              city: "",
              experience: "",
              course: "",
              batch: "20 October 2026",
              message: "",
            });
          }}
          className="
            mt-8
            font-['DM_Sans']
            text-xs
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#7B1735]
            underline
            underline-offset-4
          "
        >
          Submit Another Enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        rounded-[2rem]
        border
        border-[#7B1735]/10
        bg-white
        p-6
        shadow-[0_20px_60px_rgba(74,23,40,0.08)]
        sm:p-8
        lg:p-10
      "
    >
      {/* Form Header */}
      <div className="mb-8">
        <span
          className="
            font-['DM_Sans']
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[#C9A45C]
          "
        >
          Your Details
        </span>

        <h3
          className="
            mt-2
            font-['Cormorant_Garamond']
            text-3xl
            font-semibold
            text-[#4A1728]
            sm:text-4xl
          "
        >
          Tell us a little about yourself.
        </h3>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <FormField
          label="Full Name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Phone */}
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        {/* City */}
        <FormField
          label="City"
          name="city"
          type="text"
          placeholder="Your city"
          value={formData.city}
          onChange={handleChange}
          required
        />

        {/* Experience */}
        <SelectField
          label="Experience Level"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
          options={[
            "Beginner",
            "Some Makeup Experience",
            "Professional",
            "Just Exploring",
          ]}
        />

        {/* Course */}
        <div className="sm:col-span-2">
          <SelectField
            label="Interested In"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            options={[
              "Complete Makeup Training",
              "Advanced Makeup",
              "Hair Styling",
              "Makeup + Hair Styling",
            ]}
          />
        </div>

        {/* Batch */}
        <div className="sm:col-span-2">
          <label
            htmlFor="batch"
            className="
              mb-2
              block
              font-['DM_Sans']
              text-xs
              font-semibold
              text-[#4A1728]
            "
          >
            Preferred Batch
          </label>

          <select
            id="batch"
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              border
              border-[#7B1735]/10
              bg-[#FFF9F6]
              px-4
              py-3.5
              font-['DM_Sans']
              text-sm
              text-[#4A1728]
              outline-none
              transition-all
              duration-300
              focus:border-[#C9A45C]
              focus:ring-2
              focus:ring-[#C9A45C]/10
            "
          >
            <option value="20 October 2026">
              20 October 2026
            </option>
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="
              mb-2
              block
              font-['DM_Sans']
              text-xs
              font-semibold
              text-[#4A1728]
            "
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us anything you'd like to know..."
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-[#7B1735]/10
              bg-[#FFF9F6]
              px-4
              py-3.5
              font-['DM_Sans']
              text-sm
              text-[#4A1728]
              outline-none
              placeholder:text-[#9A858B]
              transition-all
              duration-300
              focus:border-[#C9A45C]
              focus:ring-2
              focus:ring-[#C9A45C]/10
            "
          />
        </div>
      </div>

        <AnimatePresence>
  {status === "error" && (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -10,
      }}
      className="
        mb-5
        rounded-xl
        border
        border-red-200
        bg-red-50
        px-4
        py-3
        font-['DM_Sans']
        text-xs
        leading-5
        text-red-700
      "
    >
      Something went wrong while submitting
      your enquiry. Please try again.
    </motion.div>
  )}
</AnimatePresence>
      {/* Submit */}
      <div className="mt-7">
        <Button
          type="submit"
          variant="primary"
          className="w-full py-4"
        >
          {status === "loading" ? (
            <>
              <Loader2
                size={18}
                className="animate-spin"
              />
              Sending Enquiry...
            </>
          ) : (
            <>
              Send Enquiry
              <Send size={17} />
            </>
          )}
        </Button>
      </div>

      <p className="mt-4 text-center font-['DM_Sans'] text-[10px] leading-5 text-[#8B6872]">
        Your details will only be used to respond to your course
        enquiry.
      </p>
    </form>
  );
}


/* --------------------------------
   INPUT
--------------------------------- */

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="
          mb-2
          block
          font-['DM_Sans']
          text-xs
          font-semibold
          text-[#4A1728]
        "
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="
          w-full
          rounded-xl
          border
          border-[#7B1735]/10
          bg-[#FFF9F6]
          px-4
          py-3.5
          font-['DM_Sans']
          text-sm
          text-[#4A1728]
          outline-none
          placeholder:text-[#9A858B]
          transition-all
          duration-300
          focus:border-[#C9A45C]
          focus:ring-2
          focus:ring-[#C9A45C]/10
        "
      />
    </div>
  );
}


/* --------------------------------
   SELECT
--------------------------------- */

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="
          mb-2
          block
          font-['DM_Sans']
          text-xs
          font-semibold
          text-[#4A1728]
        "
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="
          w-full
          rounded-xl
          border
          border-[#7B1735]/10
          bg-[#FFF9F6]
          px-4
          py-3.5
          font-['DM_Sans']
          text-sm
          text-[#4A1728]
          outline-none
          transition-all
          duration-300
          focus:border-[#C9A45C]
          focus:ring-2
          focus:ring-[#C9A45C]/10
        "
      >
        <option value="">
          Select an option
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BookingForm;