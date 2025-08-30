import React from "react";

export default function GUJCET2025() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-100 to-green-100 p-18 sm:p-19">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-cyan-600 via-teal-500 to-green-600 bg-clip-text text-transparent">
          GUJCET 2025
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">About GUJCET</h2>
          <p>
            Gujarat Common Entrance Test (GUJCET) is a state-level engineering and pharmacy entrance test conducted for admission to degree courses in Gujarat.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Admission Criteria & Reservation Policy</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base mb-4">
            <li>
              Admission is granted through centralized counseling based on GUJCET rank and qualifying exam marks.
            </li>
            <li>
              Gujarat state reservation policies are strictly implemented for SC, ST, SEBC, EWS, and PwD candidates.
            </li>
            <li>
              Seats are allocated as per merit, category, and institutional availability in government and private colleges.
            </li>
            <li>
              Domicile and other eligibility criteria apply as per state regulations.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Eligibility Criteria</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li>Should be an Indian citizen and resident of Gujarat for state quota seats.</li>
            <li>Passed 10+2 or equivalent with Physics, Chemistry and Mathematics/Biology.</li>
            <li>Minimum marks as prescribed by Gujarat Secondary and Higher Secondary Education Board.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Why GUJCET?</h2>
          <p>
            GUJCET acts as a gateway for quality engineering and pharmacy education in Gujarat with transparent counseling and adherence to government norms for fair seat distribution.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://gujcet.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-600 via-teal-500 to-green-600 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Official GUJCET Website
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
