import Image from "next/image";

export default function WhyUsDesktop() {
  return (
    <section className='w-full bg-[#F8F8F8] px-6 py-20 flex justify-center'>
      <div className='max-w-screen-xl w-full'>
        {/* Título y botón */}
        <div className='flex justify-between items-start mb-12'>
          <div>
            <p className='text-sm text-[#244E93] font-medium uppercase tracking-wide'>
              — Por qué elegirnos
            </p>
            <h2 className='text-4xl font-bold text-[#1D1D1B] leading-snug mt-2'>
              Especialización en <br /> temperaturas controladas.
            </h2>
          </div>

          <div className='flex items-center gap-3'>
            <div className='bg-[#244E93] rounded-full p-3 shadow-md'>
              <a href='#contacto'>
                <Image src='/flecha.svg' alt='Flecha' width={20} height={20} />
              </a>
            </div>
            <span className='text-lg font-semibold text-[#1D1D1B]'>
              Contáctanos
            </span>
          </div>
        </div>

        {/* Contenido principal */}
        <div className='grid grid-cols-4 gap-8'>
          {/* Columna izquierda - Cards */}
          <div className='flex flex-col gap-4 justify-between'>
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
            ].map(({ icon, title, text }, i) => (
              <div
                key={i}
                className='bg-white shadow-md rounded-xl p-8 flex items-start gap-4'
              >
                <Image
                  src={icon}
                  alt={`Icono ${title}`}
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className='font-bold text-base text-[#1D1D1B]'>
                    {title}
                  </h3>
                  <p className='text-sm text-[#4D4D4D]'>{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Galería central - 2 columnas, 2 filas */}
          <div className='col-span-2 grid grid-cols-2 grid-rows-2 gap-3 min-w-[450px]'>
            {[
              "/whyus/lift.jpg",
              "/whyus/cargo.jpg",
              "/whyus/stock.jpg",
              "/whyus/temp.jpg",
            ].map((src, i) => (
              <div
                key={i}
                className='relative w-full aspect-[4/3] rounded-md overflow-hidden min-w-[160px]'
              >
                <Image
                  src={src}
                  alt={`Imagen ${i + 1}`}
                  fill
                  className='object-cover'
                />
              </div>
            ))}
          </div>

          {/* Columna derecha - Cards */}
          <div className='flex flex-col gap-4 justify-between'>
            {[
              {
                icon: "/why-4.svg",
                title: "Seguridad",
                text: "Contamos con detección de amoníaco y humo, red contra incendios y grupos electrogenos.",
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
            ].map(({ icon, title, text }, i) => (
              <div
                key={i}
                className='bg-white shadow-md rounded-xl p-8 flex items-start gap-4'
              >
                <Image
                  src={icon}
                  alt={`Icono ${title}`}
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className='font-bold text-base text-[#1D1D1B]'>
                    {title}
                  </h3>
                  <p className='text-sm text-[#4D4D4D]'>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
