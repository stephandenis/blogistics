"use client";
import Image from "next/image";

const features = [
  {
    icon: "/map.svg",
    title: "3000+",
    subtitle: "Viajes Realizados",
  },
  {
    icon: "/team.svg",
    title: "+100",
    subtitle: "Equipo Profesional",
  },
  {
    icon: "/clock.svg",
    title: "24hs",
    subtitle: "Gestión en tiempo real",
  },
  {
    icon: "/support.svg",
    title: "24/7",
    subtitle: "Atención Personalizada",
  },
];

export default function FeatureStatsTablet() {
  return (
    <section className='block md:block lg:hidden w-full bg-white px-4 py-12 h-[900px]'>
      <div className='relative max-w-4xl mx-auto'>
        {/* Truck Image */}
        <div className='relative h-[460px] w-full overflow-hidden rounded-md'>
          <Image
            src='/feature-truck.jpg'
            alt='Camión Blogistic'
            fill
            className='object-cover rounded-md'
          />
        </div>

        {/* Overlapping Feature Cards */}
        <div className='absolute bottom-[-300px] left-1/2 -translate-x-1/2 w-full px-4'>
          <div className='grid grid-cols-2 gap-6 max-w-[770px] mx-auto'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-white shadow-xl rounded-2xl p-6 text-center relative'
              >
                {/* Icon */}
                <div className='flex justify-center mb-4'>
                  <Image
                    src={feature.icon}
                    alt={feature.subtitle}
                    width={50}
                    height={50}
                  />
                </div>

                {/* Title + Subtitle */}
                <h3 className='text-2xl font-bold text-[#244E93]'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 text-sm mt-2'>{feature.subtitle}</p>

                {/* Snowflake */}
                <div className='absolute bottom-2 right-0 w-7'>
                  <Image
                    src='/snow.svg'
                    alt=''
                    width={42}
                    height={42}
                    className='z-10'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
