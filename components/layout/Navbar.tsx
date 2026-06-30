import {
  Menu,
  Search,
  User,
  ShoppingBag,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">

      <nav className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        <button>
          <Menu size={28}/>
        </button>

        <h1 className="text-4xl tracking-[8px] font-light">
          MAKOBA
        </h1>

        <div className="flex items-center gap-5">

          <Search size={22}/>

          <User size={22}/>

          <ShoppingBag size={22}/>

        </div>

      </nav>

    </header>
  );
}