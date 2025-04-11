'use client'
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { getNissanCars } from '../utils/Nissan';

// Définition du contexte avec des valeurs par défaut
interface NissanCarsContextType {
  cars: Car[];
  loading: boolean;
  error: string | null;
}

interface Car {
  name: string;
  description: string;
  badge: string;
  images: string[];
  design?:{
    titre:string;
    description:string;
    image:string;
  };
  spec?: {
    moteur?: string;    // 👈 optionnel
    vitesse?: string; 
     puissance? :string;
     consommation? :string;
     securite? :string;
     confort? :string;
     connectivite? :string;
     longueur? :string;
     largeur? :string;
     hauteur? :string;
     transmission? :string;
     systeme ? :string; // 👈 optionnel
  };
}

const NissanCarsContext = createContext<NissanCarsContextType | undefined>(undefined);

// Création du Provider
interface NissanCarsProviderProps {
  children: ReactNode;
}

export const NissanCarsProvider: React.FC<NissanCarsProviderProps> = ({ children }) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      try {
        const fetchedCars = await getNissanCars();
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
    <NissanCarsContext.Provider value={{ cars, loading, error }}>
      {children}
    </NissanCarsContext.Provider>
  );
};

// Hook pour utiliser le contexte
export const useNissanCars = (): NissanCarsContextType => {
  const context = useContext(NissanCarsContext);
  if (!context) {
    throw new Error('useNissanCars doit être utilisé à l\'intérieur de NissanCarsProvider');
  }
  return context;
};
