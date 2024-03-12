import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Head from "next/head";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
        />
      </Head>
      <div>
        <h1 className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold'>
          {page && page.title}
        </h1>

        <div className='text-lg text-gray-700 mt-10'>
          <PortableText value={page && page.content} />
        </div>
      </div>
    </>
  );
}
