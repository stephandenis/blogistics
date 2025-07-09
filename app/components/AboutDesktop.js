import Image from "next/image";

export default function AboutDesktop() {
  return (
    <section className='w-full px-6 py-20 bg-white'>
      <div className='max-w-7xl mx-auto flex items-start gap-10'>
        {/* Imagen vertical a la izquierda */}
        <div className='w-[400px] rounded-xl overflow-hidden'>
          <Image
            src='/about.png'
            alt='Depósito'
            width={400}
            height={600}
            className='object-cover w-full h-full'
            priority
          />
        </div>

        {/* Contenido a la derecha */}
        <div className='flex-1 flex flex-col justify-center'>
          <p className='text-[#244E93] uppercase text-sm font-semibold mb-2'>
            — Sobre Nosotros
          </p>

          <h2 className='text-4xl font-bold text-gray-900 leading-tight mb-4'>
            Nuestro compromiso <br /> con los clientes
          </h2>

          <p className='text-base text-gray-600 mb-8 max-w-2xl'>
            Optimizamos su cadena de valor con adaptabilidad y eficiencia,
            ofreciendo soluciones de alta calidad, fiabilidad y trazabilidad.
          </p>

          {/* Lista en 2 columnas */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-800'>
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
          <div className='relative bg-white rounded-xl shadow-md p-4 w-full max-w-md flex items-center gap-3 mt-20'>
            <Image src='/telefono.png' alt='Teléfono' width={30} height={30} />
            <div className='text-sm'>
              <p className='text-gray-800'>¿Tenés preguntas? Llámanos</p>
              <p className='font-bold text-[#244E93]'>+5411-6778-89877</p>
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
