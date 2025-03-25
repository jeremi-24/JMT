"use client";
import "../../../globals.css";

import React from "react";

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
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold">{article.titre}</h1>
      <p className="text-gray-500">{new Date(article.date).toLocaleDateString()}</p>
      
      {/* Affichage direct du contenu WordPress avec images */}
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: article.texte }}
      />
    </div>
  );
};

export default ArticlePage;
