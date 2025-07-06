import ServicesDesktop from "./ServicesDesktop";
import ServicesTablet from "./ServicesTablet";

export default function ServicesWrapper() {
  return (
    <>
      {/* Desktop only */}
      <div className='hidden lg:block'>
        <ServicesDesktop />
      </div>

      {/* Tablet only */}
      <div className=' sm:block lg:hidden'>
        <ServicesTablet />
      </div>

      {/* Mobile hidden */}
    </>
  );
}
