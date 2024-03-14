import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Button from "@/app/components/button";
import { FaGitSquare } from "react-icons/fa";
import Carousel from "@/app/components/carousel";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className='flex justify-between  items-center'>
        <h1 className=' text-5xl drop-shadow font-bold bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent mb-5 p-2'>
          {project.name}
        </h1>
        <Button route={project.url} target='_blank' rel='noopener noreferrer'>
          Visit website
        </Button>
      </header>
      <div className='grid grid-cols-2 gap-8 justify-start'>
        <div className='text-lg text-justify text-gray-700'>
          <PortableText value={project.content} />
          <div className='mt-5 text-end'>
            <h2>Tools</h2>
            <p>{project.stack}</p>
          </div>
          <div className='flex'>
            <Button route={project.github_url} target='_blank' git={true}>
              Source code <FaGitSquare size={24} />
            </Button>
          </div>
        </div>
        <Carousel images={project.images} />
        {/* <Image
          src={project.image}
          alt={project.name}
          width={1920}
          height={1080}
          className='border-[1px] border-gray-700 object-cover rounded-xl'
        /> */}
      </div>
    </div>
  );
}
