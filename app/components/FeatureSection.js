// components/FeatureStatsSection.tsx
"use client";
import Image from "next/image";

const features = [
  {
    icon: "/map.svg", // Replace with your actual icon
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

export default function FeatureStatsSection() {
  return (
    <section className='w-full px-4 py-12 bg-white'>
      {/* Truck image */}
      <div className='max-w-7xl mx-auto'>
        <Image
          src='/features-img.png' // Replace with your actual truck image
          alt='Camión Blogistic'
          width={1200}
          height={600}
          className='w-full rounded-md object-cover'
        />
      </div>

      {/* Feature Cards */}
      <div className='max-w-7xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='bg-white shadow-md p-6 rounded-lg text-center relative'
          >
            {/* Feature Icon */}
            <div className='flex justify-center mb-4'>
              <Image
                src={feature.icon}
                alt={feature.subtitle}
                width={50}
                height={50}
              />
            </div>

            {/* Title and subtitle */}
            <h3 className='text-2xl font-bold text-[#244E93]'>
              {feature.title}
            </h3>
            <p className='text-gray-600 text-sm mt-2'>{feature.subtitle}</p>

            {/* Optional snowflake icon bottom right */}
            <Image
              src='/snow.svg' // Replace or remove if not using
              alt=''
              width={32}
              height={32}
              className='absolute bottom-2 right-2'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
