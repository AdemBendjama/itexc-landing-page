import { ArrowRight } from "lucide-react";
import { Button } from "../button";
import Image from "next/image";

function BrandexcSection() {
  return (
    <div className="bg-pink text-black font-poppins relative overflow-hidden">
      <div className="flex items-center sm:h-[37.5rem] py-16 wrapper">
        <div className="absolute sm:-bottom-[130px] sm:-right-[120px] -bottom-[50px] -right-[60px]">
          <div className="sm:w-[29rem] sm:h-[22rem] w-[16rem] h-[12rem] relative">
            <Image
              src="/3d-orange-ball.svg"
              alt="3d orange ball"
              fill={true}
              className="object-cover sm:opacity-100 opacity-50"
            />
          </div>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-[75px]">
          <div className="sm:w-[24.375rem] sm:h-[32.8125rem] w-[16.375rem] h-[24.8125rem] relative">
            <Image
              src="/b-pink-letter.png"
              alt="B logo"
              fill={true}
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col lg:gap-[1.25rem] gap-4 z-10">
          <span className="text-base font-semibold leading-[150%]">
            BRANDING AND DESIGN
          </span>
          <span className="sm:text-[2.5rem] text-[1.5rem] font-bold leading-[120%]">
            BRANDS DESIGNED TO
            <br />
            TRANSFORM WITH{" "}
            <span className="sm:text-[3.125rem] text-[2.5rem] sm:leading-[120%] leading-[150%] bg-gradient-to-r from-[#F47B2E] to-[#FE0F9E] bg-clip-text text-transparent">
              BRANDEXC
            </span>
          </span>
          <span className="text-base font-medium leading-[150%]">
            With our expert design team we guarantee to take your business to
            the next level
          </span>
          <div>
            <Button
              variant="orange"
              className="flex gap-[0.5rem] h-[3.75rem] px-[3.125rem] py-[1rem] rounded-[63px] text-base leading-[1.5rem] font-semibold"
            >
              GET IN TOUCH
              <ArrowRight size={18} strokeWidth={3} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandexcSection;
