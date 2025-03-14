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
        <button className="flex items-center gap-2 w-[350px] mt-8 rounded-full px-6 py-3 bg-white text-[#c3002f] justify-center text-center hover:bg-[#c3002f] hover:text-white border border-[#c3002f] hover:border-red-700 transition">
          <span className="hidden md:inline">les actualités</span>
          <ArrowUpRight size={20} />
        </button>
      </div>
      <div className="border-t-8 border-red-500 w-1/5 mb-5"></div>
      {loading && <p className="text-gray-500">Chargement des documents...</p>}
        {error && <p className="text-red-500">{error}</p>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {documents.map((doc, index)=> (
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
          <div
            key={doc.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-all ease-in-out duration-300"
          >
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
            <div className="p-4">
              <h3 className="text-xl font-bold">{doc.titre}</h3>
              <p className="text-black mb-10 truncate">{doc.texte}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-75 p-3 flex justify-between items-center">
              <p className="text-gray-600 text-sm"> {new Date(doc.date).toLocaleDateString()} </p>
            <Link href={`/blog/${doc.id.toLowerCase()}`}>   <button className="flex items-center text-[#c3002f] hover:text-red-900">
                <span className='font-[var(--font-peugeot)]'>Lire plus</span>
                <ArrowRight className="ml-1" />
              </button> </Link>
            </div>
          </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsGallery;
