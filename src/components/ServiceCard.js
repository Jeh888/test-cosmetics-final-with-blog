// ServiceCard.js
import Link from 'next/link';

export default function ServiceCard({ service, location = null }) {
  const href = location 
    ? `/locations/${location}/${service.slug}`
    : `/${service.slug}`;

  return (
    <Link href={href} className="group">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-200 transition h-full">
        <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition mb-2">
          {service.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          {service.shortDescription}
        </p>
        <div className="flex justify-between items-center text-sm">
          <span className="text-primary-600 font-medium">{service.priceRange}</span>
          <span className="text-gray-400 group-hover:text-primary-600 transition">→</span>
        </div>
      </div>
    </Link>
  );
}
