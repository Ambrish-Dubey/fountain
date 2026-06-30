import { brands } from "@/lib/dummyData";
import Slider from "./Slider";
import Image from "next/image";

const brandLogos: Record<string, string> = {
  "Lamy": "https://makoba.com/cdn/shop/files/Esterbrook_180x.png?v=1677499214",
  "Pilot": "https://makoba.com/cdn/shop/files/Aurora_180x.png?v=1677824754",
  "Parker": "https://makoba.com/cdn/shop/files/leonardo_180x.png?v=1677501563",
  "Sailor": "https://makoba.com/cdn/shop/files/TIBALDI_180x.png?v=1677501496",
  "Kaweco": "https://makoba.com/cdn/shop/files/SCRIBO-2_180x.png?v=1677501609",
  "Montblanc": "https://makoba.com/cdn/shop/files/Esterbrook_180x.png?v=1677499214",
  "Sheaffer": "https://makoba.com/cdn/shop/files/Faber-Castell_Pen_png_180x.png?v=1758197595",
  "Cross": "https://makoba.com/cdn/shop/files/Aurora_180x.png?v=1677824754",
  "Waterman": "https://makoba.com/cdn/shop/files/leonardo_180x.png?v=1677501563",
  "TWSBI": "https://makoba.com/cdn/shop/files/Faber-Castell_Pen_png_180x.png?v=1758197595",
  "Pelikan": "https://makoba.com/cdn/shop/files/Esterbrook_180x.png?v=1677499214",
  "Faber-Castell": "https://makoba.com/cdn/shop/files/Faber-Castell_Pen_png_180x.png?v=1758197595",
  "Montegrappa": "https://makoba.com/cdn/shop/files/MONTEGRAPPA_180x.png?v=1677498919",
  "Aurora": "https://makoba.com/cdn/shop/files/Aurora_180x.png?v=1677824754",
};

export default function BrandGrid() {
  return (
    <section className="px-4 md:px-8 py-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center">
        Exclusive Brands at Makoba
      </h2>

      {/* Desktop Slider */}
      <div className="hidden md:block">
        <Slider>
          {brands.map((b) => {
            const logoUrl =
              brandLogos[b] ||
              `https://picsum.photos/id/${(b.length * 10) % 200 + 100}/300/200`;

            return (
              <a
                key={b}
                href="#"
                className="flex-shrink-0 w-44 lg:w-48 text-center group"
              >
                <div
                  className="
                    relative aspect-square rounded-full overflow-hidden
                    ring-1 ring-[#d8c9b3] bg-white p-5
                    transition-all duration-300
                    hover:ring-2 hover:ring-black
                    group-hover:scale-105
                    group-hover:shadow-2xl
                  "
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={logoUrl}
                      alt={b}
                      fill
                      className="object-contain transition-all duration-300 group-hover:brightness-110"
                    />
                  </div>
                </div>

                <p className="text-sm mt-3 font-medium text-neutral-800 transition-colors group-hover:text-black">
                  {b}
                </p>
              </a>
            );
          })}
        </Slider>
      </div>

      {/* Mobile Grid */}
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {brands.map((b) => {
          const logoUrl =
            brandLogos[b] ||
            `https://picsum.photos/id/${(b.length * 10) % 200 + 100}/300/200`;

          return (
            <div key={b} className="text-center group">
              <div
                className="
                  relative aspect-square rounded-full overflow-hidden
                  ring-1 ring-[#d8c9b3] bg-white p-4
                  transition-all duration-300
                  hover:ring-2 hover:ring-black
                  group-hover:scale-105
                  group-hover:shadow-xl
                "
              >
                <div className="relative w-full h-full rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={logoUrl}
                    alt={b}
                    fill
                    className="object-contain transition-all duration-300 group-hover:brightness-110"
                  />
                </div>
              </div>

              <p className="text-sm mt-3 text-neutral-800 transition-colors group-hover:text-black">
                {b}
              </p>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <button className="border px-6 py-2 text-sm hover:bg-neutral-50 transition-colors">
          Explore All Brands
        </button>
      </div>
    </section>
  );
}