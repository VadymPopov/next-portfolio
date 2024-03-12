import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      <h1 className='text-7xl font-extrabold'>
        Hello I&apos;m{" "}
        <span className='bg-gradient-to-t from-yellow-400 to-blue-500 bg-clip-text text-transparent'>
          Vadym
        </span>
        !
      </h1>
      <p className='mt-3 text-xl text-gray-600'>
        Добрий день everybody! Check out my projects!
      </p>

      <h2 className='mt-24 font-bold text-gray-700 text-3xl'>My Projects</h2>
      <div className='mt-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className='transition-all ease-in-out duration-250 border-2 border-transparent rounded-lg overflow-hidden bg-green-200 shadow-md hover:shadow-lg transform hover:scale-105 group'>
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={350}
                className=' rounded-lg object-cover w-full h-48'
              />
            )}
            <div className='flex items-center justify-center p-3'>
              <p className='font-extrabold text-gray-500 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent'>
                <span className='font-normal transition-opacity duration-250 opacity-0 group-hover:opacity-100 text-[#00afc1]'>
                  &lt;
                </span>
                <span className='mx-2'>{project.name}</span>
                <span className='font-normal transition-opacity duration-250 opacity-0 group-hover:opacity-100 text-[#00afc1]'>
                  /&gt;
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
