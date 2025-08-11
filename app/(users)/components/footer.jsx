'use client';

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSchool,
  FaHospitalAlt,
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
    ['🏠 Home Page', '/'],
    ['ℹ️ About Us', '/about'],
    ['📚 Our Services', '/services'],
    ['🏆 Our Achievements', '/achievements'],
    ['🎓 Top Colleges Courses', '/top-colleges'],
    ['🛠 Engineering Colleges', '/engineering-colleges'],
    ['🏥 Medical Colleges', '/medical-colleges'],
    ['📈 Management Colleges', '/management-colleges'],
    ['⚖️ Law Colleges', '/law-colleges'],
  ];

  const engineeringLinks = [
    ['Bihar', '/engineering-colleges/bihar'],
    ['Delhi NCR', '/engineering-colleges/delhi-ncr'],
    ['Rajasthan', '/engineering-colleges/rajasthan'],
    ['Bangalore', '/engineering-colleges/bangalore'],
    ['Tamil Nadu', '/engineering-colleges/tamil-nadu'],
    ['West Bengal', '/engineering-colleges/west-bengal'],
    ['Uttarakhand', '/engineering-colleges/uttarakhand'],
    ['Odisha', '/engineering-colleges/odisha'],
    ['Punjab', '/engineering-colleges/punjab'],
    ['Haryana', '/engineering-colleges/haryana'],
    ['Madhya Pradesh', '/engineering-colleges/madhya-pradesh'],
  ];

  const medicalLinks = [
    ['AIIMS in India', '/medical-colleges/aiims'],
    ['MBBS in Bihar', '/medical-colleges/bihar'],
    ['MBBS in Uttar Pradesh', '/medical-colleges/uttar-pradesh'],
    ['MBBS in Uttarakhand', '/medical-colleges/uttarakhand'],
    ['MBBS in Rajasthan', '/medical-colleges/rajasthan'],
    ['MBBS in Madhya Pradesh', '/medical-colleges/madhya-pradesh'],
    ['MBBS in Haryana', '/medical-colleges/haryana'],
    ['MBBS in Telangana', '/medical-colleges/telangana'],
    ['MBBS in Karnataka', '/medical-colleges/karnataka'],
    ['MBBS in Tamil Nadu', '/medical-colleges/tamil-nadu'],
    ['MBBS in Chhattisgarh', '/medical-colleges/chhattisgarh'],
    ['MBBS in West Bengal', '/medical-colleges/west-bengal'],
    ['Deemed Universities for MBBS', '/medical-colleges/deemed-university'],
  ];

  return (
    <footer
      className="relative bg-gradient-to-br from-[#e6f4f1] via-[#ecf7fb] to-[#fdf8ee] text-slate-800 px-8 sm:px-12 md:px-20 lg:px-32 xl:px-48 py-20 font-[Inter]"
      aria-label="Site Footer"
    >
      {/* Background Effects */}
      <div className="absolute -top-32 -left-24 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      {/* Top Footer Grid with 5 columns on large screens */}
      <div className="relative z-10 max-w-[1400px] mx-auto 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-10 text-[16px] leading-relaxed break-words">

        {/* First column with two stacked sections */}
        <div className="flex flex-col space-y-12 max-w-xs">
          {/* Stay Connected */}
          <section aria-labelledby="footer-social-heading">
            <h3
              id="footer-social-heading"
              className="text-3xl font-extrabold bg-gradient-to-r from-emerald-700 to-sky-600 bg-clip-text text-transparent font-[Poppins] tracking-wide mb-5"
            >
              Stay Connected
            </h3>
            <p className="text-slate-600 mb-6 text-base">
              Follow us on our social channels
            </p>
            <div className="flex gap-4 flex-wrap">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    aria-label={Icon.displayName || 'Social link'}
                    className="p-3 bg-white rounded-full shadow hover:bg-opacity-80 text-emerald-700 transition transform hover:scale-110"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon className="text-xl" />
                  </a>
                )
              )}
            </div>
          </section>

          {/* Our Office */}
          <section aria-labelledby="footer-office-heading">
            <h3
              id="footer-office-heading"
              className="text-3xl font-extrabold bg-gradient-to-r from-emerald-700 to-sky-600 bg-clip-text text-transparent font-[Poppins] tracking-wide"
            >
              Our Office
            </h3>
            <div className="flex items-start gap-4 text-slate-600 text-base">
              <FaMapMarkerAlt
                className="mt-1 text-emerald-600 flex-shrink-0"
                aria-hidden="true"
              />
              <address className="not-italic leading-relaxed">
                Kabir Market, Near HDFC Bank, P&amp;M Mall, Kurji Patna-10
              </address>
            </div>

            <motion.div
              className="mt-6 rounded-xl overflow-hidden shadow-xl border border-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.5458671518277!2d85.10671757242552!3d25.635622386014408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6f2a46d2d7706eb7%3A0x299440a7bf4b08f7!2sEvery%20Detail%20Education!5e0!3m2!1sen!2sin!4v1726282304113!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Every Detail Education Office Location"
                aria-label="Google Maps location of Every Detail Education Office"
              />
            </motion.div>
          </section>
        </div>

        {/* CONTACT */}
        <section
          aria-labelledby="footer-contact-heading"
          className="flex flex-col max-w-xs space-y-4"
        >
          <h3
            id="footer-contact-heading"
            className="text-3xl font-extrabold bg-gradient-to-r from-emerald-700 to-sky-600 bg-clip-text text-transparent font-[Poppins] tracking-wide"
          >
            Get In Touch
          </h3>
          <div className="text-slate-600 text-base flex flex-col space-y-2">
            <a
              href="mailto:everydetailpatna@gmail.com"
              className="hover:underline hover:underline-offset-4 hover:text-emerald-700 transition"
            >
              everydetailpatna@gmail.com
            </a>
            {phoneNumbers.map((num) => (
              <a
                key={num}
                href={`tel:+91${num}`}
                className="hover:underline hover:underline-offset-4 hover:text-emerald-700 transition break-words"
              >
                +91 {num}
              </a>
            ))}
          </div>
        </section>

        {/* QUICK LINKS */}
        <nav
          aria-label="Quick links"
          className="flex flex-col max-w-xs space-y-4"
        >
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-700 to-sky-600 bg-clip-text text-transparent font-[Poppins] tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2 text-slate-700 text-base">
            {quickLinks.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:underline hover:underline-offset-4 hover:text-emerald-700 transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Extra Links Section */}
        <section
          aria-labelledby="engineering-colleges-heading"
          className="max-w-xs"
        >
          <h4
            id="engineering-colleges-heading"
            className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-sky-600 bg-clip-text text-transparent font-[Poppins] mb-5 flex items-center gap-3"
          >
            <FaSchool className="text-emerald-600 flex-shrink-0" aria-hidden="true" /> Top Engineering Colleges
          </h4>
          <ul className="space-y-2 text-base text-slate-700">
            {engineeringLinks.map(([name, link]) => (
              <li key={name}>
                <a
                  href={link}
                  className="flex items-center gap-3 hover:underline hover:underline-offset-4 hover:text-emerald-700 transition"
                >
                  <FaSchool
                    className="text-emerald-600 flex-shrink-0"
                    aria-hidden="true"
                  />{' '}
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Medical Colleges */}
        <section
          aria-labelledby="medical-colleges-heading"
          className="max-w-xs"
        >
          <h4
            id="medical-colleges-heading"
            className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-sky-600 bg-clip-text text-transparent font-[Poppins] mb-5 flex items-center gap-3"
          >
            <FaHospitalAlt className="text-emerald-600 flex-shrink-0" aria-hidden="true" /> Top Medical Colleges
          </h4>
          <ul className="space-y-2 text-base text-slate-700">
            {medicalLinks.map(([name, link]) => (
              <li key={name}>
                <a
                  href={link}
                  className="flex items-center gap-3 hover:underline hover:underline-offset-4 hover:text-emerald-700 transition"
                >
                  <FaHospitalAlt
                    className="text-emerald-600 flex-shrink-0"
                    aria-hidden="true"
                  />{' '}
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Divider */}
      <hr className="my-14 border-gray-300 max-w-[1400px] mx-auto" />

      {/* Footer Bottom */}
      <div
        className="text-center text-base sm:text-lg text-slate-500 z-10 relative leading-7 px-6 md:px-0 max-w-[1400px] mx-auto"
        aria-label="Copyright and credits"
      >
        © 2022-2025{' '}
        <span className="font-semibold text-emerald-700">Every Detail Educations</span>. All Rights Reserved.
        <br className="sm:hidden" />
        Design & Developed By:{' '}
        <span className="font-medium text-slate-700">WebDevSoft Software Patna</span> |{' '}
        <a
          href="/privacy-policy"
          className="hover:underline hover:underline-offset-4 hover:text-emerald-700 ml-1"
        >
          Privacy Policy
        </a>{' '}
        |{' '}
        <a
          href="/terms"
          className="hover:underline hover:underline-offset-4 hover:text-emerald-700 ml-1"
        >
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
}
