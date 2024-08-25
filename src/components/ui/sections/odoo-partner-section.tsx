import { ArrowRight } from "lucide-react";
import { Button } from "../button";
import Image from "next/image";

function OdooPartnerSection() {
  return (
    <div className="font-poppins text-black relative">
      <div className="sm:text-left text-center flex sm:flex-row flex-col items-center justify-center xl:gap-[7.5rem] lg:gap-12 sm:gap-4 gap-8 sm:h-[600px] h-auto sm:pb-0 pb-8 sm:pt-0 pt-12 wrapper">
        <Image
          src="/odexc-background.svg"
          alt="background icons"
          fill={true}
          className="object-cover -z-10 bg-white"
        />
        <div className="sm:flex-1 flex justify-center">
          <div className="xl:w-[31rem] xl:h-[22rem] lg:w-[28rem] lg:h-[20rem] md:w-[23rem] md:h-[16rem] sm:w-[22rem] sm:h-[15rem] w-[18.5rem] h-[13rem] relative">
            <Image src="/Visuals.png" alt="odoo logo" fill={true} />
          </div>
        </div>
        <div className="sm:flex-1 flex flex-col lg:gap-[2.5rem] gap-7">
          <div className="flex flex-col gap-[1.25rem]">
            <span className="font-bold lg:text-[3rem] sm:text-[2.5rem] text-[2rem] leading-[130%]">
              Official Odoo Partner
            </span>
            <span className="font-normal text-[1.125rem] leading-[150%]">
              Odoo certified partner , Through{" "}
              <span className="font-semibold bg-gradient-to-r from-[#3CCCAE] via-[#F47B2E] to-[#FE0F9E] bg-clip-text text-transparent">
                Odexc
              </span>{" "}
              We offer seamless Odoo ERP System integration tailored to your
              business needs{" "}
            </span>
          </div>
          <div className="sm:block flex justify-center">
            <Button
              variant="gray"
              className="flex gap-[0.5rem] h-[3.75rem] px-[3.125rem] py-[1rem] rounded-[63px] text-lg leading-[1.5rem] font-semibold"
            >
              Get Started
              <ArrowRight size={20} strokeWidth={3} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OdooPartnerSection;
