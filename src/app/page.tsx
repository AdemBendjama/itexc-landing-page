import Image from "next/image";
export default function Home() {
  return (
    <div className="px-[6.25rem]">
      <div className="h-[4.28rem] flex items-center">
        <div className="flex gap-[1.25rem]">
          <Image
            src="/ITEXC-GROUP-V-WORDMARK.svg"
            alt="watermark"
            width={103}
            height={32}
          />
          <ul className="flex items-center gap-[1.25rem] font-poppins text-base">
            <li>Home</li>
            <li>Services</li>
            <li>Our Teams</li>
            <li>Digito</li>
            <li>Consulting</li>
            <li>More</li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}
