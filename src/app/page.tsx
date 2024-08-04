import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <div className="2xl:w-[1240px] 2xl:mx-auto xl:mx-[5%] mx-[1rem]">
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
