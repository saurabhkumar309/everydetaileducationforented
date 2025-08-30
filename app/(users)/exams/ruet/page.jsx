import React from "react";

export default function RUET() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-teal-100 to-cyan-100 p-18 sm:p-19">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-green-600 via-teal-500 to-cyan-400 bg-clip-text text-transparent">
          RUET Admission Test 2025
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Exam Overview</h2>
          <p>
            Rajshahi University of Engineering & Technology (RUET) conducts its admission test for BSc Engineering programs. The entrance exam is highly competitive with focus on Physics, Chemistry, Mathematics, and English.
          </p>
        </section>
     
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Eligibility</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li>Passed Higher Secondary Certificate (HSC) or equivalent with Physics, Chemistry, and Mathematics.</li>
            <li>Minimum marks criteria as per RUET guidelines.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Exam Insights</h2>
          <p>
            RUET admission test combines theoretical questions with problem solving. Fresh syllabus and improvement in test centers have increased applicant accessibility.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://www.ruet.ac.bd/admission"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-green-600 via-teal-500 to-cyan-400 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Official RUET Admission Info
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
