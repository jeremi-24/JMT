import Image from "next/image";

const CarrouselPartenaire = () => {
  const logos = [
    "logo1.jpg",
    "logo2.jpg",
    "logo3.jpg",
    "logo4.jpg",
    "logo5.jpg",
    "logo6.jpg",
    "logo7.jpg",
    "logo8.jpg",
  ];

  return (
    <section className="container mx-auto py-12 px-4 overflow-hidden">
      <h2 className="text-4xl  font-bold mb-5 text-left">ILS NOUS <br />  FONT CONFIANCE</h2>
      <div className="border-t-8 border-red-500 w-1/5 mb-10"></div>

      <div className="relative flex overflow-hidden w-full">
        <div className="flex min-w-max animate-scroll">
          {/* Duplication pour le défilement infini */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 px-4">
              <Image
                src={`/${logo}`}
                alt={`Partenaire ${index + 1}`}
                width={200}
                height={190}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 10s linear infinite;
          min-width: 200%;
        }
      `}</style>
    </section>
  );
};

export default CarrouselPartenaire;
