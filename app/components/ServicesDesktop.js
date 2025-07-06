"use client";

import Image from "next/image";
import "@fontsource-variable/rubik";

const services = [
  {
    title: "Almacenamiento",
    subtitle: "Contamos con 1500mts² cubiertos",
    image: "/services/almacenamiento.png",
  },
  {
    title: "Túnel de Congelado",
    image: "/services/tunel.png",
  },
  {
    title: "Carga y Descarga",
    image: "/services/carga.png",
  },
  {
    title: "Sistema de Gestión",
    image: "/services/gestion.png",
  },
];

export default function ServicesDesktop() {
  return (
    <section className='hidden lg:block w-full bg-[#f7f7f7] px-12 py-24 font-rubik'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-12 mb-12'>
          <div>
            <h5 className='text-sm tracking-widest text-[#244E93] font-semibold uppercase'>
              —— Nuestros Servicios
            </h5>
            <h2 className='text-4xl font-bold text-[#12263F] mt-2'>
              Tu solución Logística <br /> en nuestras manos
            </h2>
          </div>

          <div className='max-w-[867px] text-[#1E1E1E] text-sm leading-7 text-justify'>
            <p>
              Somos tu base de operaciones en Buenos Aires. Nuestra ubicación
              estratégica en el Polo Industrial de Ezeiza, a solo 20 minutos del
              Aeropuerto Internacional de Ezeiza y a 40 minutos de las
              principales terminales portuarias, nos permite garantizar un
              almacenamiento seguro y entregar tus productos con agilidad en tus
              puntos estratégicos.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-4 gap-6'>
          {services.map((service, index) => (
            <div
              key={index}
              className='relative w-full h-[340px] overflow-hidden rounded-md group'
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-300'
              />

              {/* Overlay Gradiente solo visible al hacer hover si hay subtitle */}
              {service.subtitle && (
                <div className='absolute inset-0 bg-gradient-to-b from-[#097EC3] via-[#244E93] to-[#0A1E3F] opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              )}

              {/* Texto */}
              <div className='absolute bottom-0 left-0 w-full p-4 z-10 text-white'>
                <h3 className='font-semibold text-lg'>{service.title}</h3>
                {service.subtitle && (
                  <p className='text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    {service.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
