'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState({})

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleDropdown = (name) => {
    setOpenMobileDropdown((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  return (
    <header className="bg-white shadow-md fixed w-full z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo + Tagline */}
          <Link href="/" className="flex items-center space-x-4">
            <Image src="/logos.png" alt="logo" width={90} height={90} className="object-contain" />
            <div className="leading-tight text-gray-900">
              <p className="text-base font-extrabold text-blue-700 tracking-wide">EVERY DETAIL EDUCATION</p>
              <p className="text-sm text-gray-600 font-medium">A place for all your queries</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-semibold text-gray-700 tracking-wide">
            <li>
              <Link
                href="/"
                className="relative group hover:text-pink-600 transition-colors duration-300 font-semibold"
              >
                Home
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="relative group hover:text-pink-600 transition-colors duration-300 font-semibold"
              >
                About Us
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </li>

            <li className="group relative cursor-pointer font-semibold">
              <span className="flex items-center hover:text-pink-600 transition-colors duration-300 select-none">
                Services <ChevronDown className="ml-1" size={18} />
              </span>
              <ul className="absolute left-0 mt-2 bg-white shadow-2xl rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 min-w-[240px] z-50 border border-gray-200">
                <li>
                  <a
                    href="/services"
                    className="block px-6 py-3 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200 rounded-t-lg"
                  >
                    University/College Selection
                  </a>
                </li>
                <li>
                  <a
                    href="/creditcard"
                    className="block px-6 py-3 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200"
                  >
                    Student Credit Card
                  </a>
                </li>
                <li className="relative group/sub">
                  <span className="flex justify-between px-6 py-3 hover:bg-pink-50 cursor-pointer transition-colors duration-200 rounded-b-lg items-center">
                    Overview <ChevronRight size={16} />
                  </span>
                  <ul className="absolute top-0 left-full mt-0 ml-1 bg-white shadow-2xl rounded-lg opacity-0 group-hover/sub:opacity-100 pointer-events-none group-hover/sub:pointer-events-auto transition-all duration-300 min-w-[220px] z-60 border border-gray-200">
                    <li>
                      <a
                        href="/career"
                        className="block px-5 py-2 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200 rounded-t-md"
                      >
                        Career Counselling
                      </a>
                    </li>
                    <li>
                      <a
                        href="/admission"
                        className="block px-5 py-2 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200"
                      >
                        Admission Guidance
                      </a>
                    </li>
                    <li>
                      <a
                        href="/virtual"
                        className="block px-5 py-2 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200 rounded-b-md"
                      >
                        Virtual Counselling
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* <li><Link href="/gallery" className="hover:text-pink-600">Gallery</Link></li> */}

            <li>
              <Link
                href="/blog"
                className="relative group hover:text-pink-600 transition-colors duration-300 font-semibold"
              >
                Blog
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="relative group hover:text-pink-600 transition-colors duration-300 font-semibold"
              >
                Contact
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 py-5 space-y-3 text-gray-800 text-base font-semibold bg-white shadow-lg rounded-lg border border-gray-200 animate-slide-down">
            <Link href="/" className="block px-6 py-3 rounded hover:bg-pink-50 transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="block px-6 py-3 rounded hover:bg-pink-50 transition-colors duration-200">
              About Us
            </Link>

            <div className="px-6">
              <button
                onClick={() => toggleDropdown('services')}
                className="w-full text-left py-3 font-semibold flex justify-between items-center rounded hover:bg-pink-50 transition-colors duration-200"
              >
                Services {openMobileDropdown['services'] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
              </button>
              {openMobileDropdown['services'] && (
                <div className="pl-5 mt-2 space-y-1 border-l-2 border-pink-300">
                  <a href="/services" className="block py-2 hover:text-pink-600 transition-colors duration-200">
                    University/College Selection
                  </a>
                  <a href="/creditcard" className="block py-2 hover:text-pink-600 transition-colors duration-200">
                    Student Credit Card
                  </a>

                  <button
                    onClick={() => toggleDropdown('overview')}
                    className="w-full text-left font-medium flex justify-between items-center py-2 rounded hover:bg-pink-50 transition-colors duration-200"
                  >
                    Overview {openMobileDropdown['overview'] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </button>
                  {openMobileDropdown['overview'] && (
                    <div className="pl-5 mt-1 space-y-1 border-l-2 border-pink-200">
                      <a href="/career" className="block py-1 hover:text-pink-600 transition-colors duration-200">
                        Career Counselling
                      </a>
                      <a href="/admission" className="block py-1 hover:text-pink-600 transition-colors duration-200">
                        Admission Guidance
                      </a>
                      <a href="/virtual" className="block py-1 hover:text-pink-600 transition-colors duration-200">
                        Virtual Counselling
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* <Link href="/gallery" className="block px-6 py-3 rounded hover:bg-pink-50 transition-colors duration-200">Gallery</Link> */}
            <Link href="/blog" className="block px-6 py-3 rounded hover:bg-pink-50 transition-colors duration-200">
              Blog
            </Link>
            <Link href="/contact" className="block px-6 py-3 rounded hover:bg-pink-50 transition-colors duration-200">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
