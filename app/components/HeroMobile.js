import Image from "next/image";

export default function HeroMobile() {
  return (
    <section
      className='relative w-full min-h-screen bg-cover bg-no-repeat text-white'
      style={{ backgroundImage: "url('/bg-mobile.png')" }}
    >
      <div className='max-w-md mx-auto flex flex-col gap-5 px-4 pt-22 pl-12 relative z-10'>
        {/* ✅ Logo Image */}
        <div className='w-full'>
          <Image
            src='/mobilelogo.svg'
            alt='Blogistics Logo'
            width={254}
            height={40}
            priority
          />
        </div>

        {/* Text */}
        <div className='text-md text-white font-light'>
          Aliados en tu crecimiento.
        </div>
        <h1 className='text-5xl font-bold leading-tight'>Somos B Logistics</h1>

        {/* Buttons */}
        <div className='flex flex-col items-start gap-3 mt-4'>
          <a
            href='#contacto'
            className='px-6 py-3 bg-[#167DCD] text-white rounded-md font-semibold'
          >
            PEDIR PRESUPUESTO
          </a>
          <a
            href='#nosotros'
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
          className='w-3/4 ml-auto h-auto object-contain'
        />
      </div>
    </section>
  );
}
