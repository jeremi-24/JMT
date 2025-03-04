import { Calendar, Phone, Package, Bell } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Carte = () => {
  const router = useRouter(); // Initialisation du routeur
  
    const handleContact = () => {
      router.push("/contact"); // Redirection vers NissanPage.tsx
    };
    
  
  return (
    <section className="py-12 bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl  font-bold text-white mb-6 text-center">CONTINUEZ L&apos;EXPERIENCE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6  rounded-lg shadow-lg text-center flex flex-col items-center">
            <Calendar className="h-12 w-12 text-[#c3002f] mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Réserver <br /> un essai </h3> 
           
            <p className="text-gray-600  mb-4">Réservez un essai gratuit pour découvrir nos produits en action.</p>
            <button  onClick={handleContact} className="px-6 py-2 bg-[#c3002f] text-white rounded-full hover:bg-red-900">Réserver</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
            <Phone className="h-12 w-12 text-[#c3002f] mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Réserver <br /> un service </h3>
            <p className="text-gray-600 mb-4">Planifiez un service personnalisé selon vos besoins.</p>
            <button onClick={handleContact} className="px-6 py-2 bg-[#c3002f] text-white rounded-full hover:bg-red-900">Réserver</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
            <Package className="h-12 w-12 text-[#c3002f] mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Découvrir <br /> nos offres</h3>
            <p className="text-gray-600 mb-4">Explorez les différentes offres adaptées à vos besoins.</p>
            <button onClick={handleContact} className="px-6 py-2 bg-[#c3002f] text-white rounded-full hover:bg-red-900">Découvrir</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
            <Bell className="h-12 w-12 text-[#c3002f] mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Demander <br /> un rappel</h3>
            <p className="text-gray-600 mb-4">Demandez un rappel à nos experts pour plus d&apos;informations.</p>
            <button onClick={handleContact} className="px-6 py-2 bg-[#c3002f] text-white rounded-full hover:bg-red-900">Demander</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carte;
