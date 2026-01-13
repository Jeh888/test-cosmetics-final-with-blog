import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';
import { getGeneralFaqs, getAllFaqs } from '@/data/faqs';
import { services } from '@/data/services';

export const metadata = {
  title: 'FAQ | Cosmetic Treatments London | Questions Answered',
  description: 'Frequently asked questions about aesthetic treatments and finding providers in London. Learn about Botox, fillers, skin treatments, and more.',
};

export default function FAQPage() {
  const generalFaqs = getGeneralFaqs();
  const allFaqs = getAllFaqs();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-primary-100">
            Everything you need to know about cosmetic treatments and finding providers
          </p>
        </div>
      </section>

      {/* General FAQs */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            About This Service
          </h2>
          <FAQAccordion faqs={generalFaqs} />
        </div>
      </section>

      {/* Treatment-Specific FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Treatment FAQs
          </h2>
          
          <div className="space-y-12">
            {services.slice(0, 8).map((service) => {
              const treatmentFaqs = allFaqs.treatments[service.slug];
              if (!treatmentFaqs || treatmentFaqs.length === 0) return null;
              
              return (
                <div key={service.slug}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.name}
                  </h3>
                  <FAQAccordion faqs={treatmentFaqs.slice(0, 3)} />
                  <Link
                    href={`/${service.slug}`}
                    className="inline-block mt-4 text-primary-600 font-semibold hover:text-primary-700 transition"
                  >
                    Learn more about {service.name} →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-8">
            Get in touch or request free quotes from verified providers who can answer your specific questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-quote"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              Get Free Quotes →
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-gray-200 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
