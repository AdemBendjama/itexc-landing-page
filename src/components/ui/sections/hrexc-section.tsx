import Image from "next/image";
import { Button } from "../button";

function HrexcSection() {
  return (
    <div className="bg-white text-black font-poppins">
      <div className="h-[72.125rem] flex flex-col gap-[3.75rem] 2xl:w-[1300px] 2xl:mx-auto xl:mx-[4.375rem] lg:mx-[5%] mx-[1rem]">
        <div className="sm:h-[37.5rem] lg:pt-[7rem] sm:py-0 pb-8 pt-16 items-center flex gap-4 justify-between">
          <div className="flex-1 flex flex-col gap-[0.625rem]">
            <span className="font-semibold text-base leading-[150%]">
              CORPERATE MANAGMENT
            </span>
            <span className="font-bold lg:text-[3rem] sm:text-[2.5rem] text-[2rem] leading-[120%] text-gray">
              The{" "}
              <span className="bg-gradient-to-b from-[#acfff5] to-[#26c7b4] bg-clip-text text-transparent">
                HREXC
              </span>{" "}
              Experience
            </span>
            <span className="font-medium text-lg leading-[150%]">
              Our comprehensive HR services empower your organization to
              navigate the complex landscape of modern workforce management. We
              help you reconcile the challenges of competitiveness and growth
              while fostering a culture of innovation and social responsibility
            </span>
            <div className="flex gap-[0.625rem] mt-[1.25rem]">
              <Button
                variant="cyan"
                className="flex gap-[0.5rem] h-[44px] px-[1.25rem] py-[0.625rem] rounded-[150px] text-base leading-[1.5rem] font-semibold"
              >
                Get Consulting
              </Button>
              <Button
                variant="gray"
                className="flex gap-[0.5rem] h-[44px] px-[1.25rem] py-[0.625rem] rounded-[150px] text-base leading-[1.5rem] font-semibold"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="sm:flex-1 sm:flex hidden justify-center">
            <div className="xl:w-[31rem] xl:h-[22rem] lg:w-[28rem] lg:h-[20rem] md:w-[22rem] md:h-[15rem] sm:w-[21rem] sm:h-[14rem] w-[18.5rem] h-[13rem] relative">
              <Image
                src="/hrexc-stock-img.jpg"
                alt="stock image"
                fill={true}
                className="rounded-[8px]"
              />
            </div>
          </div>
        </div>
        <div className="h-[27rem] mx-[3.125rem] rounded-[20px] shadow-card-hrexc-drop flex items-center justify-between">
          <div className="flex flex-col gap-[1.25rem] w-[36.625rem] p-[3.75rem]">
            <span className="text-[3.125rem] font-semibold leading-[130%] text-gray">
              Looking for a Job?
            </span>
            <span className="text-[20px] font-normal leading-[150%] text-gray">
              Discover a fresh approach to job searching with our user-friendly
              HREXC App. This helpful platform connects you to great career
              opportunities and our supportive team.
            </span>
            <div className="flex gap-[1.25rem]">
              <div className="w-[7.5rem] h-[2.5rem] relative">
                <Image src="/play-store.png" alt="store button" fill={true} />
              </div>
              <div className="w-[7.5rem] h-[2.5rem] relative">
                <Image src="/app-store.png" alt="store button" fill={true} />
              </div>
            </div>
          </div>
          <div className=" w-[36.625rem] h-full relative">
            <Image
              src="/hrexc-mobile-asset.jpg"
              alt="mobile hrexc design"
              fill={true}
              className="object-cover rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HrexcSection;
