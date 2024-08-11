import Image from "next/image";
import { Button } from "../button";

function SoftwareDevSection() {
  return (
    <div className="bg-white text-black font-poppins font-normal">
      <div className="flex sm:flex-row flex-col lg:gap-[5rem] sm:gap-12 gap-8 items-center sm:pt-[6.25rem] sm:pb-0 pt-36 pb-12 sm:h-[780px] wrapper">
        <div className="flex-1 flex flex-col gap-[1rem]">
          <span className="font-semibold text-base">OUR SPECIALTY</span>
          <span className="font-bold lg:text-[3rem] sm:text-[2.25rem] text-[1.5rem] leading-[120%]">
            <span className="text-blue-background">Software Development</span>
            <br />
            is Where we excel
          </span>
          <span className="sm:text-lg text-base leading-[150%]">
            Where innovation meets code. We excel in crafting bespoke software
            solutions that transform your business challenges into powerful,
            efficient applications. Our expertise drives your digital success.
          </span>
          <div className="sm:flex hidden lg:gap-[1.5rem] gap-2 pt-[1rem]">
            <Button
              variant="submit-second"
              className="flex gap-[0.75rem] h-[3rem] px-[1.5rem] py-[0.75rem] rounded-[150px] text-base font-semibold"
            >
              Start your project
              <Image alt="logo" src="/LOGO-WHITE.svg" width={24} height={24} />
            </Button>
            <Button
              variant="gray"
              className="h-[3rem] px-[1.5rem] py-[0.75rem] rounded-[150px] text-base font-semibold"
            >
              Learn more
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex lg:flex-row flex-col gap-[1.5rem]">
            <div className="flex-1 flex flex-col gap-[1rem]">
              <span className="sm:text-xl text-lg leading-[140%] font-semibold">
                Web development
              </span>
              <span className="sm:text-base text-sm leading-[150%]">
                From responsive websites to complex web apps, we craft tailored
                online solutions that engage users and drive business growth.
              </span>
            </div>
            <div className="flex-1 flex flex-col gap-[1rem]">
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
            className="flex gap-2 h-[2.875rem] px-5 rounded-[150px] xs:text-sm text-xs font-semibold"
          >
            Start your project
            <Image alt="logo" src="/LOGO-WHITE.svg" width={16} height={16} />
          </Button>
          <Button
            variant="gray"
            className="h-[2.875rem] px-5 rounded-[150px] xs:text-sm text-xs font-semibold"
          >
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SoftwareDevSection;
