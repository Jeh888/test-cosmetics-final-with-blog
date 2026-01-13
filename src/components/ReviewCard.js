export default function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
      <div className="flex items-center space-x-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-200'}>
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-600 flex-grow mb-4">"{review.text}"</p>
      <div className="border-t border-gray-100 pt-4">
        <p className="font-semibold text-gray-900">{review.name}</p>
        <p className="text-sm text-gray-500">{review.treatment} • {review.location}</p>
      </div>
    </div>
  );
}
