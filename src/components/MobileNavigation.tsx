"use client";
import React, { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Logo from "./Logo";
import { NavbarData } from "../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };
  const Pathname = usePathname();
  return (
    <div className="inline-flex md:hidden">
      <button
        onClick={handleHamburger}
        className="text-3xl
         hover:text-hoverColor hoverEffect"
      >
        <IoMdMenu />
      </button>

      <div
        onClick={handleHamburger}
        className={`${
          isOpen
            ? "fixed top-0 left-0 w-[65%] px-4 py-6 bg-bodyColor border-r border-r-hoverColor/20 h-screen z-50 duration-700 ease-in-out"
            : "fixed top-0 left-[-100%] duration-1000 ease-in"
        }`}
      >
        <div className="w-full h-screen">
          <div className="w-full flex items-center justify-between">
            <Logo title="Masum" subtitle="." />
            <span
              onClick={handleHamburger}
              className="text-2xl mt-2 hover:text-red-500 hoverEffect 
            border border-transparent hover:border-hoverColor p-1 rounded-sm"
            >
              <IoMdClose />
            </span>
          </div>
          <div className="mt-10 px-6 flex flex-col items-start gap-7 text-sm font-medium uppercase tracking-wide">
            {NavbarData?.map((item) => (
              <Link
                key={item?.title}
                href={item?.href}
                className={`hover:text-lightSky hoverEffect group relative ${
                  item?.href === Pathname && "text-lightSky"
                }`}
              >
                {item?.title}
                <span
                  className="w-0 group-hover:w-full h-[1px]
               bg-lightSky inline-flex absolute bottom-0 left-0
               duration-500"
                />
              </Link>
            ))}
            <Link
              className="bg-lightSky/10 text-sm px-4 py-2 rounded-md
             hover:bg-lightSky hover:text-bodyColor hoverEffect"
              href={"/contact"}
              target="_blank"
              rel="noopener noreferrer "
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
      {/* Overly */}
      {isOpen && (
        <div
          onClick={handleHamburger}
          className="fixed inset-0 bg-bodyColor z-20"
        ></div>
      )}
    </div>
  );
};

export default MobileNavigation;
