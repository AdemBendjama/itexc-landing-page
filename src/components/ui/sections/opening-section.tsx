import { Button } from "@/components/ui/button";
import Image from "next/image";

function OpeningSection() {
  return (
    <div className="bg-blue text-white">
      <div className="h-[333px] sm:py-[5rem] py-8 flex sm:flex-row flex-col lg:gap-[5rem] gap-8 items-center 2xl:w-[1300px] 2xl:mx-auto xl:mx-[4.375rem] lg:mx-[5%] mx-[1rem]">
        <div className="sm:flex-1">
          <span className="lg:text-[3.5rem] sm:text-[2.5rem] text-[2rem] font-bold leading-[120%]">
            Pursue excellence
            <br />
            with{" "}
            <span className="bg-gradient-to-r from-[#3CCCAE] via-[#F47B2E] to-[#FE0F9E] bg-clip-text text-transparent">
              ITEXC GROUP
            </span>
          </span>
        </div>
        <div className="sm:flex-1 sm:text-left text-center flex flex-col lg:gap-[1.5rem] sm:gap-2">
          <div>
            <span className="sm:text-[18px] text-base font-normal leading-[150%]">
              Empowering businesses with cutting-edge software development,
              design, and system integration
            </span>
          </div>
          <div className="flex sm:justify-start justify-center sm:gap-[1rem] gap-1 pt-[1rem]">
            <Button
              variant="black"
              className="flex gap-[0.75rem] sm:h-[3rem] h-10 sm:px-[1.5rem] px-4 py-[0.75rem] rounded-[150px] sm:text-base text-sm font-normal"
            >
              Estimate your project
              <Image alt="logo" src="/LOGO-WHITE.svg" width={24} height={24} />
            </Button>
            <Button
              variant="white"
              className="sm:h-[3rem] h-10 sm:px-[1.5rem] px-4 py-[0.75rem] rounded-[150px] sm:text-base text-sm font-normal"
            >
              About us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpeningSection;
