"use client";

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return null;
  }

  function handleThemeChange(theme: string){
    setTheme(theme);
    setShowDropdown(false);
  }

  return (

    <div 
      className="flex flex-row-reverse justify-start"
      onBlur={() => {setShowDropdown(false)}}
    >
      <button 
        className="bg-blue-400 text-primary-text flex w-24 justify-between"
        onClick={() => setShowDropdown(!showDropdown)}
        role="button"
      >
        <p>Theme</p>
        <span className={`${showDropdown && "rotate-180"} rotate-0`}>v</span>
      </button>
      <ul className={`${showDropdown ? "visible" : "hidden"} flex flex-col absolute mt-8 bg-primary-background w-32 text-primary-text`}>
        <li
          className={`${theme === "system" && "underline"}`}
          onMouseDown={() => handleThemeChange("system")}
        >
          System
        </li>
        <li
          className={`${theme === "dark" && "underline"}`}
          onMouseDown={() => handleThemeChange("dark")}
        >
          Dark
        </li>
        <li 
          className={`${theme === "light" && "underline"}`}
          onMouseDown={() => handleThemeChange("light")}
        >
          Light
        </li>
      </ul>
    </div>
  )
}
