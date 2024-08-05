import Image from "next/image";
import { Button } from "../button";

function SoftwareDevSection() {
  return (
    <div className="bg-white font-poppins font-normal">
      <div className="flex gap-[5rem] items-center pt-[6.25rem] h-[780px] 2xl:w-[1300px] 2xl:mx-auto xl:mx-[4.375rem] lg:mx-[5%] mx-[1rem]">
        <div className="flex-1 flex flex-col gap-[1rem]">
          <span className="font-semibold text-base">OUR SPECIALTY</span>
          <span className="font-bold text-[3rem] leading-[120%]">
            <span className="text-blue-background">Software Development</span>
            <br />
            is Where we excel
          </span>
          <span className="text-lg leading-[150%]">
            Where innovation meets code. We excel in crafting bespoke software
            solutions that transform your business challenges into powerful,
            efficient applications. Our expertise drives your digital success.
          </span>
          <div className="flex gap-[1.5rem] pt-[1rem]">
            <Button
              variant="blue"
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
          <div className="flex gap-[1.5rem] w-[524px]">
            <div className="flex-1 flex flex-col gap-[1rem]">
              <span className="text-xl leading-[140%] font-semibold">
                Web development
              </span>
              <span className="leading-[150%]">
                From responsive websites to complex web apps, we craft tailored
                online solutions that engage users and drive business growth.
              </span>
            </div>
            <div className="flex-1 flex flex-col gap-[1rem]">
              <span className="text-xl leading-[140%] font-semibold">
                Mobile development
              </span>
              <span className="leading-[150%]">
                Intuitive, powerful apps for iOS and Android. We bring your
                mobile vision to life, ensuring seamless user experiences across
                devices
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoftwareDevSection;
