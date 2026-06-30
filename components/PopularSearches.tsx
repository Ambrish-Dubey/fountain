const searches = ["Pilot Custom Heritage", "Graf Von Faber-Castell", "Pelikan M101N", "Kaweco Lunar Sport", "Montegrappa 007"];
export default function PopularSearches() {
  return (
    <section className="px-4 md:px-8 py-4 flex flex-wrap gap-2 text-xs">
      <span className="text-neutral-500">Popular Searches:</span>
      {searches.map((s) => (
        <span key={s} className="border rounded-full px-3 py-1 cursor-pointer hover:bg-neutral-100">{s}</span>
      ))}
    </section>
  );
}