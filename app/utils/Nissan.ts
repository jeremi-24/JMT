import {  collection, getDocs } from "firebase/firestore";

import { db } from "../firebase/config";



interface Car {
  name: string;
  description: string;
  badge: string;
  images: string[];
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

// Fonction pour récupérer toutes les voitures Nissan
export const getNissanCars = async () => {
  try {
    const categories = ["Crossover", "Berlines","SUV","UTILITAIRE","Super suv","BUS"];
    const cars: Car[] = [];

    for (const category of categories) {
      const querySnapshot = await getDocs(collection(db, `brands/Nissan/${category}`));
      
      querySnapshot.forEach((doc) => {
        // On n'inclut pas l'ID ici
        cars.push({
          name: doc.data().name,
          description: doc.data().description,
          badge: doc.data().badge,
          images: doc.data().images,
          spec: doc.data().spec || {},
        });
      });
    }

    return cars;
  } catch (error) {
    console.error("Erreur lors de la récupération des voitures Nissan :", error);
    return [];
  }
};
