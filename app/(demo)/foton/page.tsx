"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useFoton } from "@/app/context/FotonContext";
import { motion } from "framer-motion";

function Page() {

    const { documents, loading, error } = useFoton();
  // Carrousel 1
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const slides1 = [
    { id: 1, image: "https://japanmotorstogo.com/wp-content/uploads/2019/06/20190227131546_banner_26_1318470997-min.jpg", alt: "Slide 1" },
    { id: 2, image: "https://japanmotorstogo.com/wp-content/uploads/2019/06/20190227132622_banner_26_1047007841-min.jpg", alt: "Slide 2" },
    { id: 3, image: "https://japanmotorstogo.com/wp-content/uploads/2019/06/20190227131546_banner_26_1318470997-min.jpg", alt: "Slide 3" },
    { id: 4, image: "https://japanmotorstogo.com/wp-content/uploads/2019/06/20190227132622_banner_26_1047007841-min.jpg", alt: "Slide 4" },
  ];

  const goToNext1 = () => {
    setCurrentIndex1((prevIndex) => (prevIndex + 1) % slides1.length);
  };

  const goToPrev1 = () => {
    setCurrentIndex1(
      (prevIndex) => (prevIndex - 1 + slides1.length) % slides1.length
    );
  };

  useEffect(() => {
    const interval1 = setInterval(goToNext1, 4000); // 4 secondes
    return () => clearInterval(interval1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Carrousel 2
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const slides2 = [
    { id: 1, image: "https://japanmotorstogo.com/wp-content/uploads/2019/07/foton.jpg", alt: "Slide 5" },
    { id: 2, image: "https://japanmotorstogo.com/wp-content/uploads/2019/07/foton2.jpg", alt: "Slide 6" },
    { id: 3, image: "https://japanmotorstogo.com/wp-content/uploads/2019/07/foton.jpg", alt: "Slide 7" },
    { id: 4, image: "https://japanmotorstogo.com/wp-content/uploads/2019/07/foton3.jpg", alt: "Slide 8" },
  ];

  const goToNext2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex + 1) % slides2.length);
  };

  const goToPrev2 = () => {
    setCurrentIndex2(
      (prevIndex) => (prevIndex - 1 + slides2.length) % slides2.length
    );
  };

  useEffect(() => {
    const interval2 = setInterval(goToNext2, 4000); // 4 secondes
    return () => clearInterval(interval2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* Carrousel 1 */}
      <div className="relative overflow-hidden w-full mb-8">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex1 * 100}%)` }}
        >
          {slides1.map((slide) => (
            <div key={slide.id} className="w-full max-h-70 flex-shrink-0">
              <Image
                src={slide.image}
                alt={slide.alt}
                width={1200}
                height={50}
                layout="responsive"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        {/* Controls */}
        <button
          onClick={goToPrev1}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={goToNext1}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          &#10095;
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides1.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex1(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex1 ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
{/* Section Liste des Documents */}
<div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl  font-semibold mb-6">Japan Motors Togo, representant officiel de Canon au Togo</h2>
        <h4 className="text-2xl mb-6">Nos imprimantes Canon compactes et puissantes offrent des résultats exceptionnels depuis le confort de votre maison</h4>

        {loading && <p className="text-gray-500">Chargement des documents...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={doc.image}
                alt={doc.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{doc.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Carrousel 2 */}
      <div className="relative overflow-hidden w-full mb-8">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex2 * 100}%)` }}
        >
          {slides2.map((slide) => (
            <div key={slide.id} className="w-full min-h-[50px] flex-shrink-0">
              <Image
                src={slide.image}
                alt={slide.alt}
                width={1200}
                height={20}
                layout="responsive"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        {/* Controls */}
        <button
          onClick={goToPrev2}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={goToNext2}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          &#10095;
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides2.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex2(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex2 ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
