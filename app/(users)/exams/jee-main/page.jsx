import React from "react";

export default function JEEMain2025() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 p-18 sm:p-19">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
          JEE Main 2025
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">About JEE Main</h2>
          <p>
            The Joint Entrance Examination Main (JEE Main) is the national-level engineering entrance exam conducted by NTA. It acts as a gateway to NITs, IIITs, and other CFTIs for BTech admissions and serves as a preliminary for JEE Advanced.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Exam Centers and Mode of Examination</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base mb-4">
            <li>
              <strong>Exam Centers:</strong> Available in 300+ cities across India and 20+ cities overseas, making it accessible to a vast number of aspirants.
            </li>
            <li>
              <strong>Mode of Exam:</strong> Fully computer-based test (CBT) conducted in multiple sessions for flexibility and convenience.
            </li>
            <li>
              <strong>Languages Offered:</strong> English, Hindi, and additional regional languages to cater to diverse candidates.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Eligibility Criteria</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li>Passed 10+2 or equivalent qualifying exam with Physics and Mathematics as compulsory subjects along with one of Chemistry, Biology, Biotechnology, or Technical Vocational subjects.</li>
            <li>Minimum aggregate marks as per the latest NTA guidelines.</li>
            <li>Age limit and number of attempts as specified in the official JEE Main notification.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Why JEE Main?</h2>
          <p>
            JEE Main offers a broad platform for engineering aspirants to secure admission into premier institutes with multiple attempts to improve scores, comprehensive syllabus coverage, and wide geographical reach.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://jeemain.nta.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-500 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Official JEE Main Website
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
