import React from "react";

export default function APEAMCET2025() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-100 to-teal-100 p-19 sm:p-18">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-cyan-600 via-blue-500 to-teal-600 bg-clip-text text-transparent">
          AP EAMCET 2025
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">About AP EAMCET</h2>
          <p>
            Andhra Pradesh Engineering, Agriculture and Medical Common Entrance Test (AP EAMCET) is a state-level exam conducted by JNTU Kakinada for admissions to engineering and medical courses in Andhra Pradesh.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Participating Colleges & Counselling Overview</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base mb-4">
            <li>
              AP EAMCET scores are accepted by over 200 private and government engineering colleges in Andhra Pradesh.
            </li>
            <li>
              Centralized online counseling is conducted by the APSCHE for seat allotment based on rank and preferences.
            </li>
            <li>
              Multiple rounds of counseling allow candidates to improve chances and change preferences.
            </li>
            <li>
              Candidates must complete document verification and fee payment to confirm admission.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Eligibility Criteria</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li>Must be an Indian citizen and domicile of Andhra Pradesh or Telangana.</li>
            <li>Passed 10+2 or equivalent with Physics, Chemistry, and Mathematics/Biology.</li>
            <li>Minimum qualifying marks as per AP EAMCET norms.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Why AP EAMCET?</h2>
          <p>
            AP EAMCET facilitates admission into reputed technical institutes in Andhra Pradesh through a transparent, merit-based process, providing ample opportunities for quality education.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://cets.apsche.ap.gov.in/EAPCET/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-600 via-blue-500 to-teal-600 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Official AP EAMCET Website
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
