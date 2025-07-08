import { Card } from "@/components/ui/card";
import dealerToolsImg from "@assets/Screenshot (195)_1751980724235.png";
import customerTrustImg from "@assets/Screenshot (196)_1751980724235.png";
import vehicleSearchImg from "@assets/Screenshot (194)_1751980724234.png";
import vehicleDetailsImg from "@assets/Screenshot (198)_1751980724236.png";
import creditsSystemImg from "@assets/Screenshot (200)_1751980724236.png";
import rewardsRedemptionImg from "@assets/Screenshot (201)_1751980724236.png";

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
    screenshot: dealerToolsImg,
    gradientClass: "from-gray-900/80 via-gray-900/40 to-transparent",
    rotationClass: "hover:rotate-slight-left"
  },
  {
    id: "customer-trust",
    title: "Build Customer Trust",
    description: "Verified dealers and quality assurance for customer confidence",
    screenshot: customerTrustImg,
    gradientClass: "from-green-600/80 via-green-600/40 to-transparent",
    rotationClass: "hover:rotate-slight-right"
  },
  {
    id: "vehicle-marketplace",
    title: "Advanced Vehicle Search",
    description: "Powerful filters and browsing tools for finding the perfect vehicle",
    screenshot: vehicleSearchImg,
    gradientClass: "from-orange-600/80 via-orange-600/40 to-transparent",
    rotationClass: "hover:rotate-moderate-left"
  },
  {
    id: "vehicle-details",
    title: "Rich Vehicle Profiles",
    description: "Comprehensive listings with photos, specs, and dealer information",
    screenshot: vehicleDetailsImg,
    gradientClass: "from-blue-600/80 via-blue-600/40 to-transparent",
    rotationClass: "hover:rotate-slight-left"
  },
  {
    id: "credits-system",
    title: "Innovative Credits System",
    description: "Premium rewards ecosystem for luxury purchases and experiences",
    screenshot: creditsSystemImg,
    gradientClass: "from-purple-600/80 via-purple-600/40 to-transparent",
    rotationClass: "hover:rotate-moderate-right"
  },
  {
    id: "rewards-redemption",
    title: "Exclusive Redemption Portal",
    description: "Unlock deals across luxury, travel, and lifestyle experiences",
    screenshot: rewardsRedemptionImg,
    gradientClass: "from-emerald-600/80 via-emerald-600/40 to-transparent",
    rotationClass: "hover:rotate-slight-right"
  }
];

export default function FeaturesGrid() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 gradient-text">
            Everything Your Business Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From dealer tools to customer experiences, explore our comprehensive platform features
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
        
        {/* Features Grid with Creative Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 aspect-[4/3] cursor-pointer ${
                index % 2 === 0 ? 'lg:mt-8' : 'lg:-mt-4'
              } ${feature.rotationClass}`}
              style={{
                transform: `${index % 3 === 0 ? 'rotate(-3deg)' : index % 3 === 1 ? 'rotate(2deg)' : 'rotate(-1deg)'}`,
              }}
            >
              {/* Screenshot Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${feature.screenshot}')`
                }}
              />
              
              {/* Enhanced Glassmorphism Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradientClass} group-hover:opacity-90 transition-opacity duration-500`} />
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-colors duration-500" />
              
              {/* Content Overlay with Enhanced Animation */}
              <div className="absolute bottom-0 left-0 right-0 p-6 glassmorphism-dark rounded-b-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:scale-105 transition-transform duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* Enhanced Hover Effect Indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
              
              {/* Subtle Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Floating Elements for Visual Interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-3 h-3 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-4 h-4 bg-purple-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-green-500 rounded-full opacity-25 animate-pulse delay-500"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-orange-500 rounded-full opacity-20 animate-pulse delay-700"></div>
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-emerald-500 rounded-full opacity-25 animate-pulse delay-300"></div>
        </div>
      </div>
    </section>
  );
}
