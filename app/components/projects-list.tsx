import ProjectItem from "@/app/components/project-item";
import { Project } from "@/types/Project";

interface ProjectListProp {
  projects: Project[];
}
export default function ProjectList({ projects }: ProjectListProp) {
  return (
    <ul className='mt-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
      {projects.map((project) => (
        <ProjectItem key={project._id} project={project} />
      ))}
    </ul>
  );
}
