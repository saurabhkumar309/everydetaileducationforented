import React from "react";

export default function SRMJEEE() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-100 to-red-100 p-18 sm:p-19">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 bg-clip-text text-transparent">
          SRMJEEE 2025
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Overview</h2>
          <p>
            SRMJEEE (SRM Joint Engineering Entrance Exam) is conducted by SRM Institute of Science and Technology for admission into their BTech programs across various campuses. It is a widely accepted computer-based test.
          </p>
        </section>
 
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Eligibility</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li>Completed 10+2 or equivalent with Physics, Chemistry, and Mathematics/Biology.</li>
            <li>Minimum aggregate marks as per SRM guidelines.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Exam Notes & Trends</h2>
          <p>
            SRMJEEE emphasizes problem-solving and analytical skills. The university also accepts other national-level exam scores making it flexible for aspirants.
          </p>
         
        </section>
      </div>
    </main>
  );
}
