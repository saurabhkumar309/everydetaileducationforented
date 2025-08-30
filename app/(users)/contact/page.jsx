"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaMobileAlt, FaEnvelopeOpen, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Handle input change & real-time error clearing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      const updatedErrors = { ...errors };
      delete updatedErrors[name];
      setErrors(updatedErrors);
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form to merged /api/form endpoint
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatus(null);

    try {
      // Auto switch between local & production API
      const API_URL =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3001/api/form"
          : "https://everydetaileducationserver.vercel.app/api/form";

      // Add type: "contact" for merged backend
      const payload = { ...formData, type: "contact" };

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ success: false, message: data.message || "Server error" });
        return;
      }

      setStatus(data);

      if (data.success) {
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        setErrors({});
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus({ success: false, message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-tr from-blue-50 via-white to-yellow-100 py-24 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <motion.h3 className="text-4xl font-extrabold text-indigo-900">Let’s Connect</motion.h3>
        <motion.h2 className="text-3xl text-amber-600 font-semibold mt-3">Contact Us</motion.h2>
        {status && (
          <p
            className={`mt-6 text-lg font-semibold ${
              status.success ? "text-green-700" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Info */}
 <motion.div
      className="space-y-14 bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-lg p-10 sm:p-16 rounded-[36px] shadow-[0_25px_50px_rgba(99,102,241,0.15)] border border-indigo-200 max-w-lg sm:max-w-4xl mx-auto"
      initial={{ opacity: 0, x: -70 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.03, boxShadow: "0 30px 60px rgba(99,102,241,0.3)" }}
      whileTap={{ scale: 0.98 }}
    >
      <ContactInfoItem
        icon={FaMobileAlt}
        label="Phone No."
        value="+91 9430018930"
        delay={0.1}
      />
      <ContactInfoItem
        icon={FaEnvelopeOpen}
        label="E-mail"
        value="support@everydetaileducation.in"
        delay={0.25}
      />
      <ContactInfoItem
        icon={FaMapMarkerAlt}
        label="Address"
        value="Kabir Market, Near Loyola HS, Kurji, Patna 800013"
        delay={0.4}
      />
      <ContactInfoItem
        icon={FaClock}
        label="Opening Hours"
        value="Monday - Sunday (10:00 AM to 06:00 PM)"
        delay={0.55}
      />
    </motion.div>
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/60 p-12 rounded-3xl shadow-2xl space-y-8"
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <InputField
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
            <InputField
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <InputField
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <InputField
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className={`border rounded-xl p-4 w-full ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && <p className="text-red-600 mt-1">{errors.message}</p>}
          </div>
          <motion.button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-bold py-4 rounded-xl ${
              loading ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

function ContactInfoItem({ icon: Icon, label, value, delay }) {
  return (
    <motion.div
      className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 group cursor-default"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="p-5 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-lg flex items-center justify-center transform transition-transform duration-500 min-w-[64px] min-h-[64px]"
        whileHover={{ scale: 1.2, rotate: 10 }}
      >
        <Icon className="text-4xl drop-shadow-md" />
      </motion.div>
      <div>
        <motion.h4
          className="font-extrabold text-xl text-indigo-900 group-hover:text-purple-700 transition-colors duration-500"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {label}
        </motion.h4>
        <motion.p
          className="mt-1 text-gray-700 font-medium text-md leading-relaxed max-w-xs sm:max-w-md"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 0.2, duration: 0.6 }}
        >
          {value}
        </motion.p>
        <motion.div
          className="mt-2 h-1 w-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-0"
          initial={{ scaleX: 0, opacity: 0 }}
          whileHover={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}

function InputField({ type = "text", name, placeholder, value, onChange, error }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border p-3 rounded-xl w-full ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-600 mt-1">{error}</p>}
    </div>
  );
}
