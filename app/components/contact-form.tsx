"use client";
import { SiGmail } from "react-icons/si";
import { FaMobileButton, FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import { slideDown, slideToLeft, slideToRight } from "@/animations/animations";

export default function ContactForm() {
  return (
    <section className='py-12'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={slideToRight}
            custom={0.3}>
            <a
              className='flex items-center  gap-4 mb-5'
              href='mailto:vadympopov.dev@gmail.com'>
              <SiGmail size='36px' />
              <h3 className='text-xl font-semibold mb-2'>Email</h3>
            </a>
            <p className='text-primary'>vadympopov.dev@gmail.com</p>
          </motion.div>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={slideDown}
            custom={0.5}>
            <a
              href='tel:+14372581793'
              className='flex items-center  gap-4 mb-5'>
              <FaMobileButton size='36px' />
              <h3 className='text-xl font-semibold mb-2'>Phone</h3>
            </a>
            <p className='text-primary'>+1 (437) 258-1793</p>
          </motion.div>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={slideToLeft}
            custom={0.4}>
            <div className='flex items-center  gap-4 mb-5'>
              <FaLocationDot size='36px' />
              <h3 className='text-xl font-semibold mb-2'>Location</h3>
            </div>
            <p className='text-primary'>Toronto, Canada</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
