'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
const heroImages = [
  "https://japanmotorstogo.com/wp-content/uploads/2022/03/LASSA-Benin_DrivewaysSport-min.jpeg",
  "https://japanmotorstogo.com/wp-content/uploads/2022/03/LASSA-Benin_TranswayAT.jpeg",
  "https://japanmotorstogo.com/wp-content/uploads/2022/03/LAS-Gana-Web-Site_1920x664px_Greenways-min-min.jpeg",
  ];

type Category = "Véhicule Passager" | "SUV" | "Utilitaire";

const tiresData: Record<Category, { name: string; image: string }[]> = {
  "Véhicule Passager": [
    { name: "DRIVEWAYS SPORT", image: "https://japanmotorstogo.com/wp-content/uploads/2022/03/LASSA-Benin_DrivewaysSport-min.jpeg" },
    { name: "DRIVEWAYS", image: "https://japanmotorstogo.com/wp-content/uploads/2022/03/LASSA-Benin_Driveways.jpeg" },
    { name: "GREENWAYS", image: "https://japanmotorstogo.com/wp-content/uploads/2022/03/LAS-Gana-Web-Site_1920x664px_Greenways-min-min.jpeg" },
    { name: "MULTIWAYS", image: "https://japanmotorstogo.com/wp-content/uploads/2022/03/LASSA-Benin_Multiways.jpeg" },
  ],
  Utilitaire: [
    { name: "TRANSWAY 2", image: "https://japanmotorstogo.com/wp-content/uploads/2022/03/LASSA-Benin_Transway2.jpeg" },
    { name: "TRANSWAY A/T", image: "https://japanmotorstogo.com/wp-content/uploads/2022/03/LASSA-Benin_TranswayAT.jpeg" },
    { name: "MAXIWAYS 110D S", image: "https://japanmotorstogo.com/wp-content/uploads/2022/03/LASSA-Benin_Maxiways110D.jpeg" },
    { name: "MAXIWAYS 100S", image: "https://japanmotorstogo.com/wp-content/uploads/2022/03/LASSA-Benin_Maxiways100S.jpeg" },
    { name: "MULTIWAYS-C", image: "https://japanmotorstogo.com/wp-content/uploads/2022/03/LAS-Gana-Web-Site_1920x664px_MultiwaysC.jpeg" },
  ],
  SUV: [
    { name: "COMPETUS H/P2", image: "https://japanmotorstogo.com/wp-content/uploads/2022/03/LAS-Gana-Web-Site_1920x664px_CompetusHP2-min-min.jpeg" },
    { name: "COMPETUS H/P", image: "https://japanmotorstogo.com/wp-content/uploads/2022/03/LAS-Gana-Web-Site_1920x664px_CompetusHP-min-min.jpeg" },
    { name: "COMPETUS A/T2", image: "https://japanmotorstogo.com/wp-content/uploads/2022/03/LASSA-BENIN_CompetusAT2.jpeg" },
  ],
};

export default function TireList() {
  const [activeCategory, setActiveCategory] = useState<Category>("SUV");
  const [selectedTire, setSelectedTire] = useState(tiresData[activeCategory][0]);
  const [tutorialStep, setTutorialStep] = useState(0); // Suivi des étapes du tutoriel

  useEffect(() => {
    // Animation pour guider l'utilisateur au fur et à mesure
    const timer = setInterval(() => {
      setTutorialStep((prev) => prev + 1);
    }, 3000); // Chaque 3 secondes, passe à l'étape suivante

    return () => clearInterval(timer);
  }, []);


   
  
   
  
    const heroSettings = {
      dots: true,
      infinite: true,
      speed: 800,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
    };

  return (
    <div>
      {/* Hero Slider */}
            <div className="mb-5">
              <Slider {...heroSettings}>
                {heroImages.map((image, index) => (
                  <div key={index} className="w-full h-[500px]">
                    <Image
                      src={image}
                      alt={`Hero Image ${index + 1}`}
                      width={1200}
                      height={50}
                      layout="responsive"
                      className="object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
    <div className="max-w-7xl mt-5 mx-auto p-4 flex flex-col md:flex-row">
      {/* Section gauche */}
      <div className="md:w-1/3 md:pr-6">
        <h1 className="text-3xl font-bold text-left mb-4">ROULEZ EN SÉCURITÉ AVEC NOS PNEUS LASSA</h1>
        <h2 className="text-xl  mb-6">
          Proposant une gamme étonnamment large de classiques éprouvés sur le marché ainsi que de nouveaux modèles exceptionnels,
          Lassa est un produit de Brisa Bridgestone Sabancı Tyre Manufacturing Trading Inc. et propose un grand choix de pneus
          grand public et commerciaux.
        </h2>
      </div>

      {/* Section droite */}
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold text-center mb-6">Nos pneus {activeCategory}</h2>

        {/* Tutoriel dynamique */}
        {tutorialStep === 0 && (
          <div className="absolute top-0 left-0 w-full bg-gray-800 text-white p-4 z-10">
            <p>Bienvenue dans le tutoriel ! Appuyez sur les boutons pour explorer les différentes catégories de pneus.</p>
          </div>
        )}
        {tutorialStep === 1 && (
          <div className="absolute top-16 left-0 w-full bg-gray-800 text-white p-4 z-10">
            <p>Choisissez une catégorie de pneus en cliquant sur les boutons ci-dessous. Par exemple, essayez (Véhicule Passager).</p>
          </div>
        )}
        {tutorialStep === 2 && (
          <div className="absolute top-32 left-0 w-full bg-gray-800 text-white p-4 z-10">
            <p>Une fois la catégorie sélectionnée, vous verrez les pneus associés. Cliquez pour sélectionner un pneu spécifique.</p>
          </div>
        )}

        <div className="flex justify-center space-x-2 mb-6">
          {Object.keys(tiresData).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg transition ${
                activeCategory === category ? "bg-blue-500 text-white shadow-md" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => {
                setActiveCategory(category as Category);
                setSelectedTire(tiresData[category as Category][0]);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center mb-6">
          <Image
            src={selectedTire.image}
            alt={selectedTire.name}
            width={950}
            height={950}
            className="rounded-lg shadow-lg"
          />
          <p className="mt-4 text-lg font-semibold">{selectedTire.name}</p>
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tiresData[activeCategory].map((tire) => (
              <button
                key={tire.name}
                className={`p-4 border rounded-lg transition ${
                  selectedTire.name === tire.name ? "bg-gray-300 border-gray-500" : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => setSelectedTire(tire)}
              >
                <p className="text-center font-semibold">{tire.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
