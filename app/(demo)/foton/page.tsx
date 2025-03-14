"use client";
import { useRef } from "react";
import Slider from "react-slick";
import { useLassaCars } from "@/app/context/LassaContext";
import CarCard from "@/app/components/card";
import Image from "next/image";


const heroImages = [ 
  "https://japanmotorstogo.com/wp-content/uploads/2019/06/20190227131546_banner_26_1318470997-min.jpg",
  "https://japanmotorstogo.com/wp-content/uploads/2019/06/20190227132622_banner_26_1047007841-min.jpg",
  "https://japanmotorstogo.com/wp-content/uploads/2019/06/20190227131546_banner_26_1318470997-min.jpg",
  "https://japanmotorstogo.com/wp-content/uploads/2019/06/20190227132622_banner_26_1047007841-min.jpg"
];



const Home: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const { cars, loading, error } = useLassaCars();

  const baseSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 1440, settings: { slidesToShow: 4, slidesToScroll: 4 } },
    ],
  };

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

  const handleWheel = (event: React.WheelEvent) => {
    if (sliderRef.current) {
      if (event.deltaY > 0) {
        sliderRef.current.slickNext();
      } else {
        sliderRef.current.slickPrev();
      }
    }
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
      <div className="mb-10">
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
    <div className="container mx-auto p-4 my-8">
      

      {/* Section des voitures */}
    
      <div onWheel={handleWheel}>
        {Object.entries(groupedCars).map(([badge, cars]) => {
          // Ajuster les paramètres du slider dynamiquement
          const dynamicSettings = {
            ...baseSettings,
            slidesToShow: Math.min(baseSettings.slidesToShow, cars.length),
            slidesToScroll: Math.min(baseSettings.slidesToScroll, cars.length),
            infinite: cars.length > 1,
          };

          return (
            <div key={badge} className="mb-10">
              <h3 className="text-4xl font-semibold mb-4">Nos {badge}</h3>
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
