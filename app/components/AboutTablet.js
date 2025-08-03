import Image from "next/image";

export default function AboutTablet() {
  return (
    <section className='w-full px-6 py-12 bg-white'>
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10'>
        {/* Imagen */}
        <div className='w-full md:w-1/2'>
          <div className='relative rounded-xl overflow-hidden'>
            <Image
              src='/services/product.jpg'
              alt='Depósito'
              width={600}
              height={800}
              className='w-full h-full object-cover'
              priority
            />
          </div>
        </div>

        {/* Contenido */}
        <div className='w-full md:w-1/2 flex flex-col justify-center gap-y-2'>
          <p className='text-[#244E93] uppercase text-sm font-semibold mb-2'>
            — Sobre Nosotros
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mb-3'>
            Nuestro compromiso <br />
            con los clientes
          </h2>
          {/* 
          <p className='text-sm text-gray-600 mb-6'>
            Optimizamos su cadena de valor con adaptabilidad y eficiencia,
            ofreciendo soluciones de alta calidad, fiabilidad y trazabilidad.
          </p> */}

          {/* Lista */}
          <div className='grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-800 mb-8'>
            {[
              "Experiencia y Seguridad",
              "Pensamos en el Cliente",
              "Calidad Asegurada",
              "Gestión Integrada",
              "Logística Completa",
              "Atención 24/7",
              "Asesoramiento Total",
              "Ubicación Estratégica",
            ].map((text, idx) => (
              <div key={idx} className='flex items-center gap-2'>
                <Image src='/check.svg' alt='Check' width={16} height={16} />
                {text}
              </div>
            ))}
          </div>

          {/* Card de contacto */}
          <div className='relative bg-white rounded-xl shadow-md p-4 w-full flex items-center gap-3'>
            <Image src='/telefono.png' alt='Teléfono' width={30} height={30} />
            <div className='text-sm'>
              <p className='text-gray-800'>¿Tenés preguntas? Llámanos</p>
              <p className='font-bold text-[#244E93]'>+54 11 3220 0289</p>
              <p className='text-gray-500 text-xs mt-1'>
                Atención personalizada con ejecutivos de cuenta.
              </p>
            </div>

            {/* Decoración */}
            <Image
              src='/snow.svg'
              alt='Decoración'
              width={40}
              height={40}
              className='absolute bottom-1 right-0 opacity-20'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
