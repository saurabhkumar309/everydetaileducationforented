'use client'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState({})
  const [showNavbar, setShowNavbar] = useState(true) // NEW
  const [lastScrollY, setLastScrollY] = useState(0)   // NEW

  const toggleMenu = () => setIsOpen(!isOpen)

  const toggleDropdown = (name) => {
    setOpenMobileDropdown((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  // Handle scroll to hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false) // scrolling down
      } else {
        setShowNavbar(true)  // scrolling up
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`bg-white shadow-md fixed w-full z-50 border-b border-gray-200 transition-transform duration-300 
      ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`} // NEW animation
    >
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
              <Link href="/" className="relative group hover:text-pink-600 transition-colors duration-300 font-semibold">
                Home
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="relative group hover:text-pink-600 transition-colors duration-300 font-semibold">
                About Us
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </li>
            {/* Services Dropdown - Desktop */}
            <li
              className="group relative cursor-pointer font-semibold"
              onClick={(e) => e.preventDefault()}
            >
              <span className="flex items-center hover:text-pink-600 transition-colors duration-300 select-none">
                Services <ChevronDown className="ml-1" size={18} />
              </span>
              <ul className="absolute left-0 mt-2 bg-white shadow-2xl rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 min-w-[240px] z-50 border border-gray-200">
                <li>
                  <Link href="/services" className="block px-6 py-3 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200 rounded-t-lg">
                    University/College Selection
                  </Link>
                </li>
                <li>
                  <Link href="/creditcard" className="block px-6 py-3 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">
                    Student Credit Card
                  </Link>
                </li>
                <li className="relative group/sub">
                  <span className="flex justify-between px-6 py-3 hover:bg-pink-50 cursor-pointer transition-colors duration-200 rounded-b-lg items-center">
                    Overview <ChevronRight size={16} />
                  </span>
                  <ul className="absolute top-0 left-full mt-0 ml-1 bg-white shadow-2xl rounded-lg opacity-0 group-hover/sub:opacity-100 pointer-events-none group-hover/sub:pointer-events-auto transition-all duration-300 min-w-[220px] z-60 border border-gray-200">
                    <li>
                      <Link href="/career" className="block px-5 py-2 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200 rounded-t-md">
                        Career Counselling
                      </Link>
                    </li>
                    <li>
                      <Link href="/admission" className="block px-5 py-2 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">
                        Admission Guidance
                      </Link>
                    </li>
                    <li>
                      <Link href="/virtual" className="block px-5 py-2 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200 rounded-b-md">
                        Virtual Counselling
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/blog" className="relative group hover:text-pink-600 transition-colors duration-300 font-semibold">
                Blog
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="relative group hover:text-pink-600 transition-colors duration-300 font-semibold">
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
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-6 py-3 rounded hover:bg-pink-50 transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-6 py-3 rounded hover:bg-pink-50 transition-colors duration-200">
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
                  <a href="/services" onClick={() => setIsOpen(false)} className="block py-2 hover:text-pink-600 transition-colors duration-200">
                    University/College Selection
                  </a>
                  <a href="/creditcard" onClick={() => setIsOpen(false)} className="block py-2 hover:text-pink-600 transition-colors duration-200">
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
                      <a href="/career" onClick={() => setIsOpen(false)} className="block py-1 hover:text-pink-600 transition-colors duration-200">
                        Career Counselling
                      </a>
                      <a href="/admission" onClick={() => setIsOpen(false)} className="block py-1 hover:text-pink-600 transition-colors duration-200">
                        Admission Guidance
                      </a>
                      <a href="/virtual" onClick={() => setIsOpen(false)} className="block py-1 hover:text-pink-600 transition-colors duration-200">
                        Virtual Counselling
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="block px-6 py-3 rounded hover:bg-pink-50 transition-colors duration-200">
              Blog
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-6 py-3 rounded hover:bg-pink-50 transition-colors duration-200">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
