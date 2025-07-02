import Image from "next/image";

export default function HeroMobile() {
  return (
    <section
      className='relative w-full min-h-screen bg-cover bg-no-repeat text-white'
      style={{ backgroundImage: "url('/bg-mobile.png')" }}
    >
      <div className='max-w-md mx-auto flex flex-col gap-5 px-4 pt-26 relative z-10'>
        {/* ✅ Logo Image */}
        <div className='w-40'>
          <Image
            src='/logo-mobile.svg'
            alt='Blogistics Logo'
            width={160}
            height={40}
            priority
          />
        </div>

        {/* Text */}
        <div className='text-sm text-gray-400 uppercase'>
          Transforma tu negocio
        </div>
        <h1 className='text-4xl font-bold leading-tight'>Somos B Logistics</h1>

        {/* Buttons */}
        <div className='flex flex-col items-start gap-3 mt-4'>
          <a
            href='#'
            className='px-6 py-3 bg-blue-600 text-white rounded-md font-semibold'
          >
            PEDIR PRESUPUESTO
          </a>
          <a
            href='#'
            className='px-6 py-2 border border-white text-white rounded-md font-semibold'
          >
            Saber Más
          </a>
        </div>
      </div>

      {/* Truck Image */}
      <div className=''>
        <img
          src='/truck-mobile.png'
          alt='Truck'
          className='w-full h-auto object-contain'
        />
      </div>
    </section>
  );
}
