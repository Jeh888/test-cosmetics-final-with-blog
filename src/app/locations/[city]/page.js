import Link from 'next/link';
import { notFound } from 'next/navigation';
import LeadForm from '@/components/LeadForm';
import FAQAccordion from '@/components/FAQAccordion';
import { getAllLocations, getLocationBySlug, getLocationsByBorough, getAllLocationSlugs } from '@/data/locations';
import { services } from '@/data/services';
import { getLocationData } from '@/data/contentGenerator';


export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }) {
  const location = getLocationBySlug(params.city);
  if (!location) return {};

  return {
    title: `Cosmetic Treatments ${location.name} | Compare Local Providers | Free Quotes`,
    description: `Find verified aesthetic treatment providers in ${location.name}. Compare Botox, fillers, skin treatments and more. Get free quotes from local practitioners.`,
  };
}

export default function CityPage({ params }) {
  const location = getLocationBySlug(params.city);
  const locationData = getLocationData(params.city);

  if (!location) {
    notFound();
  }
  const nearbyLocations = location.nearbyAreas
    .map(name => getAllLocations().find(l => l.name === name))
    .filter(Boolean)
    .slice(0, 5);

  const boroughLocations = getLocationsByBorough(location.borough)
    .filter(l => l.slug !== location.slug)
    .slice(0, 8);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white min-h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/85 to-gray-900/40" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="text-gray-300 text-sm mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/locations" className="hover:text-white">Locations</Link>
                <span className="mx-2">/</span>
                <span className="text-white">{location.name}</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Cosmetic Treatments in {location.name}
              </h1>
           <p className="text-xl text-gray-300 mb-8">
  {locationData?.heroIntro || `Compare verified aesthetic clinics and practitioners in ${location.name}. Get free quotes within 2 hours.`}
</p>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-white">50+</div>
                  <div className="text-xs text-gray-300">Local Clinics</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-white">4.9/5</div>
                  <div className="text-xs text-gray-300">Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-white">2hr</div>
                  <div className="text-xs text-gray-300">Response</div>
                </div>
              </div>
            </div>

            <div>
              <LeadForm 
                preselectedLocation={location.slug}
                title={`Get Quotes in ${location.name}`}
                subtitle="Top local clinics will call you within 2 hours"
              />
            </div>
          </div>
        </div>
      </section>

   {/* Why Cosmetic Treatments Matter Here */}
      {locationData && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="text-primary-600 text-sm font-semibold tracking-wide uppercase mb-2">
                  Why Cosmetic Treatments in {location.name}
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {locationData.subHeadline}
                </h2>
                <p className="text-gray-600 mb-4">{locationData.paragraph1}</p>
                <p className="text-gray-600 mb-6">{locationData.paragraph2}</p>
                <ul className="space-y-3">
                  {locationData.facts.map((fact, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span className="text-gray-600">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <h3 className="text-lg font-semibold mb-6">{location.name} at a Glance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-700 pb-3">
                    <span className="text-gray-400">Population</span>
                    <span className="font-semibold">{locationData.glance.population}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-3">
                    <span className="text-gray-400">Borough</span>
                    <span className="font-semibold">{locationData.glance.borough}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-3">
                    <span className="text-gray-400">Key Demographics</span>
                    <span className="font-semibold text-right text-sm">{locationData.glance.keyDemographics}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Main Areas</span>
                    <span className="font-semibold text-right text-sm">{locationData.glance.mainAreas}</span>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-400">46%</div>
                    <div className="text-xs text-gray-400">of searches have local intent</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-400">88%</div>
                    <div className="text-xs text-gray-400">call within 24hrs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Available Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Treatments Available in {location.name}
          </h2>
          <p className="text-gray-600 mb-8">
            Compare prices from verified providers for these treatments
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/locations/${location.slug}/${service.slug}`}
                className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-200 transition"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition mb-1">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{service.shortDescription}</p>
                <span className="text-primary-600 text-sm font-medium">{service.priceRange}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            How to Find Providers in {location.name}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Choose Treatment</h3>
              <p className="text-gray-600 text-sm">Select from the options above</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Get Quotes</h3>
              <p className="text-gray-600 text-sm">Receive calls from local clinics</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Compare & Book</h3>
              <p className="text-gray-600 text-sm">Choose the best fit for you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyLocations.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Areas Near {location.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearbyLocations.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/locations/${nearby.slug}`}
                  className="px-4 py-2 bg-white rounded-lg text-gray-700 hover:bg-primary-100 hover:text-primary-700 transition border border-gray-200"
                >
                  {nearby.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            FAQs: Cosmetic Treatments in {location.name}
          </h2>
          <FAQAccordion faqs={[
            {
              question: `How do I find a cosmetic treatment provider in ${location.name}?`,
              answer: `Submit a quote request through our form specifying ${location.name} as your location. Up to 3 verified providers will contact you within 2 hours with personalised quotes.`
            },
            {
              question: `What treatments are available in ${location.name}?`,
              answer: `Providers in ${location.name} offer Botox, dermal fillers, lip fillers, cheek fillers, jawline contouring, chemical peels, microneedling, Profhilo, and more.`
            },
            {
              question: `How much do cosmetic treatments cost in ${location.name}?`,
              answer: `Prices vary by treatment and provider. Getting multiple quotes helps you compare. Many clinics offer payment plans and finance options.`
            },
            {
              question: `Are consultations free in ${location.name}?`,
              answer: `Many providers offer free initial consultations. This is confirmed when clinics respond to your quote request.`
            },
          ]} />
        </div>
      </section>

      {/* Other Borough Locations */}
      {boroughLocations.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Other Areas in {location.borough}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {boroughLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-700 hover:border-primary-300 hover:text-primary-600 transition text-center text-sm"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Find Your {location.name} Provider Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get free quotes from verified clinics within 2 hours
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
