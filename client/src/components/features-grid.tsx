import { Card } from "@/components/ui/card";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  screenshot: string;
  gradientClass: string;
  rotationClass: string;
}

const features: FeatureCard[] = [
  {
    id: "dealer-tools",
    title: "Comprehensive Dealer Tools",
    description: "Streamline operations with powerful inventory management and sales platform",
    screenshot: "/api/placeholder/400/300",
    gradientClass: "from-gray-900/80 via-gray-900/40 to-transparent",
    rotationClass: "hover:rotate-slight-left"
  },
  {
    id: "customer-trust",
    title: "Build Customer Trust",
    description: "Verified dealers and quality assurance for customer confidence",
    screenshot: "/api/placeholder/400/300",
    gradientClass: "from-green-600/80 via-green-600/40 to-transparent",
    rotationClass: "hover:rotate-slight-right"
  },
  {
    id: "vehicle-marketplace",
    title: "Advanced Vehicle Search",
    description: "Powerful filters and browsing tools for finding the perfect vehicle",
    screenshot: "/api/placeholder/400/300",
    gradientClass: "from-orange-600/80 via-orange-600/40 to-transparent",
    rotationClass: "hover:rotate-moderate-left"
  },
  {
    id: "vehicle-details",
    title: "Rich Vehicle Profiles",
    description: "Comprehensive listings with photos, specs, and dealer information",
    screenshot: "/api/placeholder/400/300",
    gradientClass: "from-blue-600/80 via-blue-600/40 to-transparent",
    rotationClass: "hover:rotate-slight-left"
  },
  {
    id: "credits-system",
    title: "Innovative Credits System",
    description: "Premium rewards ecosystem for luxury purchases and experiences",
    screenshot: "/api/placeholder/400/300",
    gradientClass: "from-purple-600/80 via-purple-600/40 to-transparent",
    rotationClass: "hover:rotate-moderate-right"
  },
  {
    id: "rewards-redemption",
    title: "Exclusive Redemption Portal",
    description: "Unlock deals across luxury, travel, and lifestyle experiences",
    screenshot: "/api/placeholder/400/300",
    gradientClass: "from-emerald-600/80 via-emerald-600/40 to-transparent",
    rotationClass: "hover:rotate-slight-right"
  }
];

export default function FeaturesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything Your Business Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From dealer tools to customer experiences, explore our comprehensive platform features
          </p>
        </div>
        
        {/* Features Grid with Creative Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 aspect-[4/3] cursor-pointer ${
                index % 2 === 0 ? 'lg:mt-8' : 'lg:-mt-4'
              } ${feature.rotationClass}`}
              style={{
                transform: `${index % 3 === 0 ? 'rotate(-3deg)' : index % 3 === 1 ? 'rotate(2deg)' : 'rotate(-1deg)'}`,
              }}
            >
              {/* Screenshot Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
                    <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="400" height="300" fill="#F3F4F6"/>
                      <rect x="20" y="20" width="360" height="40" fill="#4F46E5" rx="8"/>
                      <rect x="40" y="35" width="80" height="10" fill="white" rx="2"/>
                      <rect x="320" y="30" width="40" height="20" fill="white" rx="4"/>
                      <rect x="20" y="80" width="170" height="200" fill="white" rx="8"/>
                      <rect x="40" y="100" width="130" height="8" fill="#E5E7EB" rx="2"/>
                      <rect x="40" y="120" width="100" height="6" fill="#D1D5DB" rx="2"/>
                      <rect x="40" y="140" width="120" height="80" fill="#F3F4F6" rx="4"/>
                      <rect x="40" y="235" width="80" height="25" fill="#4F46E5" rx="4"/>
                      <rect x="210" y="80" width="170" height="200" fill="white" rx="8"/>
                      <rect x="230" y="100" width="130" height="8" fill="#E5E7EB" rx="2"/>
                      <rect x="230" y="120" width="100" height="6" fill="#D1D5DB" rx="2"/>
                      <rect x="230" y="140" width="120" height="80" fill="#F3F4F6" rx="4"/>
                      <rect x="230" y="235" width="80" height="25" fill="#10B981" rx="4"/>
                      <text x="200" y="290" text-anchor="middle" fill="#6B7280" font-family="Arial" font-size="12">${feature.title}</text>
                    </svg>
                  `)}')`
                }}
              />
              
              {/* Glassmorphism Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradientClass}`} />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 glassmorphism-dark rounded-b-2xl">
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover Effect Indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Floating Elements for Visual Interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-otulia-blue rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-otulia-purple rounded-full opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-otulia-green rounded-full opacity-25 animate-pulse delay-500"></div>
        </div>
      </div>
    </section>
  );
}
