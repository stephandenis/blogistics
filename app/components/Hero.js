"use client";
import HeroMobile from "./HeroMobile";
import HeroTablet from "./HeroTablet";
import HeroDesktop from "./HeroDesktop";
import { useEffect, useState } from "react";

export default function Hero() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width < 768) return <HeroMobile />;
  if (width < 1024) return <HeroTablet />;
  return <HeroDesktop />;
}
