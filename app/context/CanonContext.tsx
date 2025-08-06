"use client";
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";



// Définition du type des documents Canon
interface Canon {
  id: string;
  name: string;
  image: string;
  badge: string;
  spec?:{
    type?: string;
    format?: string;
    vitesse?: string;
    resolution?: string;
    fonction?: string;
    qualite?: string;
    memoire?: string;
    interface?: string;
    capacite?: string;
    dimensions?: string;
    poids?: string;
  };
}

// Définition du type du contexte
interface CanonContextType {
  documents: Canon[];
  loading: boolean;
  error: string | null;
}

// Création du contexte
const CanonContext = createContext<CanonContextType | undefined>(undefined);

// Création du Provider
interface CanonProviderProps {
  children: ReactNode;
}

export const CanonProvider: React.FC<CanonProviderProps> = ({ children }) => {
  const [documents, setDocuments] = useState<Canon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error] = useState<string | null>(null); // Pas d’erreur en local


const canon = [
  {
    badge: "Copieurs MFP couleurs",
    id: "0DORFKgoyNCl3TqRHaTy",
    image: "https://cms.cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-IR-AD-DX-C3730i-MFP.jpg",
    name: "IR AD DX C3730i MFP",
    spec: {
      fonction: "Copie, impression, scan, fax (opt.) ",
      interface: "USB , réseau",
      type: " MFP Couleur Laser",
      vitesse: "30 ppm couleur/NB",
      resolution: "1200 x 1200"
    }
  },
  {
    badge: "Copieurs MFP Blancs et Noirs",
    id: "0koPRJkxme3a191Ab12I",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2025/04/IR-2745i-MFP.png",
    name: "IR ADVANCE DX 4735i MFP",
    spec: {
      format: "A3",
      poids: "75 kg",
      interface: "135 ipm",
      vitesse: "35 ppm (A4)",
      capacite: "6 350 feuilles"
    }
  },
  {
    badge: "Copieurs MFP Blancs et Noirs",
    id: "27ZFP0bpWud5KkHhTK1I",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-IR-2630i-MFP.jpg",
    name: "IR 2630i MFP",
    spec: {
      dimensions: "586×713×912 mm",
      interface: "USB ,réseau",
      resolution: "1200 x 1200",
      format: "A3",
      fonction: "copie, impression ,scan, fax"
    }
  },
  {
    badge: "Imprimantes ",
    id: "2TRUqkIZjxXZeIwuV0pE",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-PRINTER-I.SENSYS-LBP-621-Cw-Couleur-1.jpg",
    name: "PRINTER I.SENSYS LBP 621 Cw Couleur",
    spec: {
      fonction: "impression",
      interface: "USB , WiFi",
      vitesse: "~18 ppm",
      type: "Laser Couleur"
    }
  },
  {
    badge: "Copieurs MFP Blancs et Noirs",
    id: "3dX5uuBQU4lR51FZjopb",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-IR-C3125i-MFP.jpg",
    name: " IR ADVANCE DX 5540i MFP"
  },
  {
    badge: "Copieurs MFP Blancs et Noirs",
    id: "40uVgwgIGRtF7rV1GAGw",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-IR-2206N-MFP.jpg",
    name: "IR 2206N MFP"
  },
  {
    badge: "Copieurs MFP Blancs et Noirs",
    id: "4KlIa0ZOhus75QJYaXyP",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-IR-ADVANCE-DX-617i-MFP-1.jpg",
    name: "IR ADVANCE DX 617i MFP"
  },
  {
    badge: "Copieurs MFP Blancs et Noirs",
    id: "4LTNSxGl1pdU4mQFEREm",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2025/04/canon-IR-2745i-MFP.png",
    name: "IR 2745i MFP",
    spec: {
      format: "A3",
      memoire: "2 Go + eMMC 64 Go",
      poids: " 64 kg",
      vitesse: "45 ppm (A4)",
      resolution: "1200 × 1200 dpi"
    }
  },
  {
    badge: "Imprimantes ",
    id: "5Gd6rmqElKCzVRm82fnP",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-PRINTER-I.SENSYS-MF-237W-MFP-Laser-Blanc-Noir-1.jpg",
    name: "PRINTER I.SENSYS MF 237W MFP Laser "
  },
  {
    badge: "Copieurs MFP Blancs et Noirs",
    id: "CKrvLqspDnQrQXSWs1ot",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-IR-2645i-MFP.jpg",
    name: "IR 2645i MFP"
  },
  {
    badge: "Copieurs MFP couleurs",
    id: "Ctz09dV8ClwATdPUpLKg",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-IR-C3125i-MFP.jpg",
    name: "IR C3125i MFP"
  },
  {
    badge: "Imprimantes ",
    id: "E0Xh2rJh6XTulR4r2o0v",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2025/04/PIXMA-GM-4040.png",
    name: "PIXMA GM 4040",
    spec: {
      resolution: "600 × 600 dpi",
      dimensions: "403 × 369 × 234 mm",
      capacite: "150 feuilles",
      vitesse: " 13 ppm (A4)",
      fonction: "Impression, copie, numérisation, Cloud Link, Wi-Fi, Ethernet"
    }
  },
  {
    badge: "Copieurs MFP couleurs",
    id: "FkwskOdAUwMNNX2s08OC",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2025/04/MegaTank-MAXIFY.png",
    name: "MegaTank MAXIFY",
    spec: {}
  },
  {
    badge: "Imprimantes ",
    id: "HVHNg9Skn6AEplQPEJkI",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2025/04/i-SENSYS-MF3010.png",
    name: "i-SENSYS MF3010",
    spec: {
      resolution: "600 × 400 dpi",
      type: "Multifonction laser N&B",
      poids: "8,2 kg",
      vitesse: "18 ppm (A4)",
      dimensions: "372 × 276 × 254 mm"
    }
  },
  {
    badge: "Imprimantes ",
    id: "IrTLqbxmd3uNS7W9GJVA",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-PIXMA-G2411-MFP.jpg",
    name: "PIXMA G2411"
  },
  {
    badge: "Imprimantes ",
    id: "LiNoqUB9yHSvmW9aIKjS",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-PRINTER-I.SENSYS-MF-237W-MFP-Laser-Blanc-Noir.jpg",
    name: "iSENSYS MF 237W"
  },
  {
    badge: "Copieurs MFP Blancs et Noirs",
    id: "QFrpzxj061iUgItdZiSL",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-IR-ADVANCE-DX-4725i-MFP.jpg",
    name: " IR ADVANCE DX 5535i MFP"
  },
  {
    badge: "Copieurs MFP Blancs et Noirs",
    id: "U1tWe5v7wyGjdvXj6y1v",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2025/04/IR-2625i-MFP.png",
    name: "IR 2625i MFP",
    spec: {
      poids: "73,6 kg",
      resolution: "Impression 1200 dpi / Numérisation 600 dpi",
      type: "A3/A4",
      fonction: " Copie, impression, numérisation (standard), fax (option)",
      qualite: "2300 feuilles"
    }
  },
  {
    badge: "Copieurs MFP Blancs et Noirs",
    id: "Yz93SoyshT1ubPK1B12s",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-IR-2425-MFP.jpg",
    name: "IR 2425 MFP"
  },
  {
    badge: "Copieurs MFP Blancs et Noirs",
    id: "bkJ5cLGEGi1DXjLcH3U1",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-IR-ADVANCE-DX-527i-MFP.jpg",
    name: "IR ADVANCE DX 527i MFP"
  },
  {
    badge: "Copieurs MFP couleurs",
    id: "cA4cRF4vADffUTSdpveD",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-PIXMA-G3420-MFP.jpg",
    name: "PIXMA G3420 MFP"
  },
  {
    badge: "Copieurs MFP Blancs et Noirs",
    id: "dxxT47BRZrRSEboSMR7M",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-IR-AD-DX-C3730i-MFP.jpg",
    name: "IR ADV ANCE DX 4751i MFP"
  },
  {
    badge: "Imprimantes ",
    id: "hfYCHFlPZzv6gOak5fT5",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2025/04/PIXMA-GM-4040.png",
    name: "PIXMA GM 2040",
    spec: {
      type: " Jet d’encre noir et blanc",
      fonction: "Impression N&B, Wi-Fi, Ethernet",
      resolution: " 600 × 600 dpi",
      dimensions: "403 × 369 × 166 mm",
      poids: " 6,0 kg"
    }
  },
  {
    badge: "Imprimantes ",
    id: "hw0fFcjFs2NVwaEz4DdH",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2025/04/i-SENSYS-LBP-6030B.png",
    name: "i-SENSYS LBP 6030B",
    spec: {
      vitesse: " 18 ppm (A4)",
      memoire: "32 Mo",
      interface: "USB 2.0",
      type: "Imprimante laser N&B",
      capacite: "150 feuilles"
    }
  },
  {
    badge: "Imprimantes ",
    id: "ngSACzu3wVbG7wczhbn4",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-PRINTER-I.SENSYS-MF-641Cw-Laser-Couleur.jpg",
    name: "PRINTER I.SENSYS MF 641Cw / Laser Couleur"
  },
  {
    badge: "Copieurs MFP Blancs et Noirs",
    id: "okw5WWI0ryULlOVHOZHY",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2025/04/IR-2730i-MFP.png",
    name: "IR 2730i MFP",
    spec: {
      poids: "Environ 64 kg",
      memoire: "2 Go + eMMC 64 Go",
      resolution: "1200 × 1200 dpi",
      vitesse: "30 ppm (A4)",
      format: "A3"
    }
  },
  {
    badge: "Imprimantes ",
    id: "qB1PDmTToNyDPxXULc5e",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-PRINTER-I.SENSYS-LBP-623-Cdw-Laser-Couleur.jpg",
    name: "PRINTER I.SENSYS LBP 623 Cdw / Laser Couleur"
  },
  {
    badge: "Copieurs MFP Blancs et Noirs",
    id: "rbOeZ5PvLMaL2FfFjmRW",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-IR-1643i-MFP.jpg",
    name: "IR 1643i MFP\n"
  },
  {
    badge: "Imprimantes ",
    id: "rhWDYJZCMiMXQNnICnct",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2025/04/i-SENSYS-MF445DW.png",
    name: "i-SENSYS MF445DW",
    spec: {
      fonction: " Impression, copie, numérisation, télécopie",
      interface: "USB 2.0, réseau",
      vitesse: " 38 ppm (A4)",
      type: "Multifonction laser N&B",
      qualite: " 250 + 100 feuilles"
    }
  },
  {
    badge: "Copieurs MFP Blancs et Noirs",
    id: "uLewc0A6CgTKYbSKGeYC",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-IR-C3125i-MFP.jpg",
    name: "IR ADVANCE DX 4745i MFP "
  },
  {
    badge: "Copieurs MFP Blancs et Noirs",
    id: "uN7oQqLtCfQKPXj8EzmN",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-IR-ADVANCE-DX-4725i-MFP.jpg",
    name: "IR ADVANCE DX 4725i MFP"
  },
  {
    badge: "Copieurs MFP Blancs et Noirs",
    id: "x6N1cl3eca9laWGaFg2A",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-IR-2425i-MFP.jpg",
    name: "IR 2425i MFP"
  },
  {
    badge: "Copieurs MFP Blancs et Noirs",
    id: "xGttkdIZAmlds4NAyba3",
    image: "https://cms.japanmotorstogo.com/wp-content/uploads/2022/03/CANON-IR-ADVANCE-DX-717i-MFP.jpg",
    name: " IR ADVANCE DX 717i MFP"
  }
];


 useEffect(() => {
    setDocuments(canon);
    setLoading(false);
  }, []);

  return (
    <CanonContext.Provider value={{ documents, loading, error }}>
      {children}
    </CanonContext.Provider>
  );
};


// Hook personnalisé pour utiliser le contexte
export const useCanon = (): CanonContextType => {
  const context = useContext(CanonContext);
  if (!context) {
    throw new Error("useCanon doit être utilisé dans un CanonProvider");
  }
  return context;
};

