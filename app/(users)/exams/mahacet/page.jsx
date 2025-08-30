import React from "react";

export default function MHTCET2025() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-lime-100 to-yellow-100 p-18 sm:p-19">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-lime-600 to-yellow-600">
          MHT CET 2025
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Maharashtra Common Entrance Test (MHT CET) is a state-level online exam conducted by the State Common Entrance Test Cell, Maharashtra for admissions into undergraduate engineering, pharmacy & agriculture courses in colleges across Maharashtra.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Exam Pattern</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Mode: Computer Based Test (Online)</li>
            <li>Total questions: 150 (50 each for Physics, Chemistry, Mathematics)</li>
            <li>Duration: 180 minutes (90 minutes for PCM section & 90 minutes for PCB section if opted)</li>
            <li>No negative marking</li>
            <li>Questions based on Maharashtra State Board Class 11 & 12 syllabus (20% from Class 11 & 80% from Class 12)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Eligibility Criteria</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Candidate must be an Indian National</li>
            <li>Should have passed or appeared in Class 12 or equivalent exam</li>
            <li>Subjects required: Physics, Chemistry and Mathematics for engineering aspirants</li>
            <li>No upper age limit as per latest notifications</li>
          </ul>
        </section>

       
        <section>
          <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
          <p className="text-gray-700 mb-4">
            Candidates can apply online through the official MHT CET website by registering on the portal, filling the application form, uploading required documents and photographs, and paying the application fee via available modes.
          </p>
          <div className="flex justify-center">
            <a
              href="https://cetcell.mahacet.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-green-700 via-lime-600 to-yellow-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Visit Official MHT CET Website
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
