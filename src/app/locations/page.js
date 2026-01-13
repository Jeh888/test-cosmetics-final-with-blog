import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { getAllLocations, getRegions, getLocationsByRegion, getBoroughs } from '@/data/locations';
import { services } from '@/data/services';

export const metadata = {
  title: 'Cosmetic Treatments Locations | All London Areas | Free Quotes',
  description: 'Find aesthetic treatment providers across 100+ London locations. Compare Botox, fillers, skin treatments, and more in your area.',
};

export default function LocationsPage() {
  const regions = getRegions();
  const boroughs = getBoroughs();
  const allLocations = getAllLocations();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Cosmetic Treatments Across London
          </h1>
          <p className="text-xl text-primary-100 mb-8">
            Find verified providers in over 100 locations across all London boroughs
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/10 px-4 py-2 rounded-lg">
              <span className="font-bold text-xl">{allLocations.length}+</span>
              <span className="ml-2">Locations</span>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-lg">
              <span className="font-bold text-xl">{boroughs.length}</span>
              <span className="ml-2">Boroughs</span>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-lg">
              <span className="font-bold text-xl">{services.length}</span>
              <span className="ml-2">Treatments</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Location Matters */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Finding a Local Provider Matters
          </h2>
          <p className="text-gray-600">
            Cosmetic treatments often require multiple appointments – consultations, procedures, and follow-ups. Having a provider close to home or work makes the process more convenient and helps ensure you can attend all necessary appointments.
          </p>
        </div>
      </section>

      {/* Region Navigation */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {regions.map((region) => (
              <a
                key={region}
                href={`#${region.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:border-primary-300 hover:text-primary-600 transition"
              >
                {region}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Locations by Region */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regions.map((region) => {
            const regionLocations = getLocationsByRegion(region);
            
            return (
              <div key={region} id={region.toLowerCase().replace(/\s+/g, '-')} className="mb-16 scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  {region}
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {regionLocations.map((location) => (
                    <Link
                      key={location.slug}
                      href={`/locations/${location.slug}`}
                      className={`bg-white rounded-lg p-4 border hover:border-primary-300 hover:shadow-md transition ${
                        location.isBorough ? 'border-primary-200 bg-primary-50' : 'border-gray-200'
                      }`}
                    >
                      <h3 className="font-semibold text-gray-900">
                        {location.name}
                        {location.isBorough && (
                          <span className="ml-2 text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded">
                            Borough
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{location.borough}</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Available Treatments
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Find providers for all major cosmetic treatments in every London location
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:border-primary-300 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-900">{service.name}</h3>
                <p className="text-sm text-gray-500">{service.priceRange}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Not Sure Where to Start?
              </h2>
              <p className="text-gray-600 mb-6">
                Submit a quote request and get matched with verified providers in your area. Receive up to 3 free quotes within 24 hours.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Free, no-obligation quotes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Verified local providers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Response within 24 hours</span>
                </div>
              </div>
            </div>
            <LeadForm 
              title="Get Local Quotes"
              subtitle="Compare providers in your area"
            />
          </div>
        </div>
      </section>
    </>
  );
}
