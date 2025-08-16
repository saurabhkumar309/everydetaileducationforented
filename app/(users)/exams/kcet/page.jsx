import React from "react";

export default function KCET2025() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-100 to-orange-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-yellow-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
          KCET 2025
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">About KCET</h2>
          <p>
            Karnataka Common Entrance Test (KCET) is a state-level entrance exam for admissions to engineering and other professional courses in Karnataka’s government and private institutions.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Counseling Procedure & Document Verification</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base mb-4">
            <li>
              Eligible candidates participate in a centralized counseling process conducted by KEA.
            </li>
            <li>
              Counseling includes web-based seat allotment based on merit, preferences, and reservation policies.
            </li>
            <li>
              Document verification at the counseling center is mandatory before confirmation.
            </li>
            <li>
              Important documents include 10th and 12th mark sheets, domicile certificates, identity proofs, and category certificates (if applicable).
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Eligibility Criteria</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li>Resident of Karnataka fulfilling domicile criteria.</li>
            <li>Passed 10+2 or equivalent with Physics, Chemistry, and Mathematics.</li>
            <li>Minimum prescribed marks as per KCET guidelines.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Why KCET?</h2>
          <p>
            KCET offers a fair and structured admission platform for students aiming for engineering education in Karnataka, with transparent seat allocation and a variety of institutions to choose from.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://cetonline.karnataka.gov.in/kea/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-yellow-600 via-amber-500 to-orange-500 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Official KCET Website
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
