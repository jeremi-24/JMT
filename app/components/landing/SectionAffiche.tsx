import Image from "next/image";
import { useRouter } from "next/navigation";

const affiches = [
  { id: 1, title: "Affiche 1", description: "Découvrez notre première affiche avec un design unique.", image: "/canon.jpg", link: "/canon" },
  { id: 2, title: "Affiche 2", description: "Notre deuxième affiche, toujours aussi stylée.", image: "/fton.jpg", link: "/foton" },
  { id: 3, title: "Affiche 3", description: "Un troisième modèle pour compléter la collection.", image: "/assa.jpg", link: "/lassa" },
];

export default function SectionAffiches() {
  const router = useRouter(); // Initialisation du routeur

  const handleNavigate = (link: string) => {
    router.push(link); // Redirection dynamique
  };

  return (
    <section className="bg-gray-100 py-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
      
        <h2 className="text-xl md:text-2xl font-bold  text-left">DÉCOUVREZ CANON, FOTON ET LASSA</h2>
        <div className="border-t-8 mb-8 mt-5 border-red-500 w-1/5"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {affiches.map((affiche) => (
            <div
              key={affiche.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer"
              onClick={() => handleNavigate(affiche.link)}
            >
              <div className="relative w-full h-auto">
                <Image
                  src={affiche.image}
                  alt={affiche.title}
                  layout="intrinsic"
                  width={400}
                  height={250}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
