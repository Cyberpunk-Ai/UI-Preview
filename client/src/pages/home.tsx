import Navigation from "@/components/navigation";
import FeaturesGrid from "@/components/features-grid";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <FeaturesGrid />
      </main>
    </div>
  );
}
