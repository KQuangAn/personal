"use client";

import { useRouter } from "next/navigation";
import NavItem from "./NavItem";
import Eyes from "../eyes/Eyes";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="fixed w-full z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
        <div
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
        >
          <div className="flex flex-row gap-3 px-4">
            <div className="text-green-500 px-4 ">KHUAT QUANG AN</div>
            <Eyes />
          </div>
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
          >
            <NavItem
              label="Projects"
              onClick={() => router.push("/Projects")}
            />
            <NavItem label="" onClick={() => router.push("/")} />
            <NavItem label="" onClick={() => router.push("/")} />
            <NavItem label="Contact" onClick={() => router.push("/contact")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
