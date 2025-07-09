"use client";
import { useEffect, useState } from "react";
import WhyUsMobile from "./WhyUsMobile";
import WhyUsTablet from "./WhyUsTablet";
import WhyUsDesktop from "./WhyUsDesktop";

export default function WhyUsSelector() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth(); // Set initial value
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width === 0) return null; // Esperar que haya un valor

  if (width < 768) return <WhyUsMobile />;
  if (width < 1024) return <WhyUsTablet />;
  return <WhyUsDesktop />;
}
