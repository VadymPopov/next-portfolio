import { getProjects } from "@/sanity/sanity-utils";
import ProjectsList from "@/app/components/projects-list";
import Layout from "../../../(site)/(pages)/layout";

export default async function Page() {
  const projects = await getProjects();
  return (
    <Layout title='projects' phrase=" Don't be shy! Go see what's inside">
      <ProjectsList projects={projects} />
    </Layout>
  );
}
