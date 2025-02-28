import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"; // Import des icônes

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Section des colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Infos Japon Motors Togo (2 colonnes) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <p className="text-sm">
              JAPAN MOTORS TOGO SAS est un concessionnaire automobile exclusif des véhicules neufs des marques NISSAN et FOTON, ainsi que des pièces de rechange et accessoires.
            </p>
          </div>

          {/* Services Clients */}
          <div className="col-span-1">
            <h3 className="font-semibold text-sm mb-4">SERVICES CLIENTS</h3>
            <ul className="list-disc pl-5">
              <li>
                <Link href="/promotion-nissan" className="text-xs hover:underline hover:text-[#c3002f]">
                  Découvrez nos offres
                </Link>
              </li>
              <li>
                <Link href="/promotion-nissan" className="text-xs hover:underline hover:text-[#c3002f]">
                  Promotions NISSAN
                </Link>
              </li>
              <li>
                <Link href="/promotion-nissan" className="text-xs hover:underline hover:text-[#c3002f]">
                  Service Après Vente
                </Link>
              </li>
              <li>
                <Link href="/promotion-nissan" className="text-xs hover:underline hover:text-[#c3002f]">
                  Glossaire
                </Link>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div className="col-span-1">
            <h3 className="font-semibold text-sm mb-4">HORAIRE</h3>
            <p className="text-xs ">Lundi – Vendredi: 08:00 – 18:00</p>
            <p className="text-xs">Samedi : 08:00 – 18:00</p>
            <p className="text-xs">Dimanche : Fermé</p>
          </div>
        </div>

        {/* Copyright + Réseaux sociaux alignés */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-600 pt-4">
          <p className="text-sm text-gray-400">© Japan Motors Togo – Powered by Sace Agency</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="https://www.facebook.com" target="_blank">
              <FaFacebook className="w-6 h-6 hover:text-blue-600" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <FaInstagram className="w-6 h-6 hover:text-pink-600" />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank">
              <FaLinkedin className="w-6 h-6 hover:text-blue-700" />
            </Link>
            <Link href="https://www.tiktok.com" target="_blank">
              <FaTiktok className="w-6 h-6 hover:text-black" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
