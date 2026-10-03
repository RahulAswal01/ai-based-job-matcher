import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs transition-all duration-200 cursor-pointer active:scale-95"
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {theme === "dark" ? (
          <Moon className="w-4 h-4 text-amber-300 transition-transform duration-300 rotate-0" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500 transition-transform duration-300 rotate-0" />
        )}
      </div>
      <span className="capitalize hidden sm:inline tracking-wide font-medium">
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </span>
      <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
    </button>
  );
};