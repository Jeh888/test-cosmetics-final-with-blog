export default function StatsBar() {
  const stats = [
    { value: '500+', label: 'Verified Providers' },
    { value: '100+', label: 'London Locations' },
    { value: '4.9★', label: 'Average Rating' },
    { value: '24hr', label: 'Response Time' }
  ];

  return (
    <div className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-2xl md:text-3xl font-bold text-primary-600">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
