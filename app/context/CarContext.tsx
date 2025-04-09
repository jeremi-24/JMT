'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getNissanCars } from '../utils/Nissan';


 export interface Car {
  images: string[];
  name: string;
  description: string;
  badgeText?: string;
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
  badge?: string; 
}

interface CarContextType {
  peugeotCars: Car[];
  nissanCars: Car[];
  loading: boolean;
  error: string | null;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export const CarProvider = ({ children }: { children: ReactNode }) => {
  const peugeotCars: Car[] = [
    {
      images: [
        "https://cdn.motor1.com/images/mgl/QemxY7/s1/nuevo-peugeot-e-208-2024.jpg",
        "https://fotos.quecochemecompro.com/peugeot-208/peugeot-208-vista-delantera-dinamica.jpeg?size=1200x800",
      ],
      name: "208",
      description: "Compacte et dynamique, parfaite pour la ville.",
      badgeText: "Compacte",
    },
    {
      images: [
        "https://th.bing.com/th/id/R.7bfa5deebaaa8ba13318c4a39eb6419d?rik=cmVpjjq%2bAHWm2Q&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/OIP.Yvgr5L-BCWFAE2pK29DfsAHaE8?w=1500&h=1000&rs=1&pid=ImgDetMain",
      ],
      name: "3008",
      description: "Un SUV élégant avec une technologie de pointe.",
      badgeText: "SUV",
    },
  ];

  const [nissanCars, setNissanCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNissanCars = async () => {
      try {
        const fetchedCars = await getNissanCars();
        setNissanCars(fetchedCars);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Une erreur s'est produite lors de la récupération des voitures Nissan.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNissanCars();
  }, []);

  return (
    <CarContext.Provider value={{ peugeotCars, nissanCars, loading, error }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = (): CarContextType => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error("useCarContext must be used within a CarProvider");
  }
  return context;
};
