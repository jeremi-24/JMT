"use client";
import { createContext, useContext, ReactNode, useState, useEffect } from "react";

interface Car {
  images: string[];
  name: string;
  description: string;
  badgeText: string;
}

interface PeugeotContextType {
  carData: Car[];
  loading: boolean;
  error: string | null;
}

const PeugeotContext = createContext<PeugeotContextType | undefined>(undefined);

export const PeugeotProvider = ({ children }: { children: ReactNode }) => {
  const [carData, setCarData] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setCarData([
        {
          images: [
            "https://cdn.motor1.com/images/mgl/QemxY7/s1/nuevo-peugeot-e-208-2024.jpg",
            "https://fotos.quecochemecompro.com/peugeot-208/peugeot-208-vista-delantera-dinamica.jpeg?size=1200x800",
            "https://th.bing.com/th/id/OIP.pQluiRfcCeNB78clj9oM4gAAAA?w=474&h=266&rs=1&pid=ImgDetMain",
            "https://cdn.motor1.com/images/mgl/y2PRoY/s3/2024-peugeot-208-facelift.jpg",
          ],
          name: "208",
          description: "Compacte et dynamique, parfaite pour la ville.",
          badgeText: "SUV",
        },
        {
          images: [
            "https://th.bing.com/th/id/R.7bfa5deebaaa8ba13318c4a39eb6419d?rik=cmVpjjq%2bAHWm2Q&pid=ImgRaw&r=0",
            "https://th.bing.com/th/id/OIP.Yvgr5L-BCWFAE2pK29DfsAHaE8?w=1500&h=1000&rs=1&pid=ImgDetMain",
            "https://th.bing.com/th/id/OIP.FY_NeZa46atPdsZCWdeGWQHaE1?w=1280&h=836&rs=1&pid=ImgDetMain",
            "https://th.bing.com/th/id/OIP.X4zUOARytVGqorZv0yEx8wHaE8?w=1600&h=1067&rs=1&pid=ImgDetMain",
          ],
          name: "3008",
          description: "Un SUV élégant avec une technologie de pointe.",
          badgeText: "SUV",
        },
        {
          images: [
            "https://th.bing.com/th/id/OIP.f7b5JYgxwIbbdxlr4pWvMwHaE7?rs=1&pid=ImgDetMain",
            "https://th.bing.com/th/id/OIP.G-Cr9NhyIs0ESG5X1HDIGQHaE5?pid=ImgDet&w=474&h=313&rs=1",
            "https://th.bing.com/th/id/OIP.-MLwDzaszltxpX1AxnfsqQHaE5?pid=ImgDet&w=474&h=313&rs=1",
            "https://th.bing.com/th/id/OIP.f7b5JYgxwIbbdxlr4pWvMwHaE7?rs=1&pid=ImgDetMain",
          ],
          name: "5008",
          description: "Un SUV familial spacieux pour vos rêves.",
          badgeText: "SUV",
        },
        {
          images: [
            "https://www.peugeot.fr/content/dam/peugeot/master/b2c/models/408/408-gt-line-blue.jpg",
            "https://media.peugeot.com/file/86/1/peugeot-408-blue-2.861861.jpg",
            "https://th.bing.com/th/id/OIP.X4zUOARytVGqorZv0yEx8wHaE8?w=1600&h=1067&rs=1&pid=ImgDetMain",
            "https://media.peugeot.com/file/89/2/peugeot-408-side-view.892892.jpg",
          ],
          name: "408",
          description: "Une berline audacieuse et raffinée.",
          badgeText: "Berline",
        },
        {
          images: [
            "https://th.bing.com/th/id/OIP.XvC_iXakI-a-gjpft-ma4wHaE8?rs=1&pid=ImgDetMain",
            "https://cdn.abcmoteur.fr/wp-content/uploads/2022/06/IMG_3219-1280x854.jpg",
            "https://th.bing.com/th/id/R.e8a7fa44b24932b141d3485a06a4a5b0?rik=TO335obwk73LFw&pid=ImgRaw&r=0",
            "https://th.bing.com/th/id/OIP.pNlwDmTD5ouVFPO2jrDwYwHaE7?pid=ImgDet&w=474&h=315&rs=1",
          ],
          name: "508",
          description: "Une berline haut de gamme avec un design affirmé.",
          badgeText: "Berline",
        },
        {
          images: [
            "https://www.maryautomobiles.fr/uploads/editor/peugeot/Trafic%20Van%20E-Tech%202024/exterieur-2-e-rifter-2024.jpg",
            "https://th.bing.com/th/id/OIP.p4l-m1x5jKkhJNJKbvkOegHaEv?pid=ImgDet&w=474&h=303&rs=1",
            "https://th.bing.com/th/id/OIP.oHazyLVK5ypbm_qkG-PkqAHaEv?pid=ImgDet&w=474&h=303&rs=1",
            "https://th.bing.com/th/id/OIP.A2RVOA4OK6pClpcVX7mHbQHaE8?w=1024&h=683&rs=1&pid=ImgDetMain",
          ],
          name: "Rifter",
          description: "Un ludospace pratique et robuste.",
          badgeText: "Ludospace",
        },
        {
          images: [
            "https://th.bing.com/th/id/R.2e563da348b464a8ba6f9bd890691d1e?rik=VESeVTRgIkfMqw&pid=ImgRaw&r=0",
            "https://th.bing.com/th/id/OIP.nlny7oG1r6IyzK5ROGwfZgHaE8?w=1620&h=1080&rs=1&pid=ImgDetMain",
            "https://auta5p.eu/vystavy/zeneva_2016/zeneva_053.jpg",
            "https://th.bing.com/th/id/R.0a264062818054c2bff78051008f13f7?rik=bdxnVAofQ0WWqg&riu=http%3a%2f%2fwww.forum-peugeot.com%2fwp-content%2fuploads%2f2015%2f12%2fpeugeot_traveller_0112styp003.jpg&ehk=k5Vp0foaRpVWJStj2GedjWnI%2fVaCHNiO9SE7IbrxtKI%3d&risl=&pid=ImgRaw&r=0",
          ],
          name: "Traveller",
          description: "Un van confortable pour vos voyages en famille ou pro.",
          badgeText: "Van",
        },
      ]);
    } catch (err) {
      console.log("Erreur lors du chargement des données.",err);
      setError("Erreur lors du chargement des données.");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <PeugeotContext.Provider value={{ carData, loading, error }}>
      {children}
    </PeugeotContext.Provider>
  );
};

export const usePeugeot = () => {
  const context = useContext(PeugeotContext);
  if (!context) {
    throw new Error("usePeugeot must be used within a PeugeotProvider");
  }
  return context;
};
