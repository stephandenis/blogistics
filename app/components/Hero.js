"use client";
import { useState, useEffect } from "react";
import HeroMobile from "./HeroMobile";
import HeroTablet from "./HeroTablet";
import HeroDesktop from "./HeroDesktop";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setMounted(true);
    setWidth(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) {
    return <section className='w-full min-h-[600px] bg-[#F4F4F4]' />;
  }

  if (width < 768) return <HeroMobile />;
  if (width < 1200) return <HeroTablet />;
  return <HeroDesktop />;
}
