import { Button } from "@/components/ui/button";
import Image from "next/image";

function OpeningSection() {
  return (
    <div className="bg-blue text-white">
      <div className="sm:py-20 py-8 pb-12 flex sm:flex-row flex-col lg:gap-20 sm:gap-4 gap-10 items-center wrapper">
        <div className="sm:flex-1">
          <span className="lg:text-6xl sm:text-4xl text-3xl font-bold ">
            Pursue excellence
            <br />
            with{" "}
            <span className="bg-gradient-to-r from-[#3CCCAE] via-[#F47B2E] to-[#FE0F9E] bg-clip-text text-transparent">
              ITEXC GROUP
            </span>
          </span>
        </div>
        <div className="sm:flex-1 sm:text-left text-center flex flex-col lg:gap-6 gap-2">
          <div>
            <span className="sm:text-[18px] text-base font-normal leading-[150%]">
              Empowering businesses with cutting-edge software development,
              design, and system integration
            </span>
          </div>
          <div className="flex sm:justify-start justify-center sm:gap-4 gap-2 pt-4">
            <Button
              variant="black"
              className="flex gap-3 sm:h-12 h-10 sm:px-6 px-4 py-3 rounded-[150px] sm:text-base text-sm font-normal"
            >
              Estimate your project
              <Image
                alt="logo"
                src="/LOGO-WHITE.svg"
                width={24}
                height={24}
                className="sm:block hidden"
              />
              <Image
                alt="logo"
                src="/LOGO-WHITE.svg"
                width={16}
                height={16}
                className="sm:hidden block"
              />
            </Button>
            <Button
              variant="white"
              className="sm:h-12 h-10 sm:px-6 px-4 py-3 rounded-[150px] sm:text-base text-sm font-normal"
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
