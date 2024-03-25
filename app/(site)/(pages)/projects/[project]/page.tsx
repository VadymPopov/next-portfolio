import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
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
    <div className='mt-20 sm:mt-0'>
      <header className='flex justify-between  items-center'>
        <h1 className=' text-4xl drop-shadow font-semibold bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent mb-5 p-2 uppercase'>
          {project.name}
        </h1>
        <Button route={project.url} target='_blank' rel='noopener noreferrer'>
          Visit website
        </Button>
      </header>
      <div className='text-lg text-justify text-secondary mb-20'>
        <PortableText value={project.content} />
        <div className='mt-10 text-end'>
          <h2 className='text-primary uppercase tracking-widest'>Tools</h2>
          <p>{project.stack}</p>
        </div>
        <div className='flex'>
          <Button route={project.github_url} target='_blank' git={true}>
            Source code <FaGitSquare size={24} />
          </Button>
        </div>
      </div>
      <Carousel images={project.images} />
    </div>
  );
}
