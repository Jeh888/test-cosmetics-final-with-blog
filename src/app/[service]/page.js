import Link from 'next/link';
import { notFound } from 'next/navigation';
import LeadForm from '@/components/LeadForm';
import FAQAccordion from '@/components/FAQAccordion';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { getBoroughs } from '@/data/locations';
import { getFaqsByTreatment } from '@/data/faqs';

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ service: slug }));
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.service);
  if (!service) return {};

  return {
    title: `${service.name} London | Compare Providers | Free Quotes`,
    description: service.description,
  };
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.service);
  
  if (!service) {
    notFound();
  }

  const boroughs = getBoroughs();
  const faqs = getFaqsByTreatment(service.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white min-h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/85 to-gray-900/40" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="text-gray-300 text-sm mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/treatments" className="hover:text-white">Treatments</Link>
                <span className="mx-2">/</span>
                <span className="text-white">{service.name}</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                {service.name} in London
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {service.description}
              </p>
              
              {/* Info Badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-sm text-gray-400">Price Range</div>
                  <div className="text-lg font-bold text-white">{service.priceRange}</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-sm text-gray-400">Timeline</div>
                  <div className="text-lg font-bold text-white">{service.timeline}</div>
                </div>
              </div>
            </div>

            <div>
              <LeadForm 
                preselectedService={service.slug}
                title={`Get ${service.name} Quotes`}
                subtitle="Top clinics will call you within 2 hours"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Treatment */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About {service.name}
          </h2>
          <p className="text-gray-600 mb-8">
            {service.longDescription}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
              <ul className="space-y-2">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h3>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {service.name} Across London
          </h2>
          <p className="text-gray-600 mb-8">
            Find {service.name.toLowerCase()} providers in your area
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {boroughs.map((borough) => (
              <Link
                key={borough.slug}
                href={`/locations/${borough.slug}/${service.slug}`}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:border-primary-300 hover:shadow-md transition group text-center"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition text-sm">
                  {service.name} in {borough.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {service.name} FAQs
            </h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for {service.name}?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get free quotes from London's top providers
          </p>
          <Link
            href="/free-quote"
            className="inline-block bg-accent-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-accent-600 transition text-lg shadow-lg"
          >
            Get Free Quotes →
          </Link>
        </div>
      </section>
    </>
  );
}
