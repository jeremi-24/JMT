"use client";
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";


// Définition du type des documents Foton
interface Foton {
  name: string;
  description: string;
  badge: string;
  images: string[];
}

// Définition du type du contexte
interface FotonContextType {
  documents: Foton[];
  loading: boolean;
  error: string | null;
}

// Création du contexte
const FotonContext = createContext<FotonContextType | undefined>(undefined);

// Création du Provider
interface FotonProviderProps {
  children: ReactNode;
}

export const FotonProvider: React.FC<FotonProviderProps> = ({ children }) => {
  const [documents, setDocuments] = useState<Foton[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "brands/Foton/model"),
      (snapshot) => {
        const fetchedDocs: Foton[] = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            name: data.name || "Nom inconnu", // Valeur par défaut si absent
            description: data.description || "Aucune description",
            badge: data.badge || "Aucun badge",
            images: Array.isArray(data.images) ? data.images : [],
          };
        });
  
        setDocuments(fetchedDocs);
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
  
    return () => unsubscribe();
  }, []);
  

  return (
    <FotonContext.Provider value={{ documents, loading, error }}>
      {children}
    </FotonContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useFoton = (): FotonContextType => {
  const context = useContext(FotonContext);
  if (!context) {
    throw new Error("useCanon doit être utilisé dans un CanonProvider");
  }
  return context;
};
