import Image from "next/image";

export default function Footer() {
  return (
    <footer className='bg-[#1F242E] text-white py-16 px-4'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12'>
        {/* Columna 1: Logo y descripción */}
        <div>
          <Image
            src='/footerlogo.svg' // Asegurate que este sea el logo blanco
            alt='Blogistics logo'
            width={80}
            height={80}
            className='mb-4'
          />
          <p className='text-sm text-gray-300 mb-6'>
            Proveemos soluciones
            <br />
            logísticas.
          </p>
        </div>

        {/* Columna 2: Necesitas ayuda */}
        <div>
          <h3 className='text-white font-bold mb-2 border-b-2 border-[#244E93] inline-block'>
            ¿Necesitás ayuda?
          </h3>
          <div className='text-sm text-gray-300 mt-4 space-y-2'>
            <p>Llamanos</p>
            <p className='text-white'>+54 9 116 307 3483</p>
            <p>Clientes</p>
            <p className='text-white'>info@blogistics.com</p>
            <p>Dónde estamos</p>
            <p className='text-white'>Ezeiza.</p>
          </div>
        </div>

        {/* Columna 3: Acceso clientes */}
        <div>
          <h3 className='text-white font-bold mb-2 border-b-2 border-[#244E93] inline-block'>
            Acceso clientes
          </h3>
          <p className='text-sm text-gray-300 mt-4 cursor pointer'>
            <a href='https://bovay.nimach-cloud-services.com/' target='_blank'>
              Iniciar sesión como cliente.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
