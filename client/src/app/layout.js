import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { NavbarComponent as Navbar } from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rutas Doradas",
  description: "Travel app made by c17-29's team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light [&_*]:text-black">
      <body className={`${inter.className} mainTheme [&>*]:bg-background`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
