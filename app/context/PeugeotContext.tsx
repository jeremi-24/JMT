"use client"
import { createContext, useContext, ReactNode } from "react";

interface Car {
  images: string[];
  name: string;
  description: string;
  badgeText: string;
}

interface PeugeotContextType {
  carData: Car[];
}

// Création du contexte avec une valeur par défaut vide pour éviter l'erreur TypeScript
const PeugeotContext = createContext<PeugeotContextType | undefined>(undefined);

export const PeugeotProvider = ({ children }: { children: ReactNode }) => {
  const carData: Car[] = [
    {
      images: [
        "https://cdn.motor1.com/images/mgl/QemxY7/s1/nuevo-peugeot-e-208-2024.jpg",
        "https://fotos.quecochemecompro.com/peugeot-208/peugeot-208-vista-delantera-dinamica.jpeg?size=1200x800",
        "https://th.bing.com/th/id/OIP.pQluiRfcCeNB78clj9oM4gAAAA?w=474&h=266&rs=1&pid=ImgDetMain",
        "https://cdn.motor1.com/images/mgl/y2PRoY/s3/2024-peugeot-208-facelift.jpg",
      ],
      name: "208",
      description: "Compacte et dynamique, parfaite pour la ville.",
      badgeText: "Compacte",
    },
    {
      images: [
        "https://th.bing.com/th/id/R.7bfa5deebaaa8ba13318c4a39eb6419d?rik=cmVpjjq%2bAHWm2Q&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/OIP.Yvgr5L-BCWFAE2pK29DfsAHaE8?w=1500&h=1000&rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.FY_NeZa46atPdsZCWdeGWQHaE1?w=1280&h=836&rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.X4zUOARytVGqorZv0yEx8wHaE8?w=1600&h=1067&rs=1&pid=ImgDetMain",
      ],
      name: "3008",
      description: "Un SUV élégant avec une technologie de pointe.",
      badgeText: "SUV",
    },
    {
      images: [
        "https://th.bing.com/th/id/OIP.f7b5JYgxwIbbdxlr4pWvMwHaE7?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.G-Cr9NhyIs0ESG5X1HDIGQHaE5?pid=ImgDet&w=474&h=313&rs=1",
        "https://th.bing.com/th/id/OIP.-MLwDzaszltxpX1AxnfsqQHaE5?pid=ImgDet&w=474&h=313&rs=1",
        "https://th.bing.com/th/id/OIP.f7b5JYgxwIbbdxlr4pWvMwHaE7?rs=1&pid=ImgDetMain",
      ],
      name: "5008",
      description: "Un SUV familial spacieux pour vos rêves.",
      badgeText: "Familiale",
    },
  ];

  return (
    <PeugeotContext.Provider value={{ carData }}>
      {children}
    </PeugeotContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const usePeugeot = () => {
  const context = useContext(PeugeotContext);
  if (!context) {
    throw new Error("usePeugeot must be used within a PeugeotProvider");
  }
  return context;
};
