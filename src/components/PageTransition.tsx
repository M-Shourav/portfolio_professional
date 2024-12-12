"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
interface Props {
  children: React.ReactNode;
}
const PageTransition = ({ children }: Props) => {
  const pathName = usePathname();
  return (
    <AnimatePresence>
      <div key={pathName}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              delay: 1,
              duration: 0.4,
            },
          }}
          className=" h-screen w-screen fixed top-0 pointer-events-none bg-bodyColor"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
