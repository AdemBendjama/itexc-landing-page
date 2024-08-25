"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/slider-arrows.css";

import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Image from "next/image";
import Slider from "react-slick";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <ChevronRight
      className={className}
      style={{ ...style }}
      onClick={onClick}
      size={28}
      color="#ffffff"
    />
  );
};

const PrevArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <ChevronLeft
      className={className}
      style={{ ...style }}
      onClick={onClick}
      size={28}
      color="#ffffff"
    />
  );
};

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

function WhatWeDoSection() {
  return (
    <div className="bg-submit-second text-submit-foreground font-poppins">
      <div className="h-[500px] relative wrapper">
        <div className="absolute top-0">
          <div className="lg:w-40 lg:h-52 sm:w-28 sm:h-36 w-12 h-16 relative">
            <Image src="/group-mark.svg" alt="group mark img" fill={true} />
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          <div className="z-10 max-w-[688px] flex flex-col items-center justify-center gap-2 text-center">
            <span className="font-semibold sm:text-5xl text-4xl leading-[120%]">
              EXPLORE OUR{" "}
              <span className="bg-gradient-to-r from-[#3CCCAE] via-[#F47B2E] to-[#FE0F9E] bg-clip-text text-transparent">
                GROUP
              </span>
            </span>
            <span className="font-normal sm:text-lg text-base leading-[150%]">
              Specialized Divisions for Targeted Excellence
            </span>
            <div className="sm:w-[38rem] w-[14rem]">
              <Slider {...settings}>
                <div>
                  <div className="flex items-center justify-center w-28 h-28">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center w-28 h-28">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center w-28 h-28">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center w-28 h-28">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center w-28 h-28">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center w-28 h-28">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </Slider>
            </div>
            <span className="font-normal sm:text-lg text-base leading-[150%]">
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
