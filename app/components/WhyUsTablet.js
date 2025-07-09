import Image from "next/image";

export default function WhyUsTablet() {
  return (
    <section className='px-4 py-10 max-w-6xl mx-auto'>
      <h3 className='text-sm text-[#244E93] font-medium text-center mb-2'>
        — POR QUÉ ELEGIRNOS
      </h3>
      <h2 className='text-2xl text-center font-bold mb-10 leading-snug'>
        Especialización en <br /> temperaturas controladas.
      </h2>

      {/* Parte superior: cards izquierda + 2 imágenes derecha */}
      <div className='flex gap-6 mb-10'>
        {/* Cards izquierda */}
        <div className='flex flex-col justify-between gap-5 flex-1'>
          {[
            {
              title: "Sistema de gestión",
              text: "Controla tu stock en tiempo real las 24 horas del día",
              icon: "/why-1.svg",
            },
            {
              title: "Almacenamiento",
              text: "Etiquetado automatizado de unidades, bultos y pallets.",
              icon: "/why-2.svg",
            },
            {
              title: "Carga y Descarga",
              text: "Tenemos 3 Docks para mayor rapidez de servicio",
              icon: "/why-3.svg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className='bg-white p-4 rounded-xl shadow-md flex gap-4 items-center h-[188px]'
            >
              <img src={item.icon} alt='icono' className='w-12 h-12' />
              <div>
                <h4 className='font-bold'>{item.title}</h4>
                <p className='text-md text-gray-600'>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Imágenes derecha */}
        <div className='flex flex-col gap-6 flex-1'>
          <div className='aspect-[4/3] rounded-xl overflow-hidden'>
            <Image
              src='/services/almacenamiento.png'
              alt='Imagen 1'
              width={500}
              height={400}
              className='w-full h-full object-cover'
            />
          </div>
          <div className='aspect-[4/3] rounded-xl overflow-hidden'>
            <Image
              src='/services/almacenamiento.png'
              alt='Imagen 2'
              width={500}
              height={400}
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>

      {/* Parte inferior: 2 imágenes izquierda + 3 cards derecha */}
      <div className='flex gap-6 items-start'>
        {/* Imágenes izquierda */}
        <div className='flex flex-col gap-6 flex-1'>
          <div className='aspect-[4/3] rounded-xl overflow-hidden'>
            <Image
              src='/services/almacenamiento.png'
              alt='Imagen 3'
              width={500}
              height={400}
              className='w-full h-full object-cover'
            />
          </div>
          <div className='aspect-[4/3] rounded-xl overflow-hidden'>
            <Image
              src='/services/almacenamiento.png'
              alt='Imagen 4'
              width={500}
              height={400}
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        {/* Cards derecha */}
        <div className='flex flex-col justify-between gap-5 flex-1'>
          {[
            {
              title: "Seguridad",
              text: "Contamos con detección de amoníaco y humo, red contra incendios, etc.",
              icon: "/why-4.svg",
            },
            {
              title: "Atención 24/7",
              text: "Atención personalizada con ejecutivos de cuenta.",
              icon: "/why-5.svg",
            },
            {
              title: "Personalización",
              text: "Indicadores logísticos (KPI) diseñados en conjunto con cada cliente.",
              icon: "/why-6.svg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className='bg-white p-4 rounded-xl shadow-md flex gap-4 items-center h-[188px]'
            >
              <img src={item.icon} alt='icono' className='w-12 h-12' />
              <div>
                <h4 className='font-bold'>{item.title}</h4>
                <p className='text-md text-gray-600'>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botón centrado */}
      <div className='mt-10 flex justify-center'>
        <button className='flex items-center gap-2 bg-[#244E93] text-white font-semibold px-6 py-3 rounded-full shadow-md'>
          <img src='/flecha.svg' alt='Flecha' className='w-4 h-4' />
          Contáctanos
        </button>
      </div>
    </section>
  );
}
