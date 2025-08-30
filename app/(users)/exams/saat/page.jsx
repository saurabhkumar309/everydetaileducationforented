import React from "react";

export default function SAAT2025() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-orange-100 p-18 sm:p-19">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent text-center mb-6">
          SAAT 2025 (Siksha ‘O’ Anusandhan Admission Test)
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">About the Exam</h2>
          <p>
            SAAT is a national-level entrance exam conducted by Siksha ‘O’ Anusandhan University for UG and PG admissions (including BTech). Held annually in both online and offline modes across 62 test centers, it covers a wide range of programs.
          </p>
        </section>
       
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Eligibility Criteria</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li>Passed/appearing 10+2 with Physics and Mathematics plus one of Chemistry/Computer Science/Informatics/Statistics/Biology/Biotechnology/Technical Vocational subject.</li>
            <li>Minimum 45% marks (40% for SC/ST/OBC) in aggregate.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Exam Trends & Insights</h2>
          <p>
            SAAT attracts candidates across India owing to multiple exam attempts and generous scholarship schemes. The introduction of both CBT and offline modes increases accessibility and flexibility for rural and urban students.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://www.campusoption.com/saat-entrance-exam"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Official SAAT 2025 Details
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
