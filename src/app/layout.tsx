import type { Metadata } from "next";
import { Mulish, Poppins, Roboto } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-mulish",
});

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
        className={cn(
          "min-h-screen bg-background font-roboto antialiased",
          roboto.variable,
          poppins.variable,
          mulish.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
