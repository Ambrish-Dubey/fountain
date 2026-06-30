"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { title: "Beautiful pen", text: "I love the TWSBI, it is so beautiful and transparent", name: "D.D.G." },
  { title: "Smooth", text: "Writes so smoothly. Felt in love with this pen also the delivery was quick...", name: "O.K.c." },
  { title: "Good site for FP and accessories", text: "Good collections. Great price point. Love it.", name: "B.D." },
  { title: "Good", text: "Good", name: "A..." },
];

function Stars({ filled = 5 }: { filled?: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400 text-sm justify-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < filled ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function AboutStats() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);
  const r = reviews[i];

  return (
    <section className="px-4 md:px-8 py-12 bg-[#fafaf7]">
      <div className="text-center mb-6">
        <span className="inline-block bg-orange-200 px-5 py-1.5 font-serif italic text-lg md:text-xl">
          A Few Words About Us!!
        </span>
      </div>

      {/* trust row - compact, single line, no big circles */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-10 text-xs">
        <div className="flex items-center gap-1">
          <span className="text-amber-400">★★★★★</span>
          <span className="text-teal-700 font-medium">979 reviews</span>
        </div>
        <span className="text-neutral-300">|</span>
        <span className="text-neutral-500">
          Verified by <span className="font-semibold text-teal-700">Judge.me</span>
        </span>
      </div>

      {/* heading + stacked review, mobile-first */}
      <div className="max-w-md mx-auto text-center mb-2">
        <p className="font-serif text-xl md:text-2xl leading-tight mb-2">
          Pen connoisseur's share their experience
        </p>
        <Stars filled={4} />
        <p className="text-xs text-teal-700 mt-1">from 1084 reviews</p>
      </div>

      <div className="flex items-center gap-3 max-w-md mx-auto mt-6">
        <button onClick={prev} className="flex-shrink-0 p-1">
          <ChevronLeft size={18} />
        </button>

        <div className="text-left flex-1 min-h-[110px]">
          <Stars filled={5} />
          <p className="font-semibold mt-2 text-sm">{r.title}</p>
          <p className="text-sm text-neutral-600 mt-1">{r.text}</p>
          <p className="text-sm font-medium mt-4">{r.name}</p>
        </div>

        <button onClick={next} className="flex-shrink-0 p-1">
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}