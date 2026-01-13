import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import ServiceCard from '@/components/ServiceCard';
import ReviewCard from '@/components/ReviewCard';
import FAQAccordion from '@/components/FAQAccordion';
import { services } from '@/data/services';
import { getBoroughs } from '@/data/locations';
import { getFeaturedReviews } from '@/data/reviews';
import { getGeneralFaqs } from '@/data/faqs';

export default function HomePage() {
  const boroughs = getBoroughs();
  const featuredReviews = getFeaturedReviews(6);
  const generalFaqs = getGeneralFaqs().slice(0, 5);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden min-h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/85 to-gray-900/40" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-accent-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
                Trusted by 10,000+ Londoners
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                Look Your Best, Feel Your Best
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Compare London's top aesthetic clinics and practitioners. Free quotes in 2 hours.
              </p>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-xs text-gray-300">Verified Clinics</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">4.9/5</div>
                  <div className="text-xs text-gray-300">Patient Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">2hr</div>
                  <div className="text-xs text-gray-300">Avg Response</div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <div className="w-10 h-10 rounded-full bg-primary-500 border-2 border-white flex items-center justify-center text-xs font-bold">+99</div>
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-semibold text-white">127 people</span> requested quotes today
                </div>
              </div>
            </div>

            <div>
              <LeadForm 
                title="Get 3 Free Quotes"
                subtitle="Top clinics will call you within 2 hours"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              What Treatment Are You Looking For?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select a treatment to compare prices from verified London clinics
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Get Quotes in 3 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tell Us What You Need</h3>
              <p className="text-gray-600">
                Pick your treatment and location. Takes 30 seconds.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Calls From Top Clinics</h3>
              <p className="text-gray-600">
                Up to 3 verified clinics will call you within 2 hours with quotes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Book Your Consultation</h3>
              <p className="text-gray-600">
                Compare prices and reviews. Choose the best fit for you.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/free-quote"
              className="inline-block bg-accent-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-accent-600 transition text-lg shadow-lg hover:shadow-xl"
            >
              Get 3 Free Quotes →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Find Clinics Near You
            </h2>
            <p className="text-xl text-gray-600">
              100+ locations across London
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {boroughs.map((borough) => (
              <Link
                key={borough.slug}
                href={`/locations/${borough.slug}`}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:border-primary-300 hover:shadow-md transition group text-center"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition">
                  {borough.name}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="text-primary-600 font-semibold hover:text-primary-700 transition"
            >
              View All 100+ Locations →
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Real Results From Real Patients
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex text-yellow-400 text-xl">★★★★★</div>
              <span className="text-gray-600">4.9/5 from 2,847 reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="text-primary-600 font-semibold hover:text-primary-700 transition"
            >
              Read More Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>

          <FAQAccordion faqs={generalFaqs} />

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-primary-600 font-semibold hover:text-primary-700 transition"
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974')" }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Your Best Look Is One Click Away
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 10,000+ Londoners who found their ideal cosmetic treatment provider
          </p>
          <Link
            href="/free-quote"
            className="inline-block bg-accent-500 text-white px-10 py-5 rounded-lg font-bold hover:bg-accent-600 transition text-xl shadow-lg hover:shadow-xl"
          >
            Get 3 Free Quotes Now →
          </Link>
          <p className="mt-4 text-gray-400 text-sm">No spam. No obligation. Just quotes from top clinics.</p>
        </div>
      </section>
    </>
  );
}
