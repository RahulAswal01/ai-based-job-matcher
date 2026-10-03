import React, { useEffect, useRef } from "react";
import { Sparkles, FileCheck, TrendingUp, Layers } from "lucide-react";
import { animateHero } from "../animations/gsapAnimations";

export const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    animateHero(heroRef.current);
  }, []);

  return (
    <section ref={heroRef} className="relative pt-4 pb-6 md:pt-8 md:pb-10 text-center overflow-hidden">
      {/*  */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-indigo-500/15 via-violet-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:qx-6">
        {/*  */}
        <div className="gsap-hero-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60 shadow-xs mb-3.5">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
          <span>Next-Gen Semantic Resume & Job Matcher</span>
        </div>

        {/*  */}
        <h1 className="gsap-hero-elem text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
          Analyze Your Resume Against Any 
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
            Job Description
          </span>
        </h1>

        {/*  */}
        <p className="gsap-hero-elem mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Upload your resume in <strong className="text-slate-900 dark:text-white font-semibold">PDF or Word (.docx, .doc)</strong> format 
          and paste the target job specification. Get instantaneous match metrics, competency gaps, and high-impact resume tweaks.
        </p>

        {/*  */}
        <div className="gsap-hero-elem mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 text-xs font-medium text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 shadow-2xs">
            <FileCheck className="w-3.5 h-3.5 text-indigo-500" />
            <span>Word & PDF Parser</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 shadow-2xs">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
            <span>Real-time Fit Percentage</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-violet-500" />
            <span>Competency Gap Matrix</span>
          </div>
        </div>
      </div>
    </section>
  );
};