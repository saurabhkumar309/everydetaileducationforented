'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CareerCounsellingSection() {
  return (
    <section
      id="career-counselling"
      className="relative py-20 bg-gradient-to-br from-[#f0f9ff] via-white to-[#fff1f2] overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-16 left-10 w-56 h-56 bg-pink-300 opacity-20 rounded-full blur-3xl animate-blob mix-blend-multiply -z-10"></div>
      <div className="absolute bottom-16 right-12 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000 mix-blend-multiply -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image card with glassmorphism */}
        <motion.div
          className="bg-white/40 backdrop-blur-lg rounded-3xl shadow-lg p-6 md:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <Image
            src="/career-counselling.png"
            alt="Career Counselling"
            width={600}
            height={400}
            className="rounded-3xl shadow-md object-cover"
            priority
          />
        </motion.div>

        {/* Content card with badge and list */}
        <motion.div
          className="bg-white/40 backdrop-blur-md rounded-3xl shadow-lg p-8 md:p-12 border border-white/40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeInUp}
        >
          {/* Badge */}
          <span className="inline-block text-pink-700 bg-pink-100 border border-pink-200 rounded-full px-4 py-1 font-semibold mb-6 text-sm select-none">
            Trusted Expert Guidance
          </span>

          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Expert <span className="text-pink-600">Career Counselling</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Get personalized guidance to choose the best academic and professional path. We help you align your passion with career goals.
          </p>
          <ul className="space-y-5 text-gray-800 font-medium text-lg">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-pink-600 shrink-0" aria-hidden="true" />
              Discover your true potential and interests
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-pink-600 shrink-0" aria-hidden="true" />
              Explore trending courses and career options
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-pink-600 shrink-0" aria-hidden="true" />
              Guidance on entrance exams, eligibility, and more
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-pink-600 shrink-0" aria-hidden="true" />
              Support for both students and parents
            </li>
          </ul>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-xl text-lg transition-transform transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-400"
            >
              Talk to Our Counselor
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Blob animation keyframes */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
