import { ChevronDown } from "lucide-react";
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
            <li className="flex gap-[5px] items-center">
              <span>Services</span>
              <ChevronDown size={14} />
            </li>
            <li className="flex gap-[5px] items-center">
              <span>Our Teams</span>
              <ChevronDown size={14} />
            </li>
            <li className="flex gap-[5px] items-center">
              <span>Digito</span>
              <ChevronDown size={14} />
            </li>
            <li className="flex gap-[5px] items-center">
              <span>Consulting</span>
              <ChevronDown size={14} />
            </li>
            <li className="flex gap-[5px] items-center">
              <span>More</span>
              <ChevronDown size={14} />
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}
