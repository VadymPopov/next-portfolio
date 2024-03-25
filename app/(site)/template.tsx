"use client";
import { motion, AnimatePresence } from "framer-motion";
import { mainAnimation } from "@/animations";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        initial='hidden'
        animate='visible'
        exit='exit'
        variants={mainAnimation}
        className='min-h-screen w-full'>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
