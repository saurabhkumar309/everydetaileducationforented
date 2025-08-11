'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCheckCircle } from "react-icons/fa";

export default function CollegeSelection() {
  return (
    <section 
      className="relative py-20 bg-gradient-to-tr from-blue-100 via-white to-pink-100 overflow-hidden" 
      id="college-selection"
    >
      {/* Decorative blobs for extra depth */}
      <div className="absolute top-0 right-0 w-52 h-52 rounded-full bg-blue-200 opacity-40 blur-2xl animate-pulse hidden md:block" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-pink-200 opacity-40 blur-3xl animate-pulse hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* Content Card */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-10 border border-blue-100">
            {/* Section badge */}
            <span className="inline-flex items-center mb-5 px-4 py-1 bg-pink-600 text-white rounded-full text-sm font-semibold shadow">
              <FaGraduationCap className="mr-2" /> Expert Counseling
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Personalized <span className="text-pink-600">College Selection</span> Support
            </h2>
            <p className="mt-6 text-gray-700 text-lg leading-relaxed font-medium">
              We help students choose the best-fit colleges and universities based on their preferences, academic records, budget, and career goals — across India and abroad.
            </p>
            <ul className="mt-6 space-y-4 text-gray-800 font-medium">
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-pink-600" /> Top government & private colleges
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-pink-600" /> Courses like B.Tech, MBBS, BBA, BCA, MBA, and more
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-pink-600" /> India & Abroad admission guidance
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-pink-600" /> Free counseling & eligibility checks
              </li>
            </ul>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-xl font-bold text-lg transition transform hover:-translate-y-1 hover:scale-105"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </motion.div>
        
        {/* Image Card */}
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="relative drop-shadow-2xl rounded-2xl overflow-hidden bg-gradient-to-br from-white/60 via-blue-100 to-pink-100 backdrop-blur-lg p-4 transition hover:scale-105 duration-300">
            <Image
              src="/college-selection.png"
              alt="College selection guidance"
              width={600}
              height={450}
              className="rounded-xl shadow-2xl object-cover"
              priority
            />
            {/* Highlighted badge */}
            <span className="absolute top-6 left-6 bg-white/80 shadow px-4 py-1 rounded-xl text-pink-700 font-semibold text-sm backdrop-blur-lg">
              Best-fit College Match
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
