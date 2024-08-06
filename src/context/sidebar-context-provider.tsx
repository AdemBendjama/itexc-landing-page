"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface SideBarContextType {
  isSideBarOpen: boolean;
  toggleSideBar: () => void;
}

const SideBarContext = createContext<SideBarContextType | undefined>(undefined);

export const useSideBarContext = () => {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error("context out of scope of SideBarContextProvider");
  }
  return context;
};

export function SideBarContextProvider({
  children,
  setIsSideBarOpenRoot,
}: {
  children: React.ReactNode;
  setIsSideBarOpenRoot: Dispatch<SetStateAction<boolean>>;
}) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen((prevState) => !prevState);
    setIsSideBarOpenRoot((prevState) => !prevState);
  };

  return (
    <SideBarContext.Provider value={{ isSideBarOpen, toggleSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
}
