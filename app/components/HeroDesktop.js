export default function Hero() {
  return (
    <section
      className='relative w-full bg-cover bg-no-repeat text-white py-16 px-6 md:px-12 lg:px-24'
      style={{ backgroundImage: "url('/bg-copo.png')" }}
    >
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-around gap-10 min-h-[500px]'>
        {/* Izquierda - Texto y botones */}
        <div className='flex flex-col gap-4 max-w-md text-center lg:text-left'>
          <div className='text-[20px] font-light leading-[16px] text-white'>
            Transforma tu negocio.
          </div>
          <h1 className='text-[40px] lg:text-[52px] font-bold leading-tight'>
            Somos B Logistics
          </h1>
          <p className='font-nunito text-[16px] lg:text-[18px] text-white leading-relaxed antialiased'>
            Soluciones logísticas integrales con especialización en temperaturas
            controladas, refrigeradas y congeladas.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start'>
            <a
              href='#'
              className='px-6 py-3 bg-[#167DCD] text-white rounded-md font-semibold text-center'
            >
              PEDIR PRESUPUESTO
            </a>
            <a
              href='#'
              className='px-6 py-3 border border-[#167DCD] text-white rounded-md font-semibold text-center'
            >
              Saber Más
            </a>
          </div>
        </div>

        {/* Centro - Imagen del camión */}
        <div className='w-full'>
          <img
            src='/logo-truck.png'
            alt='Truck'
            className='hidden lg:block w-full h-auto object-contain'
          />
        </div>

        {/* Derecha - Tarjetas con íconos */}
        <div className='flex flex-col gap-4 w-full max-w-xs items-center lg:items-start'>
          {/* Tarjeta 1 */}
          <div className='flex gap-4 bg-white rounded-xl p-5 shadow-md w-full'>
            <img src='/icon1.svg' alt='Icon 1' className='w-10 h-10' />
            <div>
              <p className='font-nunito font-semibold text-black text-base'>
                Transporte Total
              </p>
              <p className='font-nunito text-sm text-[#717580] leading-snug'>
                Desde el proveedor hasta <br /> la puerta del cliente.
              </p>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className='flex gap-4 bg-white rounded-xl p-5 shadow-md w-full'>
            <img src='/icon2.svg' alt='Icon 2' className='w-10 h-10' />
            <div>
              <p className='font-nunito font-semibold text-black text-base'>
                Carga y Descarga
              </p>
              <p className='font-nunito text-sm text-[#717580] leading-snug'>
                Contamos con Docks y Warehouses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
