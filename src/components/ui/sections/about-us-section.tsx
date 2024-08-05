import PlayVideoIcon from "@/components/icons/play-video-icon";
import Image from "next/image";

function AboutUsSection() {
  return (
    <div className="h-[477px] w-screen relative pt-[100px]">
      <Image
        src="/about-us-bg.jpg"
        alt="background image"
        fill={true}
        className="object-cover -z-50"
      />
      <div className="flex flex-col gap-[1.25rem] items-center font-poppins text-white">
        <span className="text-[3rem] font-bold leading-[3rem]">
          DISCOVER MORE ABOUT US
        </span>
        <span className="w-[600px] text-[1.125rem] leading-[1.5rem] font-normal text-center">
          itexc is a dynamic IT company specializing in software development,
          design, Odoo integration, and HR solutions. We deliver innovative
          technologies to meet diverse business needs for local and global
          clients, providing cutting-edge solutions that drive success across
          industries.
        </span>
      </div>
      <div className="flex justify-center h-[320px] w-screen absolute mx-auto inset-0 top-[317px] z-10">
        <div className="flex items-center justify-center h-full w-[770px] bg-video-overlay shadow-video-drop relative rounded-[20px]">
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
  );
}

export default AboutUsSection;
