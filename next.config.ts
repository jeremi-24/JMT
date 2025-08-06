import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   // Utilise l'option export pour la génération statique
  
  images: {
    unoptimized: true, 
    domains: [
      "cms.japanmotorstogo.com",
      "imprimantezone.fr",
      "i1.adis.ws",
      "pic.clubic.com",
      "gfx3.senetic.com",
      "djd1xqjx2kdnv.cloudfront.net",
    ],
  },
};

export default nextConfig;
