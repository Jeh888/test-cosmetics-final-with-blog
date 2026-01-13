'use client';

import { useState } from 'react';
import Link from 'next/link';
import { services } from '@/data/services';
import { getBoroughs } from '@/data/locations';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);

  const boroughs = getBoroughs();
  const featuredBoroughs = boroughs.slice(0, 10);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-display text-xl font-bold text-gray-900">
              CosmeticTreatments<span className="text-primary-600">.london</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition">
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-primary-600 transition flex items-center space-x-1">
                <span>Treatments</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-0 pt-2 w-64 z-50">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/${service.slug}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link
                        href="/treatments"
                        className="block px-4 py-2 text-primary-600 font-semibold hover:bg-primary-50 transition"
                      >
                        View All Treatments →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setLocationsDropdownOpen(true)}
              onMouseLeave={() => setLocationsDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-primary-600 transition flex items-center space-x-1">
                <span>Locations</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {locationsDropdownOpen && (
                <div className="absolute left-0 mt-0 pt-2 w-64 z-50">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                    {featuredBoroughs.map((borough) => (
                      <Link
                        key={borough.slug}
                        href={`/locations/${borough.slug}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition"
                      >
                        {borough.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link
                        href="/locations"
                        className="block px-4 py-2 text-primary-600 font-semibold hover:bg-primary-50 transition"
                      >
                        View All 100+ Locations →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition">
              About
            </Link>
            <Link href="/reviews" className="text-gray-700 hover:text-primary-600 transition">
              Reviews
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-primary-600 transition">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition">
              Contact
            </Link>
            <Link
              href="/free-quote"
              className="bg-primary-600 text-white px-5 py-2 rounded-lg hover:bg-primary-700 transition font-semibold"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <Link href="/" className="block py-2 text-gray-700">Home</Link>
            
            <div className="py-2">
              <span className="font-semibold text-gray-900">Treatments</span>
              <div className="pl-4 mt-2 space-y-1">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="block py-1 text-gray-600 text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
                <Link href="/treatments" className="block py-1 text-primary-600 text-sm font-semibold">
                  View All Treatments →
                </Link>
              </div>
            </div>

            <div className="py-2">
              <span className="font-semibold text-gray-900">Locations</span>
              <div className="pl-4 mt-2 space-y-1">
                {featuredBoroughs.slice(0, 5).map((borough) => (
                  <Link
                    key={borough.slug}
                    href={`/locations/${borough.slug}`}
                    className="block py-1 text-gray-600 text-sm"
                  >
                    {borough.name}
                  </Link>
                ))}
                <Link href="/locations" className="block py-1 text-primary-600 text-sm font-semibold">
                  View All Locations →
                </Link>
              </div>
            </div>

            <Link href="/about" className="block py-2 text-gray-700">About</Link>
            <Link href="/reviews" className="block py-2 text-gray-700">Reviews</Link>
            <Link href="/faq" className="block py-2 text-gray-700">FAQ</Link>
            <Link href="/contact" className="block py-2 text-gray-700">Contact</Link>
            
            <Link
              href="/free-quote"
              className="block mt-4 bg-primary-600 text-white px-5 py-3 rounded-lg text-center font-semibold"
            >
              Get Free Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
