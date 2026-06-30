"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";

const NAV = ["Brands", "Collections", "Limited Editions", "Fountain Pens", "Gifts", "New Arrivals", "Inks", "Refills"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-neutral-200">
      {/* Announcement bar */}
      <div className="bg-brand-dark text-white text-xs text-center py-2 px-4">
        Explore Kaweco New Arrivals →
      </div>

      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-wide mx-auto md:mx-0">
          The Indian Pen Show
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {NAV.map((item) => (
            <Link key={item} href="#" className="hover:text-neutral-500">
              {item}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Search size={20} className="cursor-pointer" />
          <User size={20} className="cursor-pointer hidden md:block" />
          <div className="relative cursor-pointer">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-brand-dark text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-3 px-4 pb-4 text-sm font-medium">
          {NAV.map((item) => (
            <Link key={item} href="#" onClick={() => setMenuOpen(false)}>
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}