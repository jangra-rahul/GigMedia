"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Icons from "./Icons";
import { NAVIGATION_LINK_LIST } from "@/utlis/helper";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg_hero">
      <div className="max-w-[1410px] mx-auto px-4 flex justify-between items-center pt-6 md:pt-8 lg:pt-10">
        <Link href={"/"}>
          <Image
            className="w-10 md:w-auto"
            src={"/images/svg/page-logo.svg"}
            height={72}
            width={72}
            alt="page-lgoo"
          />
        </Link>
        <div onClick={() => setIsOpen(true)} className="cursor-pointer">
          <Icons icon={"menuToggel"} />
        </div>
      </div>
      <div
        className={`fixed flex justify-center items-center top-0 duration-500 w-full h-screen bg-black z-50 ${
          isOpen ? "right-0" : "-right-full"
        }`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-4 right-4"
        >
          <Icons icon={"cross"} />
        </div>
        {NAVIGATION_LINK_LIST.map((obj, i) => {
          return (
            <Link
              key={i}
              href={obj.url}
              onClick={() => setIsOpen(false)}
              className="text-md md:text-lg lg:text-2xl xl:text-3xl font-semibold px-4 py-2 text-white hover:text-[#ff0004] rounded-md duration-300"
            >
              {obj.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
