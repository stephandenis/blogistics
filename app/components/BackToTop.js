"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // O usá cualquier ícono

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className='fixed bottom-6 right-6 p-3 rounded-full bg-[#244E93] text-white shadow-lg z-50 hover:bg-[#1a3c73] transition cursor-pointer'
        aria-label='Volver arriba'
      >
        <ArrowUp size={20} />
      </button>
    )
  );
}
