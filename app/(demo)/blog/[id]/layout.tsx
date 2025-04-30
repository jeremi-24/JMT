import { ReactNode } from "react";

export const metadata = {
  title: "Blog",
};

type BlogLayoutProps = {
  children: ReactNode;
};

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <html lang="fr">
      <head>
        {/* Feuille de style WordPress uniquement pour le blog */}
        <link
          rel="stylesheet"
          href="https://japanmotorstogo.com/wp-content/themes/ton-theme/style.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
