import React from "react";
import { Sparkles, FileSearch, Zap } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = ({ onLoadDemoData }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/80 dark:bg-[#0b0f19]/80 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:qx-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/*  */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 text-white shadow-md shadow-indigo-500/20 ring-1 ring-white/20">
              <FileSearch className="w-5 h-5 sm:w-6 sm:h-6" />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-[#0b0f19] rounded-full"></div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 dark:from-white dark:via-indigo-200 dark:to-slate-300 bg-clip-text text-transparent">
                  TalentSync AI
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60">
                  <Sparkles className="w-2.5 h-2.5" /> v1.0 AI Matcher
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                Precision Resume & Job Description Alignment Engine
              </p>
            </div>
          </div>

          {/*  */}
          <div className="flex items-center gap-2 sm:gap-3">
            {onLoadDemoData && (
              <button
                type="button"
                onClick={onLoadDemoData}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg texx-xs font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border border-indigo-200/70 dark:border-indigo-800/60 transition-all duration-200 hover:shadow-xs active:scale-95 cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                Fill Demo Data
              </button>
            )}

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="hidden xs:inline">ATS Engine</span> Ready
            </div>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};