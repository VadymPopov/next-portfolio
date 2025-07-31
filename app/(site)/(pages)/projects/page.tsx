import { getProjects } from "@/sanity/sanity-utils";
import ProjectsList from "@/app/components/projects-list";

export const revalidate = 86400;

export default async function Page() {
  const projects = await getProjects();
  return (
    <div>
      <h1 className='text-end bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text text-transparent text-3xl md:text-4xl drop-shadow font-semibold mb-10 md:p-2 pt-10 uppercase'>
        projects
      </h1>
      <p className='text-lg text-secondary text-justify mb-5'>
        Don&apos;t be shy! Go see what&apos;s inside
      </p>
      <ProjectsList projects={projects} />
    </div>
  );
}
