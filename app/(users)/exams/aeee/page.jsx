import React from "react";

export default function AEEE2025() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-100 to-indigo-200 p-10 sm:p-16">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-teal-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent text-center mb-6">
          AEEE 2025 (Amrita Engineering Entrance Exam)
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">About the Exam</h2>
          <p>
            AEEE is Amrita Vishwa Vidyapeetham’s university-level entrance exam for BTech admissions. Conducted in multiple phases and exclusively as a Computer Based Test (CBT), it welcomes aspirants from across India.
          </p>
        </section>
     
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Eligibility Criteria</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li>10+2 or equivalent with at least 60% aggregate in Mathematics, Physics, and Chemistry.</li>
            <li>Minimum 55% in each subject (MPC individually).</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Exam Trends & Insights</h2>
          <p>
            With multi-phase exams, wide reach, and robust online proctoring, AEEE sees high competition among students looking for top private engineering seats. The phased system gives candidates flexibility and another chance for better scores.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://www.careerpower.in/school/exams/aeee"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-600 via-blue-500 to-indigo-500 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Official AEEE 2025 Details
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
