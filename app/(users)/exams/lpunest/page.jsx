import React from "react";

export default function LPUNEST2025() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-100 to-blue-100 p-18 sm:p-19">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-700 via-purple-600 to-blue-600 bg-clip-text text-transparent">
          LPUNEST 2025
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">About LPUNEST</h2>
          <p>
            Lovely Professional University National Entrance and Scholarship Test (LPUNEST) is conducted for admission to UG and PG courses at LPU. This exam also offers scholarship opportunities to meritorious students.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Exam Highlights & Mode of Exam</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base mb-4">
            <li>Computer-Based Test (CBT) conducted across numerous test centers pan India.</li>
            <li>Online mode with multiple exam dates for candidate convenience.</li>
            <li>Includes sections on Physics, Chemistry, Mathematics/Biology depending on the program.</li>
            <li>Scholarship awards based on merit ranks to support talented students financially.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Eligibility Criteria</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li>Passed 10+2 or equivalent with Physics, Chemistry, and Mathematics for engineering courses.</li>
            <li>Minimum 60% aggregate marks or as per LPU admission policy.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Why Choose LPUNEST?</h2>
          <p>
            LPUNEST provides a seamless path to high-quality education and scholarships at one of India’s largest private universities with global collaborations, modern infrastructure, and vibrant campus life.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://www.lpu.in/programmes/engineering/engineering-entrance-exam.php"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-700 via-purple-600 to-blue-600 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Official LPUNEST Details
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
