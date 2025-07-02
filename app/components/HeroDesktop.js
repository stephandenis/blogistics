export default function Hero() {
  return (
    <section
      className='w-full bg-cover bg-no-repeat text-white py-16 px-12 lg:px-24'
      style={{ backgroundImage: "url('/bg-desktop.png')" }}
    >
      <div className='max-w-7xl mx-auto flex justify-between items-center gap-12 min-h-[500px]'>
        {/* Left Side - Text and Buttons */}
        <div className='flex flex-col gap-4 max-w-md'>
          <div className='text-[22px] font-semibold tracking-wide text-white'>
            Transforma tu negocio.
          </div>
          <h1 className='text-5xl font-bold leading-tight'>
            Somos B Logistics
          </h1>
          <div className='text-[18px] text-white'>
            Soluciones logisticas integrales con especializacion en temperaturas
            controladas, refrigeradas y congeladas.
          </div>
          <div className='flex gap-4 mt-4'>
            <a
              href='#'
              className='px-6 py-3 bg-[#167DCD] text-white rounded-md font-semibold'
            >
              PEDIR PRESUPUESTO
            </a>
            <a
              href='#'
              className='px-6 py-3 border border-[#167DCD] text-white rounded-md font-semibold'
            >
              Saber Mas
            </a>
          </div>
        </div>

        {/* Center - Image */}
        <div className='w-full max-w-sm'>
          <img
            src='/truck-desktop.png'
            alt='Truck'
            className='hidden lg:block w-full h-auto object-contain'
          />
        </div>

        {/* Right Side - Icon Cards */}
        <div className='flex flex-col gap-6 max-w-xs w-full'>
          <div className='flex items-center gap-4 p-4 bg-white rounded-lg'>
            <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold'>
              <img src='/icon1.svg' alt='' />
            </div>
            <div>
              <p className='font-semibold text-black'>Transporte Total</p>
              <p className='text-sm text-[#717580]'>
                Desde el proveedor hasta la puerta del cliente.
              </p>
            </div>
          </div>
          <div className='flex items-center gap-4 p-4 bg-white rounded-lg'>
            <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold'>
              <img src='icon2.svg' alt='' />
            </div>
            <div>
              <p className='font-semibold text-black'>Carga y Descarga</p>
              <p className='text-sm text-[#717580]'>
                Contamos con Docks y Warehouses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
