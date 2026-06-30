"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    title: "Fountain Pen Friendly Books",
    image:
      "https://makoba.com/cdn/shop/files/Buy_Fountain_Pen_Friendly_Notebooks_online_in_India_180x.png?v=1701537791",
  },
  {
    title: "Ruled Notebooks",
    image:
      "https://makoba.com/cdn/shop/files/Shop_for_Ruled_Books_in_India_180x.png?v=1701537791",
  },
  {
    title: "Unruled Notebooks",
    image:
      "https://makoba.com/cdn/shop/files/Shop_for_unRuled_Books_in_India_180x.png?v=1701537791",
  },
  {
    title: "Square Ruled Notebooks",
    image:
      "https://makoba.com/cdn/shop/files/Shop_for_Square_Ruled_Books_in_India_180x.png?v=1701537791",
  },
  {
    title: "Dot Ruled Notebooks",
    image:
      "https://makoba.com/cdn/shop/files/Shop_for_branded_notebooks_in_India_180x.png?v=1701537791",
  },
  {
    title: "2025 Organizers",
    image:
      "https://makoba.com/cdn/shop/files/Shop_for_Leather_and_non_leather_Organizers_online_in_India_180x.png?v=1701537791",
  },
];

export default function NotebooksSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollByAmount = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="px-4 md:px-8 py-12 bg-[#f5efe7] text-center">
      <h2 className="text-xl md:text-2xl font-serif mb-10">Your Thoughts Your Book</h2>

      {/* Desktop - Horizontal slider with arrow controls */}
      <div className="hidden md:block relative group max-w-6xl mx-auto px-2">
        {canScrollLeft && (
          <button
            onClick={() => scrollByAmount("left")}
            aria-label="Scroll left"
            className="absolute left-0 top-[60px] -translate-x-2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
          >
            <ChevronLeft className="w-5 h-5 text-neutral-700" />
          </button>
        )}

        <div
          ref={trackRef}
          className="flex gap-10 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-1"
          style={{ justifyContent: canScrollLeft || canScrollRight ? "flex-start" : "center" }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center snap-center"
            >
              <a href="#" className="group/item">
                <div className="w-[130px] h-[130px] md:w-[140px] md:h-[140px] rounded-full border-4 border-[#e8d9c7] overflow-hidden mb-4 shadow-sm transition-transform duration-300 ease-out group-hover/item:scale-105 group-hover/item:border-[#cdb593]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[15px] leading-tight text-neutral-800 font-medium max-w-[150px]">
                  {item.title}
                </p>
              </a>
            </div>
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scrollByAmount("right")}
            aria-label="Scroll right"
            className="absolute right-0 top-[60px] translate-x-2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
          >
            <ChevronRight className="w-5 h-5 text-neutral-700" />
          </button>
        )}
      </div>

      {/* Mobile - 3 Column Grid (unchanged) */}
      <div className="md:hidden grid grid-cols-3 gap-x-6 gap-y-10 max-w-3xl mx-auto">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border border-neutral-700 overflow-hidden mb-3 transition-transform duration-300 active:scale-95">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs leading-tight">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}