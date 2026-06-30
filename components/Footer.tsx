import { Heart, Package, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const info = ["About Us", "Our Story", "Track Your Order", "FAQs", "blog"];
const stores = ["Ahmedabad", "Bangalore", "Chennai", "Delhi", "Gurgaon", "Reviews"];
const policies = ["Terms of Service", "Privacy Policy", "Shipping Policy", "Exchange/Return Policy"];

export default function Footer() {
  return (
    <footer className="bg-[#f1ece2] text-[#272626] px-6 md:px-12 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-300">
        <div className="flex items-center gap-3 text-xl font-semibold tracking-wide">
          <span className="border border-black rounded-full w-10 h-10 flex items-center justify-center text-sm">
            TIPS
          </span>
          THE INDIAN PEN SHOW
        </div>
        <div className="hidden md:block flex-1 mx-8 border-t border-neutral-400" />
        <div className="flex gap-8 text-xs text-center">
          {[["We Care", Heart], ["Safe Shipping", Package], ["Expert Support", Phone]].map(([label, Icon]: any) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="border rounded-full w-10 h-10 flex items-center justify-center">
                <Icon size={16} />
              </span>
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 text-sm">
        <div>
          <h3 className="font-semibold mb-3">Subscribe to Our Newsletter</h3>
          <p className="text-xs text-neutral-600 mb-4">
            Get the latest updates on new products and upcoming sales
          </p>
          <div className="flex border border-neutral-400 max-w-xs">
            <input placeholder="Email Address" className="flex-1 bg-transparent px-3 py-2 text-xs outline-none" />
            <button className="px-4 text-xs font-medium border-l border-neutral-400">SUBSCRIBE →</button>
          </div>
          <div className="flex gap-4 mt-4">
            <FaFacebookF size={18} />
            <FaInstagram size={18} />
            <FaLinkedinIn size={18} />
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">More Information</h3>
          {info.map((i) => <p key={i} className="text-neutral-600 mb-2 text-xs">{i}</p>)}
        </div>

        <div>
          <h3 className="font-semibold mb-3">Store Locator</h3>
          {stores.map((i) => <p key={i} className="text-neutral-600 mb-2 text-xs">{i}</p>)}
        </div>

        <div>
          <h3 className="font-semibold mb-3">Policies</h3>
          {policies.map((i) => <p key={i} className="text-neutral-600 mb-2 text-xs">{i}</p>)}
        </div>
      </div>

      <p className="text-[10px] text-neutral-500 mt-8">© 2026 TIPS India</p>
    </footer>
  );
}