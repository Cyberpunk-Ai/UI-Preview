import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesGrid from "@/components/features-grid";
import StatsSection from "@/components/stats-section";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <StatsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
