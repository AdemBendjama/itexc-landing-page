import Image from "next/image";
import { Button } from "../button";
import { ArrowRight } from "lucide-react";

function AcademySection() {
  return (
    <div className="bg-white text-black">
      <div className="flex justify-between lg:gap-[5rem] gap-4 lg:py-[7.5rem] sm:py-24 py-16 2xl:w-[1300px] 2xl:mx-auto xl:mx-[4.375rem] lg:mx-[5%] mx-[1rem]">
        <div className="flex-1 flex flex-col gap-[1.25rem]">
          <div className="flex flex-col gap-[2rem]">
            <div className="flex flex-col gap-[1rem]">
              <span className="font-poppins text-base font-semibold leading-[150%]">
                LEARNERS AND STUDENTS
              </span>
              <div className="flex flex-col gap-[1.25rem]">
                <span className="font-poppins lg:text-[3rem] sm:text-[2.5rem] text-[2rem] font-bold leading-[120%]">
                  You can learn anything.
                  <br />
                  With{" "}
                  <span className="bg-gradient-to-r from-[#F47B2E] to-[#FE0F9E] bg-clip-text text-transparent">
                    ITEXC ACADEMY
                  </span>
                </span>
                <span className="text-lg leading-[150%] font-normal">
                  Our way to give back to the community. Teaching the next
                  generation of engineers with engaging courses guided by
                  professionals in various fields and raising the bar for
                  standards in Information technologies.
                </span>
              </div>
            </div>
            <div className="flex gap-[1.25rem] py-[0.5rem]">
              <div className="flex flex-col gap-[1rem]">
                <div className="w-[3rem] h-[3rem] relative">
                  <Image
                    src="/book-icon.svg"
                    alt="book icon"
                    fill={true}
                    className="object-cover"
                  />
                </div>
                <span className="font-bold text-[1.25rem] leading-[140%]">
                  Program Variations
                </span>
                <span className="text-base leading-[150%] font-normal">
                  Join our IT courses: quick basics or in-depth PATH programs
                  for serious learners.
                </span>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <div className="w-[3rem] h-[3rem] relative">
                  <Image
                    src="/graduation-icon.svg"
                    alt="graduation icon"
                    fill={true}
                    className="object-cover"
                  />
                </div>
                <span className="font-bold text-[1.25rem] leading-[140%]">
                  Graduate and get certified
                </span>
                <span className="text-base leading-[150%] font-normal">
                  Get certified by professionals to prove yourself and show your
                  skills in your field
                </span>
              </div>
            </div>
          </div>
          <div className="pt-[1rem]">
            <Button
              variant="gray"
              className="flex gap-[0.5rem] h-[3.75rem] px-[3.125rem] py-[1rem] rounded-[63px] text-base leading-[1.5rem] font-semibold font-poppins"
            >
              Join now
              <ArrowRight size={18} strokeWidth={3} />
            </Button>
          </div>
        </div>
        <div className="flex-1 sm:flex hidden items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/academy.svg"
              alt="itexc acedemy design"
              fill={true}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademySection;
