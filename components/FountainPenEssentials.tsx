"use client";
import { useRef } from "react";

// const items = [
//   { name: "Ink Bottles", img: "/images/ink-bottles.jpg" },
//   { name: "Ink Cartridges", img: "/images/ink-cartridges.jpg" },
//   { name: "Pen Storage", img: "/images/pen-storage.jpg" },
//   { name: "Pistons / Converters", img: "/images/pistons-converters.jpg" },
//   { name: "Spare Nibs", img: "/images/spare-nibs.jpg" },
//   { name: "FP Cleaner Kit", img: "/images/fp-cleaner-kit.jpg" },
// ];


const items = [
  { name: "Ink Bottles", img: "https://makoba.com/cdn/shop/files/INKS_2ae662a7-455d-42ba-a08e-64fb911bcf2b_180x.png?v=1701438588", link: "/shop/ink-bottles" },
  { name: "Ink Cartridges", img: "https://makoba.com/cdn/shop/files/Ink_Cartridges_180x.png?v=1701438588", link: "/shop/ink-cartridges" },
  { name: "Pen Storage", img: "https://makoba.com/cdn/shop/files/Pen_Storage_180x.png?v=1701438588", link: "/shop/pen-storage" },
  { name: "Pistons / Converters", img: "https://makoba.com/cdn/shop/files/Piston_Converters_180x.png?v=1701438588", link: "/shop/pistons-converters" },
  { name: "Spare Nibs", img: "https://makoba.com/cdn/shop/files/Spare_Nibs_180x.png?v=1701438588", link: "/shop/spare-nibs" },
  { name: "FP Cleaner Kit", img: "https://makoba.com/cdn/shop/files/FP_Cleaners_180x.png?v=1701438588", link: "/shop/fp-cleaner-kit" },
];
export default function FountainPenEssentials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -240 : 240,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative px-4 md:px-8 py-10">
      <h2 className="text-center text-2xl md:text-3xl font-serif mb-10">
        Fountain Pen Essentials
      </h2>

      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-8 h-8 text-neutral-500 hover:text-neutral-900"
        aria-label="Scroll left"
      >
        ‹
      </button>

<div ref={scrollRef} className="flex gap-8 md:gap-10 overflow-x-auto scrollbar-hide scroll-smooth justify-start md:justify-center px-2">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="flex flex-col items-center flex-shrink-0 w-28 group"
          >
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-[#cdb593] overflow-hidden flex items-center justify-center bg-white transition-all duration-300 group-hover:border-neutral-900 group-hover:scale-105">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-sm text-center text-neutral-800 group-hover:text-neutral-900">
              {item.name}
            </p>
          </a>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-8 h-8 text-neutral-500 hover:text-neutral-900"
        aria-label="Scroll right"
      >
        ›
      </button>
    </section>
  );
}