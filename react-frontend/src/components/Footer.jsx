import React from "react";
import { Sparkles, FileSearch } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-16 sm:mt-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-[#0b0f19]/50 backdrop-blur-md py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <div className="w-5 h-5 rounded-md bg-indigo-600 text-white flex items-center justify-center font-bold text-[10px]">
            T
          </div>
          <span>
            TalentSync AI • Built with React 19, Tailwind CSS &amp; GSAP Animations
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Word (.docx) &amp; PDF (.pdf) Compatible
          </span>
          <span>•</span>
          <span>Client-side AI Prototype</span>
        </div>
      </div>
    </footer>
  );
};

