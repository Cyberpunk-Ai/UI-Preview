export default function StatsSection() {
  const stats = [
    { number: "5000+", label: "Vehicles Available" },
    { number: "500+", label: "Verified Dealers" },
    { number: "50+", label: "Cities Covered" },
    { number: "98%", label: "Customer Satisfaction" }
  ];

  return (
    <section className="py-16 bg-otulia-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of dealers and customers who trust Otulia for their automotive needs
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-200 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
