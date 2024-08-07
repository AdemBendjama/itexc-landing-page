import PlayVideoIcon from "@/components/icons/play-video-icon";
import Image from "next/image";

function AboutUsSection() {
  return (
    <div className="relative">
      <div className="h-[477px] xs:pt-[100px] pt-8 2xl:w-[1300px] 2xl:mx-auto xl:mx-[4.375rem] lg:mx-[5%] sm:mx-[1.5rem] mx-[1rem]">
        <Image
          src="/about-us-bg.jpg"
          alt="background image"
          fill={true}
          className="object-cover -z-50"
        />
        <div className="flex flex-col gap-[1.25rem] items-center font-poppins text-white text-center">
          <span className="lg:text-[3rem] sm:text-[2.5rem] text-[2rem] font-bold sm:leading-[3rem] leading-[120%]">
            DISCOVER MORE ABOUT US
          </span>
          <span className="lg:w-[600px] sm:w-[80%] lg:text-[1.125rem] sm:text-base text-sm leading-[1.5rem] font-normal">
            itexc is a dynamic IT company specializing in software development,
            design, Odoo integration, and HR solutions. We deliver innovative
            technologies to meet diverse business needs for local and global
            clients, providing cutting-edge solutions that drive success across
            industries.
          </span>
        </div>
        <div className="flex justify-center lg:h-[320px] sm:h-[270px] h-[200px] w-screen absolute mx-auto inset-0 sm:top-[317px] top-[370px] z-10">
          <div className="flex items-center justify-center h-full lg:w-[770px] sm:w-[600px] xs:w-[420px] w-[85%] bg-video-overlay shadow-video-drop relative rounded-[20px]">
            <Image
              src="/about-us-video.jpg"
              alt="about us video"
              fill={true}
              className="-z-10 overflow-hidden rounded-[20px]"
            />
            <PlayVideoIcon width={70} height={70} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
