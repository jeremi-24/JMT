import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useBlog } from "@/app/context/BlogContext";

const NewsGallery: React.FC = () => {
  const { documents, loading, error } = useBlog();

  return (
    <div className="container mx-auto py-8">
      <div className='flex justify-between items-center mb-3'>
        <h2 className="text-4xl font-bold text-left">ACTUALITES</h2>
      </div>
      <div className="border-t-8 border-red-500 w-1/5 mb-5"></div>
      {loading && <p className="text-gray-500">Chargement des documents...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.slice(0, 3).map((doc, index) => (  // Limite à 3 documents
          <Link href={`/blog/${doc.id.toLowerCase()}`} key={doc.id}>
            <motion.div
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
              <div
                className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-all ease-in-out duration-300"
              >
                {Array.isArray(doc.image) && doc.image.length > 0 ? (
                  <Image
                    src={doc.image[0]} // On prend seulement la première image du tableau
                    alt={doc.titre}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <Image
                    src={Array.isArray(doc.image) ? doc.image[0] : doc.image} // Vérifie et prend la première image
                    alt={doc.titre}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                )}

                <div className="p-4">
                  <p className="text-gray-600 text-sm">{doc.date}</p>
                  <h3 className="text-xl mb-7 font-bold">{doc.titre}</h3>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-center">
                  <button className="flex items-center text-[#c3002f] hover:text-red-900">
                    <h6>Lire plus</h6>
                    <ArrowRight className="ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <div className='mt-10'>
        <button className="max-w-xs md:max-w-xl lg:max-w-2xl justify-center flex items-center gap-2 rounded-full px-6 py-3 bg-[#c3002f] text-white hover:bg-white hover:text-red-700 hover:border hover:border-red-700 transition">
          <h5 className="hidden md:inline">Découvrir nos dernières actualités</h5>
          <ArrowUpRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default NewsGallery;
