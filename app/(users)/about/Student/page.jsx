'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function StudentSay() {

  const students = [
  { name: 'Divyanshu', college: 'NIT Patna', image: '/divyanshu.png', story: "I am grateful to Every Detail Education for their invaluable support in securing my seat in the BTech program at NIT Patna. Their knowledgeable counselors provided personalized guidance on the admission process and entrance exams, making a significant difference in my preparation. I highly recommend their services to anyone seeking academic counseling. Thank you for your amazing support!" },
  { name: 'Shivang Kumar', college: 'IIT Ropar', image: '/Shivang.png', story: "Heyy,this is an amazing Consulatnacy in patna which gets you in a better college on the basis of your rank..You can do counselling from here.👍I have done my counselling from here and I have been in an amazing college."},
   { name: 'RAJ KUMAR', college: '(GKV),HARIDWAR', image: '/raj.png', story: "..if we talk about the review then quite a smooth process was there while counseling was going on ... faculties wore very supportive till the end ... process runs nicely to allot a proper seat to students at their respective CRL rank..." },
    { name: 'SHASHI', college: 'IIIT UNA ', image: '/shashi.png', story: "I  went through the college admission counseling(csab) process with Every detail  education and I am pleased to share my positive experience. The guidance provided was both comprehensive and insightful, helping me navigate the complex admissions landscape with clarity. The counselors were professional, responsive, and offered personalized advice that was instrumental in making informed decisions. I especially appreciated the thoroughness and dedication shown throughout the process. Thank you for your exceptional support and for making the college admission journey smoother and more manageable." },
  { name: 'Ayush', college: 'NIT Agartala', image: '/ayush.png', story: "I am very thankful to every detail education and it's all team members for doing a fruitful councelling through which I got NIT Agartala.  When jee result is announced after that I become demotivated that I could not get any seat in nit collage through josaa but they gives me believe that you must get and currently I am in nit." },
];
  return (
    <>
      <section className="relative py-20 px-4 bg-gradient-to-br from-[#f0f9ff] via-[#dbeafe] to-[#bfdbfe] overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-green-200 rounded-full opacity-30 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-sky-300 rounded-full opacity-20 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10 px-4 sm:px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-sky-800 mb-6 select-none"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            🎓 Student Success Stories
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-16 max-w-2xl mx-auto select-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Real stories of students who turned dreams into degrees with our guidance.
          </motion.p>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-8"
          >
            {students.map((student, index) => (
              <SwiperSlide key={index}>
                <motion.article
                  className="bg-white rounded-2xl shadow-lg border-t-4 border-green-500 p-6 cursor-default select-text transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(34,197,94,0.3)" }}
                  tabIndex={0}
                  aria-label={`Testimonial from ${student.name} studying at ${student.college}`}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src={student.image}
                      alt={`Photo of ${student.name}`}
                      width={100}
                      height={100}
                      className="rounded-full border-4 border-white shadow-lg"
                      draggable={false}
                    />
                  </div>
                  <h4 className="text-lg font-bold text-green-700">{student.name}</h4>
                  <p className="text-sm text-sky-600 mb-3">{student.college}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{student.story}</p>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 px-6 sm:px-12 py-20 min-h-[280px] flex items-center justify-center">
        <motion.div
          className="bg-green-600 text-white py-16 px-10 rounded-3xl max-w-4xl w-full shadow-lg shadow-green-900/40 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-3xl sm:text-4xl font-extrabold font-poppins mb-6 leading-tight drop-shadow-sm select-none">
            Get Admission In Top Colleges, Today!
          </h3>
          <p className="mb-10 text-base sm:text-lg max-w-3xl mx-auto font-inter text-green-100 leading-relaxed select-none">
            We’re official representatives of 100+ colleges/universities globally, guiding students in engineering, medical, and management courses from UG to PG.
          </p>
          <a
            href="/contact"
            role="button"
            tabIndex={0}
            className="inline-block px-10 py-4 bg-white text-green-700 font-semibold rounded-full shadow-md hover:shadow-xl hover:bg-gray-100 transition duration-300 ease-in-out select-none focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-70"
          >
            Get Started
          </a>
        </motion.div>
      </section>
    </>
  );
}
