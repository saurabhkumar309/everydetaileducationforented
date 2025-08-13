'use client';

import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaSchool,
  FaHospitalAlt,
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaCreditCard,
  FaGraduationCap,
  FaTools,
  FaVideo,
  FaChartLine,
  FaEnvelope
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const phoneNumbers = [
    '9430018930',
    '9204198930',
    '7296011930',
    '7970690925',
    '9122763330',
  ];

  const quickLinks = [
    [<FaHome />, '/', 'Home Page'],
    [<FaInfoCircle />, '/about', 'About Us'],
    [<FaServicestack />, '/services', 'Our Services'],
    [<FaCreditCard />, '/creditcard', 'Credit Card'],
    [<FaGraduationCap />, '/career', 'Career Counselling'],
    [<FaTools />, '/admission', 'Admission Guidance'],
    [<FaVideo />, '/virtual', 'Virtual Counselling'],
    [<FaChartLine />, '/blog', 'Blog'],
    [<FaEnvelope />, '/contact', 'Contact'],
  ];

  const engineeringLinks = [
  'Bihar',
  'Delhi NCR',
  'Rajasthan',
  'Bangalore',
  'Tamil Nadu',
  'West Bengal',
  'Uttarakhand',
  'Odisha',
  'Punjab',
  'Haryana',
  'Madhya Pradesh'
].map(name => [name, '/not']);

const medicalLinks = [
  'AIIMS in India',
  'MBBS in Bihar',
  'MBBS in Uttar Pradesh',
  'MBBS in Uttarakhand',
  'MBBS in Rajasthan',
  'MBBS in Madhya Pradesh',
  'MBBS in Haryana',
  'MBBS in Telangana',
  'MBBS in Karnataka',
  'MBBS in Tamil Nadu',
  'MBBS in Chhattisgarh',
  'MBBS in West Bengal',
  'Deemed Universities for MBBS'
].map(name => [name, '/not']);


  const socialLinks = [
    { Icon: FaFacebookF, url: 'https://www.facebook.com/everydetaileducation', hover: 'hover:bg-[#1877F2]' },
    { Icon: FaInstagram, url: 'https://www.instagram.com/everydetaileducation?igsh=MXZuZnV1MWpjYnc5bw==', hover: 'hover:bg-gradient-to-br hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white' },
    { Icon: FaTelegramPlane, url: 'https://t.me/everydetaileducationofficial', hover: 'hover:bg-[#0088cc]' },
    { Icon: FaLinkedinIn, url: 'https://linkedin.com/in/YourProfile', hover: 'hover:bg-[#0077B5]' },
    { Icon: FaYoutube, url: 'http://www.youtube.com/@everydetaileducation', hover: 'hover:bg-[#FF0000]' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#e6f4f1] via-[#ecf7fb] to-[#fdf8ee] text-slate-800 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 py-20 font-[Inter]">
      
      {/* Background Shape Effects */}
      <div className="absolute -top-32 -left-24 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      {/* Grid Wrapper */}
      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-10 text-[16px] leading-relaxed">

        {/* Social Links */}
        <div className="flex flex-col space-y-12 max-w-xs">
          <section>
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-700 to-sky-600 text-transparent bg-clip-text mb-5">Stay Connected</h3>
            <p className="text-slate-600 mb-6 text-base">Follow us on our social channels</p>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map(({ Icon, url, hover }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white rounded-full shadow transition transform hover:scale-110 text-emerald-700 ${hover}`}
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </section>

          {/* Office */}
          <section>
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-700 to-sky-600 text-transparent bg-clip-text">Our Office</h3>
            <div className="flex items-start gap-4 text-slate-600 mt-4">
              <FaMapMarkerAlt className="mt-1 text-emerald-600 flex-shrink-0" />
              <address className="not-italic leading-relaxed">
                Kabir Market, Near HDFC Bank, P&amp;M Mall, Kurji Patna-10
              </address>
            </div>
            <motion.div
              className="mt-6 rounded-xl overflow-hidden shadow-lg border border-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Office Location"
              />
            </motion.div>
          </section>
        </div>

        {/* Contact */}
        <section className="flex flex-col max-w-xs space-y-4">
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-700 to-sky-600 text-transparent bg-clip-text">Get In Touch</h3>
          <div className="text-slate-600 text-base flex flex-col space-y-2">
            <a href="mailto:everydetailpatna@gmail.com" className="hover:underline hover:text-emerald-700 transition">everydetailpatna@gmail.com</a>
            {phoneNumbers.map((num) => (
              <a key={num} href={`tel:+91${num}`} className="hover:underline hover:text-emerald-700 transition break-words">
                +91 {num}
              </a>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <nav className="flex flex-col max-w-xs space-y-4" aria-label="Quick links">
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-700 to-sky-600 text-transparent bg-clip-text">Quick Links</h3>
          <ul className="space-y-2 text-slate-700">
            {quickLinks.map(([icon, href, label]) => (
              <li key={label}>
                <a href={href} className="flex items-center gap-2 p-1 rounded hover:bg-emerald-50 hover:text-emerald-700 transition">
                  <span className="text-emerald-600">{icon}</span> {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Engineering Colleges */}
        <section className="max-w-xs">
          <h4 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-sky-600 text-transparent bg-clip-text flex items-center gap-3 mb-5">
            <FaSchool className="text-emerald-600" /> Top Engineering Colleges
          </h4>
          <ul className="space-y-2">
            {engineeringLinks.map(([name, link]) => (
              <li key={name}>
                <a href={link} className="flex items-center gap-3 hover:text-emerald-700 transition">
                  <FaSchool className="text-emerald-600" /> {name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Medical Colleges */}
        <section className="max-w-xs">
          <h4 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-sky-600 text-transparent bg-clip-text flex items-center gap-3 mb-5">
            <FaHospitalAlt className="text-emerald-600" /> Top Medical Colleges
          </h4>
          <ul className="space-y-2">
            {medicalLinks.map(([name, link]) => (
              <li key={name}>
                <a href={link} className="flex items-center gap-3 hover:text-emerald-700 transition">
                  <FaHospitalAlt className="text-emerald-600" /> {name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Divider */}
      <hr className="my-12 border-gray-300 max-w-[1400px] mx-auto" />

      {/* Bottom Bar */}
      <div className="text-center text-base sm:text-lg text-slate-500">
        © 2022-2025 <span className="font-semibold text-emerald-700">Every Detail Educations</span>. All Rights Reserved.
        <br className="sm:hidden" />
        Design & Developed By: <span className="font-medium text-slate-700">WebDevSoft Software Patna</span> |{' '}
        <a href="/privacy-policy" className="hover:underline hover:text-emerald-700">Privacy Policy</a> |{' '}
        <a href="/terms" className="hover:underline hover:text-emerald-700">Terms & Conditions</a>
      </div>
    </footer>
  );
}
