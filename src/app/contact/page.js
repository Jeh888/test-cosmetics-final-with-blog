import LeadForm from '@/components/LeadForm';

export const metadata = {
  title: 'Contact | Cosmetic Treatments London | Get Free Quotes',
  description: 'Get in touch or request free quotes from verified cosmetic treatment providers across London. Contact form and support information.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-primary-100">
            Request quotes or ask questions about finding cosmetic treatment providers
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                How Can This Service Help?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                    📋
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Request Free Quotes</h3>
                    <p className="text-gray-600">
                      Looking for cosmetic treatment? Fill in the form and receive quotes from up to 3 verified providers in your area.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                    ❓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">General Enquiries</h3>
                    <p className="text-gray-600">
                      Have questions about the comparison service or how it works? Check the FAQ section or send a message.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                    🏥
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">For Providers</h3>
                    <p className="text-gray-600">
                      Are you a cosmetic treatment provider interested in joining the network? Get in touch to learn about partnership opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">Response Times</h3>
                <p className="text-gray-600 mb-4">
                  Quote requests are typically responded to within 24 hours by matched providers. General enquiries are answered within 1-2 business days.
                </p>
                <p className="text-sm text-gray-500">
                  For the fastest response on treatment enquiries, use the quote request form.
                </p>
              </div>
            </div>

            {/* Quote Form */}
            <div>
              <LeadForm 
                title="Request Free Quotes"
                subtitle="Get quotes from verified providers in your area"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
