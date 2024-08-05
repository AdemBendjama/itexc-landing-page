import { Button } from "@/components/ui/button";
import Image from "next/image";

function OpeningSection() {
  return (
    <div className="bg-blue-background text-white">
      <div className="h-[333px] py-[5rem] flex gap-[5rem] items-center 2xl:w-[1300px] 2xl:mx-auto xl:mx-[4.375rem] lg:mx-[5%] mx-[1rem]">
        <div className="flex-1">
          <span className="text-[3.5rem] font-bold leading-[120%]">
            Pursue excellence
            <br />
            with{" "}
            <span className="bg-gradient-to-r from-[#3CCCAE] via-[#F47B2E] to-[#FE0F9E] bg-clip-text text-transparent">
              ITEXC GROUP
            </span>
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-[1.5rem]">
          <div>
            <span className="text-[18px] font-normal leading-[150%]">
              Empowering businesses with cutting-edge software development,
              design, and system integration
            </span>
          </div>
          <div className="flex gap-[1rem] pt-[1rem]">
            <Button
              variant="black"
              className="flex gap-[0.75rem] h-[3rem] px-[1.5rem] py-[0.75rem] rounded-[150px] text-base font-normal"
            >
              Estimate your project
              <Image alt="logo" src="/LOGO-WHITE.svg" width={24} height={24} />
            </Button>
            <Button
              variant="white"
              className="h-[3rem] px-[1.5rem] py-[0.75rem] rounded-[150px] text-base font-normal"
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
