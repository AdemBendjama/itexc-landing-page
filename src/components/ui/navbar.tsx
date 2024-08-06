"use client";
import PhoneIcon from "@/components/icons/phone-icon";
import { Button } from "@/components/ui/button";
import { ChevronDown, MenuIcon } from "lucide-react";
import Image from "next/image";
import NavbarSidebar from "./navbar-sidebar";
import { useSideBarContext } from "@/context/sidebar-context-provider";

function Navbar() {
  const { isSideBarOpen, toggleSideBar } = useSideBarContext();
  return (
    <div className="bg-white fixed top-0 z-50 w-screen">
      <div className="2xl:w-[1240px] 2xl:mx-auto xl:mx-[70px] lg:mx-[3%] mx-[1rem] h-[4.375rem] flex justify-between items-center font-poppins">
        <div className="flex gap-[1.25rem] items-center">
          <NavbarSidebar
            isSideBarOpen={isSideBarOpen}
            toggleSideBar={toggleSideBar}
          />
          <Image
            src="/ITEXC-GROUP-V-WORDMARK.svg"
            alt="watermark"
            width={103}
            height={32}
          />
          <ul className="lg:flex hidden items-center gap-[1.25rem] text-base font-normal">
            <li>Home</li>
            <li className="flex gap-[3px] items-center">
              <span>Services</span>
              <ChevronDown size={14} />
            </li>
            <li className="flex gap-[3px] items-center">
              <span>Our Teams</span>
              <ChevronDown size={14} />
            </li>
            <li className="flex gap-[3px] items-center">
              <span>Digito</span>
              <ChevronDown size={14} />
            </li>
            <li className="flex gap-[3px] items-center">
              <span>Consulting</span>
              <ChevronDown size={14} />
            </li>
            <li className="flex gap-[3px] items-center">
              <span>More</span>
              <ChevronDown size={14} />
            </li>
          </ul>
        </div>
        <div className="flex gap-[1.25rem] items-center">
          <div className="xl:flex hidden gap-[10px] items-center">
            <PhoneIcon width={24} height={24} className="stroke-black" />
            <span className="text-base">+213 23747979</span>
          </div>
          <div className="flex gap-[3px] items-center">
            <span className="font-semibold">Username</span>
            <ChevronDown size={12} strokeWidth={4} />
          </div>
          <Button
            variant="submit"
            className="sm:block hidden h-auto rounded-[5px] px-[1.25rem] py-[5px] text-base font-normal"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
