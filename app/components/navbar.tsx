"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white text-black p-4 z-50 shadow-md h-[90px]">
      <div className="container mx-auto flex justify-between items-center mb-10 h-full">
        <h1 className="text-3xl font-bold">
          <Image src="/logo jmt.jpg" alt="Mon Site" width={190} height={90} className="object-contain" />
        </h1>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul
          className={`md:flex absolute md:static w-full md:w-auto top-16 left-0 md:flex-row flex-col md:space-x-2 space-y-2 md:space-y-0 p-2 md:p-0 transition-all duration-300 ${
            isOpen ? "block bg-white border  " : "hidden"
          }`}
        >
          {["Accueil", "Nissan", "Peugeot", "Foton", "Lassa", "Canon", "Blog", "Contact"].map((item) => (
            <li key={item} className="px-2 py-1 text-xs transition-all">
              <Link 
                href={item === "Accueil" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-[#c3002f] hover:font-bold transition-all"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
