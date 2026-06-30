




import Image from "next/image";



export default function ProductCard({ p }: { p: any }) {
  return (
    <div className="flex-shrink-0 w-48">
      <div className="bg-neutral-100 aspect-square rounded mb-2 relative">
        {p.outOfStock && (
          <span className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-1">
            Out of Stock
          </span>
        )}
      </div>
      <p className="text-xs text-neutral-500">{p.brand}</p>
      <p className="text-sm font-medium truncate">{p.title}</p>
      <div className="text-sm">
        {p.salePrice ? (
          <>
            <span className="line-through text-neutral-400 mr-2">₹{p.price}</span>
            <span className="font-semibold">₹{p.salePrice}</span>
          </>
        ) : (
          <span>₹{p.price}</span>
        )}
      </div>
    </div>
  );
}