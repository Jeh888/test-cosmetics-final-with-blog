import Link from 'next/link';

export const metadata = {
  title: 'About | Cosmetic Treatments London | Free Provider Comparison',
  description: 'Learn how this free comparison service connects you with verified aesthetic treatment providers across London. Find the best Botox, fillers, and skin treatment clinics.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            About This Service
          </h1>
          <p className="text-xl text-primary-100">
            Helping London residents find the best aesthetic treatment providers since 2020
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Connecting You With Verified Providers</h2>
            <p>
              This free comparison service was created to help London residents navigate the crowded aesthetic treatment market. With hundreds of clinics and practitioners offering everything from Botox to advanced skin treatments, finding the right provider can be overwhelming.
            </p>
            <p>
              The platform simplifies this process by connecting you with verified, qualified practitioners who match your specific needs and location. Simply submit a quote request, and up to three providers will contact you with personalised quotes – completely free and with no obligation.
            </p>

            <h2>Why Use a Comparison Service?</h2>
            <p>
              Aesthetic treatment prices in London vary dramatically. The same procedure can cost twice as much at one clinic compared to another, without any difference in quality. By comparing quotes, you ensure you're getting fair value while still receiving treatment from qualified professionals.
            </p>
            <p>
              Beyond price, comparing providers allows you to assess their experience, read reviews, and find someone whose approach aligns with your expectations. The right provider makes all the difference in achieving natural, beautiful results.
            </p>

            <h2>Verified Provider Network</h2>
            <p>
              All providers in this network are verified professionals. Aesthetic practitioners hold appropriate qualifications including Level 7 injectable qualifications, medical backgrounds, and comprehensive insurance. This verification process ensures you're only connected with legitimate, qualified professionals.
            </p>
            <p>
              The network includes providers across all London boroughs and surrounding areas – over 100 locations in total. Whether you're in Central London or the outer suburbs, there are quality providers available near you.
            </p>

            <h2>Treatments Covered</h2>
            <p>
              This service covers the most popular aesthetic treatments sought by London residents, including Botox and anti-wrinkle injections, dermal fillers for cheeks, jawline, and lips, tear trough treatments, chemical peels, microneedling, Profhilo, PRP facials, fat dissolving injections, and laser hair removal.
            </p>
            <p>
              Each provider in the network specialises in different treatments, ensuring you're matched with practitioners who have specific expertise in your area of interest.
            </p>

            <h2>How Providers Are Selected</h2>
            <p>
              Providers apply to join the network and undergo a verification process that checks their qualifications, insurance, and professional standing. Patient feedback is monitored continuously, and providers who don't meet quality standards are removed from the network.
            </p>
            <p>
              This quality control ensures that every quote you receive comes from a practitioner capable of delivering excellent results safely.
            </p>

            <h2>Completely Free Service</h2>
            <p>
              This comparison service is completely free for patients. There's no charge for submitting a quote request, no obligation to book with any provider, and no hidden fees. The service is funded by providers who value being connected with patients actively seeking their services.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/free-quote"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition text-lg"
            >
              Get Your Free Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
