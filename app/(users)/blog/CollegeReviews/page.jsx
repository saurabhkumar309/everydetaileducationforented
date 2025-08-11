'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const collegeReviews = [
  {
    id: 'engg',
    title: 'Top Engineering Colleges in India',
    desc: 'Uncover detailed reviews, rankings, and campus life experiences from the best engineering institutions across India.',
    image: '/review-engg.png',
    category: 'Engineering',
  },
  {
    id: 'medical',
    title: 'Best Medical Colleges Abroad',
    desc: 'A comprehensive guide to studying MBBS abroad with reviews from students, admission process, and costs.',
    image: '/review-medical.png',
    category: 'Medical',
  },
  {
    id: 'mba',
    title: 'Top MBA Universities',
    desc: 'Insights into the top management colleges in India and globally, with career outcomes and student ratings.',
    image: '/review-mba.png',
    category: 'MBA',
  },
];

const categories = ['All', 'Engineering', 'Medical', 'MBA'];

export default function CollegeReviewsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredReviews =
    selectedCategory === 'All'
      ? collegeReviews
      : collegeReviews.filter((item) => item.category === selectedCategory);

  return (
    <section
      className="relative py-20 bg-gradient-to-tr from-pink-50 to-blue-50"
      id="college-reviews"
      aria-label="College Reviews Section"
    >
      {/* Background accent shapes */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-20 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-20 pointer-events-none"
      ></div>
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-15 pointer-events-none"
      ></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            College <span className="text-blue-600">Reviews</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore insights and reviews about top colleges and universities in India and abroad to make informed decisions.
          </p>

          {/* Category Filter Buttons */}
          <div
            className="mt-8 inline-flex space-x-4"
            role="tablist"
            aria-label="Filter college reviews by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold focus:outline-none focus:ring-4 focus:ring-blue-300 transition ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-blue-600 border border-blue-300 hover:bg-blue-100'
                }`}
                aria-selected={selectedCategory === cat}
                role="tab"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow transform hover:scale-[1.03] flex flex-col"
              tabIndex={0}
              aria-label={`${item.title} review`}
            >
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-[3/2] rounded-t-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{item.desc}</p>
                <button
                  type="button"
                  className="mt-6 self-start bg-blue-600 text-white px-5 py-2 rounded-full font-medium shadow hover:bg-blue-700 transition focus:outline-none focus:ring-4 focus:ring-blue-300"
                  aria-label={`Read more about ${item.title}`}
                >
                  Read More
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <span className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold shadow cursor-not-allowed opacity-80">
            More Reviews Coming Soon
          </span>
        </div>
      </div>
    </section>
  );
}
