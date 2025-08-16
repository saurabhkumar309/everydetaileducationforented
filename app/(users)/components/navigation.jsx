'use client'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null) // Track which desktop dropdown is open
  const [openMobileDropdown, setOpenMobileDropdown] = useState({})
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const dropdownRef = useRef(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  // For desktop dropdown toggle
  const toggleDropdown = (name) => {
    setDropdownOpen(dropdownOpen === name ? null : name)
  }

  // For mobile dropdown toggle
  const toggleMobileDropdown = (name) => {
    setOpenMobileDropdown((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  // Hide navbar on scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
      setLastScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className={`bg-white shadow-md fixed w-full z-50 border-b border-gray-200 transition-transform duration-300 
      ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/logos.png"
              alt="logo"
              width={92}
              height={92}
              className="object-contain"
            />
            <div className="leading-tight text-gray-900">
              <p className="text-lg md:text-xl font-extrabold text-blue-700 tracking-wide">
                EVERY DETAIL EDUCATION
              </p>
              <p className="text-sm md:text-base text-gray-600 font-medium">
                A place for all your queries
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul
            className="hidden md:flex space-x-10 lg:space-x-12 font-semibold text-gray-800 tracking-wide text-[16px] lg:text-[17px]"
            ref={dropdownRef}
          >
            <li>
              <Link
                href="/"
                className="relative group hover:text-pink-600 transition-colors duration-300"
              >
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-pink-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="relative group hover:text-pink-600 transition-colors duration-300"
              >
                About Us
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-pink-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>

            {/* Services Dropdown (Click) */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center hover:text-pink-600 transition-colors duration-300"
              >
                Services <ChevronDown className="ml-1" size={20} />
              </button>
              {dropdownOpen === 'services' && (
                <ul className="absolute left-0 mt-3 bg-white shadow-2xl rounded-lg border border-gray-200 min-w-[260px] z-50 py-2">
                  <li>
                    <Link
                      href="/services"
                      className="block px-6 py-3 text-[15px] hover:bg-pink-50 hover:text-pink-600 transition"
                    >
                      University/College Selection
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/creditcard"
                      className="block px-6 py-3 text-[15px] hover:bg-pink-50 hover:text-pink-600 transition"
                    >
                      Student Credit Card
                    </Link>
                  </li>
                  <li className="relative">
                    <button
                      onClick={() => toggleDropdown('overview')}
                      className="w-full text-left flex justify-between items-center px-6 py-3 text-[15px] hover:bg-pink-50 transition"
                    >
                      Overview <ChevronRight size={16} />
                    </button>
                    {dropdownOpen === 'overview' && (
                      <ul className="absolute top-0 left-full bg-white shadow-2xl rounded-lg border min-w-[220px] py-2">
                        <li>
                          <Link
                            href="/career"
                            className="block px-5 py-2 hover:bg-pink-50 hover:text-pink-600 transition"
                          >
                            Career Counselling
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/admission"
                            className="block px-5 py-2 hover:bg-pink-50 hover:text-pink-600 transition"
                          >
                            Admission Guidance
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/virtual"
                            className="block px-5 py-2 hover:bg-pink-50 hover:text-pink-600 transition"
                          >
                            Virtual Counselling
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            {/* Engineering Dropdown */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown('engineering')}
                className="flex items-center hover:text-pink-600 transition-colors duration-300"
              >
                Engineering <ChevronDown className="ml-1" size={20} />
              </button>
              {dropdownOpen === 'engineering' && (
                <ul className="absolute left-0 mt-3 bg-white shadow-2xl rounded-lg border border-gray-200 min-w-[240px] z-50 py-2">
                  <li>
                    <Link
                      href="/exams"
                      className="block px-6 py-3 text-[15px] hover:bg-pink-50 hover:text-pink-600 transition"
                    >
                      Exams
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Streams"
                      className="block px-6 py-3 text-[15px] hover:bg-pink-50 hover:text-pink-600 transition"
                    >
                      Streams
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/colleges"
                      className="block px-6 py-3 text-[15px] hover:bg-pink-50 hover:text-pink-600 transition"
                    >
                      Colleges
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/blog"
                className="relative group hover:text-pink-600 transition-colors duration-300"
              >
                Blog
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-pink-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="relative group hover:text-pink-600 transition-colors duration-300"
              >
                Contact
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-pink-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 py-6 space-y-3 text-gray-800 text-lg font-semibold bg-white shadow-2xl rounded-lg border border-gray-200 animate-slide-down">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-6 py-3 rounded hover:bg-pink-50">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-6 py-3 rounded hover:bg-pink-50">About Us</Link>

            {/* Services Mobile */}
            <div className="px-6">
              <button
                onClick={() => toggleMobileDropdown('services')}
                className="w-full py-3 flex justify-between items-center hover:bg-pink-50"
              >
                Services {openMobileDropdown['services'] ? <ChevronDown /> : <ChevronRight />}
              </button>
              {openMobileDropdown['services'] && (
                <div className="pl-5 mt-2 border-l-2 border-pink-300 space-y-2">
                  <Link href="/services" className="block py-2 text-base">University/College Selection</Link>
                  <Link href="/creditcard" className="block py-2 text-base">Student Credit Card</Link>
                  <button
                    onClick={() => toggleMobileDropdown('overview')}
                    className="w-full py-2 flex justify-between text-base"
                  >
                    Overview {openMobileDropdown['overview'] ? <ChevronDown /> : <ChevronRight />}
                  </button>
                  {openMobileDropdown['overview'] && (
                    <div className="pl-5 border-l-2 border-pink-200 space-y-1">
                      <Link href="/career" className="block py-1 text-base">Career Counselling</Link>
                      <Link href="/admission" className="block py-1 text-base">Admission Guidance</Link>
                      <Link href="/virtual" className="block py-1 text-base">Virtual Counselling</Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Engineering Mobile */}
            <div className="px-6">
              <button
                onClick={() => toggleMobileDropdown('engineering')}
                className="w-full py-3 flex justify-between items-center hover:bg-pink-50"
              >
                Engineering {openMobileDropdown['engineering'] ? <ChevronDown /> : <ChevronRight />}
              </button>
              {openMobileDropdown['engineering'] && (
                <div className="pl-5 mt-2 border-l-2 border-pink-300 space-y-2">
                  <Link href="/exams" className="block py-2 text-base">Exams</Link>
                  <Link href="/Streams" className="block py-2 text-base">Streams</Link>
                  <Link href="/colleges" className="block py-2 text-base">Colleges</Link>
                </div>
              )}
            </div>

            <Link href="/blog" onClick={() => setIsOpen(false)} className="block px-6 py-3 rounded hover:bg-pink-50">Blog</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-6 py-3 rounded hover:bg-pink-50">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
