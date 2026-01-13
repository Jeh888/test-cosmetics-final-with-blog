import Link from 'next/link';
import { services } from '@/data/services';
import { getBoroughs } from '@/data/locations';

export default function Footer() {
  const boroughs = getBoroughs();
  const featuredBoroughs = boroughs.slice(0, 6);
  const featuredServices = services.slice(0, 6);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Address */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="font-display text-xl font-bold text-white">
                CosmeticTreatments<span className="text-primary-400">.london</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Compare top-rated cosmetic treatment providers across London. Get free quotes from verified practitioners.
            </p>
            
            {/* Physical Address */}
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white mb-2">Our Office</p>
              <address className="not-italic">
                <p>Cosmetic Treatment</p>
                <p>Devonshire House</p>
                <p>582 Honeypot Lane</p>
                <p>Stanmore</p>
                <p>HA7 4WU</p>
              </address>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="font-semibold text-white mb-4">Popular Treatments</h3>
            <ul className="space-y-2">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/${service.slug}`}
                    className="text-gray-400 hover:text-primary-400 transition text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/treatments"
                  className="text-primary-400 hover:text-primary-300 transition text-sm font-semibold"
                >
                  View All Treatments →
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-semibold text-white mb-4">London Boroughs</h3>
            <ul className="space-y-2">
              {featuredBoroughs.map((borough) => (
                <li key={borough.slug}>
                  <Link 
                    href={`/locations/${borough.slug}`}
                    className="text-gray-400 hover:text-primary-400 transition text-sm"
                  >
                    {borough.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/locations"
                  className="text-primary-400 hover:text-primary-300 transition text-sm font-semibold"
                >
                  View All 100+ Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary-400 transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-400 hover:text-primary-400 transition text-sm">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-primary-400 transition text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary-400 transition text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/free-quote" className="text-gray-400 hover:text-primary-400 transition text-sm">
                  Get Free Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} CosmeticTreatments.london. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-400">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
