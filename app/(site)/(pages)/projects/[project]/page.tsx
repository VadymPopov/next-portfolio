import { getProject, getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Button from "@/app/components/button";
import { FaGitSquare } from "react-icons/fa";
import Carousel from "@/app/components/carousel";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    project: project.slug,
  }));
}

type Props = {
  params: { project: string };
};

export const revalidate = 86400;

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  if (!project) {
    return <p className='text-center mt-20'>Project not found.</p>;
  }

  return (
    <div className='mt-20 sm:mt-0'>
      <header className='flex justify-between items-center'>
        <h1 className='text-4xl drop-shadow font-semibold bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent mb-5 p-2 uppercase'>
          {project.name || "Untitled Project"}
        </h1>
        {project.url ? (
          <Button route={project.url} target='_blank' rel='noopener noreferrer'>
            Visit website
          </Button>
        ) : null}
      </header>

      <div className='text-lg text-justify text-secondary mb-20'>
        {project.content ? (
          <PortableText value={project.content} />
        ) : (
          <p className='italic text-gray-500'>
            No project description available.
          </p>
        )}

        {project.stack && (
          <div className='mt-10 text-end'>
            <h2 className='text-primary uppercase tracking-widest'>Tools</h2>
            <p>{project.stack}</p>
          </div>
        )}

        {project.github_url && (
          <div className='flex mt-4'>
            <Button route={project.github_url} target='_blank' git={true}>
              Source code <FaGitSquare size={24} />
            </Button>
          </div>
        )}
      </div>

      {project.images && project.images.length > 0 && (
        <Carousel images={project.images} />
      )}
    </div>
  );
}
