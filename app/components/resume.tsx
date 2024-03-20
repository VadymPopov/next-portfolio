"use client";
import Button from "./button";
import { motion } from "framer-motion";
import { slideToLeft } from "@/animations/animations";

export default function Resume() {
  return (
    <div>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={slideToLeft}
        custom={0.3}
        className='mb-10 align-end'>
        <Button
          route='/Vadym_Popov_Frontend Developer.pdf'
          download={true}
          target='_blank'>
          Download
        </Button>
      </motion.div>
      <div>
        <p className='text-primary text-2xl'>Preview:</p>
        <iframe
          title='Resume Preview'
          src='/Vadym_Popov_Frontend Developer.pdf'
          width='100%'
          height='600px'></iframe>
      </div>
    </div>
  );
}
