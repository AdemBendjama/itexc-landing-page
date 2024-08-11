"use client";
import { ChevronRight, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function NavbarSidebar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen((prevState) => !prevState);
  };
  //
  const animateSideBar = isSideBarOpen
    ? "translate-x-0 opacity-100 transition-all duration-300 ease-in-out"
    : "-translate-x-full opacity-100 transition-all duration-300 ease-in-out";

  //
  const backgroundOverlay = isSideBarOpen && (
    <div
      className="w-screen h-screen bg-black bg-opacity-70 absolute top-16 disable-scroll"
      onClick={toggleSideBar}
    />
  );
  return (
    <div className="lg:hidden">
      {/* background black overlay */}
      {backgroundOverlay}

      {/* animated pop out sidebar */}
      <div
        className={`absolute left-0 top-16 bg-white text-black text-lg font-bold h-screen sm:w-[16rem] w-[50%] ${animateSideBar}`}
      >
        <ul className="flex flex-col gap-[1.25rem] text-base font-normal leading-[1.5rem] p-5">
          <li>Home</li>
          <li className="flex gap-[3px] items-center">
            <span>Services</span>
            <ChevronRight size={14} className="mt-[2px]" />
          </li>
          <li className="flex gap-[3px] items-center">
            <span>Our Teams</span>
            <ChevronRight size={14} className="mt-[2px]" />
          </li>
          <li className="flex gap-[3px] items-center">
            <span>Digito</span>
            <ChevronRight size={14} className="mt-[2px]" />
          </li>
          <li className="flex gap-[3px] items-center">
            <span>Consulting</span>
            <ChevronRight size={14} className="mt-[2px]" />
          </li>
          <li className="flex gap-[3px] items-center">
            <span>More</span>
            <ChevronRight size={14} className="mt-[2px]" />
          </li>
        </ul>
      </div>

      {/* side bar toggle button */}
      <div className="flex items-center justify-center">
        <MenuIcon
          size={32}
          className="hover:cursor-pointer"
          onClick={toggleSideBar}
        />
      </div>
    </div>
  );
}

export default NavbarSidebar;
