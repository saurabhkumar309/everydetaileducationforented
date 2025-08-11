'use client';

import { FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-white via-yellow-100 to-blue-100 py-20 px-6 md:px-16 shadow-xl rounded-xl font-inter">
      {/* Decorative Wave Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            fill="#cfe3ff"
            fillOpacity="1"
            d="M0,192L48,181.3C96,171,192,149,288,138.7C384,128,480,128,576,149.3C672,171,768,213,864,224C960,235,1056,213,1152,202.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 md:gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-3/5 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-blue-900 uppercase tracking-wider leading-tight">
            Every Detail Education<sup className="text-pink-600">®</sup>
          </h1>
          <h3 className="text-2xl text-gray-700 mt-3 font-semibold tracking-wide">
            A Place For All Your Queries
          </h3>
          <p className="text-orange-600 font-semibold text-xl mt-6 italic max-w-xl mx-auto md:mx-0">
            “Your journey to success starts with us.”
          </p>
          <p className="text-base mt-6 text-gray-900 max-w-2xl leading-relaxed">
            We provide career counselling based on your eligibility. Every Detail Education is one of the best counselling centers in India. Get your counselling now!
          </p>
        </motion.div>

        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-2/5 bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl shadow-lg p-8 space-y-6 font-medium text-sm text-gray-900"
        >
          <div className="flex items-center gap-4 text-blue-900">
            <FaGlobe className="text-green-600 text-lg min-w-[24px]" aria-hidden="true" />
            <a
              href="https://www.everydetaileducation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-words transition-colors"
            >
              www.everydetaileducation.com
            </a>
          </div>
          <div className="flex items-center gap-4 text-blue-900">
            <FaPhoneAlt className="text-green-600 text-lg min-w-[24px]" aria-hidden="true" />
            <a href="tel:+919430018930" className="hover:underline transition-colors">
              +91-9430018930
            </a>
          </div>
          <div className="flex items-center gap-4 text-blue-900">
            <FaEnvelope className="text-green-600 text-lg min-w-[24px]" aria-hidden="true" />
            <a href="mailto:everydetailpatna@gmail.com" className="hover:underline transition-colors">
              everydetailpatna@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
