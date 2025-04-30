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
            "https://th.bing.com/th/id/OIP.X4zUOARytVGqorZv0yEx8wHaE8?w=1600&h=1067&rs=1&pid=ImgDetMain"
          ],
          name: "3008",
          description: "Un SUV élégant avec une technologie de pointe.",
          badgeText: "SUV",
          spec: {
            moteur: "Essence / Diesel / Hybride Rechargeable",
            connectivite: "Apple CarPlay et Android Auto",
            systeme: "i-Cockpit®, affichage 3D"
          },
          design1: {
            image: "https://cdn-xy.drivek.com/eyJidWNrZXQiOiJkYXRhay1jZG4teHkiLCJrZXkiOiJjb25maWd1cmF0b3ItaW1ncy9jYXJzL2ZyL29yaWdpbmFsL1BFVUdFT1QvMzAwOC80MzIzNF9TVVYtNS1ET09SUy9wZXVnZW90LTMwMDgtZnJvbnQtdmlldy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMjQsImhlaWdodCI6bnVsbCwiZml0IjoiY292ZXIifX19",
            titre: "UN DESIGN RAFFINÉ",
            description: "Le SUV PEUGEOT 3008 séduit par ses lignes sculptées, sa calandre chromée et ses feux LED signature. Un style affirmé et contemporain."
          },
          design2: {
            image: "https://www.turbo.fr/sites/default/files/2023-06/Peugeot%20panoramic%20i-Cockpit_03.jpg",
            titre: "UNE EXPÉRIENCE DE CONDUITE UNIQUE",
            description: "Avec le PEUGEOT i-Cockpit® de dernière génération, le 3008 propose un volant compact, un combiné numérique 3D et un écran tactile intuitif."
          },
          design3: {
            image: "https://mondial.paris/core/uploads/salons-pms/2022/10/128-Securite-aides-conduite-Top-10-001-Peugeot-3008.jpg",
            titre: "TECHNOLOGIES DE SÉCURITÉ",
            description: "Régulateur adaptatif, freinage automatique, maintien de voie... Le 3008 est équipé de nombreuses aides à la conduite pour une sécurité maximale."
          },
          design4: {
            image: "https://www.turbo.fr/sites/default/files/styles/content_img/public/2018-08/2_12.jpg?itok=r4JZeChU",
            titre: "DES MOTORISATIONS MODERNES",
            description: "Motorisations essence, diesel ou hybrides rechargeables jusqu’à 300 ch pour un plaisir de conduite optimal et une consommation maîtrisée."
          },
          design5: {
            image: "https://medias.degrifcars.com/photos/vehicules/degrif_v_55_0298-0009307_15.jpg",
            titre: "CONNECTIVITÉ TOTALE",
            description: "Apple CarPlay™, Android Auto™, recharge sans fil, navigation 3D connectée... Le 3008 embarque le meilleur de la technologie embarquée."
          },
          design6: {
            image: "https://vivacar-website-api.automanager.fr/uploads/Voitures/Peugeot/3008/Peugeot%203008%20hybride%20rechargeable/Peugeot%203008%20siege.webp",
            titre: "UN INTÉRIEUR PREMIUM",
            description: "Matériaux de qualité, sellerie soignée, ambiances lumineuses : l’habitacle du 3008 allie élégance et confort haut de gamme."
          },
          design7: {
            image: "https://www.facil-immat.fr/wp-content/uploads/2024/08/peugeot-3008-tout-sur-les-dimensions-du-coffre-spacieux.jpg",
            titre: "POLYVALENCE AU QUOTIDIEN",
            description: "Avec son grand coffre modulable et ses nombreuses aides à la conduite, le 3008 est pensé pour répondre aux exigences de la vie active."
          }
        },
        
        {
          images: [
            "https://th.bing.com/th/id/OIP.f7b5JYgxwIbbdxlr4pWvMwHaE7?rs=1&pid=ImgDetMain",
            "https://th.bing.com/th/id/OIP.G-Cr9NhyIs0ESG5X1HDIGQHaE5?pid=ImgDet&w=474&h=313&rs=1",
            "https://th.bing.com/th/id/OIP.-MLwDzaszltxpX1AxnfsqQHaE5?pid=ImgDet&w=474&h=313&rs=1",
            "https://th.bing.com/th/id/OIP.f7b5JYgxwIbbdxlr4pWvMwHaE7?rs=1&pid=ImgDetMain"
          ],
          name: "5008",
          description: "Un SUV familial spacieux pour vos rêves.",
          badgeText: "SUV",
          spec: {
            moteur: "Essence / Diesel / Hybride",
            confort: "Sièges chauffants et ventilés",
            connectivite: "GPS intégré",
            systeme: "Écran tactile 8\""
          },
          design1: {
            image: "https://cdn-xy.drivek.com/eyJidWNrZXQiOiJkYXRhay1jZG4teHkiLCJrZXkiOiJjb25maWd1cmF0b3ItaW1ncy9jYXJzL2ZyL29yaWdpbmFsL1BFVUdFT1QvNTAwOC80NDYwM19TVVYtNS1ET09SUy9wZXVnZW90LTUwMDgtZnJvbnQtdmlldy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMjQsImhlaWdodCI6bnVsbCwiZml0IjoiY292ZXIifX19",
            titre: "UN DESIGN PUISSANT",
            description: "Le SUV PEUGEOT 5008 se distingue par sa silhouette robuste, ses lignes tendues et son allure imposante. Un style audacieux qui reflète sa polyvalence et sa prestance sur la route."
          },
          design2: {
            image: "https://www.hessautomobile.com/img/cms/Modele/peugeot/5008/2.jpg",
            titre: "PEUGEOT I-COCKPIT®",
            description: "Avec son volant compact, son combiné numérique tête haute et son écran tactile central, le PEUGEOT i-Cockpit® offre une expérience de conduite intuitive et immersive."
          },
          design3: {
            image: "https://images.caradisiac.com/images/1/9/8/8/211988/S1-211988-821716.jpg",
            titre: "SÉCURITÉ RENFORCÉE",
            description: "Le PEUGEOT 5008 embarque des technologies avancées d’aide à la conduite : maintien de voie, régulateur adaptatif, freinage d'urgence, et surveillance des angles morts."
          },
          design4: {
            image: "https://www.largus.fr/images/styles/max_1300x1300/public/2024-10/Peugeot-5008-Hybrid-136ch-Allure-AC-2024-062_3.jpg?itok=jdNHXJgB",
            titre: "DES MOTORISATIONS POLYVALENTES",
            description: "Choisissez parmi des motorisations essence, diesel ou hybrides, pour des performances équilibrées et adaptées à vos besoins, que ce soit en ville ou sur autoroute."
          },
          design5: {
            image: "https://www.largus.fr/images/styles/max_1300x1300/public/2024-10/Peugeot-5008-Hybrid-136ch-Allure-AC-2024-046_3.jpg?itok=U4m4yPOx",
            titre: "CONNECTIVITÉ INTELLIGENTE",
            description: "Connectez votre monde à bord avec le GPS intégré, la compatibilité Apple CarPlay™ / Android Auto™, les ports USB multiples et les services connectés Peugeot."
          },
          design6: {
            image: "https://www.peugeot.ch/content/dam/peugeot/switzerland/our-range/white-label/5008/key-benefits/660x660_slider_5008_key-benefits-3_11-11-23.jpg?imwidth=1920",
            titre: "CONFORT POUR TOUS",
            description: "Sept places modulables, sièges chauffants/ventilés, climatisation tri-zone et insonorisation soignée : tout a été pensé pour le bien-être de chaque passager."
          },
          design7: {
            image: "https://www.largus.fr/images/styles/max_1300x1300/public/2024-03/peugeot-5008-restyle-2020-28.jpg?itok=cwLgugu6",
            titre: "RAFFINEMENT INTÉRIEUR",
            description: "Ambiance intérieure haut de gamme avec matériaux nobles, inserts chromés, éclairage d’ambiance LED, et design ergonomique pour une atmosphère premium."
          }
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
            image: "https://im.qccdn.fr/node/actualite-peugeot-408-premieres-impressions-104355/thumbnail_800x480px-138510.jpg",
            titre: "UN DESIGN INATTENDU",
            description: "Fastback dynamique et innovant, la berline PEUGEOT 408 affiche une élégance moderne, une posture affirmée, aux lignes félines et acérées."
          },
          design2: {
            image: "https://www.peugeot.fr/content/dam/peugeot/master/b2c/our-range/showroom/new-408/2024-11-update-visuals/desktop/PEUGEOT_E408_2405CNCV_304_Advantages2_632x632.jpg?imwidth=1920",
            titre: "PEUGEOT I-COCKPIT®",
            description: "Volant compact, combiné digital 3D et écran tactile 10’’ HD pour une ergonomie incomparable et une technologie simple et à portée de main. Disponible en option sur la version GT."
          },
          design3: {
            image: "https://www.peugeot.fr/content/dam/peugeot/master/b2c/our-range/showroom/new-408/2024-09-new-e-408-white-label/new-e-408-electric-white-label/PEUGEOT_E408_Atouts3_632x632.jpg?imwidth=1920",
            titre: "LA SÉCURITÉ AU VOLANT",
            description: "Davantage de sérénité sur la route grâce à un dispositif complet d'aides à la conduite : régulateur de vitesse adaptatif, freinage d’urgence, alerte de franchissement involontaire de ligne, surveillance des angles morts, etc."
          },
          design4: {
            image: "https://vivacar-website-api.automanager.fr/uploads/Voitures/Peugeot/408/Peugeot%20408%20motorisation.webp",
            titre: "DES PERFORMANCES MAÎTRISÉES",
            description: "Motorisations essence ou hybride rechargeable, pour une conduite fluide, réactive et équilibrée. La PEUGEOT 408 allie plaisir de conduite et maîtrise de la consommation."
          },
          design5: {
            image: "https://www.peugeot.fr/content/dam/peugeot/master/b2c/our-range/showroom/new-408/2024-09-new-e-408-white-label/new-e-408-electric-white-label/PEUGEOT_E408_Atouts5_632x632.jpg?imwidth=1920",
            titre: "UNE CONNECTIVITÉ AVANCÉE",
            description: "Services connectés de dernière génération : navigation en temps réel, mises à jour OTA, commande vocale intuitive, et même l’assistant vocal ChatGPT à bord pour enrichir vos trajets.*"
          },
          design6: {
            image: "https://cdn.motor1.com/images/mgl/GkAyA/s1/peugeot-408-2018.jpg",
            titre: "CONFORT ET HABITABILITÉ",
            description: "Avec un empattement généreux, des sièges enveloppants et un espace aux jambes spacieux à l’arrière, la 408 offre un confort optimal pour tous les passagers, même sur les longs trajets."
          },
          design7: {
            image: "https://www.tendanceaumasculin.fr/wp-content/uploads/2022/06/peugeot-408-vue-interieure.jpg",
            titre: "RAFFINEMENT INTÉRIEUR",
            description: "Des matériaux de qualité, des finitions soignées, une ambiance lumineuse personnalisable : à bord de la PEUGEOT 408, chaque détail est pensé pour sublimer vos trajets."
          },
         
        },
        
        
        {
          images: [
            "https://www.maryautomobiles.fr/uploads/editor/peugeot/Trafic%20Van%20E-Tech%202024/exterieur-2-e-rifter-2024.jpg",
            "https://th.bing.com/th/id/OIP.p4l-m1x5jKkhJNJKbvkOegHaEv?pid=ImgDet&w=474&h=303&rs=1",
            "https://th.bing.com/th/id/OIP.oHazyLVK5ypbm_qkG-PkqAHaEv?pid=ImgDet&w=474&h=303&rs=1",
            "https://th.bing.com/th/id/OIP.A2RVOA4OK6pClpcVX7mHbQHaE8?w=1024&h=683&rs=1&pid=ImgDetMain"
          ],
          name: "Rifter",
          description: "Un ludospace pratique et robuste.",
          badgeText: "Ludospace",
          spec: {
            moteur: "Essence / Diesel / Électrique (e-Rifter)",
            connectivite: "Écran tactile, Mirror Screen",
            systeme: "PEUGEOT i-Cockpit® simplifié"
          },
          design1: {
            image: "https://professionnel.peugeot.fr/content/dam/peugeot/master/b2b/our-range/e-rifter/l-m/desk-_0000_PEUGEOT_RIFTER_2102STYP100_FR.jpg?imwidth=1920",
            titre: "UN STYLE TOUT-TERRAIN",
            description: "Avec ses barres de toit, son garde-boue renforcé et sa garde au sol relevée, le Rifter adopte un look de baroudeur urbain prêt pour toutes vos aventures."
          },
          design2: {
            image: "https://www.largus.fr/images/styles/max_1300x1300/public/images/peugeot-rifter-electrique-test-autonomie-15.jpg?itok=cnPOUcH_",
            titre: "POSTE DE CONDUITE MODERNE",
            description: "Profitez d’un tableau de bord épuré, du volant compact et de l'écran tactile central avec Mirror Screen, compatible Android Auto™ et Apple CarPlay™."
          },
          design3: {
            image: "https://www.largus.fr/images/images/txt_peugeot-rifter-2018-56.jpg",
            titre: "SÉCURITÉ ACTIVE",
            description: "Aide au démarrage en côte, freinage d'urgence, régulateur de vitesse et lecture des panneaux : le Rifter veille sur vous à chaque trajet."
          },
          design4: {
            image: "https://hdituning.b-cdn.net/wp-content/uploads/2022/07/citroen-cactus-uk-1500.jpg",
            titre: "DES MOTORISATIONS POUR TOUS",
            description: "Disponible en versions essence, diesel ou 100% électrique (e-Rifter), il s’adapte à tous les usages, en ville comme sur route."
          },
          design5: {
            image: "https://www.peugeot.lu/content/dam/peugeot/master/b2c/our-range/rifter---e-rifter/mobile/750_PEUGEOT_RIFTER_2021_063_FR.jpg?imwidth=768",
            titre: "CONNECTÉ À VOTRE VIE",
            description: "Navigation, musique, appels, commandes vocales : profitez d’une connectivité fluide grâce au système Mirror Screen et au Bluetooth intégré."
          },
          design6: {
            image: "https://www.latribuneauto.com/media/cache/resolve/vehicule_slider/photos/PEUGEOT/Rifter%20Standard/PEUG-RIFS-LU-18-100053/Peugeot-Rifter-Ludospace-Compact-Copyright-Peugeot-22.jpg",
            titre: "UN ESPACE GÉNÉREUX",
            description: "Jusqu’à 7 places, un volume de coffre impressionnant et des rangements partout : le Rifter est l’allié des familles et des pros."
          },
          design7: {
            image: "https://www.autohome-official.com/wp-content/uploads/2021/01/Peugeot-Autohome-Official.jpg",
            titre: "ROBUSTESSE AU QUOTIDIEN",
            description: "Conçu pour durer, le Rifter affiche une qualité de fabrication irréprochable et une modularité pensée pour tous les jours."
          }
        },    
        {
          images: [
            "https://www.autozeitung.de/assets/styles/article_image/public/field/images/01-peugeot-partner-vorstellung.jpg?itok=MSKTnjot",
            "https://i.bstr.es/espaciofurgo/2024/06/peugeot-e-partner_2-798x466.jpg",
            "https://vanreviewer.co.uk/peugeot/e-partner/review/3990/",
            "https://www.peugeot.be/content/dam/peugeot/master/b2c/our-range/showroom/e-partner/new-canvas-update/PEUGEOT_PARTNER_2412DV_003_FR_M_MASTHEAD_1280x1280.jpg?imwidth=768"
          ],
          name: "Partner",
          description: "Un van confortable pour vos voyages en famille ou pro.",
          badgeText: "Van",
          spec: {
            moteur: "Essence/Diesel",
            connectivite: "Apple CarPlay et Android Auto",
            systeme: "Ecran tactile 8 pouces",
            securite: "capteurs de stationnement"
          },
          design1: {
            image: "https://www.peugeottunisie.com/content/dam/peugeot/master/b2c/our-range/showroom/e-partner/2023-10---new-e-partner/mobile/PEUGEOT_PARTNER_R_2023_BEV_ALLURE_MOBILE_750x700_1.jpg?imwidth=768",
            titre: "UN DESIGN PRATIQUE ET FONCTIONNEL",
            description: "Le Peugeot Partner se distingue par une silhouette robuste, pensée pour s’adapter aux besoins des professionnels comme des familles actives."
          },
          design2: {
            image: "https://www.peugeottunisie.com/content/dam/peugeot/master/b2c/our-range/showroom/e-partner/2023-10---new-e-partner/mobile/PEUGEOT_PARTNER_R_2023_BEV_ONSITE_MULTIMEDIA_TEASER_EMOTION_MOBILE_750x700_1.jpg?imwidth=768",
            titre: "UN COCKPIT ADAPTÉ",
            description: "Avec le Peugeot i-Cockpit®, profitez d'une expérience de conduite ergonomique et moderne, pensée pour maximiser votre efficacité."
          },
          design3: {
            image: "https://smarty-trend.com/9479-superlarge_default/peugeot-rifterpartner-2018-2023-android-head-unit-carplay.jpg",
            titre: "TECHNOLOGIES INTELLIGENTES",
            description: "Système multimédia 8'' compatible avec Android Auto et Apple CarPlay, pour une connectivité fluide au quotidien."
          },
          design4: {
            image: "https://www.peugeot.fr/content/dam/peugeot/master/b2c/our-range/showroom/e-partner/2025-02-partner-update-whitout-new/partner-diesel/PEUGEOT_PARTNER_2412GJ_200_FR_D_Advantages3_626x294.jpg?imwidth=1920",
            titre: "SÉCURITÉ AVANCÉE",
            description: "Assistance au stationnement, régulateur de vitesse et freinage d’urgence automatique garantissent des trajets plus sûrs."
          },
          design5: {
            image: "https://www.peugeot.fr/content/dam/peugeot/master/b2c/our-range/showroom/e-partner/2024-12--new-partner---december-window/new-partner-wl/PEUGEOT_E-PARTNER_2412GJ_507_FR_D_Advantages1_626x294.jpg?imwidth=1920",
            titre: "ESPACE MODULABLE",
            description: "Un intérieur spacieux et modulaire avec de multiples rangements pour répondre à tous vos besoins."
          },
          design6: {
            image: "https://www.peugeot.fr/content/dam/peugeot/master/b2c/our-range/showroom/e-partner/2024-12--new-partner---december-window/new-partner-wl/PEUGEOT_PARTNER_2412GJ_400_FR_D_Advantages2_626x294.jpg?imwidth=1920",
            titre: "CONFORT À BORD",
            description: "Climatisation, insonorisation soignée et suspensions optimisées pour un confort optimal sur tous les trajets."
          },
          design7: {
            image: "https://www.ateamautomotive.fr/AutomateImages/parts/18933008/e29092a9-708c-49a4-bca6-bcfba5fcbbcc.webp",
            titre: "ÉCONOMIE DE CARBURANT",
            description: "Consommation maîtrisée grâce à des motorisations sobres et performantes adaptées à vos déplacements."
          }
        }
        ,
        {
          images: [
            "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_400e36cb44544129ab981b572d2d53d4.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWb20aB3tRpiPKFqWPAkcAucAEK6qBqGpzvuon-FcZkdjJuiixsyx-M6OsbsnicMKdSic&usqp=CAU",
            "https://www.peugeot.ma/content/dam/peugeot/morocco/b2c/landtrek/off-road/KP1_Off-Road_DC2_1214_1020.jpg?imwidth=768",
            "https://www.peugeot.be/content/dam/peugeot/master/b2c/our-range/showroom/e-partner/new-canvas-update/PEUGEOT_PARTNER_2412DV_003_FR_M_MASTHEAD_1280x1280.jpg?imwidth=768"
          ],
          name: "Landtrek",
          description: "Le pick-up moderne et robuste conçu pour le travail comme pour l'aventure.",
          badgeText: "Pick-up",
          spec: {
            moteur: "Essence/Diesel",
            connectivite: "Apple CarPlay et Android Auto",
            systeme: "Ecran tactile 8 pouces",
            securite: "caméra 360° et aide à la descente"
          },
          design1: {
            image: "",
            titre: "UNE SILHOUETTE PUISSANTE",
            description: "Le PEUGEOT Landtrek arbore un style musclé et contemporain, prêt à affronter tous les terrains."
          },
          design2: {
            image: "",
            titre: "HABITACLE CONNECTÉ",
            description: "Le cockpit accueille un écran tactile 8'' et une interface intuitive pour rester connecté partout."
          },
          design3: {
            image: "",
            titre: "POLYVALENCE TOTALE",
            description: "Conçu pour transporter jusqu’à 1 tonne de charge utile, le Landtrek est un outil fiable pour les professionnels."
          },
          design4: {
            image: "",
            titre: "ASSISTANCE ET CONTRÔLE",
            description: "Avec l’aide à la descente, les aides à la conduite et les caméras panoramiques, la sécurité est renforcée."
          },
          design5: {
            image: "",
            titre: "CONFORT À BORD",
            description: "Sièges ergonomiques, climatisation double zone et finitions soignées pour un confort premium."
          },
          design6: {
            image: "",
            titre: "CAPACITÉ TOUT-TERRAIN",
            description: "Sa garde au sol et ses options de transmission intégrale en font un véhicule idéal pour tous les environnements."
          },
          design7: {
            image: "",
            titre: "UN ALLIÉ POUR L’AVENTURE",
            description: "Idéal pour les baroudeurs, le Landtrek vous accompagne aussi bien en ville qu’en pleine nature."
          }
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
