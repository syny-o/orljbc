"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // On mount → load theme
  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial = stored ?? (systemPref ? "dark" : "light");

    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle Theme"
      className="
        btn btn-outline w-12 h-12 rounded-full
        flex items-center justify-center
        transition-all duration-300 border-2 border-accent cursor-pointer
      "
    >
      {/* LIGHT ICON */}
      <Sun
      size={32}
        className={`
          absolute h-5 w-5 transition-all duration-300 
          ${theme === "light" ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}
        `}
      />

      {/* DARK ICON */}
      <Moon
      size={32}
        className={`
          absolute h-5 w-5 transition-all duration-300
          ${theme === "light" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"}
        `}
      />
    </button>
  );
}
