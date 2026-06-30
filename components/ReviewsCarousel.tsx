import { reviews } from "@/lib/dummyData";

export default function ReviewsCarousel() {
  return (
    <section className="px-4 md:px-8 py-10">
      <h2 className="text-xl font-semibold mb-6">Let customers speak for us</h2>
      <div className="flex overflow-x-auto gap-4 no-scrollbar">
        {reviews.map((r, idx) => (
          <div key={idx} className="flex-shrink-0 w-72 border rounded p-4">
            <p className="text-yellow-500 mb-2">{"★".repeat(r.rating)}</p>
            <p className="text-sm mb-3">{r.text}</p>
            <p className="text-xs text-neutral-500">{r.name} — {r.product}</p>
          </div>
        ))}
      </div>
    </section>
  );
}