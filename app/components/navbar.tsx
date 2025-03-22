"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white text-black p-4 z-50 shadow-md h-[90px]">
      <div className="container mx-auto flex justify-between items-center h-full">
        <h1 className="text-3xl font-bold">
          <Image src="/logo jmt.jpg" alt="Mon Site" width={190} height={90} className="object-contain" />
        </h1>
        {/* Bouton menu burger */}
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Desktop */}
        <ul className="hidden md:flex space-x-4">
          {["Accueil", "Nissan", "Peugeot", "Foton", "Lassa", "Canon", "Blog", "Contact"].map((item) => (
            <li key={item}>
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

      {/* Sidebar Mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>
        <ul className="mt-16 space-y-4 p-6">
          {["Accueil", "Nissan", "Peugeot", "Foton", "Lassa", "Canon", "Blog", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Accueil" ? "/" : `/${item.toLowerCase()}`}
                className="block text-lg hover:text-[#c3002f] hover:underline transition-all"
                onClick={() => setIsOpen(false)}
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
