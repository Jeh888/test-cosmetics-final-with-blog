import Link from 'next/link';
import ReviewCard from '@/components/ReviewCard';
import { getAllReviews, getAverageRating } from '@/data/reviews';

export const metadata = {
  title: 'Patient Reviews | Cosmetic Treatments London | Testimonials',
  description: 'Read reviews from patients who found aesthetic treatment providers through this comparison service. Real testimonials about Botox, fillers, skin treatments and more.',
};

export default function ReviewsPage() {
  const reviews = getAllReviews();
  const averageRating = getAverageRating();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Patient Reviews
          </h1>
          <p className="text-xl text-primary-100 mb-6">
            See what patients say about finding their cosmetic treatment providers through this service
          </p>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-yellow-400 text-2xl">★★★★★</span>
            <span className="text-2xl font-bold">{averageRating}</span>
            <span className="text-primary-200">average rating</span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Find Your Provider?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of satisfied patients who found their perfect cosmetic treatment provider through this free comparison service.
          </p>
          <Link
            href="/free-quote"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Get Free Quotes →
          </Link>
        </div>
      </section>
    </>
  );
}
