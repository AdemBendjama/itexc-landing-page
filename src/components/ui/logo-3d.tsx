import Image from "next/image";

function Logo3D() {
  return (
    <div className="sm:h-[400px] h-[300px] w-screen mt-[4.375rem] overflow-hidden">
      <div className="lg:h-[500px] h-full w-screen relative">
        <iframe
          src="https://my.spline.design/itexclogo-99d672ac558ea04e4981221b778201eb/"
          width="100%"
          height="100%"
          className="-top-[100px] absolute lg:block hidden"
        />
        <Image
          src="/itexc-design.jpg"
          alt="itexc logo 3d design"
          fill={true}
          className="object-contain lg:hidden"
        />
      </div>
    </div>
  );
}

export default Logo3D;
