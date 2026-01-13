import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { services } from '@/data/services';

export const metadata = {
  title: 'Aesthetic Treatments London | Compare All Treatments | Free Quotes',
  description: 'Browse all aesthetic treatments available in London. Compare Botox, dermal fillers, lip fillers, skin treatments, and more. Get free quotes from verified providers.',
};

export default function TreatmentsPage() {
  const injectables = services.filter(s => s.category === 'injectables');
  const skinTreatments = services.filter(s => s.category === 'skin');
  const bodyTreatments = services.filter(s => s.category === 'body');
  const hairTreatments = services.filter(s => s.category === 'hair');

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-16">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2069')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="text-gray-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Treatments</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Aesthetic Treatments
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Compare verified providers for all aesthetic treatments across London. Get free quotes and find the right practitioner for your needs.
          </p>
        </div>
      </section>

      {/* Injectable Treatments */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Injectable Treatments</h2>
          <p className="text-gray-600 mb-8">Anti-wrinkle injections and dermal fillers to enhance and rejuvenate your appearance.</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {injectables.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-200 transition"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {service.shortDescription}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-600 font-medium text-sm">{service.priceRange}</span>
                  <span className="text-sm text-gray-500">{service.timeline}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skin Treatments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Skin Treatments</h2>
          <p className="text-gray-600 mb-8">Professional skin rejuvenation treatments to improve texture, tone, and radiance.</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skinTreatments.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-200 transition"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {service.shortDescription}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-600 font-medium text-sm">{service.priceRange}</span>
                  <span className="text-sm text-gray-500">{service.timeline}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Body Treatments */}
      {bodyTreatments.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Body Treatments</h2>
            <p className="text-gray-600 mb-8">Non-surgical body contouring and hair removal treatments.</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {bodyTreatments.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-200 transition"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-600 font-medium text-sm">{service.priceRange}</span>
                    <span className="text-sm text-gray-500">{service.timeline}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hair Treatments */}
      {hairTreatments.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Hair Restoration</h2>
            <p className="text-gray-600 mb-8">Surgical and non-surgical solutions for hair loss and thinning.</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hairTreatments.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-200 transition"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-600 font-medium text-sm">{service.priceRange}</span>
                    <span className="text-sm text-gray-500">{service.timeline}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Not Sure Which Treatment Is Right for You?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get free advice from verified providers. Describe your goals and receive personalised recommendations.
          </p>
          <Link
            href="/free-quote"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition text-lg"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
