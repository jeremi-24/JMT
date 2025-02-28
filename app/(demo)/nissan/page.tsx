"use client";
import { useRef } from "react";
import Slider from "react-slick";
import { useNissanCars } from "@/app/context/NissanContext";
import CarCard from "@/app/components/card";


const Home: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const { cars, loading, error } = useNissanCars();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 1440, settings: { slidesToShow: 4, slidesToScroll: 4 } },
    ],
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
    <div className="container mx-auto p-4 my-8" onWheel={handleWheel}>
      <h2 className="text-4xl font-bold text-left mb-8">NOS VEHICULES NISSAN</h2>
      {Object.entries(groupedCars).map(([badge, cars]) => (
        <div key={badge} className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Nos {badge}</h3>
          <Slider {...settings}>
            {cars.map((car, index) => (
              <div key={index} className="px-2 flex h-full">
               
                  <CarCard images={car.images} name={car.name} description={car.description} badgeText={car.badge} />
               
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default Home;