import Image from "next/image";

export default function Hero() {
  return (
    <section
      className='font-afacad relative w-full bg-cover bg-no-repeat text-white py-16 px-6 md:px-12 lg:px-24'
      style={{ backgroundImage: "url('/bg-copo.png')" }}
    >
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-around gap-10 min-h-[500px]'>
        {/* Izquierda - Texto y botones */}
        <div className='flex flex-col gap-4 max-w-[700px] w-full text-center lg:text-left pb-40 '>
          <div className='text-lg font-semibold leading-[16px] text-white'>
            Aliados en tu crecimiento.
          </div>

          <h1 className='font-afacad text-[52px] font-bold'>
            Somos B Logistics
          </h1>

          <p className='text-[16px] lg:text-[18px] text-white leading-relaxed antialiased'>
            Soluciones logísticas integrales con especialización en temperaturas
            controladas, refrigeradas y congeladas.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start'>
            <a
              href='#contacto'
              className='px-6 py-3 bg-[#167DCD] text-white rounded-md font-semibold text-center'
            >
              PEDIR PRESUPUESTO
            </a>
            <a
              href='#nosotros'
              className='px-6 py-3 border border-[#167DCD] text-white rounded-md font-semibold text-center'
            >
              Saber Más
            </a>
          </div>
        </div>

        {/* Centro - Imagen del camión */}
        <div className='w-full'>
          <Image
            src='/logotruck.png'
            alt='Truck'
            width={400}
            height={300}
            className='hidden lg:block h-auto object-contain'
            priority
          />
        </div>

        {/* Derecha - Tarjetas con íconos */}
        <div className='flex flex-col gap-4 w-full max-w-xs items-center lg:items-start'>
          {/* Tarjeta 1 */}
          <div className='flex gap-4 bg-white rounded-xl p-5 shadow-md w-full'>
            <img src='/icon1.svg' alt='Icon 1' className='w-10 h-10' />
            <div>
              <p className=' font-semibold text-black text-base'>
                Logistica Integral
              </p>
              <p className=' text-sm text-[#717580] leading-snug'>
                Desde el proveedor hasta <br /> la puerta del cliente.
              </p>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className='flex gap-4 bg-white rounded-xl p-5 shadow-md w-full'>
            <img src='/icon2.svg' alt='Icon 2' className='w-10 h-10' />
            <div>
              <p className=' font-semibold text-black text-base'>
                Opreaciones in-house
              </p>
              <p className=' text-sm text-[#717580] leading-snug'>
                Gestion eficiente de stock
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
