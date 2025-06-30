export default function Hero() {
  return (
    <section className="relative bg-[url('/bg-desktop.png')] bg-cover bg-center text-white lg:h-[700px] overflow-hidden">
      {/* Gradiente oscuro al fondo */}

      <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-0' />

      <div className='relative z-10 container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12 min-h-[800px] py-20'>
        {/* Texto principal */}

        <div className='max-w-xl space-y-6 text-center lg:text-left lg:translate-y-[-80px]'>
          <p className='text-[18px] md:text-[20px] lg:text-[22px] font-semibold pt-4'>
            Transforma tu negocio.
          </p>
          <h1 className='text-4xl md:text-6xl lg:text-6xl font-bold'>
            Somos B Logistics
          </h1>
          <p className='text-sm md:text-base text-white/80 max-w-md mx-auto lg:mx-0'>
            Soluciones logísticas integrales con especialización en temperaturas
            controladas, refrigeradas y congeladas.
          </p>
          <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4'>
            <button className='bg-[#007bff] hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-semibold'>
              PEDIR PRESUPUESTO
            </button>
            <button className='border border-white hover:bg-white hover:text-black text-white px-6 py-2 rounded-md text-sm font-semibold'>
              Saber Más
            </button>
          </div>
        </div>

        {/* Imagen del camión */}
        <div className='relative w-full max-w-[622px] h-auto flex-shrink-0'>
          <img
            src='/truck.png'
            alt='Camión'
            className='w-full h-auto object-contain'
          />

          {/* Tarjetas informativas solo visibles en desktop */}
          <div className='hidden lg:flex absolute top-[18%] -right-[330px] flex-col gap-4 w-[315px]'>
            <div className='bg-white text-black p-4 rounded-xl shadow-md flex gap-3 items-center h-[122px]'>
              <img src='/icon1.svg' alt='icono transporte' className='mt-1' />
              <div>
                <p className='font-semibold text-[16px]'>Transporte Total</p>
                <p className='text-[12px] mt-1 text-[#717580] leading-[18px]'>
                  Desde el proveedor hasta la puerta del cliente.
                </p>
              </div>
            </div>
            <div className='bg-white text-black p-4 rounded-xl shadow-md flex gap-3 items-center h-[122px]'>
              <img src='/icon2.svg' alt='icono carga' className='mt-1' />
              <div>
                <p className='font-semibold text-[16px]'>Carga y Descarga</p>
                <p className='text-[12px] mt-1 text-[#717580] leading-[18px]'>
                  Contamos con Docks y Warehouses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
