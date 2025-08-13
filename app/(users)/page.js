'use client';

import { useState, useTransition } from 'react';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import {
  FaChalkboardTeacher, FaUniversity, FaLaptopCode, FaGavel, FaUserMd, FaGraduationCap,
  FaBriefcase, FaFlask, FaHandsHelping, FaMoneyCheckAlt, FaCertificate, FaGlobeAsia, FaUserGraduate
} from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// REMOVED: import { enquiryAction } from '@/app/(users)/admission.enquiry';

const features = [
  { icon: <FaChalkboardTeacher className="text-5xl text-indigo-600" />, title: 'Expert Counseling', description: 'Our certified counselors guide you through every step — from career discovery to college selection.' },
  { icon: <FaUserGraduate className="text-5xl text-green-600" />, title: '100% Admission Support', description: 'End-to-end assistance: documentation, choice filling & direct admissions in reputed colleges.' },
  { icon: <FaGlobeAsia className="text-5xl text-blue-600" />, title: 'Global Reach', description: 'Authorized representatives of 100+ Indian & international universities for multiple courses.' },
  { icon: <FaCertificate className="text-5xl text-yellow-500" />, title: 'Proven Results', description: 'Thousands of successful admissions across IITs, NITs, IIITs & top private universities.' },
];

const facilities = [
  { icon: <FaHandsHelping className="text-white text-3xl" />, bg: 'bg-gradient-to-r from-sky-500 to-blue-600', title: 'End-to-End Support', desc: 'From career counseling to seat allotment and admission — we guide you through every step.' },
  { icon: <FaUniversity className="text-white text-3xl" />, bg: 'bg-gradient-to-r from-green-500 to-emerald-600', title: 'Top College Tie-ups', desc: 'We’re partners with 100+ top universities, offering you the best academic opportunities.' },
  { icon: <MdSchool className="text-white text-3xl" />, bg: 'bg-gradient-to-r from-indigo-500 to-purple-600', title: 'Experienced Counselors', desc: 'Our certified experts personalize your course and career planning for maximum success.' },
  { icon: <FaMoneyCheckAlt className="text-white text-3xl" />, bg: 'bg-gradient-to-r from-yellow-500 to-orange-600', title: 'Loan & Scholarship Aid', desc: 'We help with education loans and scholarships to ease your financial journey.' },
];

const courseList = [
  { title: 'Medical', description: 'MBBS • BDS • BHMS • BAMS', icon: <FaUserMd />, color: 'from-pink-200 to-rose-300' },
  { title: 'Engineering', description: 'B.Tech • M.Tech • B.Arch • Diploma', icon: <FaLaptopCode />, color: 'from-sky-200 to-cyan-300' },
  { title: 'Management', description: 'MBA • PGDM • BBA • MBS', icon: <FaBriefcase />, color: 'from-amber-200 to-yellow-300' },
  { title: 'Law', description: 'LL.B • LL.M • BBA LLB • BA LLB', icon: <FaGavel />, color: 'from-indigo-200 to-violet-300' },
  { title: 'Nursing & Paramedical', description: 'BSc Nursing • BPT • ANM • GNM', icon: <FaFlask />, color: 'from-teal-200 to-emerald-300' },
  { title: 'Science & Arts', description: 'PCM • PCB • Humanities', icon: <FaGraduationCap />, color: 'from-lime-200 to-green-300' },
];

const topColleges = [
  { name: 'IIT Bombay', category: 'Engineering', image: '/iit bombay.jpg' },
  { name: 'NIT Trichy', category: 'Engineering', image: '/nit-trichy.png' },
  { name: 'IIM Bangalore', category: 'Management', image: '/IIM_Bangalore_Logo.png' },
  { name: 'IIT Delhi', category: 'Engineering', image: '/IIT Delhi logo.png' },
  { name: 'BITS Pilani', category: 'Engineering', image: '/BITS Pilani logo.png' },
  { name: 'IIT Guwahati', category: 'Engineering', image: '/IIT Guwahati logo.png' },
];

const counsellingData = [
  { name: 'JOSAA', image: '/JOSAA.png' }, { name: 'CSEB', image: '/CSEB.png' }, { name: 'UPTU', image: '/UPTU.png' },
  { name: 'GGSIPU', image: '/JJ IPU-DELHI.png' }, { name: 'JAC Delhi', image: '/JAC Delhi.png' }, { name: 'MP-DTE', image: '/MP-DTE.png' },
  { name: 'Rajasthan REAP', image: '/Reap.png' }, { name: 'COMED-K', image: '/comedk.png' }, { name: 'MHT-CET', image: '/MHT-CET.png' },
  { name: 'WBJEE', image: '/WBJEE.png' }, { name: 'BCECE', image: '/bcece.png' }, { name: 'Odisha JEE', image: '/OJEE.png' },
  { name: 'MMMUT Gorakhpur', image: '/mmmut.png' }, { name: 'JAC Chandigarh', image: '/jac-chandigarh.png' }, { name: 'HBTU Kanpur', image: '/hbtu.png' },
  { name: 'HSTES Haryana', image: '/hstes.png' }, { name: 'JIIT Noida', image: '/JIIT-NOIDA.png' },
];

const students = [
  { name: 'Divyanshu', college: 'NIT Patna', image: '/divyanshu.png', story: 'Thanks to Every Detail Education, I got my dream college. Their support during JoSAA was life-changing!' },
  { name: 'Shivang Kumar', college: 'IIT Ropar', image: '/raj.png', story: 'From confusion to confidence—this team made IIT possible for me. Forever grateful!' },
  { name: 'Ayush', college: 'NIT Agartala', image: '/ayush.png', story: 'After setbacks in JEE, their support gave me a second chance—and it worked. I’m now in NIT Agartala.' },
];

const slides = [
  { src: '/banner1.png', isVideo: false },
  { src: '/banner2.png', isVideo: false },
  { src: '/banner3.png', isVideo: false },
  { src: '/video.mp4', isVideo: true },
];
export default function EnquiryForm() {
  const [form, setForm] = useState({ name: "", phone: "", course: "", message: "" });
  const [isPending, startTransition] = useTransition();
  const [responseMsg, setResponseMsg] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.course) {
      setResponseMsg("Please fill in all required fields.");
      return;
    }

    setResponseMsg("");

    startTransition(async () => {
      try {
        const API_URL =
          process.env.NODE_ENV === "development"
            ? "http://localhost:5000/api/form"
            : "https://everydetaileducationserver.vercel.app/api/form";

        // Add `type` to indicate form type to backend
        const payload = { ...form, type: "enquiry" };

        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        setResponseMsg(data.message);

        if (data.success) {
          setForm({ name: "", phone: "", course: "", message: "" });
        }
      } catch (err) {
        console.error("Form submission error:", err);
        setResponseMsg("Submission failed. Please try again.");
      }
    });
  };
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full pt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <Swiper modules={[Autoplay, Pagination, EffectFade]} slidesPerView={1} effect="fade" loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={slide.src}>
              <motion.div initial={{ opacity: 0, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative w-full h-full flex items-center justify-center bg-black"
              >
                <div className="absolute inset-0 z-0">
                  {slide.isVideo ? (
                    <video src={slide.src} autoPlay muted loop playsInline className="w-full h-full object-cover blur-lg scale-105 opacity-60" aria-hidden="true" />
                  ) : (
                    <Image src={slide.src} alt="Blurred background" fill sizes="100vw" className="object-cover blur-lg scale-105 opacity-60" aria-hidden="true"/>
                  )}
                </div>
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  {slide.isVideo ? (
                    <video key={slide.src} src={slide.src} autoPlay muted loop playsInline className="max-w-full max-h-full object-contain"/>
                  ) : (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image src={slide.src} alt="Slide image" fill priority={idx === 0} sizes="100vw" className="object-contain" />
                    </div>
                  )}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx global>{`
          .swiper-pagination { bottom: 15px !important; }
          .swiper-pagination-bullet { background: white; opacity: 0.5; margin: 0 6px !important; width: 10px; height: 10px; transition: transform 0.3s ease; }
          .swiper-pagination-bullet-active { background: #ec4899; opacity: 1; transform: scale(1.3); }
        `}</style>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-red-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold text-indigo-900">
              Why Choose Every Detail Education?
            </motion.h2>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg">
              Trusted by thousands of students and parents for transparent, ethical, and result-oriented admission services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.15, duration: 0.5 }}>
                <Tilt glareEnable={true} glareMaxOpacity={0.25} glareColor="#ffffff" glarePosition="bottom"
                  tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={1000} scale={1.05} transitionSpeed={750}>
                  <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    <div className="mb-6 flex justify-center">{feature.icon}</div>
                    <h5 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 via-lime-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 className="text-4xl md:text-5xl font-extrabold text-blue-900" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            We Provide the Best Facilities for Students
          </motion.h2>
          <motion.p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
            Empowering you with top resources, guidance, and academic support for a brighter future.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-14">
            {facilities.map((item, idx) => (
              <motion.div key={idx}
                className="rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }} whileHover={{ scale: 1.05 }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full shadow-md ${item.bg}`}>
                  {item.icon}
                </div>
                <h5 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h5>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gradient-to-br from-white via-sky-50 to-blue-100 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 className="text-4xl md:text-5xl font-extrabold text-emerald-800 mb-6"
            initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Popular Career Courses
          </motion.h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12">
            Our most enrolled and trusted courses for 2025–2026. Choose your path with complete support from our admission experts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseList.map((course, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`relative rounded-2xl bg-gradient-to-br ${course.color} p-6 shadow-md border border-white/30 backdrop-blur-md text-left cursor-pointer`}
              >
                <div className="absolute top-0 right-0 bg-green-600 text-white text-xs px-2 py-1 rounded-bl-xl font-semibold shadow-sm select-none">
                  2025-26
                </div>
                <div className="text-4xl text-green-800 mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">{course.title}</h3>
                <p className="text-gray-700 text-sm">{course.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Counselling Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-green-200 overflow-hidden px-6">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full blur-3xl opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6 tracking-wide"
            initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            OUR <span className="text-green-600">COUNSELLING</span> SUPPORT
          </motion.h2>
          <motion.p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
            We provide expert guidance for various entrance exams and counselling processes across India.
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
            {counsellingData.map((item, idx) => (
              <motion.div key={idx} className="flex flex-col items-center text-center cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }} whileHover={{ scale: 1.1 }}>
                <motion.div className="bg-white rounded-full shadow-lg p-5 border border-gray-200 ring-2 ring-transparent hover:ring-green-400 hover:shadow-green-300 transition-all duration-300"
                  whileHover={{ rotate: 5 }}>
                  <Image src={item.image} alt={item.name} width={90} height={90} className="rounded-full object-contain" draggable={false} />
                </motion.div>
                <p className="mt-3 text-sm font-semibold text-gray-700 select-none">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#d1fae5] via-[#ecfeff] to-[#bae6fd]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Left Side */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold text-green-800 mb-6 leading-tight select-none">
              📥 Apply For Admission Enquiry
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed select-none">
              Fill in the form and our expert counselors will guide you to the best-fit course and college. Begin your academic journey with confidence!
            </p>
            <ul className="list-disc list-inside text-green-700 font-semibold space-y-3 select-none">
              <li>🎓 Get Personalized Counseling</li>
              <li>🏫 Admission Help in 100+ Top Colleges</li>
              <li>🩺 MBBS, Engineering, Management & More</li>
            </ul>
          </motion.div>
          {/* Right Side - Form */}
          <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl shadow-2xl p-10 space-y-6"
      aria-label="Admission enquiry form"
    >
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full text-gray-800 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        aria-required="true"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        required
        className="w-full text-gray-800 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        aria-required="true"
      />
      <input
        type="text"
        name="course"
        placeholder="Interested Course (e.g. B.Tech, MBBS)"
        value={form.course}
        onChange={handleChange}
        required
        className="w-full text-gray-800 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        aria-required="true"
      />
      <textarea
        name="message"
        rows={4}
        placeholder="Additional Message"
        value={form.message}
        onChange={handleChange}
        className="w-full text-gray-800 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-y"
      ></textarea>

      <button
        type="submit"
        disabled={isPending}
        className={`w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-200 ${
          isPending ? "opacity-70 cursor-not-allowed" : ""
        }`}
        aria-disabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit Enquiry"}
      </button>

      {responseMsg && (
        <p
          className={`text-sm font-medium mt-2 ${
            responseMsg.toLowerCase().includes("success") ? "text-green-600" : "text-red-500"
          } select-none`}
          aria-live="polite"
        >
          {responseMsg}
        </p>
      )}
    </motion.form>
        </div>
      </section>

      {/* Student Stories */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#f0f9ff] via-[#dbeafe] to-[#bfdbfe]">
        <div className="absolute top-0 left-0 w-40 h-40 bg-green-200 rounded-full opacity-30 blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-sky-300 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-sky-800 mb-6"
            initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            🎓 Student Success Stories
          </motion.h2>
          <motion.p className="text-gray-700 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Real stories of students who turned dreams into degrees with our guidance.
          </motion.p>
          <Swiper modules={[Autoplay, Pagination, Navigation]} spaceBetween={30}
            slidesPerView={1} loop autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }} navigation
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          >
            {students.map((student, idx) => (
              <SwiperSlide key={idx}>
                <motion.div className="bg-white rounded-3xl shadow-lg border-t-4 border-green-600 p-6 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2 }} whileHover={{ scale: 1.03 }}>
                  <div className="flex justify-center mb-4">
                    <Image src={student.image} alt={student.name} width={100} height={100}
                      className="rounded-full border-4 border-white shadow-lg object-cover" draggable={false} />
                  </div>
                  <h4 className="text-lg font-bold text-green-700">{student.name}</h4>
                  <p className="text-sky-600 text-sm mb-3">{student.college}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{student.story}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Top Colleges */}
      <section className="bg-gradient-to-tr from-[#f0fdfa] via-[#dcfce7] to-[#a7f3d0] py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-4xl font-bold text-center text-green-800 mb-4"
            initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            India&apos;s Top Colleges <span className="text-gray-700 text-lg">(2025 Ranking)</span>
          </motion.h2>
          <p className="text-center text-gray-700 max-w-xl mx-auto mb-14 select-none">
            We are associated with the best institutions in the country.
          </p>
          <Swiper modules={[Navigation, Autoplay]} navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
            autoplay={{ delay: 3000, disableOnInteraction: false }} loop spaceBetween={30} slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="pb-12"
          >
            {topColleges.map((college, idx) => (
              <SwiperSlide key={idx}>
                <motion.div className="bg-white rounded-3xl shadow-lg p-6 text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ scale: 1.04 }}>
                  <div className="flex justify-center mb-5">
                    <Image src={college.image} alt={college.name} width={140} height={140} className="object-contain rounded-md" draggable={false} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">{college.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{college.category}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Buttons */}
          <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gray-900 text-white rounded-full w-11 h-11 flex items-center justify-center cursor-pointer shadow-lg hover:bg-green-700 transition-colors duration-300 select-none">
            ❮
          </div>
          <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gray-900 text-white rounded-full w-11 h-11 flex items-center justify-center cursor-pointer shadow-lg hover:bg-green-700 transition-colors duration-300 select-none">
            ❯
          </div>
        </div>
      </section>
    </>
  );
}
