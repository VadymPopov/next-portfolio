"use client";
import { useState } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

const themes = {
  pastel: "pastel",
  coffee: "coffee",
};

const getThemeFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("theme") || themes.pastel;
    document.documentElement.setAttribute("data-theme", theme);
    return theme;
  }
};

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const toggleTheme = () => {
    const { coffee, pastel } = themes;
    const newTheme = theme === coffee ? pastel : coffee;
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <label className='swap swap-rotate mr-2 fixed top-[48px] right-[48px]'>
      <input type='checkbox' onChange={toggleTheme} />
      <BsSunFill className='swap-on h-8 w-8' />
      <BsFillMoonStarsFill className='swap-off h-8 w-8' />
    </label>
  );
};

export default ThemeSwitcher;
