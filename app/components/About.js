import AboutDesktop from "./AboutDesktop";
import AboutTablet from "./AboutTablet";

export default function FeatureStatsWrapper() {
  return (
    <section id='nosotros'>
      {/* Desktop only */}
      <div className='hidden lg:block'>
        <AboutDesktop />
      </div>

      {/* Tablet only */}
      <div className=' sm:block lg:hidden'>
        <AboutTablet />
      </div>

      {/* Mobile hidden */}
    </section>
  );
}
