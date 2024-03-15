"use client";
import { useState } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

const themes = {
  day: "day",
  night: "night",
};

const getThemeFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("theme") || themes.night;
    document.documentElement.setAttribute("data-theme", theme);
    return theme;
  }
};

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const toggleTheme = () => {
    const { day, night } = themes;
    const newTheme = theme === day ? night : day;
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
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
