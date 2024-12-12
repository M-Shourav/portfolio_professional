import { motion } from "framer-motion";

const StairAnimate = {
  initial: {
    top: "0%",
  },
  animate: {
    top: ["0%", "100%"],
  },
  exit: {
    top: ["100%", "100%"],
  },
};

const reverseIndex = (index: number) => {
  const TotalSteps = 8;
  return TotalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          variants={StairAnimate}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="w-full h-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;
