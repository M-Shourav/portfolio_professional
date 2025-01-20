import React from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const ContactRight = () => {
  return (
    <div className="w-full flex flex-col items-start gap-5">
      <div className="flex items-center gap-5">
        <p
          className="w-10 h-10 flex items-center justify-center bg-hoverColor/10
        rounded-full"
        >
          <span className="text-white/80 text-lg">
            <FaPhone />
          </span>
        </p>
        <div className="flex flex-col gap-y-1">
          <p className="text-base font-normal text-white/50">Phone</p>
          <p
            className="text-base text-white/90 hover:text-lightSky/70
          duration-300"
          >
            (+88) 01710267985
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <p
          className="w-10 h-10 flex items-center justify-center bg-hoverColor/10
        rounded-full"
        >
          <span className="text-white/80 text-xl">
            <MdEmail />
          </span>
        </p>
        <div className="flex flex-col gap-y-1">
          <p className="text-base font-normal text-white/50">Email</p>
          <Link
            href={"mailto:am.masum1139@gmail.com"}
            className="text-base text-white/90 hover:text-lightSky/70
          duration-300"
          >
            am.masum1139@gmail.com
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5">
        <p
          className="p-3 flex items-center justify-center bg-hoverColor/10
        rounded-full"
        >
          <span className="text-white/80">
            <FaMapMarkerAlt />
          </span>
        </p>
        <div className="flex flex-col gap-y-1">
          <p className="text-base font-normal text-white/50">Address</p>
          <p
            className="text-base text-white/90 hover:text-lightSky/70
          duration-300"
          >
            12/A Green Road Panthapath, Dhaka,Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactRight;
