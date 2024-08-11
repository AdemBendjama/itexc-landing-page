import Footer from "@/components/ui/footer";
import Logo3D from "@/components/ui/logo-3d";
import Navbar from "@/components/ui/navbar";
import Sections from "@/components/ui/sections/sections";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <Logo3D />
      <Sections />
    </>
  );
}
