"use client";
import { SideBarContextProvider } from "@/context/sidebar-context-provider";
import { cn } from "@/lib/utils";
import { Mulish, Poppins, Roboto } from "next/font/google";
import { useState } from "react";
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
function Body({ children }: { children: React.ReactNode }) {
  const [isSideBarOpenRoot, setIsSideBarOpenRoot] = useState(false);
  return (
    <body
      className={cn(
        `min-h-screen bg-background font-roboto antialiased ${
          isSideBarOpenRoot && "fixed"
        }`,
        roboto.variable,
        poppins.variable,
        mulish.variable
      )}
    >
      <SideBarContextProvider setIsSideBarOpenRoot={setIsSideBarOpenRoot}>
        {children}
      </SideBarContextProvider>
    </body>
  );
}

export default Body;
