import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function InfoSection() {
  return (
    <section className="max-w-6xl mx-auto p-6 relative">
      {/* Contenu des blocs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bloc 1 */}
        <div className="bg-white rounded-2xl p-4 sm:p-3 hover:shadow-xl transition-all flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-left  sm:text-left">100 ANNÉES <br /> D’EXPÉRIENCES</h2>
            <div className="border-t-8 border-[#c3002f] w-1/5 my-6 text-left"></div>
            <p className="text-gray-600 text-base  text-justify sm:text-left">
              En 1965, la société a été créée sous le nom de Japan Motors Trading Company Limited, 
              une société privée à responsabilité limitée par actions. Elle est née d&apos;une entreprise familiale 
              de pièces de rechange et de transport automobile, Kalmoni & Sons, créée en 1920 par le regretté 
              Salem Kalmoni qui, huit ans auparavant, en 1912, était arrivé dans la Gold Coast à l’époque 
              avec son frère Sobhi, originaire de leur Liban natal.
            </p>
          </div>
          <div className="mt-4">
            <button className="flex items-center gap-2 rounded-full px-6 py-3 bg-[#c3002f] text-white hover:bg-white hover:text-red-700 hover:border hover:border-red-700  transition">
            <Link href={`/blog/vpbmutyg328jux2uyoer`} >
               <h6 className="underlined">Lire la suite</h6>
               </Link>
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        {/* Bloc 2 */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl md:text-4xl  font-bold text-left sm:text-left">UNE <br /> PHILOSOPHIE</h2>
            <div className="border-t-8 border-[#c3002f] w-1/5 my-6 text-left"></div>
            <p className="text-gray-600 text-base   sm:text-left">
              Notre philosophie est résumée en quatre mots : « Engagement envers la satisfaction de la clientèle ».  
              Cet engagement se traduit par des efforts diligents de notre part pour fournir à nos clients des produits 
              et des services de qualité, ce qui signifie des biens qui ne reviennent pas et des clients qui le font.
            </p>
          </div>
          <div className="mt-4">
            <button className="flex items-center gap-2 rounded-full px-6 py-3 bg-[#c3002f] text-white hover:bg-white hover:text-red-700 hover:border hover:border-red-700  transition">
               <Link href={`/blog/vpbmutyg328jux2uyoer`} >
               <h6  className="underlined">Lire la suite</h6>
               </Link>
              
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
