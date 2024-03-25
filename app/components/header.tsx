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

import Logo from "@/app/components/logo";

export default function Header({ pages }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className='flex flex-col items-center justify-start isolate  fixed top-[48px] left-[48px] bottom-[48px] z-50 p-0  w-[48px]'>
      <Link href='/' className='p-8 relative group'>
        <Logo />
      </Link>

      <nav className='flex flex-col items-center justify-between text-sm text-primary'>
        <div
          className='rotate-180 flex flex-row-reverse relative mb-10'
          style={{ writingMode: "vertical-lr" }}>
          {pages.map((page) => (
            <Link
              key={page._id}
              href={`/${page.slug}`}
              className={clsx(
                pathname === `/${page.slug}` && "text-accent ",
                "text-base p-4 relative font-semibold transition ease-in-out hover:text-accent group py-2 uppercase"
              )}>
              {page.title}
              <span
                className={clsx(
                  pathname === `/${page.slug}` && "scale-x-100",
                  "mt-4 absolute inset-x-0 bottom-0 h-[3px] bg-accent transform scale-x-0 origin-left duration-[400ms] transition-transform group-hover:origin-right group-hover:scale-x-100"
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
              className='fill-current  group-hover:text-accent transition-colors duration-400'
            />
          </Link>
          <Link
            className='p-4 translate-y-0 hover:translate-y-1 duration-[400ms] transition-transform group'
            href='https://www.linkedin.com/in/vadym-popov/'
            target='_blank'
            rel='noopener noreferrer'>
            <LuLinkedin
              size={24}
              className='fill-current  group-hover:text-accent transition-colors duration-400'
            />
          </Link>
        </div>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
