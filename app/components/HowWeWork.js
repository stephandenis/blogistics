import Image from "next/image";

const steps = [
  {
    title: "Descarga",
    text: "Tenemos 3 Docks para mayor rapidez de servicio",
    icon: "/how/how-1.svg",
    id: "1",
  },
  {
    title: "Almacenamiento",
    text: "Contamos con 1500mts² cerrados y espacio para 44 pallets en el túnel de congelado",
    icon: "/how/how-2.svg",
    id: "2",
  },
  {
    title: "Actualización de Stock",
    text: "Controla tu stock en tiempo real las 24 horas del día",
    icon: "/how/how-3.svg",
    id: "3",
  },
  {
    title: "Distribución",
    text: "Desde el retiro en el punto de origen hasta su posterior entrega en el destino final",
    icon: "/how/how-4.svg",
    id: "4",
  },
];

export default function HowWeWork() {
  return (
    <section className='w-full px-4 py-16 bg-white text-center' id='trabajos'>
      <div className='mb-4 text-sm text-blue-800 font-medium uppercase'>
        — Como trabajamos
      </div>
      <h2 className='text-3xl font-bold text-gray-900 mb-12'>
        Un proceso simple
      </h2>

      <div className='max-w-7xl mx-auto'>
        {/* Desktop Grid */}
        <div className='hidden sm:flex flex-wrap justify-center gap-8'>
          {steps.map((step, index) => (
            <StepCard step={step} key={index} />
          ))}
        </div>

        {/* Mobile/Tablet Horizontal Scroll */}
        <div className='sm:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory'>
          <div className='flex gap-6 px-2 w-max'>
            {steps.map((step, index) => (
              <div key={index} className='snap-center'>
                <StepCard step={step} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step }) {
  return (
    <div className='relative flex flex-col items-center text-center w-[280px] shrink-0'>
      {/* Icon */}
      <div className='w-[80px] h-[80px] rounded-full bg-white shadow-lg flex items-center justify-center mb-2 z-10'>
        <Image src={step.icon} alt={step.title} width={40} height={40} />
      </div>

      {/* Vertical Line */}
      <div className='w-[1px] h-[30px] bg-[#EEEEEE]'></div>

      {/* Card */}
      <div className='relative bg-white rounded-xl shadow-md pt-10 pb-6 px-4 min-h-[230px] flex flex-col justify-start'>
        {/* Number */}
        <div className='absolute top-[-16px] left-1/2 -translate-x-1/2 bg-[#1B3C8C] text-white w-8 h-8 flex items-center justify-center text-sm font-semibold rounded-full border-4 border-white shadow-md'>
          {step.id < 5 ? `0${step.id}` : step.id}
        </div>

        <h4 className='font-bold text-[16px] mb-2 mt-6'>{step.title}</h4>
        <p className='text-sm text-gray-600 leading-relaxed'>{step.text}</p>
      </div>
    </div>
  );
}
