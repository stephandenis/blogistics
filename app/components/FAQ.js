// components/FAQ.js
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Qué tipos de productos?",
    answer:
      "Podemos almacenar productos refrigerados, congelados y secos con distintos requerimientos de temperatura y seguridad.",
  },
  {
    question: "¿Dónde están ubicados?",
    answer:
      "Nuestra planta está en el Polo Industrial de Ezeiza, Buenos Aires.",
  },
  {
    question: "¿Qué infraestructura ofrecen para almacenamiento?",
    answer:
      "1,500 m² cubiertos. 2 túneles de congelado con capacidad total para 44 pallets. 450 posiciones para almacenamiento refrigerado y congelado. 45 posiciones en antecámara. ",
  },
  {
    question: "¿Qué medidas de seguridad tienen en sus instalaciones?",
    answer:
      "Contamos con equipo detector de amoniaco, red de incendio, 2 grupos electrógenos y estrictos controles de calidad para asegurar el resguardo de tu mercadería.",
  },
  {
    question: "¿Ofrecen integración con sistemas propios del cliente?",
    answer:
      "Sí, podemos integrarnos con los sistemas de gestión logística del cliente para una operación más eficiente.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className='bg-white py-20 px-4 flex flex-col items-center'
      id='faq'
    >
      <div className='max-w-xl text-center'>
        <p className='text-xs tracking-widest text-[#244E93] font-medium uppercase mb-2'>
          FAQ
        </p>
        <h2 className='text-3xl font-bold mb-1 font-exo'>
          Preguntas Frecuentes
        </h2>
        <p className='text-gray-500 text-sm'>Conocé más de lo que ofrecemos</p>
      </div>

      <div className='mt-10 w-full max-w-[640px] space-y-2'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className='border border-gray-200 rounded-lg overflow-hidden shadow-sm'
          >
            <button
              onClick={() => toggle(index)}
              className='w-full flex justify-between items-center px-6 py-4 text-left text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none'
            >
              {faq.question}
              <ChevronDown
                className={`h-4 w-4 transform transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openIndex === index && (
              <div className='px-6 pb-4 text-sm text-gray-600'>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
