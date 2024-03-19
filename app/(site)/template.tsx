"use client";
import { motion, AnimatePresence } from "framer-motion";
const variants = {
  hidden: { opacity: 0, x: -400, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        initial='initialState'
        animate='animateState'
        exit='exitState'
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {
            opacity: 0,
          },
        }}
        className='min-h-screen w-full'>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
