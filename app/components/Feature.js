import FeatureStatsDesktop from "./FeatureStatsDesktop";
import FeatureStatsTablet from "./FeatureStatsTablet";

export default function FeatureStatsWrapper() {
  return (
    <>
      {/* Desktop only */}
      <div className='hidden lg:block'>
        <FeatureStatsDesktop />
      </div>

      {/* Tablet only */}
      <div className=' sm:block lg:hidden'>
        <FeatureStatsTablet />
      </div>

      {/* Mobile hidden */}
    </>
  );
}
