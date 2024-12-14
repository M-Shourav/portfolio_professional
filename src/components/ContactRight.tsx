import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const ContactRight = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <span
          className="text-2xl text-white w-12 h-12 flex 
        items-center justify-center bg-hoverColor/10 "
        >
          <FaPhone />
        </span>
        <div>
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
          className="text-2xl text-white w-12 h-12 flex 
        items-center justify-center bg-hoverColor/10 "
        >
          <MdEmail />
        </span>
        <div>
          <h3 className="text-base font-normal text-white/50">Email</h3>
          <Link
            href={"mailto:muhammadshourav625@gmail.com"}
            target="_blank"
            className="text-base text-white/90 hover:text-lightSky/70
          duration-300"
          >
            muhammadshourav625@gmail.com
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span
          className="text-2xl text-white w-12 h-12 flex 
        items-center justify-center bg-hoverColor/10 "
        >
          <IoLocationSharp />
        </span>
        <div>
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
