'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

export default function NotFoundPage() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 via-sky-50 to-yellow-50 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="p-8 max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 relative overflow-hidden"
        whileHover={{ scale: 1.01 }}
      >
        {/* Floating background glow */}
        <motion.div
          className="absolute -top-20 -left-20 w-60 h-60 bg-emerald-200 rounded-full blur-3xl opacity-30"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-sky-200 rounded-full blur-3xl opacity-30"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>

        {/* Big 404 with pop animation */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-8xl font-extrabold bg-gradient-to-r from-emerald-600 to-sky-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          404
        </motion.h1>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-2xl font-bold text-gray-800"
        >
          This page could not be found.
        </motion.h2>

        {/* Professional Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-2 text-gray-500"
        >
          The requested page could not be found. It may have been relocated, renamed, 
          or is temporarily out of service.
        </motion.p>

        {/* Home Button with hover animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6"
        >
          <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 8px 20px rgba(16,185,129,0.4)' }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-sky-500 text-white font-medium rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
            >
              <FaHome />
              Go Home
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
