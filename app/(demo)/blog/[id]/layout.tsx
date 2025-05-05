// app/blog/layout.tsx
import { ReactNode } from "react";
import Head from "next/head";

type BlogLayoutProps = {
  children: ReactNode;
};

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://japanmotorstogo.com/wp-content/themes/ton-theme/style.css"
        />
      </Head>
      {children}
    </>
  );
}
