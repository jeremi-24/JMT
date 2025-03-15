"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useBlog } from "@/app/context/BlogContext";
import Link from "next/link";
import { Eye } from "lucide-react";

export default function Page() {
  const { documents, loading, error } = useBlog();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Section Liste des Documents */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          NOS ACTUALITÉS
        </h2>
        <div className="border-t-8 border-[#c3002f] w-1/6 mb-10"></div>

        {loading && <p className="text-gray-500">Chargement des documents...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.id}
              className="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-full h-48 overflow-hidden">
                {Array.isArray(doc.image) ? (
                  doc.image.map((imageUrl, idx) => (
                    <Image
                      key={idx}
                      src={imageUrl}
                      alt={doc.titre}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  ))
                ) : (
                  <Image
                    src={doc.image}
                    alt={doc.titre}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                )}
              </div>
              <div className="p-3">
              {new Date(doc.date).toLocaleDateString()}
                <h3 className="text-base font-semibold text-gray-900">
                  {doc.titre}
                </h3>
               
                
              </div>
              {/* Bouton Lire l'article */}
              <div className="p-3">
                <Link href={`/blog/${doc.id.toLowerCase()}`}>
                  <button className="flex items-center text-[#c3002f]  hover:text-red-900">
                                 <span className="">Lire plus</span>
                                 <Eye className="ml-1" />
                               </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
