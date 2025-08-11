'use client';

import {
  FaUserGraduate,
  FaUniversity,
  FaClipboardCheck,
  FaPenFancy,
  FaLaptopMedical,
  FaStethoscope,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Choose() {
  return (
    <section className="py-16 px-4 md:px-12 bg-gradient-to-br from-rose-50 to-sky-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold text-sky-700 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto font-inter">
            <b className="font-poppins font-semibold">Every Detail Education</b>{' '}
            helps turn your academic dreams into reality with personalized services crafted to support your journey every step of the way.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-xl rounded-2xl p-6 border-t-4 border-sky-400 cursor-pointer
                hover:shadow-[0_20px_50px_rgba(14,165,233,0.3)] transition-shadow duration-300 flex flex-col"
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: '0 25px 40px rgba(14,165,233,0.35)', scale: 1.03 }}
              tabIndex={0}
              role="article"
              aria-label={service.title}
            >
              <div className="mb-4 text-center text-sky-600">
                <service.Icon size={80} className="mx-auto" aria-hidden="true" />
              </div>
              <h5 className="text-xl font-poppins font-bold text-sky-700 mb-2 text-center">
                {service.title}
              </h5>
              <p className="text-gray-600 text-sm font-inter text-center flex-grow">
                {service.description}
              </p>
              <div className="text-center mt-6">
                <a
                  href="#"
                  className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition font-poppins focus:outline-none focus:ring-4 focus:ring-rose-300 focus:ring-opacity-50"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const services = [
  {
    Icon: FaUserGraduate,
    title: 'Career Counseling',
    description:
      "Get expert career advice tailored to your qualifications and goals. Every Detail Education is one of India's top-rated counseling centers.",
  },
  {
    Icon: FaUniversity,
    title: 'University Selection',
    description:
      'Our expert counselors assist in selecting the ideal colleges and universities suited to your strengths and ambitions.',
  },
  {
    Icon: FaClipboardCheck,
    title: 'Admission Guidance',
    description:
      'We ensure a seamless admission process with comprehensive support to help you enroll in your dream institution.',
  },
  {
    Icon: FaPenFancy,
    title: 'Entrance Exam Guidance',
    description:
      'Ace your entrance exams with expert coaching and strategic preparation methods to maximize your scores.',
  },
  {
    Icon: FaLaptopMedical,
    title: 'Virtual Counselling',
    description:
      'Book online counseling sessions anytime, from anywhere, and get instant guidance without scheduling delays.',
  },
  {
    Icon: FaStethoscope,
    title: 'MBBS Consultant',
    description:
      'Navigate medical admissions with ease through our specialized MBBS consultation and college selection expertise.',
  },
];
