import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { LuGithub, LuLinkedin } from "react-icons/lu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Portfolio",
  description: "Generated by Next + Sanity",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();

  return (
    <html lang='en'>
      <body className='mr-20 py-10'>
        <header className='flex flex-col items-center justify-start isolate  fixed top-[48px] left-[48px] bottom-[48px] z-50 p-0  w-[48px]'>
          <Link
            href='/'
            className='p-8 relative text-2xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent'>
            V
          </Link>
          <nav className='flex flex-col items-center justify-between text-sm text-gray-600'>
            <div
              className='rotate-180 flex flex-row-reverse relative mb-10'
              style={{ writingMode: "vertical-lr" }}>
              {pages.map((page) => (
                <Link
                  key={page._id}
                  href={`/${page.slug}`}
                  className='text-base p-4 relative font-semibold transition ease-in-out hover:text-blue-600 group py-2'>
                  {page.title}
                  <span className='mt-4 absolute inset-x-0 bottom-0 h-[3px] bg-blue-500 transform scale-x-0 origin-left duration-300 transition-transform group-hover:scale-x-100'></span>
                </Link>
              ))}
            </div>
            <div className='flex relative flex-col items-center justify-center'>
              <Link className='p-4' href='https://github.com/VadymPopov'>
                <LuGithub size={24} />
              </Link>
              <Link
                className='p-4'
                href='https://www.linkedin.com/in/vadym-popov/'>
                <LuLinkedin size={24} />
              </Link>
            </div>
          </nav>
        </header>
        <main className='ml-[150px]'>{children}</main>
        <footer className='flex items-baseline justify-center p-[28px]'>
          <p>&copy; 2024 Vadym Popov</p>
        </footer>
      </body>
    </html>
  );
}
