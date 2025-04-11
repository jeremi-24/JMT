"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useBlog } from "@/app/context/BlogContext";
import Link from "next/link";
import { ArrowRight, LoaderCircle } from "lucide-react";

export default function Page() {
  const { documents, loading, error } = useBlog();
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };
  

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-4xl font-semibold mb-4 text-gray-900">
          NOS ACTUALITÉS
        </h2>
        <div className="border-t-8 border-[#c3002f] w-1/6 mb-10"></div>

        {loading && (
          <div className="flex justify-center items-center h-screen">
            <LoaderCircle className="w-12 h-12 animate-spin text-blue-500" />
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <Link href={`/blog/${String(doc.id).toLowerCase()}`} key={doc.id}>
              <motion.div
                className="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-[340px] flex flex-col"
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
                  {doc.image.length > 0 ? (
                    <Image
                      src={doc.image[0]}
                      alt={doc.titre}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                      priority
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                      Aucune image
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-between gap-2 p-3 text-sm text-gray-500 flex-grow">
                  <h5>{formatDate(doc.date)}</h5>

                  
                  <div
  className="text-sm font-semibold text-gray-900 line-clamp-4 overflow-hidden text-ellipsis"
  dangerouslySetInnerHTML={{ __html: doc.titre }}
/>


                  <div>
                    <button className="flex items-center police text-[#c3002f] hover:text-red-900">
                      <span className="police">Lire plus</span>
                      <ArrowRight className="ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
