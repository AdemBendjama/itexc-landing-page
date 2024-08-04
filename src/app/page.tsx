import Logo3D from "@/components/ui/logo-3d";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <div className="xl:w-[1240px] xl:mx-auto lg:mx-[5%] mx-[1rem]">
      <Navbar />
      <Logo3D />
    </div>
  );
}
