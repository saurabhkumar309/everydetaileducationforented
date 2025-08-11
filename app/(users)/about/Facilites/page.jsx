"use client";


import "swiper/css";
import "swiper/css/pagination";

export default function BestFacilites() {
  return (
  <>
      {/* Facilities Section */}
      <section className="py-16 px-4 bg-gradient-to-bl from-emerald-50 via-cyan-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-indigo-700 mb-6 leading-tight">
            We Offer the <br /> Best Facilities for Students
          </h2>
          <p className="text-gray-700 text-lg font-inter max-w-2xl mx-auto">
            Every Detail Education is a premier academic and career mentoring platform. We specialize in guiding students toward international opportunities with unmatched counseling and support services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {facilities.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-tr from-sky-600 to-sky-400 text-white p-6 rounded-2xl shadow-xl transition-transform transform hover:-translate-y-2 duration-300"
            >
              <h5 className="text-xl font-semibold font-poppins mb-3 text-center">
                {item.title}
              </h5>
              <p className="text-sm text-center font-inter leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

  </>
  );
}

const facilities = [
  {
    title: "Manpower Support",
    description:
      "As one of India’s leading educational manpower consultancies, we support students with services like education loans, student ID assistance, and more.",
  },
  {
    title: "Fast & Reliable Guidance",
    description:
      "We offer swift support and professional consultancy tailored to your academic path — from application help to counseling.",
  },
  {
    title: "Loan & Financial Aid",
    description:
      "Our expert advisors help secure education loans for technical, management, and general courses like B.A., B.Sc., Engineering, and Medical degrees.",
  },
];


