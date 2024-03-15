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
      className='transition-all ease-in-out duration-500 border-transparent rounded-2xl overflow-hidden bg-gray-200 shadow-custom hover:shadow-customHover transform hover:scale-105 group'>
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
  );
}
