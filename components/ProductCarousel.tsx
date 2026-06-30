"use client";
import { useState, useRef } from "react";
import { Heart, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
  id: number;
  brand: string;
  title: string;
  price: number;
  salePrice: number | null;
  outOfStock: boolean;
  img: string;
};

export default function ProductCarousel({ 
  title, 
  tabs, 
  products 
}: { 
  title: string; 
  tabs: string[]; 
  products: Product[];
}) {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <section className="py-12 bg-[#f1ece2] overflow-hidden">
      <h2 className="text-center text-2xl md:text-3xl font-serif mb-4">{title}</h2>

      <div className="flex justify-center gap-8 mb-8">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`text-sm pb-1 border-b ${
              active === i ? "border-black text-black" : "border-transparent text-neutral-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="relative px-4 md:px-12">
        <button
          onClick={() => scroll(-1)}
          className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition"
        >
          <ChevronLeft size={22} className="text-neutral-500" />
        </button>

        <div 
          ref={ref} 
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4"
        >
          {products.map((p) => (
            <div
              key={p.id}
              className="flex-shrink-0 w-56 md:w-64 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group"
            >
              <div className="relative aspect-square">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {p.outOfStock && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white text-sm font-medium tracking-wider">OUT OF STOCK</span>
                  </div>
                )}

                <button className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white p-1.5 rounded-full shadow">
                  <Heart size={18} className="text-neutral-600" />
                </button>
              </div>

              <div className="p-4">
                <p className="text-xs text-neutral-500">{p.brand}</p>
                <p className="font-medium line-clamp-2 h-12 mt-1">{p.title}</p>
                
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    {p.salePrice ? (
                      <>
                        <span className="text-lg font-semibold">₹{p.salePrice}</span>
                        <span className="text-sm text-neutral-400 line-through ml-2">₹{p.price}</span>
                      </>
                    ) : (
                      <span className="text-lg font-semibold">₹{p.price}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll(1)}
          className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition"
        >
          <ChevronRight size={22} className="text-neutral-500" />
        </button>
      </div>

      <div className="flex justify-center mt-10">
        <button className="flex items-center gap-2 text-sm tracking-wide hover:underline">
          <span className="w-7 h-7 rounded-full border border-black flex items-center justify-center">
            <ArrowRight size={14} />
          </span>
          SHOP ALL {title.toUpperCase()}
        </button>
      </div>
    </section>
  );
}