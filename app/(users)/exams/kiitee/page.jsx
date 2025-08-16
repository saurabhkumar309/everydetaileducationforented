import React from "react";

export default function KIITEE2025() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-100 to-indigo-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          KIITEE 2025
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">About KIITEE</h2>
          <p>
            KIITEE (Kalinga Institute of Industrial Technology Entrance Examination) is conducted for admission to various engineering programs at KIIT University. It is a computer-based test aimed at selecting meritorious candidates.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Cutoff Trends and Placement Highlights</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base mb-4">
            <li>
              KIITEE cutoff scores have shown a consistent upward trend over the last five years, reflecting increasing competition.
            </li>
            <li>
              Top cutoff branches include Computer Science, Electronics, and Biotechnology.
            </li>
            <li>
              KIIT University boasts strong placement records with leading multinational companies recruiting annually.
            </li>
            <li>
              Average salary packages have been steadily improving, with many students placed in core tech roles.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Eligibility Criteria</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li>Passed 10+2 or equivalent with Physics, Chemistry, and Mathematics/Biology.</li>
            <li>Minimum required marks as per KIITEE notification.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Why Choose KIITEE?</h2>
          <p>
            KIITEE offers aspirants an opportunity to study in a reputed private university with excellent infrastructure, holistic education, and high placement potential.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://kiitee.kiit.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Official KIITEE Website
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
