"use client";
import React from "react";
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import clsx from "clsx";

const themes = {
  day: "day",
  night: "night",
};

const ThemeSwitcher = ({ position }: { position: string }) => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    const { day, night } = themes;
    const newTheme = resolvedTheme === day ? night : day;
    setTheme(newTheme);
  };

  return (
    <label className={clsx(position === 'top' ? 'top-12' : 'bottom-12','swap swap-rotate mr-2 right-12 fixed')}>
      <input type='checkbox' onChange={toggleTheme} />
      <BsSunFill className={`${position} swap-on h-8 w-8 fill-neutral`} />
      <BsFillMoonStarsFill className='swap-off h-8 w-8 fill-neutral' />
    </label>
  );
};

export default ThemeSwitcher;
