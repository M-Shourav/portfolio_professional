import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
interface props {
  className?: string;
  title: string;
  subtitle: string;
}
const Logo = ({ title, subtitle, className }: props) => {
  return (
    <div className="text-2xl group">
      <Link href={"/"} className="flex items-center">
        <h2 className={cn("group-hover:text-lightSky hoverEffect", className)}>
          {title}
        </h2>
        <span className="text-lightSky group-hover:text-white hoverEffect">
          {subtitle}
        </span>
      </Link>
    </div>
  );
};

export default Logo;
