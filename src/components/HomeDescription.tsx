"use client";
import { useTypeWriter } from "@/hooks/use-type-writer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HomeDescription = () => {
  const description =
    "As a Software Engineer, I design and build innovative software solutions, solve complex problems, and ensure systems are scalable and user-friendly. From creating web apps to optimizing backend system, I bridge the gap between technology and user needs.";
  const [hasLoaded, setHasLoaded] = useState(false);
  const { displayedText, IsComplete } = useTypeWriter(description, 30);
  useEffect(() => {
    setHasLoaded(true);
  });
  return (
    <motion.p
      className="max-w-[500px]  font-normal leading-7 min-h-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      {hasLoaded ? (
        displayedText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ color: "rgb(156 163 175)" }}
            animate={{
              color: IsComplete ? "rgb(255 255 255)" : "rgb(156 163 175)",
            }}
            transition={{ duration: 0.5, delay: index * 0.03 }}
          >
            {char}
          </motion.span>
        ))
      ) : (
        <span>{description}</span>
      )}
    </motion.p>
  );
};

export default HomeDescription;
