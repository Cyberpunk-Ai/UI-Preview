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
                  backgroundImage: `url('${feature.screenshot}')`
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
