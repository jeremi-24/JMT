"use client";
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";


// Définition du type des documents Canon
interface Canon {
  id: string;
  name: string;
  image: string;
  badge: string;
  spec:{
    type?: string;
    format?: string;
    vitesse?: string;
    resolution?: string;
    fonction?: string;
    qualite?: string;
    memoire?: string;
    interface?: string;
    capacite?: string;
    dimensions?: string;
    poids?: string;
  };
}

// Définition du type du contexte
interface CanonContextType {
  documents: Canon[];
  loading: boolean;
  error: string | null;
}

// Création du contexte
const CanonContext = createContext<CanonContextType | undefined>(undefined);

// Création du Provider
interface CanonProviderProps {
  children: ReactNode;
}

export const CanonProvider: React.FC<CanonProviderProps> = ({ children }) => {
  const [documents, setDocuments] = useState<Canon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "brands/imprimante/Canon"),
      (snapshot) => {
        const fetchedDocs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Canon[]; // Casting des données
        setDocuments(fetchedDocs);
        console.log(fetchedDocs);
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
    <CanonContext.Provider value={{ documents, loading, error }}>
      {children}
    </CanonContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useCanon = (): CanonContextType => {
  const context = useContext(CanonContext);
  if (!context) {
    throw new Error("useCanon doit être utilisé dans un CanonProvider");
  }
  return context;
};
