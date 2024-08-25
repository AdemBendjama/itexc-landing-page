import { Button } from "../button";
import Image from "next/image";

function SoftwareDevSection() {
  return (
    <div className="bg-white text-black font-poppins font-normal">
      <div className="flex sm:flex-row flex-col lg:gap-20 sm:gap-12 gap-8 items-center sm:pt-24 sm:pb-0 pt-36 pb-12 sm:h-[780px] wrapper">
        <div className="flex-1 flex flex-col gap-4">
          <span className="font-semibold text-base">OUR SPECIALTY</span>
          <span className="font-bold lg:text-5xl sm:text-4xl text-2xl leading-[120%]">
            <span className="text-blue-background">Software Development</span>
            <br />
            is Where we excel
          </span>
          <span className="sm:text-lg text-base leading-[150%]">
            Where innovation meets code. We excel in crafting bespoke software
            solutions that transform your business challenges into powerful,
            efficient applications. Our expertise drives your digital success.
          </span>
          <div className="sm:flex hidden lg:gap-6 gap-2 pt-4">
            <Button
              variant="submit-second"
              className="flex gap-3 h-[3rem] px-6 py-3 rounded-[150px] text-base font-semibold"
            >
              Start your project
              <Image alt="logo" src="/LOGO-WHITE.svg" width={24} height={24} />
            </Button>
            <Button
              variant="gray"
              className="h-12 px-6 py-3 rounded-[150px] text-base font-semibold"
            >
              Learn more
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex lg:flex-row flex-col gap-6">
            <div className="flex-1 flex flex-col gap-4">
              <span className="sm:text-xl text-lg leading-[140%] font-semibold">
                Web development
              </span>
              <span className="sm:text-base text-sm leading-[150%]">
                From responsive websites to complex web apps, we craft tailored
                online solutions that engage users and drive business growth.
              </span>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <span className="sm:text-xl text-lg leading-[140%] font-semibold">
                Mobile development
              </span>
              <span className="sm:text-base text-sm leading-[150%]">
                Intuitive, powerful apps for iOS and Android. We bring your
                mobile vision to life, ensuring seamless user experiences across
                devices
              </span>
            </div>
          </div>
        </div>
        <div className="sm:hidden w-full flex gap-2">
          <Button
            variant="submit-second"
            className="flex gap-2 h-12 px-5 rounded-[150px] xs:text-sm text-xs font-semibold"
          >
            Start your project
            <Image alt="logo" src="/LOGO-WHITE.svg" width={16} height={16} />
          </Button>
          <Button
            variant="gray"
            className="h-12 px-5 rounded-[150px] xs:text-sm text-xs font-semibold"
          >
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SoftwareDevSection;
