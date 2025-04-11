"use client";
import { createContext, useContext, ReactNode, useState, useEffect } from "react";

interface Car {
  images: string[];
  name: string;
  description: string;
  badgeText: string;
  design1?:{
    titre:string;
    description:string;
    image:string;
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

interface PeugeotContextType {
  carData: Car[];
  loading: boolean;
  error: string | null;
 
}

const PeugeotContext = createContext<PeugeotContextType | undefined>(undefined);

export const PeugeotProvider = ({ children }: { children: ReactNode }) => {
  const [carData, setCarData] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setCarData([
        
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
          spec: {
            moteur: "Essence/Diesel/Hybride",
           connectivite:"Apple CarPlay et Android Auto",
            systeme: "i-Cockpit , affichage 3D",
          },
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
          badgeText: "SUV",
          spec: {
            moteur: "Essence/Diesel/Hybride",
            confort:": Sièges  chauffants et ventilés",
            connectivite:": GPS",
            systeme: "Ecran tactile 8",
          },
          
        },
        {
          images: [
            "https://im.qccdn.fr/node/actualite-peugeot-408-premieres-impressions-104355/thumbnail_800x480px-138510.jpg",
            "https://www.topgear-magazine.fr/wp-content/uploads/2023/01/Essai-Peugeot-408-07.jpg",
            "https://journalauto.com/wp-content/uploads/2022/11/2-408-AR.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0WSHy4MtEhJ64sR4asPNxlLVLuWFkEPavRaJY9S7qJWGzob9Xg8YVHJ12EYdVzhQXUY&usqp=CAU"
          ],
          name: "408",
          description: "Une berline audacieuse et raffinée.",
          badgeText: "Berline",
          spec: {
            moteur: "Essence 1.6L",
            vitesse: "220 km/h",
            puissance: "218 ch",
            consommation: "7,56 L/100 km",
            systeme: "Écran tactile 10\" HD"
          },
          design1: {
            image: "https://cdn.peugeot.com/sites/default/files/2022-06/Peugeot_408_Design.jpg",
            titre: "UN DESIGN INATTENDU",
            description: "Fastback dynamique et innovant, la berline PEUGEOT 408 affiche une élégance moderne, une posture affirmée, aux lignes félines et acérées."
          },
          design2: {
            image: "https://cdn.motor1.com/images/mgl/OqNxpK/s1/2023-peugeot-408-interior.jpg",
            titre: "PEUGEOT I-COCKPIT®",
            description: "Volant compact, combiné digital 3D et écran tactile 10’’ HD pour une ergonomie incomparable et une technologie simple et à portée de main. Disponible en option sur la version GT."
          },
          design3: {
            image: "https://images.caradisiac.com/images/8/2/3/8/198238/S1-essai-video-peugeot-408-la-berline-haute-sur-pattes-qui-se-prend-pour-un-coupe-suv-736763.jpg",
            titre: "LA SÉCURITÉ AU VOLANT",
            description: "Davantage de sérénité sur la route grâce à un dispositif complet d'aides à la conduite : régulateur de vitesse adaptatif, freinage d’urgence, alerte de franchissement involontaire de ligne, surveillance des angles morts, etc."
          },
          design4: {
            image: "https://images.caradisiac.com/logos/6/8/4/2/196842/S1-essai-video-peugeot-408-la-berline-haute-sur-pattes-qui-se-prend-pour-un-coupe-suv-736765.jpg",
            titre: "DES PERFORMANCES MAÎTRISÉES",
            description: "Motorisations essence ou hybride rechargeable, pour une conduite fluide, réactive et équilibrée. La PEUGEOT 408 allie plaisir de conduite et maîtrise de la consommation."
          },
          design5: {
            image: "https://media.peugeot.fr/image/76/1/peugeot-408-2206styp-033.879761.43.jpg",
            titre: "UNE CONNECTIVITÉ AVANCÉE",
            description: "Services connectés de dernière génération : navigation en temps réel, mises à jour OTA, commande vocale intuitive, et même l’assistant vocal ChatGPT à bord pour enrichir vos trajets.*"
          },
          design6: {
            image: "https://images.caradisiac.com/images/8/2/3/8/198238/S1-essai-video-peugeot-408-la-berline-haute-sur-pattes-qui-se-prend-pour-un-coupe-suv-736764.jpg",
            titre: "CONFORT ET HABITABILITÉ",
            description: "Avec un empattement généreux, des sièges enveloppants et un espace aux jambes spacieux à l’arrière, la 408 offre un confort optimal pour tous les passagers, même sur les longs trajets."
          },
          design7: {
            image: "https://www.largus.fr/images/images/peugeot_408_gt_bleu-004.jpg",
            titre: "RAFFINEMENT INTÉRIEUR",
            description: "Des matériaux de qualité, des finitions soignées, une ambiance lumineuse personnalisable : à bord de la PEUGEOT 408, chaque détail est pensé pour sublimer vos trajets."
          },
         
        },
        
        
        {
          images: [
            "https://www.maryautomobiles.fr/uploads/editor/peugeot/Trafic%20Van%20E-Tech%202024/exterieur-2-e-rifter-2024.jpg",
            "https://th.bing.com/th/id/OIP.p4l-m1x5jKkhJNJKbvkOegHaEv?pid=ImgDet&w=474&h=303&rs=1",
            "https://th.bing.com/th/id/OIP.oHazyLVK5ypbm_qkG-PkqAHaEv?pid=ImgDet&w=474&h=303&rs=1",
            "https://th.bing.com/th/id/OIP.A2RVOA4OK6pClpcVX7mHbQHaE8?w=1024&h=683&rs=1&pid=ImgDetMain",
          ],
          name: "Rifter",
          description: "Un ludospace pratique et robuste.",
          badgeText: "Ludospace",
        },
        {
          images: [
            "https://www.autozeitung.de/assets/styles/article_image/public/field/images/01-peugeot-partner-vorstellung.jpg?itok=MSKTnjot",
            "https://i.bstr.es/espaciofurgo/2024/06/peugeot-e-partner_2-798x466.jpg",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvanreviewer.co.uk%2Fpeugeot%2Fe-partner%2Freview%2F3990%2F&psig=AOvVaw0tvorn5us_-q20h6sezwhf&ust=1744403858010000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj32ZCqzowDFQAAAAAdAAAAABAd",
            "https://www.peugeot.be/content/dam/peugeot/master/b2c/our-range/showroom/e-partner/new-canvas-update/PEUGEOT_PARTNER_2412DV_003_FR_M_MASTHEAD_1280x1280.jpg?imwidth=768",
            
          ],
          name: "Partner",
          description: "Un van confortable pour vos voyages en famille ou pro.",
          badgeText: "Van",
          spec: {
            moteur: "Essence/Diesel",
           connectivite:"Apple CarPlay et Android Auto",
            systeme: "Ecran tactile 8 pouces ",
            securite:"capteurs de stationnement ",
          },
        },
        {
          images: [
            "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_400e36cb44544129ab981b572d2d53d4.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWb20aB3tRpiPKFqWPAkcAucAEK6qBqGpzvuon-FcZkdjJuiixsyx-M6OsbsnicMKdSic&usqp=CAU",
            "https://www.peugeot.ma/content/dam/peugeot/morocco/b2c/landtrek/off-road/KP1_Off-Road_DC2_1214_1020.jpg?imwidth=768",
            "https://www.peugeot.be/content/dam/peugeot/master/b2c/our-range/showroom/e-partner/new-canvas-update/PEUGEOT_PARTNER_2412DV_003_FR_M_MASTHEAD_1280x1280.jpg?imwidth=768",
            
          ],
          name: "Landtrek",
          description: "Un van confortable pour vos voyages en famille ou pro.",
          badgeText: "Van",
          spec: {
            moteur: "Essence/Diesel",
           connectivite:"Apple CarPlay et Android Auto",
            systeme: "Ecran tactile 8 pouces ",
            securite:"capteurs de stationnement ",
          },
        },
      ]);
    } catch (err) {
      console.log("Erreur lors du chargement des données.",err);
      setError("Erreur lors du chargement des données.");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <PeugeotContext.Provider value={{ carData, loading, error }}>
      {children}
    </PeugeotContext.Provider>
  );
};

export const usePeugeot = () => {
  const context = useContext(PeugeotContext);
  if (!context) {
    throw new Error("usePeugeot must be used within a PeugeotProvider");
  }
  return context;
};
