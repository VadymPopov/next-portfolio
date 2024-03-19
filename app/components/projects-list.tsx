"use client";
import ProjectItem from "@/app/components/project-item";
import { Project } from "@/types/Project";
import { motion } from "framer-motion";

const containerVarients = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

interface ProjectListProp {
  projects: Project[];
}
export default function ProjectList({ projects }: ProjectListProp) {
  return (
    <motion.ul
      variants={containerVarients}
      initial='hidden'
      animate='show'
      className='mt-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
      {projects.map((project) => (
        <ProjectItem key={project._id} project={project} />
      ))}
    </motion.ul>
  );
}
