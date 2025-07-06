// components/AdditionalServices.tsx
"use client";

import Image from "next/image";

const services = [
  {
    title: "Armado de Kits",
    description:
      "Nuestra amplia experiencia en el armado de kits nos permite brindar un servicio esencial dentro de la cadena logística, ayudando a mejorar los tiempos operativos y maximizar la rentabilidad de nuestros clientes.",
    image: "/services/kits.png",
    icon: "/snow.svg",
  },
  {
    title: "Tomas de muestra",
    description:
      "Acompañamos cada operación con tomas de muestra específicas, garantizando la trazabilidad de los productos conforme a los requerimientos de nuestros clientes.",
    image: "/services/muestras.png",
    icon: "/snow.svg",
  },
];

export default function AdditionalServices() {
  return (
    <section className='w-full bg-[#F6F6F6] py-20 px-4'>
      <div className='max-w-7xl mx-auto text-center'>
        <h4 className='text-[#244E93] font-semibold uppercase tracking-wider text-sm mb-2'>
          ── Servicios Adicionales
        </h4>
        <h2
          className='text-[#1F242E] text-[48px] font-semibold leading-[59px] mb-4'
          style={{ fontFamily: "Exo, sans-serif" }}
        >
          Operaciones logísticas que <br className='hidden md:block' /> marcan
          la diferencia
        </h2>
        <p className='text-[#737373] text-sm max-w-[700px] mx-auto mb-16'>
          Soluciones logísticas avanzadas, automatizadas y a medida, con equipos
          propios o aliados estratégicos. Siempre enfocados en optimizar tu
          cadena de valor
        </p>

        <div className='flex flex-col md:flex-row justify-center items-start gap-12'>
          {services.map((service, i) => (
            <div key={i} className='flex flex-col gap-4 w-full md:w-1/2'>
              {/* Imagen con tarjeta superpuesta */}
              <div className='relative'>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  quality={100} // fuerza máxima calidad
                  className='w-full h-auto object-cover rounded-xl'
                />

                <div className='absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 bottom-6 w-[80%] h-[120px] bg-white shadow-md rounded-xl px-6 py-6 flex items-center justify-start z-10 overflow-visible'>
                  <h3
                    className='text-[#1F242E] font-bold text-2xl'
                    style={{ fontFamily: "Exo, sans-serif" }}
                  >
                    {service.title}
                  </h3>

                  {/* Ícono decorativo */}
                  <div className='hidden lg:block absolute  right-0'>
                    <Image
                      src={service.icon}
                      alt='Decorativo'
                      width={42}
                      height={32}
                      className='z-20 opacity-20'
                    />
                  </div>
                </div>
              </div>

              {/* Descripción */}
              <div className='px-4 md:px-0 mt-12'>
                <p className='text-[#737373] text-sm leading-relaxed'>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
