"use client";
import { Page } from "@/types/Page";
import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./theme-switcher";

interface HeaderProps {
  pages: Page[];
}

export default function Header({ pages }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className='flex flex-col items-center justify-start isolate  fixed top-[48px] left-[48px] bottom-[48px] z-50 p-0  w-[48px]'>
      <Link href='/' className='p-8 relative group'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='32'
          width='24'
          className='fill-current origin-center group-hover:rotate-[360deg] group-hover:text-blue-500 transition-all  [transition:transform_400ms_300ms,color_500ms]'
          viewBox='0 0 384 512'>
          <path d='M19.7 34.5c16.3-6.8 35 .9 41.8 17.2L192 364.8 322.5 51.7c6.8-16.3 25.5-24 41.8-17.2s24 25.5 17.2 41.8l-160 384c-5 11.9-16.6 19.7-29.5 19.7s-24.6-7.8-29.5-19.7L2.5 76.3c-6.8-16.3 .9-35 17.2-41.8z' />
        </svg>
      </Link>
      <nav className='flex flex-col items-center justify-between text-sm text-gray-600'>
        <div
          className='rotate-180 flex flex-row-reverse relative mb-10'
          style={{ writingMode: "vertical-lr" }}>
          {pages.map((page) => (
            <Link
              key={page._id}
              href={`/${page.slug}`}
              className={clsx(
                pathname === `/${page.slug}` && "text-blue-600 ",
                "text-base p-4 relative font-semibold transition ease-in-out hover:text-blue-600 group py-2"
              )}>
              {page.title}
              <span
                className={clsx(
                  pathname === `/${page.slug}` && "scale-x-100",
                  "mt-4 absolute inset-x-0 bottom-0 h-[3px] bg-blue-500 transform scale-x-0 origin-left duration-[400ms] transition-transform group-hover:origin-right group-hover:scale-x-100"
                )}></span>
            </Link>
          ))}
        </div>
        <div className='flex relative flex-col items-center justify-center'>
          <Link
            className='p-4 translate-y-0 hover:translate-y-1 duration-[400ms] transition-transform group'
            href='https://github.com/VadymPopov'
            target='_blank'
            rel='noopener noreferrer'>
            <LuGithub
              size={24}
              className='fill-current  group-hover:text-blue-500 transition-colors duration-400'
            />
          </Link>
          <Link
            className='p-4 translate-y-0 hover:translate-y-1 duration-[400ms] transition-transform group'
            href='https://www.linkedin.com/in/vadym-popov/'
            target='_blank'
            rel='noopener noreferrer'>
            <LuLinkedin
              size={24}
              className='fill-current  group-hover:text-blue-500 transition-colors duration-400'
            />
          </Link>
        </div>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
