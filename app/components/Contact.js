// components/Contact.js
"use client";

import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xovlaaoz");

  if (state.succeeded) {
    return (
      <section className='bg-[#F9F9F9] py-20 px-4 text-center'>
        <h2 className='text-2xl font-bold mb-4 text-[#244E93]'>
          ¡Gracias por contactarnos!
        </h2>
        <p className='text-gray-600'>Te responderemos a la brevedad.</p>
      </section>
    );
  }

  return (
    <section className='bg-[#F9F9F9] py-20 px-4' id='contacto'>
      <div className='max-w-6xl mx-auto'>
        {/* Encabezado */}
        <div className='text-center mb-12'>
          <p className='text-lg tracking-widest text-[#244E93] font-medium uppercase mb-2'>
            — Contacto
          </p>
          <p className='text-gray-600 text-sm max-w-xl mx-auto'>
            Contactanos para que te ayudemos a empezar a mejorar tus problemas
            de transporte, almacenamiento y stock.
          </p>
        </div>

        {/* Contenido principal */}
        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Columna izquierda */}
          <div className='bg-white p-6 rounded-lg shadow-md space-y-6'>
            <div>
              <h3 className='text-xl font-exo font-semibold'>
                Base de operaciones en Buenos Aires
              </h3>
              <p className='text-sm font-exo text-gray-600 mt-2'>
                Ubicación estratégica en el Polo Industrial de Ezeiza, a solo 20
                minutos del Aeropuerto Internacional de Ezeiza y a 40 minutos de
                los principales terminales portuarias.
              </p>
            </div>

            {/* Imagen del mapa */}
            <div className='w-full'>
              <a
                href='https://maps.app.goo.gl/TXxivTKSfq86XAGX9'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/map.png'
                  alt='Mapa ubicación'
                  width={600}
                  height={300}
                  className='w-full rounded-md border border-gray-500 hover:opacity-90 transition'
                />
              </a>
            </div>

            {/* Teléfono */}
            <div>
              <p className='text-xs text-gray-600'>Atención al Cliente</p>
              <p className='text-[#244E93] font-semibold mt-1'>
                +54 9 11 6307 3483
              </p>
            </div>
          </div>

          {/* Columna derecha - Formulario */}
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Contáctanos</h3>
            <form onSubmit={handleSubmit} className='space-y-12'>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-semibold mb-1'
                >
                  E-mail
                </label>
                <input
                  id='email'
                  type='email'
                  name='email'
                  className='w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#244E93]'
                />
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-semibold mb-1'
                >
                  Mensaje
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='5'
                  className='w-full border border-gray-300 rounded-md px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#244E93]'
                />
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
              </div>

              <button
                type='submit'
                disabled={state.submitting}
                className='bg-[#244E93] text-white px-6 py-2 rounded-md font-semibold text-sm hover:bg-[#1f417a] transition cursor-pointer'
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
