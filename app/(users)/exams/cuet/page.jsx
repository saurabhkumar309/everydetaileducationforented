import React from "react";

export default function CUETUG2025() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-100 to-red-100 p-18 sm:p-19">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 bg-clip-text text-transparent">
          CUET (UG) 2025
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">About CUET (UG)</h2>
          <p>
            Common University Entrance Test Undergraduate (CUET UG) is a national-level exam for admission to undergraduate programs across participating central and other universities in India. It provides a standardized admission process.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Examination Structure & Subject Combinations</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base mb-4">
            <li>
              CUET UG includes domain-specific subjects and language proficiency tests.
            </li>
            <li>
              Candidates choose subjects based on university and program requirements.
            </li>
            <li>
              The exam is computer-based with multiple sections tailored to course-specific eligibility.
            </li>
            <li>
              Language tests cover English and regional languages depending on candidates’ choice.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Eligibility Criteria</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li>Passed 10+2 or equivalent examination from a recognized board.</li>
            <li>Check specific eligibility based on respective university and program.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Why CUET (UG)?</h2>
          <p>
            CUET UG streamlines admission to multiple prestigious universities under a common entrance framework, reducing the application burden and promoting fairness.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://cuet.nta.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Official CUET (UG) Website
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
