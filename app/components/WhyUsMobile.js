import Image from "next/image";

export default function WhyUsMobile() {
  return (
    <section className='px-4 py-10 max-w-md mx-auto'>
      {/* Títulos */}
      <h3 className='text-sm text-[#244E93] font-medium text-center mb-2'>
        — POR QUÉ ELEGIRNOS
      </h3>
      <h2 className='text-2xl text-center font-bold mb-10'>
        Especialización en <br /> temperaturas controladas.
      </h2>

      {/* Primera columna de cards */}
      <div className='flex flex-col gap-4 mb-6'>
        {[
          {
            icon: "/why-1.svg",
            title: "Sistema de gestión",
            text: "Controla tu stock en tiempo real las 24 horas del día",
          },
          {
            icon: "/why-2.svg",
            title: "Almacenamiento",
            text: "Etiquetado automatizado de unidades, bultos y pallets.",
          },
          {
            icon: "/why-3.svg",
            title: "Carga y Descarga",
            text: "Tenemos 3 Docks para mayor rapidez de servicio",
          },
        ].map((item, i) => (
          <div
            key={i}
            className='bg-white p-4 rounded-xl shadow-md flex gap-4 items-center'
          >
            <img src={item.icon} alt='icono' className='w-10 h-10' />
            <div>
              <h4 className='font-bold text-sm'>{item.title}</h4>
              <p className='text-sm text-gray-600'>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Imágenes en fila */}
      <div className='flex gap-4 mb-6'>
        <div className='w-1/2 aspect-[4/3] rounded-xl overflow-hidden'>
          <Image
            src='/whyus/lift.jpg'
            alt='img1'
            width={300}
            height={200}
            className='w-full h-full object-cover'
          />
        </div>
        <div className='w-1/2 aspect-[4/3] rounded-xl overflow-hidden'>
          <Image
            src='/whyus/cargo.jpg'
            alt='img2'
            width={300}
            height={200}
            className='w-full h-full object-cover'
          />
        </div>
      </div>

      {/* Segunda columna de cards */}
      <div className='flex flex-col gap-4'>
        {[
          {
            icon: "/why-4.svg",
            title: "Seguridad",
            text: "Contamos con detección de amoníaco y humo, red contra incendios, etc.",
          },
          {
            icon: "/why-5.svg",
            title: "Atención 24/7",
            text: "Atención personalizada con ejecutivos de cuenta.",
          },
          {
            icon: "/why-6.svg",
            title: "Personalización",
            text: "Indicadores logísticos (KPI) diseñados en conjunto con cada cliente.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className='bg-white p-4 rounded-xl shadow-md flex gap-4 items-center'
          >
            <img src={item.icon} alt='icono' className='w-10 h-10' />
            <div>
              <h4 className='font-bold text-sm'>{item.title}</h4>
              <p className='text-sm text-gray-600'>{item.text}</p>
            </div>
          </div>
        ))}
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
