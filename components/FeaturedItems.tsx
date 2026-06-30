import Slider from "./Slider";
import { featuredItems } from "../lib/dummyData"; // adjust path to wherever your data file lives

export default function FeaturedItems() {
  return (
    <section className="px-4 md:px-8 py-12 bg-[#fafaf7]">
      <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-[0.3em] mb-10">
        FEATURED ITEMS
      </h2>

      <div className="max-w-7xl mx-auto">
        <Slider>
          {featuredItems.map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-72 border border-neutral-200 bg-white snap-start flex flex-col h-full mr-4 md:mr-6 last:mr-0"
            >
              <div className="bg-neutral-100 flex items-center justify-center overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>

              <div className="p-4 flex flex-col flex-1">
                <p className="text-xs font-medium tracking-wide uppercase mb-2 leading-snug">
                  {p.name}
                </p>

                <p className="text-sm mb-3 mt-auto">
                  ₹{p.price.toLocaleString("en-IN")}.00
                </p>

                <button className="w-full bg-[#cdb593] text-neutral-900 py-2.5 text-xs font-medium tracking-wide transition-colors duration-200 hover:bg-[#bda57e]">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
