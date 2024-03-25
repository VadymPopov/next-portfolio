"use client";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/Project";
import { motion } from "framer-motion";
import { card, elementVarients } from "@/animations";

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  const { slug, image, name } = project;
  return (
    <motion.li variants={elementVarients}>
      <motion.div
        whileHover='hover'
        whileTap='pressed'
        variants={card}
        className='border-transparent rounded-2xl overflow-hidden bg-gray-200 shadow-custom hover:shadow-customHover group'>
        <Link href={`/projects/${slug}`}>
          {image && (
            <Image
              src={image}
              alt={name}
              width={600}
              height={380}
              className='object-cover w-full h-60'
            />
          )}
          <div className='flex items-center justify-center px-3 py-4'>
            <p className='uppercase tracking-[0.3rem] font-bold text-slate-900'>
              <span className='font-normal transition-opacity duration-250 opacity-0 group-hover:opacity-100 text-slate-900'>
                &lt;
              </span>
              <span className='mx-2'>{name}</span>
              <span className='font-normal transition-opacity duration-250 opacity-0 group-hover:opacity-100 text-slate-900'>
                /&gt;
              </span>
            </p>
          </div>
        </Link>
      </motion.div>
    </motion.li>
  );
}
