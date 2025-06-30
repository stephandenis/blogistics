import Image from "next/image";

export default function TopBar() {
  return (
    <div className='hidden lg:flex justify-center items-center bg-[#244E93] text-white text-sm h-[50px] gap-x-6'>
      <div className='flex items-center gap-x-2'>
        <Image src='/phone.svg' alt='Teléfono' width={16} height={16} />
        <span>+54 11 9922299</span>
      </div>

      {/* Separador */}
      <div className='h-5 border-l border-white opacity-50' />

      <div className='flex items-center gap-x-2'>
        <Image src='/pin.svg' alt='Ubicación' width={16} height={16} />
        <span>Ezeiza, Buenos Aires</span>
      </div>
    </div>
  );
}
