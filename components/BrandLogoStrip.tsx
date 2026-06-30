const logoBrands = ["Colorverse", "Cross", "Delta", "Diamine", "Diplomat", "Elan", "Endless", "Esterbrook", "Kaweco", "Lamy", "Montegrappa", "Pilot", "Sailor", "Waterman"];

export default function BrandLogoStrip() {
  const loop = [...logoBrands, ...logoBrands]; // duplicate for seamless loop

  return (
    <section className="py-6 border-y border-neutral-200 bg-[#f1ece2] overflow-hidden">
      <div className="flex gap-12 animate-marquee w-max">
        {loop.map((b, i) => (
          <div key={i} className="flex-shrink-0 flex items-center justify-center text-sm font-semibold tracking-wide text-neutral-700 whitespace-nowrap">
            {b}
          </div>
        ))}
      </div>
    </section>
  );
}