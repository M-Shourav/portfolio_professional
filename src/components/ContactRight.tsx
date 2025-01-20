import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const ContactRight = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="flex items-center gap-4">
        <span
          className="text-lg text-white/80 w-10 h-10 rounded-full flex 
        items-center justify-center bg-hoverColor/10 "
        >
          <FaPhone />
        </span>
        <div className="flex flex-col items-start">
          <h3 className="text-base font-normal text-white/50">Phone</h3>
          <p
            className="text-base text-white/90 hover:text-lightSky/70
          duration-300"
          >
            (+88) 01710267985
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span
          className="text-xl text-white/80 w-10 h-10 rounded-full flex 
        items-center justify-center bg-hoverColor/10 "
        >
          <MdEmail />
        </span>
        <div className="flex flex-col items-start">
          <h3 className="text-base font-normal text-white/50">Email</h3>
          <Link
            href={"mailto:am.masum1139@gmail.com"}
            target="_blank"
            className="text-base text-white/90 hover:text-lightSky/70
          duration-300"
          >
            am.masum1139@gmail.com
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span
          className="text-xl text-white/80 w-10 h-10 rounded-full flex 
        items-center justify-center bg-hoverColor/10 "
        >
          <IoLocationSharp />
        </span>
        <div className="flex flex-col items-start">
          <h3 className="text-base font-normal text-white/50">Address</h3>
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
