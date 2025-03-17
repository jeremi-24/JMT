"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";

// Définition du type des articles de blog
interface Blog {
  id: string;
  titre: string;
  image: string[];
  texte: string;
  date: string;
}

// Définition du type du contexte
interface BlogContextType {
  documents: Blog[];
  loading: boolean;
  error: string | null;
}

// Création du contexte
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Création du Provider
interface BlogProviderProps {
  children: ReactNode;
}

// Définition du type des articles WordPress
interface WordPressPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
}

export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [documents, setDocuments] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://japanmotorstogo.com/wp-json/wp/v2/posts");
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des articles");
        }
        const data: WordPressPost[] = await response.json();

        // Transformer les articles WordPress au format du contexte
        const formattedBlogs: Blog[] = data.map((post) => ({
          id: post.id.toString(),
          titre: post.title.rendered,
          image: extractImagesFromContent(post.content.rendered),
          texte: post.content.rendered,
          date: post.date,
        }));

        setDocuments(formattedBlogs);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ documents, loading, error }}>
      {children}
    </BlogContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useBlog = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog doit être utilisé dans un BlogProvider");
  }
  return context;
};

// Fonction pour extraire les URLs des images du contenu HTML
const extractImagesFromContent = (html: string): string[] => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return Array.from(doc.querySelectorAll("img")).map((img) => img.src);
};

