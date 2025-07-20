export default function HeroTablet() {
  return (
    <section
      className='w-full bg-cover bg-no-repeat text-white py-10 px-6 md:px-12'
      style={{ backgroundImage: "url('/bg-tablet.png')" }}
    >
      <div className='max-w-6xl mx-auto relative flex flex-col gap-6 pt-10 px-4'>
        {/* Logo */}
        <div className='mb-4'>
          <img src='/tabletlogo.svg' alt='Logo' className='h-8' />
        </div>

        {/* Contenido principal */}
        <div className='flex flex-col md:flex-row justify-between items-start relative z-10'>
          {/* Texto + Botones */}
          <div className='flex flex-col gap-4 max-w-md z-20'>
            <p className='text-sm text-gray-400 uppercase'>
              Transforma tu negocio.
            </p>
            <h1 className='text-4xl font-bold leading-tight'>
              Somos
              <br />B Logistics
            </h1>

            <div className='flex flex-col gap-4 mt-4'>
              <a
                href='#contacto'
                className='px-6 py-3 bg-white text-black rounded-md font-semibold text-center'
              >
                PEDIR PRESUPUESTO
              </a>
              <a
                href='#nosotros'
                className='px-6 py-3 border border-white text-white rounded-md font-semibold text-center'
              >
                Saber Más
              </a>
            </div>
          </div>

          {/* Cards */}
          <div className='absolute right-0 top-[80px] flex flex-col gap-3 w-[320px] z-30'>
            <div className='flex items-start gap-3 bg-white text-black p-4 rounded-xl shadow-lg'>
              <img src='/icon1.svg' alt='Icon 1' className='w-8 h-8' />
              <div>
                <p className='font-bold'>Transporte Total</p>
                <p className='text-sm text-gray-600'>
                  Desde el proveedor hasta la puerta del cliente.
                </p>
              </div>
            </div>
            <div className='flex items-start gap-3 bg-white text-black p-4 rounded-xl shadow-lg'>
              <img src='/icon2.svg' alt='Icon 2' className='w-8 h-8' />
              <div>
                <p className='font-bold'>Carga y Descarga</p>
                <p className='text-sm text-gray-600'>
                  Contamos con Docks y Warehouses
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Camión */}
        <div className='relative -mt-8 z-0'>
          <img
            src='/truck-tablet.png'
            alt='Truck'
            className='ml-auto max-w-[500px]'
          />
        </div>
      </div>
    </section>
  );
}
