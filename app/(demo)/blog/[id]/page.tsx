"use client";
import "../../../globals.css";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useBlog } from "@/app/context/BlogContext";

const ArticlePage: React.FC = () => {
  const { documents, loading, error } = useBlog();
  const { id } = useParams(); // Récupère l'ID de l'article depuis l'URL
  const article = documents.find((doc) => doc.id === id);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;
  if (!article) return <p>Article non trouvé</p>;

  return (
    <div className="max-w-5xl mx-auto w-full p-4 text-justify">
      <h1 className="text-2xl font-bold">{article.titre}</h1>
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
  );
};

export default ArticlePage;
