'use client'
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { getLassaCars } from '../utils/Lassa';

// Définition du contexte avec des valeurs par défaut
interface LassaCarsContextType {
  cars: Car[];
  loading: boolean;
  error: string | null;
}

interface Car {
  name: string;
  badge:string;
  image: string;
}

const LassaCarsContext = createContext<LassaCarsContextType | undefined>(undefined);

// Création du Provider
interface LassaCarsProviderProps {
  children: ReactNode;
}

export const LassaCarsProvider: React.FC<LassaCarsProviderProps> = ({ children }) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      try {
        const fetchedCars = await getLassaCars();
        setCars(fetchedCars);
      } catch (err: unknown) {  // Typage explicite de err
        if (err instanceof Error) {  // Vérification que err est bien une instance d'Error
          setError(err.message);  // Utilisation du message de l'erreur
        } else {
          setError('Une erreur s\'est produite lors de la récupération des voitures.');
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchCars();
  }, []); // Ne se lance qu'une seule fois au montage du composant
  
  return (
    <LassaCarsContext.Provider value={{ cars, loading, error }}>
      {children}
    </LassaCarsContext.Provider>
  );
};

// Hook pour utiliser le contexte
export const useLassaCars = (): LassaCarsContextType => {
  const context = useContext(LassaCarsContext);
  if (!context) {
    throw new Error('useLassaCars doit être utilisé à l\'intérieur de LassaCarsProvider');
  }
  return context;
};
