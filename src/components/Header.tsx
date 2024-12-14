"use client";
import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavigation from "./MobileNavigation";
import { NavbarData } from "@/constants";
const Header = () => {
  const Pathname = usePathname();
  return (
    <div className="w-full h-20 bg-bodyColor text-white/80 border-b border-b-hoverColor/50">
      <Container className="w-full h-full flex items-center justify-between gap-7">
        <Logo title="Masum" subtitle="." />
        <div className="hidden md:inline-flex items-center gap-7 text-sm font-medium uppercase tracking-wide">
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
            href={"./resume.pdf"}
            target="_blank"
            rel="noopener noreferrer "
          >
            Hire Me
          </Link>
        </div>
        <div className="inline-flex md:hidden">
          <MobileNavigation />
        </div>
      </Container>
    </div>
  );
};

export default Header;
