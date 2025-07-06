import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Separator from "./components/Separator";
import Services from "./components/Services";
import ServicesExtra from "./components/ServicesExtra";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Services />
      <Separator />
      <ServicesExtra />
    </div>
  );
}
