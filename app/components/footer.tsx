import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 ">
      <div className="container mx-auto px-12">
        {/* Section des colonnes */}
        <div className="flex flex-wrap justify-between gap-y-8">

          {/* Colonne de l'image */}
          <div className="w-full md:w-1/4 flex mb-6 md:mb-0 items-start  ">

            <Image src="/logo Png Blanc.png" alt="Japan Motors Togo" width={250} height={50} className="object-contain" />
          </div>

          {/* Services Clients */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-sm font-bold mb-4">SERVICES CLIENTS</h3>
            <ul className="space-y-1">
              <li><Link href="/promotion-nissan" className="text-xs hover:underline hover:text-[#c3002f]">Découvrez nos offres</Link></li>
              <li><Link href="/promotion-nissan" className="text-xs hover:underline hover:text-[#c3002f]">Promotions NISSAN</Link></li>
              <li><Link href="/promotion-nissan" className="text-xs hover:underline hover:text-[#c3002f]">Service Après Vente</Link></li>
              <li><Link href="/promotion-nissan" className="text-xs hover:underline hover:text-[#c3002f]">Glossaire</Link></li>
            </ul>
          </div>

          {/* Horaires */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-sm mb-4 font-bold">HORAIRE</h3>
            <p className="text-xs leading-loose">Lundi–Vendredi: 08:00 – 18:00</p>
            <p className="text-xs leading-loose">Samedi : 08:00 – 18:00</p>
            <p className="text-xs leading-loose">Dimanche : Fermé</p>
          </div>

          {/* Suivez-nous */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-sm mb-4 font-bold">SUIVEZ-NOUS</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/japanmotorstogo" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition">
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/japanmotorstogo" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:border-pink-600 hover:bg-pink-600 hover:text-white transition">
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link href="https://tg.linkedin.com/company/japanmotorstogo" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:border-blue-700 hover:bg-blue-700 hover:text-white transition">
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link href="https://www.tiktok.com/@japanmotorstogo" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:border-black hover:bg-slate-400 hover:text-white transition">
                <FaTiktok className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex justify-between border-t border-gray-600 pt-4">
        <p className="text-[10px] text-gray-400">
  © Japan Motors Togo – Powered by{' '}
  <Link href="https://sace-agency.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
    Sace Agency
  </Link>
</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
