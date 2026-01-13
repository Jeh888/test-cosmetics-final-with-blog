import LeadForm from '@/components/LeadForm';

export const metadata = {
  title: 'Get Free Quotes | Cosmetic Treatments London | Compare Providers',
  description: 'Get free quotes from verified aesthetic treatment providers across London. Compare prices for Botox, dermal fillers, lip fillers, skin treatments and more.',
};

export default function FreeQuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Get Free Quotes
          </h1>
          <p className="text-xl text-primary-100">
            Compare prices from verified cosmetic treatment providers in your area
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Why Compare Quotes?
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Save Money</h3>
                    <p className="text-gray-600">Cosmetic treatment prices vary significantly between providers. Comparing quotes ensures you get fair value.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Verified Providers</h3>
                    <p className="text-gray-600">All providers are verified professionals with appropriate qualifications, registrations, and insurance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">No Obligation</h3>
                    <p className="text-gray-600">Receiving quotes is completely free with no obligation to book. Take your time to make the right decision.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fast Response</h3>
                    <p className="text-gray-600">Receive personalised quotes from up to 3 providers within 24 hours of submitting your request.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Local Providers</h3>
                    <p className="text-gray-600">Get matched with providers convenient to your location across 100+ areas in London.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Treatments Covered</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>• Botox</div>
                  <div>• Lip Fillers</div>
                  <div>• Dermal Fillers</div>
                  <div>• Cheek Fillers</div>
                  <div>• Jawline Fillers</div>
                  <div>• Tear Trough</div>
                  <div>• Chemical Peels</div>
                  <div>• Microneedling</div>
                  <div>• Profhilo</div>
                  <div>• And more...</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <LeadForm 
                title="Request Your Free Quotes"
                subtitle="Fill in the form below to get started"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What Happens Next?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Submit Form</h3>
              <p className="text-gray-600 text-sm">
                Your details are shared with matched providers in your area
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Receive Quotes</h3>
              <p className="text-gray-600 text-sm">
                Up to 3 providers contact you with personalised quotes within 24 hours
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Choose & Book</h3>
              <p className="text-gray-600 text-sm">
                Compare quotes and book directly with your chosen provider
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
