"use client";
import React, { useState } from "react";
import Image from "next/image";
import TopBar from "./Topbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Trabajos", href: "#trabajos" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      <TopBar />

      <nav className='bg-[#244E93] lg:bg-white w-full shadow-sm'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center justify-between h-20 lg:h-[100px]'>
            {/* Logo */}
            <div className='hidden lg:block'>
              <a href='/'>
                <Image
                  src='/blogisticslogo.svg'
                  alt='Logo'
                  width={299}
                  height={47}
                  priority
                />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className='flex items-center lg:hidden'>
              <button
                onClick={toggleNavbar}
                className='p-2 rounded-md text-white focus:outline-none'
              >
                <svg
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className='hidden lg:flex space-x-6 font-semibold text-black'>
              {menuItems.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className='px-1 py-2 rounded-lg hover:text-[#097EC3] transition-colors'
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Acceso a Clientes */}
            <div className='flex justify-end w-full lg:w-auto'>
              <a
                href='https://bovay.nimach-cloud-services.com/'
                target='_blank'
                className='flex items-center gap-x-2 text-white font-semibold text-sm px-4 py-2
                           bg-[#244E93] rounded-md lg:rounded-xl lg:text-sm 
                           lg:w-[180px] lg:h-[55px] lg:justify-center'
              >
                <Image
                  src='/personsvg.svg'
                  alt='Acceso'
                  width={24}
                  height={28}
                  className='w-[14px] h-[16px] lg:w-[24px] lg:h-[28px]'
                />
                Acceso a Clientes
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className='lg:hidden bg-[#244E93]'>
            <div className='px-4 py-3 space-y-2 text-white'>
              {menuItems.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)} // cerrar menú al clickear
                  className='block rounded-lg px-3 py-2 hover:bg-white hover:text-black'
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
