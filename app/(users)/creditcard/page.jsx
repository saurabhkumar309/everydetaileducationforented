'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheckCircle } from "react-icons/fa";

export default function StudentCreditCard() {
  return (
    <section 
      id="student-credit-card" 
      className="relative py-20 bg-gradient-to-tr from-pink-100 via-white to-blue-100 overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-pink-200 opacity-40 rounded-full blur-3xl animate-pulse hidden md:block" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 opacity-40 rounded-full blur-3xl animate-pulse hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* Text Card */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Glassmorphism card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-10">
            {/* Badge */}
            <span className="inline-block mb-6 px-4 py-1 bg-pink-600 text-white rounded-full text-sm font-semibold tracking-wide shadow">
              Govt. Approved
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Bihar Student <span className="text-pink-600">Credit Card</span> Yojana
            </h2>
            <p className="mt-6 text-gray-700 text-lg font-medium">
              Avail up to <span className="font-bold text-pink-700">₹4 lakh</span> education loan under Bihar Government’s Student Credit Card scheme.<br />
              <span className="text-blue-700 font-semibold">We guide you step-by-step for hassle-free approval.</span>
            </p>

            <ul className="mt-6 space-y-4 text-gray-800 font-medium">
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-pink-600" /> Eligibility & Document Assistance
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-pink-600" /> Free Application Support
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-pink-600" /> Loan up to ₹4,00,000
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-pink-600" /> Applicable for UG Courses (B.Tech, BBA, MBBS, etc.)
              </li>
            </ul>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-xl font-bold text-lg transition transform hover:-translate-y-1 hover:scale-105"
              >
                Get Admission Help
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
          transition={{ duration: 0.7 }}
        >
          <div className="relative drop-shadow-2xl rounded-2xl overflow-hidden bg-gradient-to-br from-white/30 via-blue-100 to-pink-100 backdrop-blur-lg p-4 transition hover:scale-105 duration-300">
            <Image
              src="/student-credit-card.png"
              alt="Student Credit Card"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl object-cover"
              priority
            />
            {/* Card highlight */}
           
          </div>
        </motion.div>
      </div>
    </section>
  );
}
