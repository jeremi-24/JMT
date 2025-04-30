import type { Metadata } from "next";
import localFont from "next/font/local";


import "./globals.css";
import Navbar from "./components/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/footer";
import { NissanCarsProvider } from "./context/NissanContext";
import { CanonProvider } from "./context/CanonContext";
import { FotonProvider } from "./context/FotonContext";
import { BlogProvider } from "./context/BlogContext";
import { PeugeotProvider } from "./context/PeugeotContext";
import { CarProvider } from "./context/CarContext";
import { LassaCarsProvider } from "./context/LassaContext";

// ✅ Utilisation correcte de next/font/local
const peugeotFont = localFont({
  src: [
    {
      path: "./fonts/PeugeotNew-Regular.otf", // Corrigé : chemin relatif correct
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PeugeotNew-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-peugeot",
});

export const metadata: Metadata = {
  title: "JAPAN MOTORS TOGO",
  description: "apan Motors Togo : vente de véhicules neufs et d’occasion, entretien, réparation et pièces détachées. Qualité et fiabilité au rendez-vous",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={peugeotFont.variable}>
      <head>
        {/* ✅ Styles Gutenberg (via CDN) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@wordpress/block-library@latest/build/style.css"
        />
      </head>
      <body className="font-[var(--font-peugeot)] antialiased">
        <NissanCarsProvider>
          <CanonProvider>
            <FotonProvider>
              <BlogProvider>
              <PeugeotProvider>
              <CarProvider>
              <LassaCarsProvider>
                <Navbar />
                <div className="pt-[90px] px-4 md:px-8 lg:px-0">{children}</div>

                <Footer />
              </LassaCarsProvider>
              </CarProvider>
              </PeugeotProvider>
              </BlogProvider>
            </FotonProvider>
          </CanonProvider>
        </NissanCarsProvider>
      </body>
    </html>
  );
}
