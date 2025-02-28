import Image from 'next/image';

const CarrouselPartenaire = () => {
  const logos = [
    'logo1.jpg',
    'logo2.jpg',
    'logo3.jpg',
    'logo4.jpg',
    'logo5.jpg',
    'logo6.jpg',
    'logo7.jpg',
    'logo8.jpg',
  ];

  // On duplique la liste pour obtenir un effet de boucle fluide
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="container mx-auto py-12 px-4">
       <h2 className="text-4xl font-bold  mb-5 text-left">NOS PARTENAIRES</h2>
        
      <div className="border-t-8 border-red-500 w-1/5 mb-10"></div> 
      
      <div className="overflow-hidden">
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-4">
              <Image
                src={`/${logo}`}
                alt={`Partenaire ${index + 1}`}
                width={150}
                height={100}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Animation CSS pour le défilement continu */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CarrouselPartenaire;
