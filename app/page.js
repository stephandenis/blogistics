import FeatureSection from "./components/FeatureSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureSection />
    </div>
  );
}
