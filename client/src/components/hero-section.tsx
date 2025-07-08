import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          The Complete Vehicle{" "}
          <span className="otulia-blue">Marketplace Platform</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Streamline your automotive business with our comprehensive platform. From inventory management to customer rewards, discover the tools that power successful dealerships.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-otulia-blue text-white hover:bg-otulia-blue-dark transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
          >
            Explore Platform Features
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all font-semibold text-lg"
          >
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
