"use client";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/Project";

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  const { slug, image, name } = project;
  return (
    <Link
      href={`/projects/${slug}`}
      className='transition-all ease-in-out duration-250 border-transparent rounded-2xl overflow-hidden bg-gray-200 shadow-custom hover:shadow-customHover transform hover:scale-105 group'>
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
        <p className='font-extrabold text-gray-500 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent'>
          <span className='font-normal transition-opacity duration-250 opacity-0 group-hover:opacity-100 text-[#00afc1]'>
            &lt;
          </span>
          <span className='mx-2'>{name}</span>
          <span className='font-normal transition-opacity duration-250 opacity-0 group-hover:opacity-100 text-[#00afc1]'>
            /&gt;
          </span>
        </p>
      </div>
    </Link>
  );
}
