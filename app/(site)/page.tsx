"use client";
import { motion } from "framer-motion";
import { slideUp, slideToLeft, slideToRight, fadeIn } from "@/animations";
import Spinner from "@/app/components/spinner";
import Button from "@/app/components/button";

export default function Home() {
  return (
    <div className='home md:grid md:grid-cols-3 md:gap-2 md:items-end z-10'>
      <Spinner />
      <div className='md:pt-36 sm:pl-16 pt-44 col-span-2 mb-10 md:mb-0'>
        <motion.span
          initial='hidden'
          animate='visible'
          variants={fadeIn}
          custom={0.6}
          className='uppercase tracking-[0.3rem] font-semibold indent-2 mb-2 text-primary'>
          Vadym Popov
        </motion.span>
        <h1 className='lg:text-8xl md:text-7xl text-6xl font-semibold flex flex-col flex-wrap  text-secondary'>
          <motion.span
            initial='hidden'
            animate='visible'
            variants={slideToLeft}
            custom={0.3}>
            Frontend
          </motion.span>
          <motion.span
            initial='hidden'
            animate='visible'
            variants={slideToRight}
            custom={0.4}>
            Developer
          </motion.span>
        </h1>

        <motion.p
          initial='hidden'
          animate='visible'
          variants={slideUp}
          custom={0.5}
          className='mt-3 text-xl bg-gradient-to-t from-yellow-400 to-blue-500 bg-clip-text text-transparent'>
          Добрий день everybody!
        </motion.p>
      </div>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={slideUp}
        custom={0.5}
        className='flex justify-end md:block'>
        <Button route='/projects'>View Projects</Button>
      </motion.div>
    </div>
  );
}
