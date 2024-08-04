import Logo3D from "@/components/ui/logo-3d";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <div className="xl:w-[1300px] xl:mx-auto lg:mx-[5%] mx-[1rem]">
      <Navbar />
      <Logo3D />
      <div className="h-[333px]"></div>
    </div>
  );
}
