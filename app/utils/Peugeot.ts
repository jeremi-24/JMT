import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase/config";

interface Car {
  name: string;
  description: string;
  badge: string;
  images: string[];
}

// Fonction pour récupérer toutes les voitures Nissan
export const getNissanCars = async () => {
  try {
    const categories = ["Crossover", "Berlines"];
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
        });
      });
    }

    return cars;
  } catch (error) {
    console.error("Erreur lors de la récupération des voitures Nissan :", error);
    return [];
  }
};
