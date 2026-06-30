import { categories } from "@/lib/dummyData";
import Slider from "./Slider";
import Image from "next/image";

export default function CategoryTiles() {
  return (
    <section className="bg-[#f6efe6] px-4 md:px-10 py-12">
      <h2 className="text-2xl md:text-3xl font-serif text-center text-neutral-900 mb-8">
        Writing Essentials
      </h2>

      {/* Mobile: Static Grid */}
      <div className="grid grid-cols-3 gap-x-4 gap-y-6 md:hidden">
        {categories.map((c) => (
          <div key={c.title} className="text-center group">
            <div className="relative aspect-square rounded-full overflow-hidden ring-1 ring-[#d8c9b3] bg-white p-3 
                          transition-all duration-300 hover:ring-2 hover:ring-neutral-800 
                          group-hover:scale-105 group-hover:shadow-xl">
              
              <div className="relative w-full h-full rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={c.img || `https://picsum.photos/seed/${c.title}/400/400`}
                  alt={c.title}
                  fill
                  className="object-contain transition-all duration-300 group-hover:brightness-110"
                />
              </div>
            </div>
            
            <p className="text-xs mt-3 text-neutral-800 transition-colors group-hover:text-neutral-950">
              {c.title}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop: Arrow Slider */}
      <div className="hidden md:block relative">
        <Slider
          prevButtonClassName="absolute -left-6 top-1/3 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow ring-1 ring-[#d8c9b3] text-neutral-600 hover:text-neutral-900"
          nextButtonClassName="absolute -right-6 top-1/3 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow ring-1 ring-[#d8c9b3] text-neutral-600 hover:text-neutral-900"
        >
          {categories.map((c) => (
            <div key={c.title} className="flex-shrink-0 w-44 lg:w-48 text-center group">
              <div className="relative aspect-square rounded-full overflow-hidden ring-1 ring-[#d8c9b3] bg-white p-5 
                            transition-all duration-300 hover:ring-2 hover:ring-neutral-800 
                            group-hover:scale-105 group-hover:shadow-2xl">
                
                <div className="relative w-full h-full rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-contain transition-all duration-300 group-hover:brightness-110"
                  />
                </div>
              </div>
              
              <p className="text-sm mt-3 text-neutral-800 leading-snug transition-colors group-hover:text-neutral-950">
                {c.title}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}