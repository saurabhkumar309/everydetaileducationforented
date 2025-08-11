'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const careerTips = [
  {
    title: 'Choosing the Right Career Path',
    desc: 'Understand your interests, assess your strengths, and align them with the best educational opportunities available.',
    image: '/career-path.png',
  },
  {
    title: 'Exam Preparation Strategies',
    desc: 'Master your study schedule, time management, and practice techniques for competitive exams like NEET, JEE, UPSC, and more.',
    image: '/exam-prep.png',
  },
  {
    title: 'Academic Planning',
    desc: 'Learn how to set realistic academic goals, choose the right courses, and optimize your learning experience.',
    image: '/academic-plan.png',
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

export default function CareerAdviceSection() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-50"
      id="career-advice"
      aria-label="Career Advice Section"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
            Career <span className="text-pink-600">Advice</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
            Guidance on how to choose the right path, prepare for exams, and plan your academic journey with confidence.
          </p>
        </div>

        {/* Tips Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {careerTips.map((item, idx) => (
            <motion.article
              key={idx}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow transform hover:scale-[1.04] cursor-pointer focus:outline-none focus:ring-4 focus:ring-pink-300"
              tabIndex={0}
              aria-labelledby={`career-tip-title-${idx}`}
              aria-describedby={`career-tip-desc-${idx}`}
              role="region"
            >
              <div className="relative w-full aspect-[16/9] rounded-t-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority={idx === 0}
                  draggable={false}
                />
              </div>
              <div className="p-6 flex flex-col space-y-3">
                <h3
                  id={`career-tip-title-${idx}`}
                  className="text-xl font-semibold text-gray-800"
                >
                  {item.title}
                </h3>
                <p
                  id={`career-tip-desc-${idx}`}
                  className="text-gray-600 text-sm leading-relaxed flex-grow"
                >
                  {item.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* More Tips Coming Badge */}
        <div className="text-center mt-14">
          <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow-md select-none cursor-default opacity-90">
            More Tips Coming
          </span>
        </div>
      </div>
    </section>
  );
}
