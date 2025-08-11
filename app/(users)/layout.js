import "./../globals.css";
import Navigation from "@/app/(users)/components/navigation";

import Footer from "@/app/(users)/components/Footer";
import { Poppins, Inter } from "next/font/google";
// import { icons } from "lucide-react";

export const metadata = {
title: "Every Detail Education - Your Path to Success",
description: "Expert counseling and admission support for top colleges in India and abroad.",
keywords: "education, counseling, admission, college selection, student credit card, career counseling, virtual counseling",
author: "Every Detail Education",
icons: {
  icon: "/public/logos.png",
},
};

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


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-inter bg-white text-gray-800">
        <Navigation />
   
        <main>{children}    </main>
        <Footer />
      </body>
    </html>
  );
}
