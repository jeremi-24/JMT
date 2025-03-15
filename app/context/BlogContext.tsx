"use client";
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";


// Définition du type des documents Blog
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

export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [documents, setDocuments] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "blog"),
      (snapshot) => {
        const fetchedDocs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Blog[]; // Casting des données
        setDocuments(fetchedDocs);
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Nettoyage de l'écouteur Firestore
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
    throw new Error("useCanon doit être utilisé dans un CanonProvider");
  }
  return context;
};
