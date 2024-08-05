import Image from "next/image";

function WhatWeDoSection() {
  return (
    <div className="bg-submit-second">
      <div className="h-[500px] w-screen relative 2xl:w-[1300px] 2xl:mx-auto xl:mx-[4.375rem] lg:mx-[5%] mx-[1rem]">
        <Image
          src="/group-mark.svg"
          alt="group mark img"
          width={150}
          height={210}
          className="absolute top-0"
        />
      </div>
    </div>
  );
}

export default WhatWeDoSection;
