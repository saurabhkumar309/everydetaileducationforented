// app/blog/layout.tsx or layout.js

import React from 'react';
import CareerAdviceSection from '@/app/(users)/blog/Career Advice/page';
import CollegeReviewsSection from '@/app/(users)/blog/CollegeReviews/page';
import ScholarshipsSection from '@/app/(users)/blog/ScholarshipsSection/page';
import '@/app/globals.css';

export default function BlogLayout({ children }) {
  return (
    <html lang="en" className="font-inter">
      <body className="bg-white text-gray-800">
        <div id="blog-layout-root" className="min-h-screen flex flex-col">
          {children}
          <CareerAdviceSection />
          <CollegeReviewsSection />
          <ScholarshipsSection />
        </div>
      </body>
    </html>
  );
}
