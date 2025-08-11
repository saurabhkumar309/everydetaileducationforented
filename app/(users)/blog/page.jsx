'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const blogCategories = [
  {
    title: 'Career Advice',
    description:
      'Guidance on how to choose the right path, prepare for exams, and plan your academic journey.',
    image: '/blog-career.png',
    href: '#career-advice',
  },
  {
    title: 'College Reviews',
    description:
      'Explore insights and reviews about top colleges and universities in India and abroad.',
    image: '/blog-college.png',
    href: '#college-reviews',
  },
  {
    title: 'Study Abroad',
    description:
      'Learn how to apply to international universities, visa tips, and student experiences.',
    image: '/blog-abroad.png',
    href: '#study-abroad',
  },
  {
    title: 'Scholarships & Funding',
    description:
      'Find opportunities for scholarships, student credit cards, and affordable education.',
    image: '/blog-scholarship.png',
    href: '#scholarships',
  },
];

export default function BlogPage() {
  return (
    <>
      <header className="bg-gradient-to-r from-[#e0f2fe] via-white to-[#ffe4e6] shadow-md fixed w-full z-50 backdrop-blur-sm">
        {/* Navigation can be included here */}
      </header>

      <section className="relative bg-gradient-to-r from-blue-100 via-white to-pink-100 overflow-hidden min-h-[480px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left max-w-xl"
          >
            <h1 className="font-extrabold text-gray-900 text-5xl md:text-6xl leading-tight sm:leading-[1.1] tracking-tight">
              Discover{' '}
              <span className="bg-gradient-to-r from-pink-400 to-pink-700 bg-clip-text text-transparent">
                Educational
              </span>{' '}
              Insights
            </h1>
            <p className="mt-6 text-gray-700 text-lg md:text-xl max-w-lg">
              Latest articles, expert tips, and career guidance to help you make the right decision for your future.
            </p>
            <div className="mt-8">
              <a
                href="#explore"
                className="inline-block rounded-full bg-pink-600 px-8 py-4 font-semibold text-white shadow-lg transition-all transform hover:scale-105 hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-opacity-60"
              >
                Explore Blogs
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-lg relative"
            aria-hidden="true"
          >
            <Image
              src="/blog-hero.png"
              alt="Blog Illustration"
              width={520}
              height={420}
              className="rounded-3xl shadow-2xl"
              priority
            />
            <div className="absolute inset-0 rounded-3xl ring-4 ring-pink-300/30 pointer-events-none mix-blend-screen" />
          </motion.div>
        </div>
      </section>

      <section
        id="explore"
        className="py-20 bg-white border-t border-gray-200"
        aria-label="Blog categories"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-16">
            Explore Our{' '}
            <span className="bg-gradient-to-r from-pink-400 to-pink-700 bg-clip-text text-transparent">
              Blog Categories
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {blogCategories.map((cat, idx) => (
              <motion.article
                key={cat.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                tabIndex={0}
                aria-labelledby={`blog-cat-title-${idx}`}
                className="group relative flex flex-col rounded-2xl border border-gray-100 shadow-md overflow-hidden cursor-pointer bg-white hover:shadow-2xl transition-shadow"
              >
                <div className="overflow-hidden rounded-t-2xl h-48 relative">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL={cat.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 pointer-events-none" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3
                    id={`blog-cat-title-${idx}`}
                    className="text-xl font-semibold text-gray-900 mb-3 leading-snug"
                  >
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">{cat.description}</p>
                  <Link
                    href={cat.href}
                    className="mt-auto font-semibold text-pink-600 inline-flex items-center gap-1 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
                  >
                    Read More <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
