import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

interface Foton {
  name: string;
  description: string;
  badge: string;
  images: string[];
  design1?: {
    titre: string;
    description: string;
    image: string;
  };
  design2?:{
    titre:string;
    description:string;
    image:string;
  };
  design3?:{
    titre:string;
    description:string;
    image:string;
  };
  design4?:{
    titre:string;
    description:string;
    image:string;
  };
  design5?:{
    titre:string;
    description:string;
    image:string;
  };
  design6?:{
    titre:string;
    description:string;
    image:string;
  };
  design7?:{
    titre:string;
    description:string;
    image:string;
  };
  spec?: {
    moteur?: string;
    vitesse?: string;
    puissance?: string;
    consommation?: string;
    securite?: string;
    confort?: string;
    connectivite?: string;
    longueur?: string;
    largeur?: string;
    hauteur?: string;
    transmission?: string;
    systeme?: string;
  };
}

interface FotonListener {
  onData: (data: Foton[]) => void;
  onError?: (error: string) => void;
}

export const getFoton = ({ onData, onError }: FotonListener) => {
  const unsubscribe = onSnapshot(
    collection(db, "brands/Foton/model"),
    (snapshot) => {
      const fetchedDocs: Foton[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          name: data.name || "Nom inconnu",
          description: data.description || "Aucune description",
          badge: data.badge || "Aucun badge",
          images: Array.isArray(data.images) ? data.images : [],
          design1: data.design1,
          design2: data.design2,
          design3: data.design3,
          design4: data.design4,
          design5: data.design5,
          design6: data.design6,
          design7: data.design7,
          spec: data.spec,
        };
      });
      onData(fetchedDocs);
    },
    (error) => {
      if (onError) onError(error.message);
    }
  );

  return unsubscribe; // Pour te permettre de l'arrêter plus tard si besoin
};
