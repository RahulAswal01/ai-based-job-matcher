import React, { useState } from "react";
import { Briefcase, ClipboardPaste, RotateCcw, FileText, Check, Sparkles } from "lucide-react";

export const JobDescriptionInput = ({ value, onChange, onClear, onSetSample }) => {
  const [copiedState, setCopiedState] = useState(false);

  const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0;
  const charCount = value.length;

  const handlePasteClipboard = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.readText) {
        const text = await navigator.clipboard.readText();
        if (text) {
          onChange(text);
          setCopiedState(true);
          setTimeout(() => setCopiedState(false), 2000);
        }
      } else {
        alert("Clipboard API not supported or permitted in this browser.");
      }
    } catch (err) {
      console.warn("Could not paste from clipboard", err);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#111726] rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200/70 dark:border-indigo-800/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <Briefcase className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>Job Description</span>
              <span className="text-[11px] font-normal text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-2 py-0.5 rounded-full border border-indigo-200/60 dark:border-indigo-800/60">
                Step 1
              </span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Paste the vacancy details or role requirements
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            type="button"
            onClick={onSetSample}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50/80 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 border border-indigo-200/60 dark:border-indigo-800/60 transition-colors cursor-pointer"
            title="Load sample senior engineering JD"
          >
            <Sparkles className="w-3 h-3 text-indigo-500" />
            <span>Load Sample</span>
          </button>

          <button
            type="button"
            onClick={handlePasteClipboard}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            title="Paste text from clipboard"
          >
            {copiedState ? (
              <>
                <Check className="w-3 h-3 text-emerald-500" />
                <span>Pasted</span>
              </>
            ) : (
              <>
                <ClipboardPaste className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                <span>Paste</span>
              </>
            )}
          </button>

          {value && (
            <button
              type="button"
              onClick={onClear}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
              title="Clear text"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear</span>
            </button>
          )}
        </div>
      </div>


      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <div className="relative flex-1">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={10}
            placeholder="Paste job description here... (e.g. Senior Software Engineer responsibilities, technical requirements, qualifications, preferred frameworks...)"
            className="w-full h-full min-h-[220px] p-3.5 text-xs sm:text-sm font-sans text-slate-800 dark:text-slate-100 bg-slate-50/70 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all resize-y placeholder:text-slate-400 dark:placeholder:text-slate-600 leading-relaxed font-normal"
          ></textarea>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/60">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <strong className="text-slate-700 dark:text-slate-200">{wordCount}</strong> words
            </span>
            <span>•</span>
            <span>
              <strong className="text-slate-700 dark:text-slate-200">{charCount}</strong> characters
            </span>
          </div>


          <div className="text-[11px] text-slate-500 dark:text-slate-400 italic">
            ATS engines parse keywords, seniority &amp; skills
          </div>
        </div>
      </div>
    </div>
  );
};
