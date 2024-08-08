import Footer from "@/components/ui/footer";
import Logo3D from "@/components/ui/logo-3d";
import Navbar from "@/components/ui/navbar";
import Sections from "@/components/ui/sections/sections";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Suspense
        fallback={
          <div className="sm:h-[500px] h-[300px] w-screen mt-[4.375rem]" />
        }
      >
        <Logo3D />
      </Suspense>
      <Sections />
      <Footer />
    </div>
  );
}
