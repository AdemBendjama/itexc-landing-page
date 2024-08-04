import PhoneIcon from "@/components/icons/phone-icon";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

function Navbar() {
  return (
    <div className="h-[4.28rem] flex justify-between items-center font-poppins">
      <div className="flex gap-[1.25rem] items-center">
        <Image
          src="/ITEXC-GROUP-V-WORDMARK.svg"
          alt="watermark"
          width={103}
          height={32}
        />
        <ul className="flex items-center gap-[1.25rem] text-base">
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
      <div className="flex gap-[1.25rem] items-center">
        <div className="flex gap-[10px] items-center">
          <PhoneIcon width={24} height={24} className="stroke-black" />
          <span className="text-base">+213 23747979</span>
        </div>
        <div className="flex gap-[5px] items-center">
          <span className="font-semibold">Username</span>
          <ChevronDown size={14} strokeWidth={3} />
        </div>
        <Button
          variant="submit"
          className="h-auto rounded-[5px] px-[1.25rem] py-[5px] text-base font-normal"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
