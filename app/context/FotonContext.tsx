"use client";
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";


// Définition du type des documents Foton
interface Foton {
  id: string;
  name: string;
  image: string;
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
        const fetchedDocs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Foton[]; // Casting des données
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
