"use client";
import Image from "next/image";
import { profilePhoto } from "@/assets/images";
import { motion } from "framer-motion";
const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1,
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="w-[300px] h-[300px] flex items-center
           justify-center xl:w-[450px] xl:h-[450px] mix-blend-lighten 
           absolute"
        >
          <Image
            src={profilePhoto}
            alt="profile-photo"
            priority={true}
            fill={true}
            quality={100}
            className=" object-contain"
          />
        </motion.div>
        {/* circle */}
        <motion.svg
          className="w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cy="253"
            cx="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0 " }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
