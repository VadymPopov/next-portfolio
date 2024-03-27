"use client";
import { Page } from "@/types/Page";
import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./theme-switcher";
import React, { useRef } from "react";
interface HeaderProps {
  pages: Page[];
}

import Logo from "@/app/components/logo";

export default function Header({ pages }: HeaderProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const handleMenuItemClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  const pathname = usePathname();

  return (
    <header className='sm:flex sm:flex-col sm:items-center sm:justify-start sm:isolate sm:fixed sm:top-12 sm:left-12 sm:bottom-12 sm:z-50 sm:p-0  sm:w-12'>
      <Link
        href='/'
        className='fixed top-6 left-6 z-50 sm:top-0 sm:left-0 sm:p-8 sm:relative group'
        onClick={handleMenuItemClick}>
        <Logo />
      </Link>
      <div className='hidden sm:block'>
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
          <ThemeSwitcher position='top' />
        </nav>
      </div>

      <label
        className='sm:hidden fixed top-6 right-6 z-40 cursor-pointer px-3 py-6'
        htmlFor='mobile-menu'>
        <input
          className='peer hidden'
          type='checkbox'
          id='mobile-menu'
          ref={checkboxRef}
        />
        <div className="relative z-50 block h-[2px] w-7 bg-primary bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-primary before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-primary after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"></div>
        <div className='fixed inset-0 z-40 hidden h-full w-full backdrop-blur-sm peer-checked:block'>
          &nbsp;
        </div>
        <div className='fixed top-0 right-0 z-40 h-full w-full translate-y-[-100%] overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-y-0'>
          <div className='float-right min-h-full w-full bg-base-100/90 px-6 pt-40 shadow-2xl'>
            <nav className='flex flex-col items-center justify-between  text-sm text-primary'>
              <div className='flex flex-col relative mb-10'>
                {pages.map((page) => (
                  <Link
                    key={page._id}
                    href={`/${page.slug}`}
                    className={clsx(
                      pathname === `/${page.slug}` && "text-accent ",
                      "text-xl p-4 relative transition ease-in-out hover:text-accent group py-2 uppercase mb-8"
                    )}
                    onClick={handleMenuItemClick}>
                    {page.title}
                    <span
                      className={clsx(
                        pathname === `/${page.slug}` && "scale-x-100",
                        "mt-4 absolute inset-x-0 bottom-0 h-[3px] bg-accent transform scale-x-0 origin-left duration-[400ms] transition-transform group-hover:origin-right group-hover:scale-x-100"
                      )}></span>
                  </Link>
                ))}
              </div>
              <div className='flex absolute bottom-6 left-6 items-center justify-center'>
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
              <ThemeSwitcher position='bottom' />
            </nav>
          </div>
        </div>
      </label>
    </header>
  );
}
