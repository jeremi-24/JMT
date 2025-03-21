"use client";
import { useRef } from "react";
import Slider from "react-slick";
import { useLassaCars } from "@/app/context/LassaContext";
import CarCard from "@/app/components/card";
import Image from "next/image";

const heroImages = [ 
  "https://www.thetyrecentre.com/wp-content/uploads/2014/11/products-head.jpg",
  "https://admin.lassa.az/storage/uploads/images/about/img-1671566129.jpg",
  "https://tyre.com.sg/wp-content/uploads/2024/11/Lassa-Transway-Tires.jpg"
];

const Home: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const { cars, loading, error } = useLassaCars();

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

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  if (loading) return <div>Chargement...</div>;
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
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 border border-white text-white w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black transition z-10"
        >
          &#10094;
        </button>
        <Slider ref={sliderRef} {...heroSettings}>
          {heroImages.map((image, index) => (
            <div key={index} className="w-full h-[300px] md:h-[500px]">
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
      
      <div className="container mx-auto p-4 my-8">
        {/* Section des voitures */}
        {Object.entries(groupedCars).map(([badge, cars]) => (
          <div key={badge} className="mb-10">
            <h3 className="text-4xl font-semibold uppercase mb-5">NOS PNEUS POUR {badge}</h3>
            <div className="border-t-8 border-[#c3002f] w-1/5 mb-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car, index) => (
                <CarCard
                  key={index}
                  images={[car.image]} 
                  name={car.name}
                  badgeText={car.badge}
                  description=""
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
