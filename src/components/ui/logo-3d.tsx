import Image from "next/image";

function Logo3D() {
  return (
    <div className="sm:h-[500px] h-[300px] mt-16">
      <div className="h-full relative lg:block hidden">
        <iframe
          src="https://my.spline.design/itexclogo-99d672ac558ea04e4981221b778201eb/"
          width="100%"
          height="100%"
        />
      </div>
      <div className="h-full relative lg:hidden">
        <Image
          src="/itexc-design.jpg"
          alt="itexc logo 3d design"
          fill={true}
          className="object-contain"
          sizes="100vw"
        />
      </div>
    </div>
  );
}

export default Logo3D;
