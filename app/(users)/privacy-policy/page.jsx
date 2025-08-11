'use client'

import { motion } from 'framer-motion'

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gradient-to-br from-[#e0f2fe] via-white to-[#ffe4e6] min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10"
        >
          Privacy <span className="text-pink-600">Policy</span>
        </motion.h1>

        <div className="bg-white p-6 rounded-xl shadow-md space-y-6 text-gray-700 text-sm sm:text-base">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Introduction</h2>
            <p>
              Every Detail Education is committed to protecting your privacy. This Privacy Policy outlines how we collect,
              use, and protect your personal information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Personal details like name, phone number, and email address</li>
              <li>Usage data such as IP address, browser type, and interaction on the site</li>
              <li>Information shared via contact forms or enquiry submissions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide personalized counselling services</li>
              <li>To improve our website and offerings</li>
              <li>To respond to enquiries and follow up with assistance</li>
              <li>For internal analysis and marketing (with consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Data Security</h2>
            <p>
              We use secure methods to store and protect your information. We do not sell or rent your personal data to
              third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Cookies</h2>
            <p>
              Our website may use cookies to enhance your experience. You can disable cookies in your browser settings if
              you prefer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Third-Party Links</h2>
            <p>
              Our site may contain links to external websites. We are not responsible for the privacy practices or content
              of such sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy as needed. Please check this page regularly to stay informed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Contact Us</h2>
            <p>
              If you have any questions about our Privacy Policy, feel free to <a href="/contact" className="text-pink-600 underline">contact us</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
