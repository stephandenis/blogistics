"use client";
import Image from "next/image";

export default function OurWork() {
  return (
    <section className='bg-[#F8F8F8] py-20'>
      <div className='max-w-[850px] mx-auto px-4'>
        <div className='grid grid-cols-2 gap-8 items-start'>
          {/* Columna izquierda */}
          <div className='space-y-6 flex-1'>
            {/* Título y descripción */}
            <div>
              <h4 className='text-xs text-blue-700 font-semibold uppercase'>
                Nuestro trabajo
              </h4>
              <h2 className='text-3xl font-exo font-semibold leading-tight mt-2'>
                Enfoque en la calidad y seguridad
              </h2>
              <p className='text-sm text-gray-600 mt-4'>
                Cumplimos estrictamente con los estándares requeridos por los
                organismos reguladores, asegurando la confiabilidad de nuestras
                operaciones.
              </p>
            </div>

            {/* Imagen 1 - Misión */}
            <div className='group relative w-full h-[250px] lg:h-[481px] rounded overflow-hidden'>
              <Image
                src='/ourwork/front.jpg'
                alt='Optimizar cadena de valor'
                fill
                className='object-cover'
              />
              {/* Overlay degradado hover */}
              <div className='absolute inset-0 bg-gradient-to-t from-[#002C6D] via-[#244E93]/25 to-[#097EC3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-sm w-full z-10'>
                <span className='block text-xs text-gray-300'>Misión</span>
                <strong className='text-sm'>
                  Optimizar su cadena de valor
                </strong>
              </div>
            </div>

            <p className='hidden sm:block text-md text-gray-600 border-l-[3px] border-[#244E93] pl-4'>
              Nuestra planta de última generación cuenta con tres motores
              tornillo sistematizados para un consumo eficiente. Dos grupos
              electrógenos de 725 kva y la mejor infraestructura para tu
              mercadería.
            </p>
            {/* Imagen 2 - Relaciones */}
            {/* <div className='group relative w-full h-[250px] lg:h-[481px] rounded overflow-hidden'>
              <Image
                src='/ourwork/relaciones.png'
                alt='Confianza y compromiso'
                fill
                className='object-cover'
              />*/}
            {/* Overlay degradado hover */}
            {/* 
              <div className='absolute inset-0 bg-gradient-to-t from-[#002C6D] via-[#244E93]/25 to-[#097EC3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-sm w-full z-10'>
                <span className='block text-xs text-gray-300'>Relaciones</span>
                <strong className='text-sm'>Confianza y compromiso</strong>
              </div>
            </div> 
             */}
          </div>

          {/* Columna derecha */}
          <div className='flex flex-col gap-6 flex-1'>
            {/* Imagen 1 - Visión */}
            <div className='group relative w-full h-[250px] lg:h-[481px] rounded overflow-hidden'>
              <Image
                src='/ourwork/mycom.jpg'
                alt='Ser líderes en el mercado'
                fill
                className='object-cover'
              />
              {/* Overlay degradado hover */}
              <div className='absolute inset-0 bg-gradient-to-t from-[#002C6D] via-[#244E93]/25 to-[#097EC3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-sm w-full z-10'>
                <span className='block text-xs text-gray-300'>Visión</span>
                <strong className='text-sm'>Ser líderes en el mercado</strong>
              </div>
            </div>

            {/* Imagen 2 - Excelentes relaciones */}
            <div className='group relative w-full h-[250px] lg:h-[481px] rounded overflow-hidden'>
              <Image
                src='/ourwork/download.jpg'
                alt='Garantizar un servicio excepcional'
                fill
                className='object-cover'
              />
              {/* Overlay degradado hover */}
              <div className='absolute inset-0 bg-gradient-to-t from-[#002C6D] via-[#244E93]/25 to-[#097EC3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-sm w-full z-10'>
                <span className='block text-xs text-gray-300'>
                  Excelentes relaciones
                </span>
                <strong className='text-sm'>
                  Garantizar un servicio excepcional
                </strong>
              </div>
            </div>

            {/* Texto final con línea azul */}
            {/* <p className='text-md text-gray-600 border-l-[3px] border-[#244E93] pl-4'>
              Somos tu base de operaciones en Buenos Aires. Nuestra ubicación
              estratégica en el Polo Industrial de Ezeiza, a solo 20 minutos del
              Aeropuerto Internacional de Ezeiza y a 40 minutos de los
              principales terminales portuarias.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
