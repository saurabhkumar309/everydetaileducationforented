'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const scholarshipTips = [
  {
    title: 'Top Scholarships in India',
    desc: 'Discover merit-based, need-based, and government scholarships available for Indian students in various streams.',
    image: '/scholarship-indiaa.png',
  },
  {
    title: 'International Scholarships',
    desc: 'Explore funding options for studying abroad including fully funded scholarships, grants, and fellowships.',
    image: '/scholarship-international.png',
  },
  {
    title: 'How to Apply for Funding',
    desc: 'Step-by-step guide to preparing your documents, writing statements of purpose, and applying for educational funding.',
    image: '/scholarship-apply.png',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ScholarshipsSection() {
  return (
    <section
      className="relative py-20 bg-gradient-to-br from-yellow-50 via-white to-rose-50 overflow-hidden"
      id="scholarships"
      aria-label="Scholarships and Funding Section"
    >
      {/* Background Accent Shape */}
      <div
        aria-hidden="true"
        className="absolute -top-28 -left-20 w-96 h-96 bg-rose-200 rounded-full blur-3xl opacity-20 pointer-events-none"
      ></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Scholarships <span className="text-rose-600"> & Funding</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Find opportunities for scholarships, student credit cards, and affordable education options to support your academic goals.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {scholarshipTips.map((item, idx) => (
            <motion.article
              key={idx}
              variants={cardVariants}
              className="bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl shadow-md hover:shadow-xl transition-shadow transform hover:scale-[1.04] cursor-pointer focus:outline-none focus:ring-4 focus:ring-rose-300"
              tabIndex={0}
              aria-label={`Scholarship tip: ${item.title}`}
              role="region"
            >
              <div className="relative w-full aspect-[16/9] rounded-t-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  priority={idx === 0}
                />
              </div>
              <div className="p-6 flex flex-col space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-700 text-sm flex-grow">{item.desc}</p>
                <button
                  type="button"
                  className="self-start bg-rose-600 text-white px-6 py-2 rounded-full font-medium shadow hover:bg-rose-700 transition focus:outline-none focus:ring-4 focus:ring-rose-300"
                  aria-label={`Read more about ${item.title}`}
                >
                  Read More
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="text-center mt-14">
          <span
            className="inline-block cursor-not-allowed select-none bg-rose-500 text-white px-7 py-3 rounded-full font-semibold shadow-lg opacity-80"
            aria-disabled="true"
          >
            Scholarship Resources Coming Soon
          </span>
        </div>
      </div>
    </section>
  );
}
