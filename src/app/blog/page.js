import Link from 'next/link';
import { getAllBlogs } from '@/data/blogs';

export const metadata = {
  title: 'Blog | Aesthetic Treatment Insights | Cosmetic Treatments London',
  description: 'Expert advice on Botox, fillers, skin treatments and more. Read our guides to make informed decisions about aesthetic treatments in London.',
};

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Aesthetic Treatment Blog
          </h1>
          <p className="text-xl text-primary-100">
            Expert insights, guides, and advice on cosmetic treatments
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article 
                key={blog.slug}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition"
              >
                <Link href={`/blog/${blog.slug}`}>
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-primary-50 text-primary-700 px-2 py-1 rounded">
                      {blog.category}
                    </span>
                    <span>{blog.readTime}</span>
                  </div>
                  <Link href={`/blog/${blog.slug}`}>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary-600 transition">
                      {blog.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-4">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{blog.author}</span>
                    <span className="text-sm text-gray-400">
                      {new Date(blog.date).toLocaleDateString('en-GB', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Find a Treatment Provider?
          </h2>
          <p className="text-gray-600 mb-8">
            Compare verified aesthetic practitioners in your area and get free quotes.
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
