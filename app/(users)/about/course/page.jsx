"use client";

import { FaUserMd, FaCog, FaBriefcase, FaGavel, FaHospitalAlt, FaPalette } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const iconMap = {
  Medical: FaUserMd,
  Engineering: FaCog,
  Management: FaBriefcase,
  "Law Courses": FaGavel,
  "B.Sc Nursing": FaHospitalAlt,
  "PCM & Arts": FaPalette,
};

export default function MostPopularCourses() {
  return (
    <section className="py-16 bg-gradient-to-tr from-white via-emerald-100 to-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-poppins font-bold text-green-700 mb-12">
          🌟 Most Popular Courses
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {courses.map((course, index) => {
            const IconComponent = iconMap[course.title];
            return (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-xl border-t-4 border-green-500 hover:shadow-green-300 transition-all duration-300 h-full flex flex-col justify-between">
                  <div className="flex justify-center pt-10 text-green-700">
                    {IconComponent && <IconComponent size={100} />}
                  </div>
                  <div className="p-6">
                    <h5 className="text-xl font-poppins font-bold text-center text-green-800 mb-2 uppercase tracking-wide">
                      {course.title}
                    </h5>
                    <p className="text-center text-gray-600 text-sm font-inter leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

const courses = [
  {
    title: "Medical",
    description: "MBBS • BDS • BHMS • BAMS",
  },
  {
    title: "Engineering",
    description: "B.Tech • M.Tech • B.Arch • Diploma",
  },
  {
    title: "Management",
    description: "MBA • PGDM • PGP • MBS",
  },
  {
    title: "Law Courses",
    description: "LL.B • LL.M • BBA LLB • B.A",
  },
  {
    title: "B.Sc Nursing",
    description: "BDS • BCA • BUMS • BPT",
  },
  {
    title: "PCM & Arts",
    description: "PCM • PCB • Humanities",
  },
];
