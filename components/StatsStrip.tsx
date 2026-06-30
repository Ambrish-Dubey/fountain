const stats = ["50+ International Brands", "2000+ Fountain Pen Varieties", "#1 Pen Store In India"];

export default function StatsStrip() {
  return (
    <section className="bg-brand-dark text-white py-8 flex flex-col md:flex-row justify-around gap-4 text-center px-4">
      {stats.map((s) => (
        <p key={s} className="text-sm md:text-base font-medium">{s}</p>
      ))}
    </section>
  );
}