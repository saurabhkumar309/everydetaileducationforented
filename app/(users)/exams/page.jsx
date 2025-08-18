// app/engineering-exams/page.jsx
import React from "react";

const exams = [
  { name: "COMEDK 2025", url: "../exams/comedk" },
  { name: "SAAT 2025: The Siksha 'O' Anushandhan (SOA)", url: "../exams/saat" },
  { name: "AEEE 2025", url: "../exams/aeee" },
  { name: "SRMJEEE", url: "../exams/srmjeee" },
  { name: "VITEEE 2025", url: "../exams/viteee" },
  { name: "RUET", url: "../exams/ruet" },
  { name: "EAMCET", url: "../exams/eamcet" },
  { name: "JEE Advanced", url: "../exams/jee-advance" },
  { name: "BITSAT", url: "../exams/bitsat" },
  { name: "JEE Main", url: "../exams/jee-main" },
  { name: "LPUNEST", url: "../exams/lpunest" },
  { name: "WBJEE", url: "../exams/wbjee" },
  { name: "MHT CET", url: "../exams/mahacet/" },
  { name: "KIITEE", url: "../exams/kiitee" },
  { name: "KCET", url: "../exams/kcet" },
  { name: "GUJCET", url: "../exams/gujcet" },
  { name: "AP EAMCET", url: "../exams/ap-eamcet" },
  { name: "CUET (UG)", url: "../exams/cuet" },
  { name: "AIE CET", url: "../exams/aie-cet" },
];

const bgGradients = [
  "from-[#0f2027] via-[#203a43] to-[#2c5364]",         // deep ocean blue
  "from-[#ff4b1f] via-[#ff9068] to-[#ffc371]",         // sunset orange
  "from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",         // vibrant purple-orange
  "from-[#00c6ff] via-[#0072ff]",                       // bright blue gradient
  "from-[#11998e] via-[#38ef7d]",                       // teal green
  "from-[#fc4a1a] via-[#f7b733]",                       // fire-orange yellow
  "from-[#1f4037] via-[#99f2c8]",                       // forest green mint
  "from-[#f7971e] via-[#ffd200]",                       // gold yellow gradient
  "from-[#9d50bb] via-[#6e48aa]",                       // soft purple
  "from-[#283c86] via-[#45a247]",                        // navy to green
];

export default function EngineeringExams() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-300 to-gray-400 p-6 sm:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-lg">
          Top Engineering Entrance Exams in India 2025
        </h1>
        <p className="text-center mb-12 max-w-3xl mx-auto text-lg sm:text-xl text-gray-700">
          Discover the comprehensive list of major online engineering entrance exams for 2025. Click any card below for detailed exam info, dates, eligibility, and application trends.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {exams.map((exam, idx) => (
            <a
              key={exam.name}
              href={exam.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                rounded-2xl p-6 flex flex-col items-center justify-center
                shadow-xl transform transition-transform duration-300 ease-in-out
                hover:scale-105 hover:shadow-3xl text-white font-semibold text-center
                bg-gradient-to-r ${bgGradients[idx % bgGradients.length]}
              `}
              aria-label={`More info about ${exam.name}`}
            >
              <span className="text-6xl mb-5 select-none" role="img" aria-hidden="true">🎓</span>
              <h2 className="text-2xl sm:text-3xl font-bold leading-snug">{exam.name}</h2>
              <button
                type="button"
                className="mt-8 bg-white bg-opacity-90 text-gray-900 font-semibold rounded-full px-6 py-3 text-base sm:text-lg tracking-wide shadow-lg hover:bg-opacity-100 transition"
              >
                View Details
              </button>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
