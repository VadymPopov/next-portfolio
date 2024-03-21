"use client";
import React from "react";
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

const themes = {
  day: "day",
  night: "night",
};

const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    const { day, night } = themes;
    const newTheme = resolvedTheme === day ? night : day;
    setTheme(newTheme);
  };

  return (
    <label className='swap swap-rotate mr-2 fixed top-[48px] right-[48px]'>
      <input type='checkbox' onChange={toggleTheme} />
      <BsSunFill className='swap-on h-8 w-8 fill-neutral' />
      <BsFillMoonStarsFill className='swap-off h-8 w-8 fill-neutral' />
    </label>
  );
};

export default ThemeSwitcher;
