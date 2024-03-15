import ContactForm from "@/app/components/contact-form";
import Resume from "@/app/components/resume";
import Stack from "@/app/components/stack";
import { getPage, getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import ProjectsList from "@/app/components/projects-list";
import About from "@/app/components/about";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  const projects = await getProjects();

  return (
    <>
      <section>
        <h1 className='text-end bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text text-transparent text-5xl drop-shadow font-bold mb-10 p-2'>
          {page && page.title}
        </h1>

        {params?.slug !== "about" && (
          <div className='text-lg text-secondary text-justify mb-5 '>
            <PortableText value={page && page.content} />
          </div>
        )}

        <div>
          {params?.slug === "about" && <About />}
          {params?.slug === "resume" && <Resume />}
          {params?.slug === "contact" && <ContactForm />}
          {params?.slug === "projects" && <ProjectsList projects={projects} />}
        </div>
      </section>
    </>
  );
}
