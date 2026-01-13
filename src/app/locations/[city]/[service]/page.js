import Link from 'next/link';
import { notFound } from 'next/navigation';
import LeadForm from '@/components/LeadForm';
import FAQAccordion from '@/components/FAQAccordion';
import { getAllLocations, getLocationBySlug, getAllLocationSlugs } from '@/data/locations';
import { services, getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { getFaqsByTreatment } from '@/data/faqs';
import { 
  generatePageContent, 
  generateTreatmentContext,
  generateWhyLocalContent,
  generateMetaDescription 
} from '@/data/contentGenerator';

export async function generateStaticParams() {
  const locationSlugs = getAllLocationSlugs();
  const serviceSlugs = getAllServiceSlugs();
  
  const params = [];
  locationSlugs.forEach(city => {
    serviceSlugs.forEach(service => {
      params.push({ city, service });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }) {
  const location = getLocationBySlug(params.city);
  const service = getServiceBySlug(params.service);
  
  if (!location || !service) return {};

  const description = generateMetaDescription(location, service);

  return {
    title: `${service.name} in ${location.name} | Compare ${location.borough} Providers | Free Quotes`,
    description: description,
  };
}

export default function CityServicePage({ params }) {
  const location = getLocationBySlug(params.city);
  const service = getServiceBySlug(params.service);
  
  if (!location || !service) {
    notFound();
  }

  const faqs = getFaqsByTreatment(service.slug) || [];
  const otherServices = services.filter(s => s.slug !== service.slug).slice(0, 6);
  const nearbyLocations = location.nearbyAreas
    .map(name => getAllLocations().find(l => l.name === name))
    .filter(Boolean)
    .slice(0, 6);

  // Generate unique content for this location-service combination
  const mainContent = generatePageContent(location, service);
  const treatmentContext = generateTreatmentContext(location, service);
  const whyLocalContent = generateWhyLocalContent(location, service);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumbs */}
              <nav className="text-primary-200 text-sm mb-4 flex flex-wrap items-center gap-2">
                <Link href="/" className="hover:text-white">Home</Link>
                <span>→</span>
                <Link href="/locations" className="hover:text-white">Locations</Link>
                <span>→</span>
                <Link href={`/locations/${location.slug}`} className="hover:text-white">{location.name}</Link>
                <span>→</span>
                <span>{service.name}</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                {service.name} in {location.name}
              </h1>
              <p className="text-xl text-primary-100 mb-6">
                Compare verified {service.name.toLowerCase()} providers in {location.name} and the {location.borough} area. Get free quotes from qualified practitioners and find the best option for your needs and budget.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-primary-200 text-sm">Price Range</span>
                  <div className="font-semibold">{service.priceRange}</div>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-primary-200 text-sm">Timeline</span>
                  <div className="font-semibold">{service.timeline}</div>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-primary-200 text-sm">Area</span>
                  <div className="font-semibold">{location.borough}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <span className="text-green-400">✓ Verified {location.name} providers</span>
                <span className="text-green-400">✓ Free quotes</span>
                <span className="text-green-400">✓ No obligation</span>
              </div>
            </div>

            <div>
              <LeadForm 
                preselectedService={service.slug}
                preselectedLocation={location.slug}
                variant="hero"
                title={`Get ${service.name} Quotes`}
                subtitle={`Compare providers in ${location.name}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Unique Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {service.name} in {location.name}: What You Need to Know
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>{mainContent}</p>
          </div>
        </div>
      </section>

      {/* Benefits & Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.name} Benefits
              </h3>
              <div className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What's Typically Included
              </h3>
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-primary-500 mt-1">•</span>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info Card */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              About {location.name}
            </h3>
            <p className="text-gray-600 mb-4">
              {location.description}
            </p>
            <p className="text-gray-600 mb-6">
              {location.businessContext}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Borough:</span>
                <span className="ml-2 font-medium text-gray-900">{location.borough}</span>
              </div>
              <div>
                <span className="text-gray-500">Region:</span>
                <span className="ml-2 font-medium text-gray-900">{location.region}</span>
              </div>
              <div>
                <span className="text-gray-500">Population:</span>
                <span className="ml-2 font-medium text-gray-900">{location.population}</span>
              </div>
              <div>
                <span className="text-gray-500">Key landmarks:</span>
                <span className="ml-2 font-medium text-gray-900">{location.landmarks.slice(0, 2).join(', ')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Choose a {service.name} Provider in {location.name}?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>{whyLocalContent}</p>
            <p>
              {location.name}'s position within {location.borough} provides excellent accessibility for cosmetic treatment appointments. Whether you're a local resident or travelling from nearby {location.nearbyAreas.slice(0, 2).join(' or ')}, you'll find providers who understand the needs and expectations of {location.region} clients. The local market offers options across different price points and specialisms, allowing you to find practitioners whose approach matches your requirements.
            </p>
            <p>
              By comparing multiple {service.name.toLowerCase()} providers in {location.name}, you ensure competitive pricing without sacrificing quality. Each provider in the network has been verified for their qualifications, registrations, and insurance, giving you confidence in whoever you choose. The free quote process allows you to understand exactly what's included before committing to any treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      {nearbyLocations.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {service.name} in Nearby Areas
            </h2>
            <p className="text-gray-600 mb-6">
              Providers serving {location.name} often also cover these nearby areas. Compare {service.name.toLowerCase()} quotes in surrounding locations.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {nearbyLocations.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/locations/${nearby.slug}/${service.slug}`}
                  className="bg-white rounded-lg p-4 border border-gray-200 hover:border-primary-300 hover:shadow-md transition"
                >
                  <span className="font-medium text-gray-900 hover:text-primary-600">
                    {service.name} in {nearby.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {service.name} FAQs
            </h2>
            <FAQAccordion faqs={faqs.slice(0, 5)} />
          </div>
        </section>
      )}

      {/* Other Services in Location */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Other Treatments in {location.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/locations/${location.slug}/${s.slug}`}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:border-primary-300 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-900 mb-1">{s.name}</h3>
                <p className="text-sm text-gray-500">{s.priceRange}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href={`/locations/${location.slug}`}
              className="text-primary-600 font-semibold hover:text-primary-700 transition"
            >
              View All Treatments in {location.name} →
            </Link>
          </div>
        </div>
      </section>

      {/* Same Service in Other Locations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {service.name} in Other London Areas
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {getAllLocations()
              .filter(l => l.isBorough && l.slug !== location.slug)
              .slice(0, 8)
              .map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}/${service.slug}`}
                  className="bg-white rounded-lg p-4 border border-gray-200 hover:border-primary-300 hover:shadow-md transition"
                >
                  <span className="font-medium text-gray-900 hover:text-primary-600">
                    {service.name} in {loc.name}
                  </span>
                </Link>
              ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href={`/${service.slug}`}
              className="text-primary-600 font-semibold hover:text-primary-700 transition"
            >
              View All {service.name} Locations →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Find {service.name} Providers in {location.name}
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Compare verified providers and get free quotes within 24 hours. No obligation.
          </p>
          <Link
            href="/free-quote"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Get Free Quotes →
          </Link>
        </div>
      </section>
    </>
  );
}
