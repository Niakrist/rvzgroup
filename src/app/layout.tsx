import { TopNav, Header, Footer, YandexMetrika } from "@/components";
import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import { ClientProvider } from "./ClientProvider/ClientProvider";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  weight: ["300"],
  display: "swap",
  variable: "--font-roboto",
});
export const metadata: Metadata = {
  title: "Подшипники РВЗ",
  description: "Подшипники РВЗ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preload" as="image" href="/slide.png" fetchPriority="high" />
      </head>
      <ClientProvider>
        <body className={`${montserrat.variable} ${roboto.variable}`}>
          <TopNav />
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </ClientProvider>
      <YandexMetrika />
    </html>
  );
}
