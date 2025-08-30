import React from "react";

export default function BITSAT2025() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-amber-100 p-19 sm:p-18">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-yellow-600 via-orange-400 to-amber-500 bg-clip-text text-transparent">
          BITSAT 2025
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">About BITSAT</h2>
          <p>
            Birla Institute of Technology and Science Admission Test (BITSAT) is a national-level entrance examination conducted for admission to integrated first-degree programmes at BITS Pilani, Goa, and Hyderabad campuses. The exam is entirely online and renowned for its high standard and flexibility.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Scholarships & Campus Life</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base mb-4">
            <li>
              <strong>Merit-based Scholarships:</strong> BITS awards generous merit and merit-cum-need scholarships to top-performing students in BITSAT and academic programs.
            </li>
            <li>
              <strong>Vibrant Campus Life:</strong> BITS campuses are famous for their state-of-the-art infrastructure, innovation hubs, startup culture, sports, and annual fests like Oasis and Waves.
            </li>
            <li>
              <strong>International Exposure:</strong> Unique “Practice School” programs and global exchange opportunities help students gain real-world technical experience.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Eligibility Criteria</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li>Passed 10+2 or equivalent exam with Physics, Chemistry, and Mathematics, and adequate proficiency in English.</li>
            <li>Minimum 75% aggregate marks in PCM and at least 60% in each subject, as per the latest BITS notification.</li>
            <li>Only first-time 10+2 takers (2024 or 2025) eligible for admission.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Why Choose BITSAT?</h2>
          <p>
            BITSAT’s transparent, flexible online exam process and the opportunity to study at one of India’s top private universities—with unbeatable peer group, industry exposure, and scholarships—make it a preferred choice for engineering aspirants.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://www.bitsadmission.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-yellow-600 via-orange-400 to-amber-500 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Official BITSAT Website
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
