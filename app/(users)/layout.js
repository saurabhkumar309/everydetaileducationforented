import "./../globals.css";
import Navigation from "@/app/(users)/components/navigation";
import Footer from "@/app/(users)/components/footer";
import { Poppins, Inter } from "next/font/google";
import Head from "next/head";
// Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

// SEO Metadata without Twitter section
export const metadata = {
  title: "Every Detail Education | Expert Counseling & Admissions Support",
  description:
    "Get expert counseling & admission support for top colleges in India & abroad. Your path to success starts here.",
  keywords:
    "education counseling, college admission, career guidance, student credit card, virtual counseling",
  author: "Every Detail Education",
  icons: {
    icon: "/logos.png", // ✅ Ensure this file exists in /public folder
  },
  openGraph: {
    title: "Every Detail Education | Expert Counseling & Admissions Support",
    description:
      "Get expert counseling & admission support for top colleges in India & abroad. Your path to success starts here.",
    url: "https://everydetaileducation.com",
    siteName: "Every Detail Education",
    images: [
      {
        url: "/logos.png",
        width: 1200,
        height: 630,
        alt: "Every Detail Education",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <Head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://everydetaileducation.com" />

        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Every Detail Education",
              url: "https://everydetaileducation.com",
              logo: "https://everydetaileducation.com/logos.png",
              description:
                "Expert counseling and admission support for top colleges in India and abroad.",
              sameAs: [
                "https://www.facebook.com/yourprofile",
                "https://www.linkedin.com/company/yourprofile",
              ],
            }),
          }}
        />
      </Head>
      <body className="font-inter bg-white text-gray-800">
        <Navigation />
        <main>{children}</main>
       
        <Footer />
      </body>
    </html>
  );
}
