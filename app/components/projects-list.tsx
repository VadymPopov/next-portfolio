"use client";
import ProjectItem from "@/app/components/project-item";
import { Project } from "@/types/Project";
import { motion } from "framer-motion";
import { containerVarients } from "@/animations";

interface ProjectListProp {
  projects: Project[];
}
export default function ProjectList({ projects }: ProjectListProp) {
  if (projects.length === 0) {
    return (
      <p className='text-center text-gray-500 mt-10'>
        No projects available at the moment.
      </p>
    );
  }

  return (
    <motion.ul
      variants={containerVarients}
      initial='hidden'
      animate='visible'
      className='mt-5 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-8'
      role='list'>
      {projects.map((project) => (
        <ProjectItem key={project._id} project={project} />
      ))}
    </motion.ul>
  );
}
