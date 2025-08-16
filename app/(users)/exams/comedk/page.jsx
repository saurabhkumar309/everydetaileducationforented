import React from "react";

export default function COMEDK2025() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-pink-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 bg-clip-text text-transparent text-center mb-6">
          COMEDK UGET 2025
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">About the Exam</h2>
          <p className="mb-1">
            The Consortium of Medical, Engineering and Dental Colleges of Karnataka (COMEDK) conducts the Undergraduate Entrance Test (UGET) 2025 for admission to engineering programs across India. It is a computer-based test held in 400 centers nationwide.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Important Dates</h2>
          <ul className="text-sm sm:text-base list-disc pl-4">
            <li><strong>Application Start:</strong> February 3, 2025</li>
            <li><strong>Mock Test Release:</strong> February 17, 2025</li>
            <li><strong>Application End:</strong> March 15, 2025</li>
            <li><strong>Editing Window:</strong> April 11–14, 2025</li>
            <li><strong>Admit Card Download:</strong> April 30, 2025</li>
            <li><strong>Exam Date:</strong> May 10, 2025</li>
            <li><strong>Result:</strong> May 24, 2025</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Eligibility Criteria</h2>
          <ul className="text-sm sm:text-base list-disc pl-4">
            <li>Passed or appeared in 10+2 or equivalent examination with Physics, Mathematics, and Chemistry/Biotechnology/Biology/Computer Science/Electronics as main subjects.</li>
            <li>Must have secured at least 45% aggregate marks (40% for SC/ST/OBC).</li>
            <li>No age limit as per latest notification.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Exam Trends & Insights</h2>
          <p className="mb-1">
            The number of applicants for COMEDK is increasing each year due to its wide national acceptability and large intake capacity. Computer-based testing and transparent counseling process make it a leading choice among engineering aspirants.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://www.comedk.org/about-uget-and-notification-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Official COMEDK 2025 Details
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
