"use client";

import { useRef } from "react";
import Slider from "react-slick";
import { useNissanCars } from "@/app/context/NissanContext";
import CarCard from "@/app/components/card";
import Image from "next/image";
import { LoaderCircle } from "lucide-react";

const heroImages = [
  "/Slider Nissan - 06.jpg",
  "https://editorial-bkend.davinci-cms.com/storage/files/folders/ma-morocco/vehicles/juke/new/led-highlights-with-high-beam-assist-gallery-D.jpg",
  "/Slider Nissan - 06.jpg",
  "/Slider Nissan - 00.jpg",
  "/Slider Nissan - 05.webp",
];

const Home: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const { cars, loading, error } = useNissanCars();

  const baseSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 1440, settings: { slidesToShow: 4, slidesToScroll: 1 } },
    ],
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

  const handleWheel = (event: React.WheelEvent) => {
    if (sliderRef.current) {
      if (event.deltaY > 0) {
        sliderRef.current.slickNext();
      } else {
        sliderRef.current.slickPrev();
      }
    }
  };

  if (loading)  return (
        <div className="flex justify-center items-center h-screen">
          <LoaderCircle className="w-12 h-12 animate-spin text-blue-500" />
        </div>
      );
  if (error) return <div>Erreur: {error}</div>;

  // Regrouper les voitures par badge
  const groupedCars = cars.reduce((acc, car) => {
    if (!acc[car.badge]) acc[car.badge] = [];
    acc[car.badge].push(car);
    return acc;
  }, {} as Record<string, typeof cars>);

  return (
    <main>
      {/* Hero Slider */}
      <div className="mb-10 relative">
        <Slider {...heroSettings} ref={sliderRef}>
          {heroImages.map((image, index) => (
            <div key={index} className="w-full h-[500px]">
              <Image
                src={image}
                alt={`Hero Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </Slider>
        {/* Navigation Buttons */}
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 border border-white text-white p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 border border-white text-white p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>

      <div className="container mx-auto p-4 my-8">
        {/* Section des voitures */}
        <div onWheel={handleWheel}>
          {Object.entries(groupedCars).map(([badge, cars]) => {
            const dynamicSettings = {
              ...baseSettings,
              slidesToShow: Math.min(baseSettings.slidesToShow, cars.length),
              slidesToScroll: Math.min(baseSettings.slidesToScroll, cars.length),
              infinite: cars.length > 1,
            };

            return (
              <div key={badge} className="mb-10">
                <h3 className="text-4xl font-semibold uppercase mb-4">Nos {badge}</h3>
                <div className="border-t-8 border-[#c3002f] w-1/5 mb-10"></div>
                <Slider {...dynamicSettings}>
                  {cars.map((car, index) => (
                    <div key={index} className="px-2 flex h-full">
                      <CarCard
                        images={car.images}
                        name={car.name}
                        description={car.description}
                        badgeText={car.badge}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
