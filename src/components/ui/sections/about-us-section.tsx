import Image from "next/image";
import PlayVideoIcon from "@/components/icons/play-video-icon";

function AboutUsSection() {
  return (
    <div className="relative">
      <div className="sm:h-[30rem] h-[28rem] sm:pt-24 pt-12 wrapper">
        <Image
          src="/about-us-bg.jpg"
          alt="background image"
          fill={true}
          className="object-cover -z-50"
          sizes="100vw"
        />
        <div className="flex flex-col gap-5 items-center font-poppins text-white text-center">
          <span className="lg:text-5xl sm:text-4xl text-3xl font-bold">
            DISCOVER MORE ABOUT US
          </span>
          <span className="lg:w-[600px] sm:w-[80%] lg:text-lg sm:text-base text-sm font-normal">
            itexc is a dynamic IT company specializing in software development,
            design, Odoo integration, and HR solutions. We deliver innovative
            technologies to meet diverse business needs for local and global
            clients, providing cutting-edge solutions that drive success across
            industries.
          </span>
        </div>
        <div className="flex justify-center lg:h-[320px] sm:h-[270px] xs:h-[200px] h-[140px] w-full absolute mx-auto inset-0 sm:top-80 xs:top-[21.5rem] top-[23.5rem]">
          <div className="flex items-center justify-center h-full lg:w-[770px] sm:w-[600px] xs:w-[420px] w-[85%] shadow-video-drop relative rounded-xl overflow-hidden">
            <Image
              src="/about-us-video.jpg"
              alt="about us video"
              fill={true}
              sizes="(min-width: 1024px) 770px, (min-width: 640px) 600px, (min-width: 480px) 420px, 85vw"
            />
            <PlayVideoIcon
              width={70}
              height={70}
              className="z-20 absolute animate-pulse"
              aria-disabled
            />
            <PlayVideoIcon
              width={80}
              height={78}
              className="z-30 absolute animate-pulse"
            />
            <div className="absolute inset-0 bg-video-overlay z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
