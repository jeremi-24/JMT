'use client'
import {  Phone } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter(); // Initialisation du routeur
    
      const handleNavigate = () => {
        router.push("/contact"); // Redirection vers NissanPage.tsx
      };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
         <div className="flex gap-2 items-center mb-4">
      <h1 className="text-xl font-bold mr-5 mb-6">PROMOTION SUR LA PEUGEOT 301 ET LA PEUGEOT 508</h1>
      <button onClick={handleNavigate} className="flex items-center gap-2 rounded-full px-6 py-3 bg-[#c3002f] text-white hover:bg-red-900 transition">
          <span className="hidden md:inline">Contactez-nous</span> {/* Texte masqué sur mobile */}
          <Phone size={20} />
        </button>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image
          src="https://japanmotorstogo.com/wp-content/uploads/2022/03/Promo-Peugeot-301.jpeg" // Remplace par ton chemin d'image
          alt="Première image"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <Image
          src="https://japanmotorstogo.com/wp-content/uploads/2022/03/Promotion-Peugeot-508.jpg" // Remplace par ton chemin d'image
          alt="Deuxième image"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
