import React from "react";

export default function VITEEE2025() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-red-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-yellow-600 via-red-500 to-pink-500 bg-clip-text text-transparent">
          VITEEE 2025
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Exam Overview</h2>
          <p>
            VIT Engineering Entrance Exam (VITEEE) is conducted by Vellore Institute of Technology for admission to BTech courses at VIT campuses. The exam consists of online proctored tests across multiple sessions.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Important Dates</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li><strong>Application Start:</strong> October 2024</li>
            <li><strong>Application Close:</strong> March 2025</li>
            <li><strong>Slot Booking:</strong> March 2025</li>
            <li><strong>Exam Date:</strong> April 2025</li>
            <li><strong>Result Declaration:</strong> April 2025</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Eligibility Criteria</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li>Passed 10+2 examination with Physics, Chemistry, and Mathematics/Biology.</li>
            <li>Minimum 60% aggregate or as per institute norms.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Trends & Insights</h2>
          <p>
            The exam prioritizes conceptual understanding and speed. VITEEE is known for easy exam scheduling and merit-based admission with good scholarship programs.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://vit.ac.in/admissions/viteee"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-yellow-600 via-red-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Official VITEEE Info
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
