import React from "react";

export default function JEEAdvanced2025() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-pink-100 to-purple-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-red-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          JEE Advanced 2025
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">About JEE Advanced</h2>
          <p>
            Joint Entrance Examination (JEE) Advanced is one of the toughest and most prestigious engineering entrance exams in India, conducted for admission to the IITs and other top premier institutes. Only qualified candidates of JEE Main are eligible.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Exam Pattern & Preparation Tips</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base mb-4">
            <li><strong>Two papers:</strong> Paper 1 and Paper 2, both mandatory, held on the same day.</li>
            <li><strong>Subjects covered:</strong> Physics, Chemistry, and Mathematics.</li>
            <li><strong>Question types:</strong> MCQs, numerical answer types, with varying marking schemes.</li>
            <li><strong>Preparation Tips:</strong> Focus on conceptual clarity, problem-solving speed, and previous years' papers analysis.</li>
            <li><strong>Time management:</strong> Practice mock tests with strict time limits to build accuracy under pressure.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Eligibility Criteria</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li>Have qualified JEE Main 2025.</li>
            <li>Passed 10+2 or equivalent with Physics, Chemistry, and Mathematics.</li>
            <li>Age limit as specified in official JEE Advanced notification.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Why JEE Advanced?</h2>
          <p>
            Securing a rank in JEE Advanced unlocks admission to premier IITs, recognized globally for academic excellence and innovation in engineering. It opens doors to abundant research and career opportunities.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://jeeadv.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-red-600 via-pink-500 to-purple-600 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Official JEE Advanced Website
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
