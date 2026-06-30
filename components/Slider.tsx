"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeDot, setActiveDot] = useState(0);

  const childCount = Array.isArray(children) ? children.length : 1;

  const updateState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);

    // Rough "page" indicator: how far through the scrollable width we are
    const maxScroll = el.scrollWidth - el.clientWidth;
    const progress = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
    const dotCount = Math.max(1, Math.ceil(childCount / 4));
    setActiveDot(Math.min(dotCount - 1, Math.round(progress * (dotCount - 1))));
  }, [childCount]);

  useEffect(() => {
    updateState();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [updateState]);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;

    const firstCard = el.firstElementChild as HTMLElement | null;
    if (!firstCard) return;

    const styles = getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");
    const cardWidth = firstCard.getBoundingClientRect().width + gap;

    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  const dotCount = Math.max(1, Math.ceil(childCount / 4));

  return (
    <div className="relative w-full">
      {canScrollLeft && (
        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          className="hidden md:flex absolute -left-6 top-[40%] -translate-y-1/2 z-10 items-center justify-center text-neutral-700 hover:text-neutral-900 transition-colors"
        >
          <ChevronLeft size={28} strokeWidth={1.5} />
        </button>
      )}

      <div
        ref={trackRef}
        className="flex items-stretch overflow-x-auto gap-4 no-scrollbar scroll-smooth snap-x snap-mandatory scroll-px-4"
      >
        {children}
      </div>

      {canScrollRight && (
        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="hidden md:flex absolute -right-6 top-[40%] -translate-y-1/2 z-10 items-center justify-center text-neutral-700 hover:text-neutral-900 transition-colors"
        >
          <ChevronRight size={28} strokeWidth={1.5} />
        </button>
      )}

      {dotCount > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: dotCount }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === activeDot ? "w-5 bg-neutral-800" : "w-1.5 bg-neutral-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}