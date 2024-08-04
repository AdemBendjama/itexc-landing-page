import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <div className="xl:w-[1240px] xl:mx-auto lg:mx-[5%] mx-[1rem]">
      <Navbar />
      <div className="h-[25rem]">
        <iframe
          src="https://my.spline.design/itexclogo-99d672ac558ea04e4981221b778201eb/"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
