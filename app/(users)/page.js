'use client';

import { useState, useTransition,useRef } from 'react';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { motion ,AnimatePresence } from 'framer-motion';
import {
  FaChalkboardTeacher, FaUniversity, FaLaptopCode, FaGavel, FaUserMd, FaGraduationCap,
  FaBriefcase, FaWhatsapp ,FaFlask,FaDownload, FaPlayCircle,FaHandsHelping, FaMoneyCheckAlt, FaCertificate, FaGlobeAsia, FaUserGraduate
} from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// REMOVED: import { enquiryAction } from '@/app/(users)/admission.enquiry';
const handleDownload = () => {
   
    const brochureUrl = '/admission-brochure.pdf'; // place under public/brochures
    const link = document.createElement('a');
    link.href = brochureUrl;
    link.setAttribute('download', 'admission-brochure.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };



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

const engineeringStreams = [
  {
    name: "Mechanical Engineering",
    url: "/Streams/mechanical-engineering",
    color: "#ff914d",
    icon: "⚙️",
    about: "Focuses on design, manufacture & maintenance of mechanical systems.",
  },
  {
    name: "Civil Engineering",
    url: "/Streams/civil-engineering",
    color: "#1e90ff",
    icon: "🏗️",
    about: "Deals with design, construction, and maintenance of infrastructure.",
  },
  {
    name: "CSE (Cloud Computing)",
    url: "./Streams/Cloud-Computing",
    color: "#5d9cec",
    icon: "☁️",
    about: "Emphasizes scalable computing, cloud architecture & cloud security.",
  },
  {
    name: "CSE (IoT)",
    url: "/Streams/iot",
    color: "#4dd599",
    icon: "🌐",
    about: "Integrates CS engineering with smart devices & IoT applications.",
  },
  {
    name: "CSE (CSBS)",
    url: "/Streams/csbs",
    color: "#b967ff",
    icon: "💼",
    about: "Blends computer science with business systems for tech-business roles.",
  },
  {
    name: "CSE Cyber Security",
    url: "/Streams/cyber-security",
    color: "#ff4d6d",
    icon: "🛡️",
    about: "Focuses on network security, ethical hacking & data privacy.",
  },
  {
    name: "CSE (AI & ML)",
    url: "/Streams/ai-ml",
    color: "#ffd700",
    icon: "🤖",
    about: "Covers artificial intelligence, machine learning & deep learning.",
  },
  {
    name: "Data Science",
    url: "/Streams/data-science",
    color: "#5cdb95",
    icon: "📊",
    about: "Focuses on analytics, big data, and data visualization.",
  },
  {
    name: "CSE",
    url: "/Streams/cse",
    color: "#2a2a72",
    icon: "💻",
    about: "Core computer science: software, algorithms, and system design.",
  },
  // EC/EE/EEE and related
  {
    name: "Electronics & Communication (ECE)",
    url: "/Streams/ece",
    color: "#f54260",
    icon: "📡",
    about: "Covers electronics, telecommunications, and embedded systems.",
  },
  {
    name: "Embedded Systems",
    url: "/Streams/embedded-systems",
    color: "#f54260",
    icon: "📟",
    about: "Focuses on microcontrollers, hardware-software integration.",
  },
  {
    name: "VLSI Design",
    url: "/Streams/vlsi",
    color: "#f54260",
    icon: "🔲",
    about: "Covers semiconductor fabrication, circuit and chip design.",
  },
  {
    name: "Signal Processing",
    url: "/Streams/signal-processing",
    color: "#f54260",
    icon: "🎚️",
    about: "Covers analog/digital signal analysis, filtering, and applications.",
  },
  {
    name: "Electrical Engineering (EE)",
    url: "/Streams/ee",
    color: "#f7b32b",
    icon: "🔌",
    about: "Focuses on electric circuits, machines, power systems & automation.",
  },
  {
    name: "Power Systems",
    url: "/Streams/power-systems",
    color: "#f7b32b",
    icon: "⚡",
    about: "Focuses on electric power generation, transmission, and distribution.",
  },
  {
    name: "Control Systems",
    url: "/Streams/control-systems",
    color: "#f7b32b",
    icon: "🎛️",
    about: "Deals with automation, system dynamics and robotics.",
  },
  {
    name: "Electrical & Electronics Engineering (EEE)",
    url: "/Streams/eee",
    color: "#1abc9c",
    icon: "⚡",
    about: "Combines electrical systems with electronics and control engineering.",
  },
  // IT & Related
  {
    name: "Information Technology (IT)",
    url: "/Streams/information-technology",
    color: "#3a86ff",
    icon: "🖥️",
    about: "Emphasizes IT infrastructure, software & network management.",
  },
  // Others
  {
    name: "Chemical Engineering",
    url: "/Streams/chemical-engineering",
    color: "#fb3640",
    icon: "⚗️",
    about: "Applies chemical principles to manufacturing and production.",
  },
  {
    name: "Biotechnology",
    url: "/Streams/biotechnology",
    color: "#00b894",
    icon: "🧬",
    about: "Integrates biology with technology for pharmaceuticals & research.",
  },
  {
    name: "Software Engineering",
    url: "/Streams/software-engineering",
    icon: "💾",
    color: "#3a86ff",
    about: "Focuses on methodologies for software system development.",
  },
  {
    name: "Information Security",
    url: "/Streams/information-security",
    icon: "🛡️",
    color: "#3a86ff",
    about: "Focuses on network, data, and application security.",
  },
  {
    name: "Biomedical Engineering",
    url: "/Streams/biomedical-engineering",
    color: "#ff758f",
    icon: "🦾",
    about: "Applies engineering to healthcare, medical devices & diagnostics.",
  },
  {
    name: "Aerospace Engineering",
    url: "/Streams/aerospace-engineering",
    color: "#2962ff",
    icon: "✈️",
    about: "Focuses on design & development of aircraft and spacecraft.",
  },
  {
    name: "Automobile Engineering",
    url: "/Streams/automobile-engineering",
    color: "#c0b283",
    icon: "🚗",
    about: "Designs, develops, tests & manufactures vehicles.",
  },
  {
    name: "Mechatronics Engineering",
    url: "/Streams/mechatronics",
    color: "#9b59b6",
    icon: "🤖",
    about: "Integrates mechanics, electronics, and computing for automation.",
  },
  {
    name: "Environmental Engineering",
    url: "/Streams/environmental-engineering",
    color: "#43aa8b",
    icon: "🌱",
    about: "Focuses on sustainable solutions for environmental challenges.",
  },
  {
    name: "Instrumentation Engineering",
    url: "/Streams/instrumentation-engineering",
    color: "#7766c6",
    icon: "📈",
    about: "Specializes in measurement, automation, and process control.",
  },
  {
    name: "Mining Engineering",
    url: "/Streams/mining-engineering",
    color: "#838b8b",
    icon: "⛏️",
    about: "Focuses on extraction and processing of minerals and resources.",
  },
  {
    name: "Marine Engineering",
    url: "/Streams/marine-engineering",
    color: "#0096c7",
    icon: "🚢",
    about: "Design and maintenance of ships, submarines, and marine systems.",
  },
  {
    name: "Petroleum Engineering",
    url: "/Streams/petroleum-engineering",
    color: "#8d5524",
    icon: "🛢️",
    about: "Deals with exploration and extraction of oil and gas resources.",
  },
];
// Enhanced Card UI Component with polished styling and responsive spacing
const StreamCard = ({ stream }) => {
return (
<div
style={{
background: `linear-gradient(135deg, ${stream.color} 0%, #f9fafb 100%)`,
borderRadius: "24px",
boxShadow:
"0 16px 40px rgba(0, 0, 0, 0.12), 0 6px 12px rgba(0, 0, 0, 0.06)",
padding: "2.2rem 2rem 1.6rem 2rem",
margin: "1.5rem auto",
minWidth: "260px",
maxWidth: "340px",
flex: "1 1 320px",
transition:
"transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s ease",
cursor: "pointer",
position: "relative",
display: "flex",
flexDirection: "column",
userSelect: "none",
border: "2px solid transparent",
}}
className="stream-card"
tabIndex="0"
onClick={() => window.open(stream.url, "_blank")}
onKeyDown={(e) => {
if (e.key === "Enter") window.open(stream.url, "_blank");
}}
aria-label={`Read more about ${stream.name}`}
onMouseEnter={(e) => {
e.currentTarget.style.transform = "translateY(-12px) scale(1.12)";
e.currentTarget.style.boxShadow =
"0 28px 60px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.1)";
e.currentTarget.style.borderColor = stream.color;
}}
onMouseLeave={(e) => {
e.currentTarget.style.transform = "none";
e.currentTarget.style.boxShadow =
"0 16px 40px rgba(0, 0, 0, 0.12), 0 6px 12px rgba(0, 0, 0, 0.06)";
e.currentTarget.style.borderColor = "transparent";
}}
>
<div
style={{
fontSize: "3rem",
marginBottom: "1.2rem",
textAlign: "center",
color: stream.color,
filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.12))",
userSelect: "none",
}}
>
{stream.icon}
</div>
<div
style={{
fontWeight: "900",
fontSize: "1.5rem",
marginBottom: "0.7rem",
textAlign: "center",
color: "#2a2a2a",
letterSpacing: "0.7px",
userSelect: "none",
textShadow: "0 2px 8px rgba(0,0,0,0.06)",
}}
>
{stream.name}
</div>
<div
style={{
fontSize: "1.08rem",
color: "#555555",
minHeight: "52px",
marginBottom: "1.5rem",
textAlign: "center",
flexGrow: 1,
padding: "0 0.75rem",
lineHeight: 1.45,
fontWeight: "500",
}}
>
{stream.about}
</div>
<a
style={{
display: "block",
textAlign: "center",
background: stream.color,
color: "#fff",
textDecoration: "none",
borderRadius: "14px",
fontWeight: "700",
padding: "12px 0",
fontSize: "1.1rem",
maxWidth: "180px",
margin: "auto",
boxShadow: `0 8px 24px ${stream.color}aa`,
transition: "background 0.3s ease, box-shadow 0.3s ease",
userSelect: "none",
letterSpacing: "0.6px",
fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
cursor: "pointer",
outline: "none",
}}
href={stream.url}
target="_blank"
rel="noopener noreferrer"
tabIndex="-1"
onClick={(e) => e.stopPropagation()}
onMouseEnter={(e) => {
e.currentTarget.style.background = "#121212";
e.currentTarget.style.boxShadow = "0 10px 30px #121212cc";
e.currentTarget.style.letterSpacing = "0.9px";
}}
onMouseLeave={(e) => {
e.currentTarget.style.background = stream.color;
e.currentTarget.style.boxShadow = `0 8px 24px ${stream.color}aa`;
e.currentTarget.style.letterSpacing = "0.6px";
}}
>
Explore Stream
</a>
</div>
);
};

const counsellingData = [
  { name: "JOSAA", desc: "Joint Seat Allocation Authority" },
  { name: "CSAB", desc: "Central Seat Allocation Board" },
  { name: "UPTU", desc: "Uttar Pradesh Technical University" },
  { name: "GGSIPU", desc: "Guru Gobind Singh Indraprastha University" },
  { name: "JAC Delhi", desc: "Joint Admission Counselling Delhi" },
  { name: "MP-DTE", desc: "Madhya Pradesh Directorate of Technical Education" },
  { name: "Rajasthan REAP", desc: "Rajasthan Engineering Admission Process" },
  { name: "COMED-K", desc: "Consortium of Medical, Engineering and Dental Colleges of Karnataka" },
  { name: "WBJEE", desc: "West Bengal Joint Entrance Examination" },
  { name: "BCECE", desc: "Bihar Combined Entrance Competitive Examination" },
  { name: "MMMUT Gorakhpur", desc: "Madan Mohan Malaviya University of Technology" },
  { name: "JAC Chandigarh", desc: "Joint Admission Counselling Chandigarh" },
  { name: "HBTU Kanpur", desc: "Harcourt Butler Technical University" },

];
const students = [
  { name: 'Divyanshu', college: 'NIT Patna', image: '/divyanshu.png', story: "I am grateful to Every Detail Education for their invaluable support in securing my seat in the BTech program at NIT Patna. Their knowledgeable counselors provided personalized guidance on the admission process and entrance exams, making a significant difference in my preparation. I highly recommend their services to anyone seeking academic counseling. Thank you for your amazing support!" },
  { name: 'Shivang Kumar', college: 'IIT Ropar', image: '/Shivang.png', story: "Heyy,this is an amazing Consulatnacy in patna which gets you in a better college on the basis of your rank..You can do counselling from here.👍I have done my counselling from here and I have been in an amazing college."},
   { name: 'RAJ KUMAR', college: '(GKV),HARIDWAR', image: '/raj.png', story: "..if we talk about the review then quite a smooth process was there while counseling was going on ... faculties wore very supportive till the end ... process runs nicely to allot a proper seat to students at their respective CRL rank..." },
    { name: 'SHASHI', college: 'IIIT UNA ', image: '/shashi.png', story: "I  went through the college admission counseling(csab) process with Every detail  education and I am pleased to share my positive experience. The guidance provided was both comprehensive and insightful, helping me navigate the complex admissions landscape with clarity. The counselors were professional, responsive, and offered personalized advice that was instrumental in making informed decisions. I especially appreciated the thoroughness and dedication shown throughout the process. Thank you for your exceptional support and for making the college admission journey smoother and more manageable." },
  { name: 'Ayush', college: 'NIT Agartala', image: '/ayush.png', story: "I am very thankful to every detail education and it's all team members for doing a fruitful councelling through which I got NIT Agartala.  When jee result is announced after that I become demotivated that I could not get any seat in nit collage through josaa but they gives me believe that you must get and currently I am in nit." },
];

// Detailed video case studies
  const caseStudies = [
    {
      id: 1,
      studentName: 'DHIRU KUMAR',
      college: 'NIT, PATNA',
      videoUrl: 'https://www.youtube.com/embed/KGl3E_MspDY',
      description:
        'Dhiru, the first boy from his village to secure admission to NIT Patna through JoSAA 2025 Round 1, highlighting his journey, struggles, and family support.',
      highlights: [
       ' Dhiru became the first boy from his village to get admission to NIT Patna in JoSAA 2025 Round 1.',
       'Faced challenges like limited resources, self-cooking, and studying under tough conditions, with strong family and brotherly support.',
       'Professional counseling helped him choose the right college and branch, inspiring other rural students.'
      ],
    },
    {
      id: 2,
      studentName: 'ABHIJEET KUMAR',
      college: 'NIT SIKKIM',
      videoUrl: 'https://www.youtube.com/embed/FG2YMT33oPk',
      description:
        'The video narrates a motivating student review about cracking NIT admission through persistent efforts, strategic preparation, and part-time work management before CSAB counseling 2025.',
      highlights: [
       ' A student from Muzaffarpur, Bihar, shares his journey of securing admission in NIT before the CSAB counseling rounds, despite working a part-time job.',
       'He emphasizes consistent study, revision, and practicing previous year questions while balancing job responsibilities.',
       'The student credits online coaching and mentorship for flexible learning, motivating others from similar backgrounds to aim for top engineering institutes.'
      ],
    },
    {
      id: 3,
      studentName: 'YASHITA SHREYA',
      college: 'NIT PATNA',
      videoUrl: 'https://www.youtube.com/embed/BjTGjWeQdCA',
      description:
        'Yashita Shreya, a top-performing student from Bihar, sharing her reasons for choosing to study at NIT Patna ',
      highlights: [
        'Yashita Shreya, a high achiever from Bihar, decided to pursue engineering at NIT Patna instead of NIT Delhi due to better growth, placements, and a strong community feel at Patna.',
        'She discusses her JEE Advanced preparation journey, emphasizing consistent question practice (PYQs), focusing on basics, time management, and avoiding distractions like excess YouTube content.',
        'Family support played a crucial role throughout her preparation, and she advises aspirants to learn from past errors, prioritize weak subjects, and stay motivated with smart study strategies.'
      ],
    },
  ];

const slides = [


  { src: '/banner2.png', isVideo: false },
  { src: '/banner3.png', isVideo: false },
{ src: '/video.mp4', isVideo: true },  // { src: '/banner1.png', isVideo: false },
];


 

export default function EnquiryForm() {

// Main Page Component

  const prevRef = useRef(null);
  const nextRef = useRef(null);

    const [hoverIndex, setHoverIndex] = useState(null);

 const [isOpen, setIsOpen] = useState(false);

  // Your WhatsApp number in international format without + or spaces
  const phoneNumber = '919430018930';  // Replace with your actual number

  // Optional default message when chat is opened
  const defaultMessage = 'Hello! I need assistance with admissions.';

  // WhatsApp chat URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  // Toggles widget open state (optional if you want a popup else direct link)
  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };


  const [selectedId, setSelectedId] = useState(caseStudies[0].id);
  const selectedCase = caseStudies.find((cs) => cs.id === selectedId);




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

      {/* Counselling Support Section */}
 <section
  className="relative py-24 px-6 bg-gradient-to-br from-sky-50 via-emerald-50 to-lime-50 overflow-hidden min-h-screen"
  aria-label="Counselling Support Section"
>
  {/* Decorative SVGs */}
  <svg className="absolute top-[-60px] left-[-80px] w-[410px] opacity-25" viewBox="0 0 500 500" fill="none">
    <circle cx="250" cy="250" r="200" fill="#6ee7b7" />
  </svg>
  <svg className="absolute bottom-[-80px] right-[-100px] w-[410px] opacity-25" viewBox="0 0 500 500" fill="none">
    <circle cx="250" cy="250" r="200" fill="#a3e635" />
  </svg>
  {/* Animated background shapes */}
  <div className="absolute top-16 left-10 w-72 h-72 bg-emerald-300 rounded-full blur-3xl opacity-30 pointer-events-none animate-pulse" />
  <div className="absolute bottom-16 right-10 w-72 h-72 bg-lime-400 rounded-full blur-3xl opacity-30 pointer-events-none animate-pulse" />
  <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-44 h-44 bg-sky-200 rounded-full blur-2xl opacity-20 pointer-events-none" />

  {/* Heading */}
  <motion.h2
    className="text-5xl font-extrabold text-center text-gray-800 mb-7 tracking-wider drop-shadow-sm"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    OUR <span className="text-green-600 ">COUNSELLING</span> SUPPORT
  </motion.h2>

  {/* Subtitle */}
  <motion.p
    className="text-center text-sky-700 max-w-2xl mx-auto mb-16 text-lg md:text-xl font-semibold"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.25, duration: 0.8 }}
  >
    Expert guidance for entrance exams and counselling processes across India. <span className="inline-block text-lg font-extrabold text-lime-600 animate-pulse">#SuccessWithUs</span>
  </motion.p>

  {/* Counselling grid */}
  <div className="relative max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-20 gap-x-10">
    {counsellingData.map((item, idx) => (
      <motion.div
        key={idx}
        className="relative group flex flex-col items-center outline-none focus:ring-4 focus:ring-emerald-400 cursor-pointer"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: idx * 0.07 }}
        whileHover={{ scale: 1.14, zIndex: 50 }}
        tabIndex={0}
        onMouseEnter={() => setHoverIndex(idx)}
        onMouseLeave={() => setHoverIndex(null)}
        onFocus={() => setHoverIndex(idx)}
        onBlur={() => setHoverIndex(null)}
        aria-describedby={`desc-${idx}`}
      >
        {/* Glowing multi-layered animated circle */}
        <div
          className={`
            relative flex items-center justify-center w-28 h-28 rounded-full cursor-pointer
            bg-gradient-to-tr from-lime-400 via-emerald-400 to-sky-500
            shadow-[0_0_24px_rgba(56,189,124,0.9),inset_0_0_20px_rgba(56,189,124,0.7)]
            ring-2 ring-lime-300
            transition-colors duration-700 ease-in-out
            group-hover:bg-gradient-to-bl group-hover:from-lime-500 group-hover:via-emerald-500 group-hover:to-sky-600
            group-hover:ring-lime-400
            ${hoverIndex === idx ? "ring-4 shadow-[0_0_30px_8px_rgba(22,163,74,0.95),inset_0_0_30px_6px_rgba(22,163,74,0.8)]" : ""}
            backdrop-blur-[14px] backdrop-saturate-200
            `
          }
          role="img"
          aria-label={item.name}
        >
          {/* Inner animated gradient circle overlay */}
          <div
            className={`
              absolute inset-2 rounded-full 
              bg-gradient-to-r from-lime-400 via-emerald-400 to-sky-500 
              opacity-30
              animate-gradient-x
              pointer-events-none
              ${hoverIndex === idx ? "opacity-50" : ""}
            `}
            style={{ filter: "blur(10px)" }}
          />
          {/* Icon with floating glow animation */}
          <motion.span
            className="relative z-10 text-white text-4xl drop-shadow-lg select-none"
            animate={
              hoverIndex === idx
                ? { y: [0, -8, 0], scale: [1, 1.15, 1] }
                : { y: 0, scale: 1 }
            }
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          >
            {item.icon ? item.icon : "🎓"}
          </motion.span>
        </div>

        {/* Name */}
        <span className="mt-5 text-base md:text-lg font-extrabold text-emerald-900 drop-shadow-md group-hover:text-lime-700 transition-colors duration-300">
          {item.name}
        </span>

        {/* Description */}
        <p
          id={`desc-${idx}`}
          className="mt-3 text-center text-sm md:text-base text-sky-900 font-semibold leading-relaxed min-h-[4rem] px-3"
        >
          {item.desc}
        </p>

        {/* Learn More button */}
        <AnimatePresence>
          {hoverIndex === idx && (
            <motion.a
              href={item.link ? item.link : "./contact"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35 }}
              className="mt-3 px-4 py-1.5 rounded-full bg-lime-500/90 text-white font-bold text-xs tracking-wide shadow-md inline-block hover:bg-emerald-600 focus:bg-lime-700 transition"
              tabIndex={-1}
            >
              Learn More
            </motion.a>
          )}
        </AnimatePresence>

        {/* Floating tooltip */}
        <AnimatePresence>
          {hoverIndex === idx && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.23 }}
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-56 px-4 py-3 bg-gradient-to-br from-emerald-600 to-lime-500 ring-4 ring-lime-300 text-white rounded-xl text-center text-sm font-semibold shadow-2xl pointer-events-none z-40"
              role="tooltip"
            >
              {item.desc}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    ))}
  </div>

  {/* Custom animation for gradient shifting */}
  <style>
    {`
      @keyframes gradient-x {
        0%, 100% {
          background-position: 0% center;
        }
        50% {
          background-position: 100% center;
        }
      }
      .animate-gradient-x {
        background-size: 200% 200%;
        animation: gradient-x 6s ease-in-out infinite;
      }
    `}
  </style>
</section>


      {/* Enquiry Form */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#d1fae5] via-[#ecfeff] to-[#bae6fd]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Left Side */}
           <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-green-800 mb-6 leading-tight select-none">
        📥 Apply For Admission Enquiry
      </h2>

      <p className="text-gray-700 text-lg mb-6 leading-relaxed select-none">
        Fill in the form and our expert counselors will guide you to the best-fit course and college.
        Begin your academic journey with confidence!
      </p>

      <ul className="list-disc list-inside text-green-700 font-semibold space-y-3 select-none">
        <li>🎓 Get Personalized Counseling</li>
        <li>🏫 Admission Help in 100+ Top Colleges</li>
        <li>🩺 MBBS, Engineering, Management & More</li>
      </ul>

      {/* Download Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleDownload}
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-sky-500 text-white text-lg font-medium rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
      >
        <FaDownload />
        Download Brochure
      </motion.button>
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
      {/* Background soft shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-green-200 rounded-full opacity-30 blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-sky-300 rounded-full opacity-20 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-sky-800 mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🎓 Student Success Stories
        </motion.h2>

        <motion.p
          className="text-gray-700 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Real stories of students who turned dreams into degrees with our guidance.
        </motion.p>

        {/* Swiper slider for quick preview cards */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mb-16"
        >
          {students.map((student, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                className="bg-white rounded-3xl shadow-lg border-t-4 border-green-600 p-6 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={student.image}
                    alt={student.name}
                    width={100}
                    height={100}
                    className="rounded-full border-4 border-white shadow-lg object-cover"
                    draggable={false}
                  />
                </div>
                <h4 className="text-lg font-bold text-green-700">{student.name}</h4>
                <p className="text-sky-600 text-sm mb-3">{student.college}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{student.story}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Full details view */}
        <div className="flex flex-col md:flex-row gap-10 text-left">
          {/* Student List */}
          <ul className="md:w-1/3 space-y-4">
            {caseStudies.map(({ id, studentName, college }) => (
              <li key={id}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedId(id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 shadow-sm ${
                    selectedId === id
                      ? 'bg-emerald-100 border-emerald-300 shadow-md'
                      : 'bg-white hover:bg-emerald-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <FaPlayCircle
                      className={`text-xl ${
                        selectedId === id
                          ? 'text-emerald-600'
                          : 'text-gray-400 group-hover:text-emerald-500'
                      }`}
                    />
                    <div>
                      <div className="text-lg font-semibold">{studentName}</div>
                      <div className="text-sm text-gray-600">{college}</div>
                    </div>
                  </div>
                </motion.button>
              </li>
            ))}
          </ul>

          {/* Selected Case Study Details */}
          <motion.article
            key={selectedCase.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-2/3 bg-white rounded-xl shadow-lg p-6 border border-gray-100"
          >
            <div className="overflow-hidden rounded-md shadow">
              <iframe
                className="w-full aspect-video"
                src={selectedCase.videoUrl}
                title={`${selectedCase.studentName} Success Story Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <h3 className="text-2xl font-bold text-emerald-700 mt-6">
              {selectedCase.studentName} - {selectedCase.college}
            </h3>
            <p className="mt-3 text-gray-700">{selectedCase.description}</p>

            <h4 className="mt-4 font-semibold text-gray-800">Highlights:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
              {selectedCase.highlights.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
 <div
style={{
background: "radial-gradient(circle at top left, #d5e4ff, #6aa0ff)",
minHeight: "100vh",
padding: "3rem 0 7rem",
fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
overflowX: "hidden",
}}
>
<header
style={{
textAlign: "center",
padding: "0 1rem",
userSelect: "none",
marginBottom: "3rem",
}}
>
<h1
style={{
fontSize: "3.4rem",
color: "#1e3c72",
letterSpacing: "2.3px",
fontWeight: "900",
marginBottom: "0.35rem",
textShadow: "0 3px 10px rgba(30, 60, 114, 0.35)",
}}
>
Top Engineering Streams in 2025
</h1>
<p
style={{
color: "#3c3c3c",
fontSize: "1.25rem",
maxWidth: "680px",
margin: "auto",
fontWeight: "600",
letterSpacing: "0.35px",
lineHeight: 1.5,
}}
>
Discover the most in-demand and future-ready branches for your engineering career.
</p>
</header>

  <section
    style={{
      maxWidth: "1300px",
      margin: "auto",
      position: "relative",
      paddingBottom: "5rem",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    }}
  >
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={32}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      breakpoints={{
        480: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1400: { slidesPerView: 4 },
      }}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onSwiper={(swiper) => {
        setTimeout(() => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
        });
      }}
      style={{ paddingBottom: "5rem" }}
    >
      {engineeringStreams.map((stream, idx) => (
        <SwiperSlide key={stream.name + idx}>
          <StreamCard stream={stream} />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Custom Navigation Buttons */}
    <button
      ref={prevRef}
      aria-label="Previous Slide"
      style={{
        position: "absolute",
        left: "12px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 40,
        backgroundColor: "#1b365d",
        color: "white",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 10px 30px rgba(27, 54, 93, 0.6)",
        transition: "background-color 0.3s ease, transform 0.2s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.8rem",
        userSelect: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#3a63b1";
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#1b365d";
        e.currentTarget.style.transform = "none";
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") prevRef.current?.click();
      }}
    >
      ❮
    </button>

    <button
      ref={nextRef}
      aria-label="Next Slide"
      style={{
        position: "absolute",
        right: "12px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 40,
        backgroundColor: "#1b365d",
        color: "white",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 10px 30px rgba(27, 54, 93, 0.6)",
        transition: "background-color 0.3s ease, transform 0.2s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.8rem",
        userSelect: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#3a63b1";
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#1b365d";
        e.currentTarget.style.transform = "none";
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") nextRef.current?.click();
      }}
    >
      ❯
    </button>
  </section>
</div>

       {/* Floating Button */}
            <div
              aria-label="Chat on WhatsApp"
              title="Chat with us on WhatsApp"
              className="fixed bottom-6 right-6 z-50 cursor-pointer bg-green-500 hover:bg-green-600 transition-colors duration-300 rounded-full p-4 shadow-lg flex items-center justify-center"
              onClick={() => window.open(whatsappUrl, '_blank', 'noopener,noreferrer')}
            >
              <FaWhatsapp className="text-white text-3xl" aria-hidden="true" />
              {/* Optionally, add animation or tooltip here */}
            </div>
      
       
    </>
  );
}
