"use client";
import { useRef, useState } from "react";
import Slider from "react-slick";
import { useCanon } from "@/app/context/CanonContext";
import CarCard from "@/app/components/card";
import Image from "next/image";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";

const heroImages = [
  "https://imprimantezone.fr/images/test-de-limprimante-canon-pixma-pro-200-portabilite-et-qualite-des-couleurs.jpg",
  "https://i1.adis.ws/i/canon/pixma-ts7440-ss-bk-ambient-02_1920x1080-7bb8a552-ffb4-11ea-a3c4-b083fea00fac?w=1920",
  "https://pic.clubic.com/v1/images/2257181/raw",
  "https://gfx3.senetic.com/akeneo-catalog/c/a/2/a/ca2a9199cc9f9e7847a8bbd77979914d4ebe9c3c_1684174_5805C009_image5.jpg",
  "https://djd1xqjx2kdnv.cloudfront.net/photos/38/45/505997_31284_XXL.jpg",
];

const Home: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const { documents, loading, error } = useCanon();
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const badgeLabels: Record<string, string> = {
    "Copieurs MFP couleurs": "Copieurs Multifonctions couleurs",
    "Copieurs MFP Blancs et Noirs": "Copieurs Multifonctions Blancs et Noirs",
    // autres valeurs par défaut
  };

  const heroSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircle className="w-12 h-12 animate-spin text-blue-500" />
      </div>
    );

  if (error) return <div>Erreur: {error}</div>;

  const groupedDocuments = documents.reduce((acc, doc) => {
    const badge = doc.badge || "Autres";
    if (!acc[badge]) acc[badge] = [];
    acc[badge].push(doc);
    return acc;
  }, {} as Record<string, typeof documents>);

  const badges = Object.keys(groupedDocuments);
  const currentTab = activeTab ?? badges[1]; // afficher la 1ère par défaut

  return (
    <main>
      {/* Hero Slider */}
      <div className="mb-10 relative">
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 border border-white text-white w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black transition z-10"
        >
          &#10094;
        </button>
        <Slider ref={sliderRef} {...heroSettings}>
          {heroImages.map((image, index) => (
            <div key={index} className="w-full h-[300px] md:h-[500px] relative">
              <Image
                src={image}
                alt={`Hero Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          ))}
        </Slider>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 border border-white text-white w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black transition z-10"
        >
          &#10095;
        </button>
      </div>

      {/* Content */}
      <div className="container mx-auto p-4 my-8">
        <h2 className="text-4xl font-semibold mb-6">
          Représentant officiel <br /> de Canon au Togo
        </h2>
        <div className="border-t-8 border-[#c3002f] w-1/5 mb-10"></div>
        <h4 className="text-2xl mb-6">
          Nos imprimantes Canon compactes et puissantes offrent des résultats
          exceptionnels depuis le confort de votre maison
        </h4>

        {/* Tabs */}
        <div className="mb-4 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <button
              key={badge}
              className={`px-8 py-6 rounded-full font-semibold text-sm ${
                currentTab === badge
                  ? "bg-[#c3002f] text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setActiveTab(badge)}
            >
             {badgeLabels[badge] || badge}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
          {groupedDocuments[currentTab].map((doc, index) => (
            <CarCard
              key={index}
              images={[doc.image]}
              name={doc.name}
              description=""
              badgeText={badgeLabels[currentTab] || currentTab}
              disableNavigation={false}
              cible="canon"
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center justify-center h-[250px] bg-gray-100">
        <h1 className="text-4xl font-bold mb-10 dark:text-black">
          Intéressé par ce produit ?
        </h1>
        <Link href="/contact">
          <h5 className="px-6 py-3 bg-[#c3002f] text-white rounded-xl shadow-md hover:bg-red-700 transition">
            Contactez-nous dès maintenant !
          </h5>          console.log("Image URL:", doc.image);

        </Link>
      </div>
    </main>
  );
};

export default Home;
