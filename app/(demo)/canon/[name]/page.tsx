"use client";
import { useState } from "react";
import Image from "next/image";
import "../../../globals.css";
import { useCanon } from "@/app/context/CanonContext";
import { LoaderCircle } from "lucide-react";
import { useParams } from "next/navigation";

const BlogDetailPage = () => {
  const params = useParams();
  const name = decodeURIComponent((params.name as string).trim());


  const { documents, loading } = useCanon();
  const [selectedImage, ] = useState<string>("");

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircle className="w-12 h-12 animate-spin text-blue-500" />
      </div>
    );
  }

  const allCanon = [...documents];
  const canon = allCanon.find((b) => b.name.toLowerCase() === name.toLowerCase());
  

  if (!canon) {
    return <div className="text-center mt-10">Imprimante non trouvé 😢</div>;
  }

  const mainImage = selectedImage || canon.image;

  console.log("documents:", documents);
console.log("name from params:", name);


  return (
    <div>
      <div className="container mx-auto pt-10 pb-10 px-4">
        <div className="w-full mt-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold"> {canon.name}</h1>
        </div>

        <div className="w-full">
        {mainImage && (
  <Image
    src={mainImage}
    alt={canon.name}
    width={400}
    height={90}
    className="rounded-lg w-full h-auto object-contain"
  />
)}

        </div>

     

        {/* Spécifications en tableau */}
        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-left border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3">Spécification</th>
                <th className="p-3">Valeur</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-sm md:text-base">
              {canon.spec?.type && (
                <SpecRow label="Type" value={canon.spec.type} />
              )}
              {canon.spec?.format && (
                <SpecRow label="Format" value={canon.spec.format} />
              )}
              {canon.spec?.vitesse && (
                <SpecRow label="Vitesse" value={canon.spec.vitesse} />
              )}
              {canon.spec?.resolution && (
                <SpecRow label="Résolution" value={canon.spec.resolution} />
              )}
              {canon.spec?.fonction && (
                <SpecRow label="Fonction" value={canon.spec.fonction} />
              )}
              {canon.spec?.qualite && (
                <SpecRow label="Qualité" value={canon.spec.qualite} />
              )}
              {canon.spec?.memoire && (
                <SpecRow label="Mémoire" value={canon.spec.memoire} />
              )}
              {canon.spec?.interface && (
                <SpecRow label="Interface" value={canon.spec.interface} />
              )}
              {canon.spec?.capacite && (
                <SpecRow label="Capacité" value={canon.spec.capacite} />
              )}
              {canon.spec?.dimensions && (
                <SpecRow label="Dimensions" value={canon.spec.dimensions} />
              )}
              {canon.spec?.poids && (
                <SpecRow label="Poids" value={canon.spec.poids} />
              )}
            </tbody>
          </table>
        </div>

       
      </div>
    </div>
  );
};

// Composant pour une ligne de spécification
const SpecRow = ({ label, value }: { label: string; value: string }) => (
  <tr className="border-t border-gray-200">
    <td className="p-3 font-semibold">{label}</td>
    <td className="p-3">{value}</td>
  </tr>
);

export default BlogDetailPage;
