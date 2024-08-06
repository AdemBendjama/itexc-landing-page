import Image from "next/image";
import { Button } from "../button";
import { ArrowRight } from "lucide-react";

function BrandexcSection() {
  return (
    <div className="bg-pink text-black font-poppins relative overflow-hidden">
      <div className="flex items-center h-[37.5rem] 2xl:w-[1300px] 2xl:mx-auto xl:mx-[4.375rem] lg:mx-[5%] mx-[1rem]">
        <div className="absolute -bottom-[130px] -right-[120px]">
          <div className="w-[29rem] h-[22rem] relative">
            <Image
              src="/3d-orange-ball.svg"
              alt="3d orange ball"
              fill={true}
              className="object-cover"
            />
          </div>
        </div>
        <div
          style={{ left: "calc(50% - 195px)" }}
          className="absolute -bottom-[75px]"
        >
          <div className="w-[24.375rem] h-[525px] relative">
            <Image
              src="/b-pink-letter.png"
              alt="B logo"
              fill={true}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[1.25rem]">
          <span className="text-base font-semibold leading-[150%]">
            BRANDING AND DESIGN
          </span>
          <span className="text-[2.5rem] font-bold leading-[3.75rem]">
            BRANDS DESIGNED TO
            <br />
            TRANSFORM WITH{" "}
            <span className="text-[3.125rem] bg-gradient-to-r from-[#F47B2E] to-[#FE0F9E] bg-clip-text text-transparent">
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
