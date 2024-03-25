"use client";
import { motion, AnimatePresence } from "framer-motion";
import { projectAnimation } from "@/animations";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        variants={projectAnimation}
        initial='hidden'
        animate='visible'
        exit='exit'>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
