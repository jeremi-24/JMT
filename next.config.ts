import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   // Utilise l'option export pour la génération statique
   output: 'export',
  images: {
    unoptimized: true, // Désactive l'optimisation des images (utile en export statique)
  },
};

export default nextConfig;
