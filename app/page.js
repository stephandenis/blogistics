import About from "./components/About";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import Navbar from "./components/Navbar";
import OurWorkDesktop from "./components/OurWork";
import Separator from "./components/Separator";
import Services from "./components/Services";
import ServicesExtra from "./components/ServicesExtra";
import WhyUsSelector from "./components/WhyUsSelector";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Services />
      <Separator />
      <ServicesExtra />
      <About />
      <WhyUsSelector />
      <HowWeWork />
      <OurWorkDesktop />
    </div>
  );
}
