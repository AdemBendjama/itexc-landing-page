"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
};

function WhatWeDoSection() {
  return (
    <div className="bg-submit-second text-submit-foreground font-poppins">
      <div className="h-[500px] relative 2xl:w-[1300px] 2xl:mx-auto xl:mx-[4.375rem] lg:mx-[5%] mx-[1rem]">
        <Image
          src="/group-mark.svg"
          alt="group mark img"
          width={150}
          height={210}
          className="absolute top-0"
        />
        <div className="h-full flex items-center justify-center">
          <div className="w-[43rem] flex flex-col items-center justify-center gap-[0.5rem] text-center">
            <span className="font-semibold text-[3rem] leading-[150%]">
              EXPLORE OUR{" "}
              <span className="bg-gradient-to-r from-[#3CCCAE] via-[#F47B2E] to-[#FE0F9E] bg-clip-text text-transparent">
                GROUP
              </span>
            </span>
            <span className="font-normal text-[1.125rem] leading-[150%]">
              Specialized Divisions for Targeted Excellence
            </span>
            <div className="w-[38rem]">
              <Slider {...settings}>
                <div>
                  <div className="flex items-center justify-center w-[7rem] h-[7rem]">
                    <Avatar className="w-[5.25rem] h-[5.25rem]">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center w-[7rem] h-[7rem]">
                    <Avatar className="w-[5.25rem] h-[5.25rem]">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center w-[7rem] h-[7rem]">
                    <Avatar className="w-[5.25rem] h-[5.25rem]">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center w-[7rem] h-[7rem]">
                    <Avatar className="w-[5.25rem] h-[5.25rem]">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center w-[7rem] h-[7rem]">
                    <Avatar className="w-[5.25rem] h-[5.25rem]">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center w-[7rem] h-[7rem]">
                    <Avatar className="w-[5.25rem] h-[5.25rem]">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </Slider>
            </div>
            <span className="font-normal text-[1.125rem] leading-[150%]">
              We offer diverse expertise through dedicated teams, each focused
              on a distinct field to precisely meet our clients varied needs and
              deliver exceptional results.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDoSection;
