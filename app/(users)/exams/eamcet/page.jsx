import React from "react";

export default function EAMCET2025() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-100 to-green-50 p-18 sm:p-19">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-700 via-green-500 to-indigo-500 bg-clip-text text-transparent">
          EAMCET 2025
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">About EAMCET</h2>
          <p>
            The Engineering, Agriculture, and Medical Common Entrance Test (EAMCET) is a state-level entrance exam in Andhra Pradesh and Telangana for admission to engineering and agriculture programs. Conducted online, it is one of India’s most popular state engineering entrance exams.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">
            Participating Universities & Admission Process
          </h2>
          <ul className="list-disc pl-4 text-sm sm:text-base mb-4">
            <li>
              <strong>Leading State Universities:</strong> JNTU Hyderabad, Osmania University, Andhra University, SVU, and more.
            </li>
            <li>
              <strong>Government & Private Colleges:</strong> 300+ institutions across Andhra Pradesh and Telangana accept EAMCET scores.
            </li>
            <li>
              <strong>Admission Process:</strong> After the results, eligible candidates participate in a centralized web-based counseling process for seat selection and college allocation.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Eligibility Criteria</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li>Indian nationality and domicile in Andhra Pradesh or Telangana required.</li>
            <li>Should have passed or appeared in 10+2 or equivalent with Physics, Mathematics, and Chemistry as major subjects.</li>
            <li>Minimum 45% in PCM (40% for reserved categories) for engineering courses.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Why Choose EAMCET?</h2>
          <p>
            EAMCET provides a level playing field for thousands of students from diverse backgrounds to pursue quality engineering education. It is known for its transparent process, large number of seats, and opportunities in top public & private colleges.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://cets.apsche.ap.gov.in/EAPCET/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-700 via-green-500 to-indigo-500 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Official EAMCET Portal
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
