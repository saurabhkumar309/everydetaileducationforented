import React from "react";

export default function WBJEE2025() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-red-100 to-purple-100 p-18 sm:p-19">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-pink-600 via-red-500 to-purple-600 bg-clip-text text-transparent">
          WBJEE 2025
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">About WBJEE</h2>
          <p>
            The West Bengal Joint Entrance Examination (WBJEE) is a state-level engineering entrance exam for admission to various undergraduate engineering programs in West Bengal.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Seat Matrix & Reservation Policy</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base mb-4">
            <li>
              WBJEE offers admission to over 80 engineering colleges across West Bengal.
            </li>
            <li>
              Seats are distributed among state quota, management quota, and NRI quotas per institutional guidelines.
            </li>
            <li>
              Reservation policies apply for SC, ST, OBC, PwD, and other categories as per Government of West Bengal norms.
            </li>
            <li>
              Separate horizontal reservations for differently-abled and other special categories are also maintained.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Eligibility Criteria</h2>
          <ul className="list-disc pl-4 text-sm sm:text-base">
            <li>Passed 10+2 or equivalent with Physics, Chemistry, and Mathematics subjects.</li>
            <li>Minimum aggregate marks as per WBJEE Board guidelines.</li>
            <li>Must be a resident of West Bengal or qualify under specified domicile criteria.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Why WBJEE?</h2>
          <p>
            WBJEE provides a comprehensive admission platform with fair seat allocation, state-of-the-art test centers, and an opportunity to join reputed technical institutes in West Bengal.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://wbjeeb.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-600 via-red-500 to-purple-600 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Official WBJEE Website
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
