import type { Metadata } from "next";
import { Mulish, Poppins, Roboto } from "next/font/google";
import "@/styles/globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const mulish = Mulish({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "ITEXC Group | Persue excellence",
  description:
    "Empowering businesses with cutting-edge software development, design, and system integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${poppins.className} ${mulish.className} `}
      >
        {children}
      </body>
    </html>
  );
}
