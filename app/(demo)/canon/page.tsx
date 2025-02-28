"use client";

import { useCanon } from "@/app/context/CanonContext";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Page() {
  const { documents, loading, error } = useCanon();

  return (
    <div className="min-h-screen">
      {/* Section Hero Banner sans effet Parallax */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="https://japanmotorstogo.com/wp-content/uploads/2022/03/Gamme-Canon-banner.jpg"
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/25">
          <h1 className="text-white text-4xl font-bold">Bienvenue dans Canon</h1>
        </div>
      </div>

      {/* Section Liste des Documents */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl  font-semibold mb-6">Japan Motors Togo, representant officiel de Canon au Togo</h2>
        <h4 className="text-2xl mb-6">Nos imprimantes Canon compactes et puissantes offrent des résultats exceptionnels depuis le confort de votre maison</h4>

        {loading && <p className="text-gray-500">Chargement des documents...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={doc.image}
                alt={doc.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{doc.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section Restons en Contact */}
      {/* Section Restons en Contact */}
<div className="bg-blue-500 text-white py-6  mt-10">
  <div className="container mx-auto text-center">
    <h3 className="text-2xl font-semibold mb-4">Restons en Contact</h3>
   
    <div className="flex justify-center gap-6 mb-4">
      <p> <a href="https://wa.me/22891744987" className="underline">+228 91744987</a></p>
      <p> <a href="https://wa.me/22870674044" className="underline">+228 70674044</a></p>
      <p>Email: <a href="mailto:t.werem@japanmotorstogo.com" className="">t.werem@japanmotorstogo.com</a></p>
    </div>
    <a
      href="#contact-form"
      className="bg-[#c3002f] text-white px-6 py-2 rounded-full text-lg font-semibold"
    >
      Contacter
    </a>
  </div>
</div>

    </div>
  );
}
