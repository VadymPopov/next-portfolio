import { motion } from "framer-motion";
import { fillVariants, pathVariants } from "@/animations/animations";

export default function Logo() {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      height='56'
      width='48'
      viewBox='0 0 384 512'>
      <motion.path
        d='M19.7 34.5c16.3-6.8 35 .9 41.8 17.2L192 364.8 322.5 51.7c6.8-16.3 25.5-24 41.8-17.2s24 25.5 17.2 41.8l-160 384c-5 11.9-16.6 19.7-29.5 19.7s-24.6-7.8-29.5-19.7L2.5 76.3c-6.8-16.3 .9-35 17.2-41.8z'
        fill='none'
        strokeWidth='30'
        className='stroke-primary'
        // @ts-ignore
        variants={pathVariants}
        initial='hidden'
        animate='visible'
      />
      <motion.path
        d='M19.7 34.5c16.3-6.8 35 .9 41.8 17.2L192 364.8 322.5 51.7c6.8-16.3 25.5-24 41.8-17.2s24 25.5 17.2 41.8l-160 384c-5 11.9-16.6 19.7-29.5 19.7s-24.6-7.8-29.5-19.7L2.5 76.3c-6.8-16.3 .9-35 17.2-41.8z'
        stroke='none'
        className='fill-secondary'
        // @ts-ignore
        variants={fillVariants}
        initial='hidden'
        animate='visible'
      />
    </motion.svg>
  );
}
