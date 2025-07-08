import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your{" "}
          <span className="otulia-blue">Vehicle Business?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join the platform that's revolutionizing how dealers and customers connect in the automotive industry.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-otulia-blue text-white hover:bg-otulia-blue-dark transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
          >
            Start as Dealer
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all font-semibold text-lg"
          >
            Browse Vehicles
          </Button>
        </div>
      </div>
    </section>
  );
}
