import React from "react";

export default function AIECET2025() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-100 to-cyan-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
          AIE CET 2025
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">About AIE CET</h2>
          <p>
            The All India Engineering Common Entrance Test (AIE CET) is a national-level entrance examination for admissions into BTech, diploma, and other engineering programs offered by participating institutes across India.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Exam Overview & Eligibility Guidelines</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base mb-4">
            <li>
              Candidates are assessed on Physics, Chemistry, and Mathematics.
            </li>
            <li>
              Conducted in an online (computer-based) format with multiple-choice questions.
            </li>
            <li>
              Must have passed 10+2 or equivalent with required subjects (PCM) and minimum marks as per notification.
            </li>
            <li>
              Age and other eligibility norms may vary by participating institute.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Why Choose AIE CET?</h2>
          <p>
            AIE CET offers a centralized admission process for engineering aspirants, allowing them to access many top colleges nationwide and simplifying the path toward quality technical education.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="http://aiecet.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Official AIE CET Website
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
