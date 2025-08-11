'use client'

import { motion } from 'framer-motion'

export default function TermsPage() {
  return (
    <main className="bg-gradient-to-br from-[#e0f2fe] via-white to-[#ffe4e6] min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10"
        >
          Terms & <span className="text-pink-600">Conditions</span>
        </motion.h1>

        <div className="bg-white p-6 rounded-xl shadow-md space-y-6 text-gray-700 text-sm sm:text-base">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Every Detail Education website, you agree to be bound by these Terms & Conditions and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Services Offered</h2>
            <p>
              We provide educational consulting services including college admissions, career counselling, study abroad guidance, and scholarship support. We reserve the right to change or discontinue any service at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate and complete information when submitting enquiries or forms.</li>
              <li>Use our website for lawful purposes only.</li>
              <li>Respect our intellectual property rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Limitation of Liability</h2>
            <p>
              We strive to provide accurate information, but we do not guarantee the completeness or reliability of any content. We are not liable for any losses or damages arising from your use of our services or content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">5. External Links</h2>
            <p>
              Our website may include links to third-party websites. We are not responsible for the content or practices of these external sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms & Conditions at any time. Continued use of the site following changes implies your acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of the courts in Patna, Bihar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Contact Information</h2>
            <p>
              For questions about these Terms & Conditions, please <a href="/contact" className="text-pink-600 underline">contact us</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
