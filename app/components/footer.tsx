import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Section des colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 items-start">
          {/* Colonne de l'image */}
          <div className="col-span-1 flex justify-center self-start">
            <Image src="/logo Png Blanc.png" alt="Japan Motors Togo" width={220} height={220} />
          </div>

        

          {/* Autres sections */}
          <div className="col-span-1">
            <h3 className="text-sm mb-4">SERVICES CLIENTS</h3>
            <ul className="space-y-2">
              <li><Link href="/promotion-nissan" className="text-xs hover:underline hover:text-[#c3002f]">Découvrez nos offres</Link></li>
              <li><Link href="/promotion-nissan" className="text-xs hover:underline hover:text-[#c3002f]">Promotions NISSAN</Link></li>
              <li><Link href="/promotion-nissan" className="text-xs hover:underline hover:text-[#c3002f]">Service Après Vente</Link></li>
              <li><Link href="/promotion-nissan" className="text-xs hover:underline hover:text-[#c3002f]">Glossaire</Link></li>
            </ul>
          </div>

          {/* Horaires */}
          <div className="col-span-1">
            <h3 className="text-sm mb-4">HORAIRE</h3>
            <p className="text-xs">Lundi – Vendredi: 08:00 – 18:00</p>
            <p className="text-xs">Samedi : 08:00 – 18:00</p>
            <p className="text-xs">Dimanche : Fermé</p>
          </div>

            {/* Services Clients */}
            <div className="col-span-1">
            <h3 className="text-sm mb-4">LIENS </h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-xs hover:underline hover:text-[#c3002f]">Accueil</Link></li>
              <li><Link href="/nissan" className="text-xs hover:underline hover:text-[#c3002f]">NISSAN</Link></li>
              <li><Link href="/peugeot" className="text-xs hover:underline hover:text-[#c3002f]">PEUGEOT</Link></li>
              <li><Link href="/foton" className="text-xs hover:underline hover:text-[#c3002f]">Foton</Link></li>
              </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm mb-4">LIENS</h3>
            <ul className="space-y-2">
               <li><Link href="/lassa" className="text-xs hover:underline hover:text-[#c3002f]">Lassa</Link></li>
              <li><Link href="/canon" className="text-xs hover:underline hover:text-[#c3002f]">Canon</Link></li>
              <li><Link href="/blog" className="text-xs hover:underline hover:text-[#c3002f]">Blog</Link></li>
            </ul>
          </div>
        </div>
        

        {/* Copyright + Réseaux sociaux alignés */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-600 pt-4">
          <p className="text-sm text-gray-400">© Japan Motors Togo – Powered by Sace Agency</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
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
    </footer>
  );
};

export default Footer;
