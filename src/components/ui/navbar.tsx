import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import NavbarSidebar from "./navbar-sidebar";
import PhoneIcon from "@/components/icons/phone-icon";

function Navbar() {
  return (
    <div className="bg-white fixed top-0 z-50 w-full">
      <div className="wrapper-navbar py-4 flex justify-between items-center font-poppins">
        <div className="flex gap-5 items-center">
          <NavbarSidebar />
          <Image
            src="/ITEXC-GROUP-V-WORDMARK.svg"
            alt="watermark"
            width={103}
            height={32}
          />
          <ul className="lg:flex hidden items-center gap-5 text-base font-normal">
            <li>Home</li>
            <li className="flex gap-1 items-center">
              <span>Services</span>
              <ChevronDown size={14} />
            </li>
            <li className="flex gap-1 items-center">
              <span>Our Teams</span>
              <ChevronDown size={14} />
            </li>
            <li className="flex gap-1 items-center">
              <span>Digito</span>
              <ChevronDown size={14} />
            </li>
            <li className="flex gap-1 items-center">
              <span>Consulting</span>
              <ChevronDown size={14} />
            </li>
            <li className="flex gap-1 items-center">
              <span>More</span>
              <ChevronDown size={14} />
            </li>
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <div className="xl:flex hidden gap-2 items-center">
            <PhoneIcon width={24} height={24} className="stroke-black" />
            <span className="text-base">+213 23747979</span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="font-semibold">Username</span>
            <ChevronDown size={12} strokeWidth={4} />
          </div>
          <Button
            variant="submit"
            className="sm:block hidden h-auto rounded-sm px-5 py-1 text-base font-normal"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
