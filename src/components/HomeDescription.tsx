"use client";
import { useTypeWriter } from "@/hooks/use-type-writer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HomeDescription = () => {
  const description = ` a passionate and creative MERN Stack Developer, I aim to 
    leverage my skills in web development to build advanced, user-friendly, 
    and efficient web applications. With one year of experience in frontend
     development and expertise in modern tools like React.js and Next.js, 
     I am eager to join an organization where I can further expand my 
     knowledge and contribute meaningfully to achieving business goals.`;
  const [hasLoaded, setHasLoaded] = useState(false);
  const { displayedText, IsComplete } = useTypeWriter(description, 30);
  useEffect(() => {
    setHasLoaded(true);
  }, [hasLoaded]);
  return (
    <motion.p
      className="w-full   font-normal leading-7 min-h-30"
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
