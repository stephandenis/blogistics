"use client";
import Image from "next/image";

const steps = [
  {
    icon: "/how/how-1.svg",
    title: "Descarga",
    text: "Tenemos 3 Docks para mayor rapidez de servicio",
  },
  {
    icon: "/how/how-2.svg",
    title: "Almacenamiento",
    text: "Contamos con 1500mts² cerrados y espacio para 44 pallets en el túnel de congelado",
  },
  {
    icon: "/how/how-3.svg",
    title: "Actualización de Stock",
    text: "Controla tu stock en tiempo real las 24 horas del día",
  },
  {
    icon: "/how/how-4.svg",
    title: "Distribución",
    text: "Desde el retiro en el punto de origen hasta su posterior entrega en el destino final",
  },
];

export default function WorkProcess() {
  return (
    <section className='w-full px-4 py-12'>
      {/* Título */}
      <div className='text-center mb-10'>
        <h3 className='text-sm text-[#244E93] font-medium mb-2'>
          — COMO TRABAJAMOS
        </h3>
        <h2 className='text-2xl font-bold text-[#1A1A1A]'>Un proceso simple</h2>
      </div>

      {/* Grid de pasos */}
      <div className='grid grid-cols-2 gap-6 md:flex md:flex-row md:justify-center'>
        {steps.map((step, index) => (
          <div
            key={index}
            className='relative flex flex-col items-center text-center'
          >
            {/* Icono redondo */}
            <div className='w-[110px] h-[110px] bg-white rounded-full shadow-md flex items-center justify-center -mb-6 z-10'>
              <Image src={step.icon} alt={step.title} width={50} height={50} />
            </div>

            {/* Card */}
            <div className='bg-white rounded-xl shadow-md p-6 h-[237px] w-full flex flex-col justify-center items-center text-center'>
              <h4 className='font-bold text-[16px] mb-2'>{step.title}</h4>
              <p className='text-sm text-gray-600'>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
