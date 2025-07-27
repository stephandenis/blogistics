// components/FeatureStatsSection.tsx
"use client";
import Image from "next/image";

const features = [
  {
    icon: "/team.svg",
    title: "3000+",
    subtitle: "Planta de última generación",
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

export default function FeatureStatsSection() {
  return (
    <section className='w-full bg-white px-4 py-12 h-[800px]'>
      <div className='relative max-w-7xl mx-auto'>
        {/* Truck Image */}
        <div className='h-[600px] w-full relative overflow-hidden rounded-md'>
          <Image
            src='/feature-truck.jpg'
            alt='Camión Blogistic'
            fill
            className='object-cover rounded-md'
            priority
          />
        </div>

        {/* Feature Cards (Raised Overlap) */}
        <div className='absolute left-1/2 transform -translate-x-1/2 bottom-[-100px] translate-y-[10%] w-full px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-white shadow-xl rounded-2xl p-6 text-center relative overflow-visible'
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

                {/* Text */}

                <p className='text-black text-md font-semibold mt-2'>
                  {feature.subtitle}
                </p>

                {/* Snowflake Icon Inside the Card */}
                <div className='absolute bottom-2 right-0'>
                  <Image
                    src='/snow.svg'
                    alt=''
                    width={28}
                    height={28}
                    className='z-20'
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
