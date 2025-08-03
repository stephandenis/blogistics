import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
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
      <ServicesExtra />
      <About />
      <WhyUsSelector />
      <HowWeWork />
      <OurWorkDesktop />
      <FAQ />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
