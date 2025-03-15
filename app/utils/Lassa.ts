import {  collection, getDocs } from "firebase/firestore";

import { db } from "../firebase/config";



interface Car {
  name: string;
  badge:string;
  image: string;
}

// Fonction pour récupérer toutes les voitures Nissan
export const getLassaCars = async () => {
  try {
    const categories = ["VEHICULE PASSAGER","SUV","UTILITAIRE"];
    const cars: Car[] = [];

    for (const category of categories) {
      const querySnapshot = await getDocs(collection(db, `brands/Lassa/${category}`));
      
      querySnapshot.forEach((doc) => {
        // On n'inclut pas l'ID ici
        cars.push({
          name: doc.data().name,
          badge: doc.data().badge,
          image: doc.data().image,
        });
      });
    }

    return cars;
  } catch (error) {
    console.error("Erreur lors de la récupération des voitures Nissan :", error);
    return [];
  }
};
