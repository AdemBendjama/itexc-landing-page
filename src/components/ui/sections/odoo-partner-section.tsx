import Image from "next/image";
import { Button } from "../button";
import { ArrowRight } from "lucide-react";

function OdooPartnerSection() {
  return (
    <div className="font-poppins relative">
      <div className="flex items-center justify-center gap-[7.5rem] h-[600px] pt-[4rem] 2xl:w-[1300px] 2xl:mx-auto xl:mx-[4.375rem] lg:mx-[5%] mx-[1rem]">
        <Image
          src="/odexc-background.svg"
          alt="background icons"
          fill={true}
          className="object-cover -z-10 bg-white"
        />
        <div className="w-[603px] h-[407.5px] relative">
          <Image src="/Odoo-asset.svg" alt="odoo logo" fill={true} />
        </div>
        <div className="w-[35.625rem] flex flex-col gap-[2.5rem]">
          <div className="flex flex-col gap-[1.25rem]">
            <span className="font-bold text-[3rem] leading-[130%]">
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
          <div>
            <Button
              variant="black"
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
