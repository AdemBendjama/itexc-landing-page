import PlayVideoIcon from "@/components/icons/play-video-icon";
import Image from "next/image";

function AboutUsSection() {
  return (
    <div className="relative">
      <div className="sm:h-[30rem] h-[28rem] sm:pt-[6.25rem] pt-[3rem] 2xl:w-[1300px] 2xl:mx-auto xl:mx-[4.375rem] lg:mx-[5%] sm:mx-[1.5rem] mx-[1rem]">
        <Image
          src="/about-us-bg.jpg"
          alt="background image"
          fill={true}
          className="object-cover -z-50"
          sizes="100vw"
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
        <div className="flex justify-center lg:h-[320px] sm:h-[270px] xs:h-[200px] h-[140px] w-screen absolute mx-auto inset-0 sm:top-[19.8125rem] xs:top-[21.5rem] top-[23.5rem]">
          <div className="flex items-center justify-center h-full lg:w-[770px] sm:w-[600px] xs:w-[420px] w-[85%] shadow-video-drop relative rounded-[20px]">
            <Image
              src="/about-us-video.jpg"
              alt="about us video"
              fill={true}
              className="rounded-[20px]"
              sizes="(min-width: 1024px) 770px, (min-width: 640px) 600px, (min-width: 480px) 420px, 85vw"
            />
            <PlayVideoIcon width={70} height={70} className="z-10" />
            <div className="absolute inset-0 bg-video-overlay z-10 rounded-[20px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
