"use client";
import "../../../globals.css";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useBlog } from "@/app/context/BlogContext";
import { motion } from "framer-motion";
import { ArrowRight, LoaderCircle } from "lucide-react";
import Link from "next/link";

const ArticlePage: React.FC = () => {
  const { documents, loading, error } = useBlog();
  const { id } = useParams(); // Récupère l'ID de l'article depuis l'URL
  const article = documents.find((doc) => doc.id === id);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };
  

  if (loading) return ( <div className="flex justify-center items-center h-screen">
              <LoaderCircle className="w-12 h-12 animate-spin text-blue-500" />
            </div>);
  if (error) return <p>Erreur: {error}</p>;
  if (!article) return <p>Article non trouvé</p>;

  return (
    <div>
    <div className="max-w-5xl mx-auto w-full px-2 py-10 t">
      <h1 className="text-4xl  text-left uppercase font-bold">{article.titre}</h1>
      {article.image && article.image.length > 0 && (
        <div className="relative w-full h-96 my-4 rounded-lg overflow-hidden">
          <Image
            src={article.image[0]}
            alt="Illustration de l'article"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      )}
      
      <p className="text-gray-500 detailpost text-justify">{new Date(article.date).toLocaleDateString()}</p>
      
      {/* Affichage direct du contenu WordPress avec images */}
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: article.texte }}
      />
      
    </div>
    <div className="bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto w-full px-4 py-4 t">
    <h3 className="text-2xl font-semibold dark:text-black uppercase mb-4">A LIRE AUSSI</h3>
    <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {documents.filter(doc => doc.id !== id).slice(0, 4).map((doc, index) => (
               <Link href={`/blog/${String(doc.id).toLowerCase()}`} key={doc.id}>
                 <motion.div
                   className="bg-white dark:bg-black shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-[340px] flex flex-col"
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
   
                   <div className="flex flex-col justify-between gap-2 p-3 dark:text-white text-sm text-gray-500 flex-grow">
                     <h5>{formatDate(doc.date)}</h5>
   
                     
                     <div
     className="text-sm  font-semibold text-gray-900 md:text-base dark:text-white line-clamp-4 overflow-hidden text-ellipsis"
     dangerouslySetInnerHTML={{ __html: doc.titre }}
   />
   
   
                     <div>
                       <button className="flex items-center police text-[#c3002f] hover:text-red-900">
                         <h6 className="police">Lire plus</h6>
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
           </div>
  );
};

export default ArticlePage;
