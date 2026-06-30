"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    // title: "Graf Von Faber-Castell",
    subtitle: "Guilloche Champagne Blush",
    // cta: "Shop Now",
    image: "https://makoba.com/cdn/shop/files/Web_Banner_f385e531-cee5-402b-ad3a-85462f637071.jpg?v=1782204490"   // Fountain pen style
  },
  {
    // title: "New Kaweco Arrivals",
    subtitle: "Pocket-sized legends, fresh colours",
    // cta: "Shop Now",
    image: "https://makoba.com/cdn/shop/files/Web_Banner_b0cdd659-7915-4b79-8014-f65d34135b6c.jpg?v=1782717305"
  },
  {
    // title: "Limited Edition Pens",
    subtitle: "Explore exclusive collections",
    // cta: "Explore",
    image: "https://makoba.com/cdn/shop/files/Web_Banner_f385e531-cee5-402b-ad3a-85462f637071.jpg?v=1782204490"
  },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="px-3 md:px-6 pt-4">
      <div className="relative w-full md:max-w-[70%] mx-auto h-[55vw] md:h-[38vw] max-h-[600px] md:max-h-[420px] min-h-[280px] rounded-2xl overflow-hidden">
        
        {/* Background Image */}
        <Image
          src={slides[i].image}
          alt={slides[i].subtitle}
          fill
          className="object-cover"
          priority
        />

        {/* Overlay Gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" /> */}

        {/* Content */}
        <div className="relative z-10 max-w-md h-full flex flex-col justify-center px-8 md:px-16">
          <p className="text-xs md:text-sm tracking-widest uppercase mb-2 text-white">
            {/* {slides[i].title} */}
          </p>
          <h1 className="text-2xl md:text-4xl font-serif mb-6 text-white">
            {/* {slides[i].subtitle} */}
          </h1>
          {/* <button className="border border-white text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors w-fit"> */}
            {/* {slides[i].cta} */}
          {/* </button> */}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === i ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}