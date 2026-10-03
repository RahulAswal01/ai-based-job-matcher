import React, { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Copy,
  Check,
  Compass,
  HelpCircle,
  BarChart3,
} from "lucide-react";
import {
  animateCounter,
  animateGaugeCircle,
  animateCategoryBars,
  animateTabChange,
} from "../animations/gsapAnimations";

export const AnalysisResults = ({ results, onReanalyze, isLoading }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [copied, setCopied] = useState(false);

  const scoreRef = useRef(null);
  const circleRef = useRef(null);
  const categoriesRef = useRef(null);
  const tabContentRef = useRef(null);

  const radius = 54;
  const circumference = 2 * Math.PI * radius;

  // Run GSAP animations on results change
  useEffect(() => {
    if (results && !isLoading) {
      if (scoreRef.current) {
        animateCounter(scoreRef.current, results.overallScore, 1.8);
      }
      if (circleRef.current) {
        animateGaugeCircle(circleRef.current, results.overallScore, circumference);
      }
      if (categoriesRef.current) {
        animateCategoryBars(categoriesRef.current);
      }
    }
  }, [results, isLoading]);

  // Tab switch animation
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setTimeout(() => {
      if (tabContentRef.current) {
        animateTabChange(tabContentRef.current);
      }
    }, 20);
  };

  const handleCopySummary = () => {
    if (!results) return;
    const textToCopy = `[TalentSync AI Report]
Role: ${results.roleTitle}
Match Score: ${results.overallScore}% (${results.verdict})
Summary: ${results.matchSummary}
Top Matched Skills: ${results.matchedSkills.map((s) => s.name).join(", ")}
Skill Gaps: ${results.missingSkills.map((s) => s.name).join(", ")}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!results) return null;

  return (
    <div className="bg-white dark:bg-[#111726] rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm transition-all duration-300 overflow-hidden">
      {/* Top Banner / Section Header */}
      <div className="px-5 sm:px-6 py-4 border-b border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200/70 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <BarChart3 className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>Backend AI Match Response</span>
              <span className="text-[11px] font-normal text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-800/60">
                Step 3 • Output
              </span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Live intelligence synthesized from candidate resume & job criteria
            </p>
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopySummary}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-2xs transition-all active:scale-95 cursor-pointer"
            title="Copy structured summary to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Copy Summary</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Score Hero Card */}
      <div className="p-5 sm:p-7 border-b border-slate-100 dark:border-slate-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Radial Circular Gauge Meter */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-5 rounded-xl bg-gradient-to-b from-slate-50/80 to-indigo-50/20 dark:from-slate-900/60 dark:to-indigo-950/20 border border-slate-200/60 dark:border-slate-800">
            <div className="relative flex items-center justify-center">
              <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 130 130">
                {/* Background Ring */}
                <circle
                  cx="65"
                  cy="65"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth="10"
                  className="text-slate-200 dark:text-slate-800/80"
                  fill="transparent"
                />
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                {/* Animated Progress Ring */}
                <circle
                  ref={circleRef}
                  cx="65"
                  cy="65"
                  r={radius}
                  stroke="url(#scoreGradient)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  fill="transparent"
                />
              </svg>

              {/* Inner Score Label */}
              <div className="absolute flex flex-col items-center justify-center text-center">
                <div className="flex items-baseline">
                  <span
                    ref={scoreRef}
                    className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
                  >
                    0
                  </span>
                  <span className="text-xl font-bold text-indigo-500 dark:text-indigo-400 ml-0.5">
                    %
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Match Score
                </span>
              </div>
            </div>

            {/* Verdict Badge */}
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              <span>{results.verdict}</span>
            </div>
            <span className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              {results.verdictTag}
            </span>
          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-8 space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  Position Target
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">{results.company}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {results.roleTitle}
              </h3>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {results.matchSummary}
            </p>

            {/* Category breakdown bars */}
            <div ref={categoriesRef} className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {results.categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/80"
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 truncate pr-2">
                      {cat.name}
                    </span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">{cat.score}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="gsap-progress-fill h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300"
                      data-width={`${cat.score}%`}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 truncate">
                    {cat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tabs Header */}
      <div className="px-5 sm:px-6 pt-4 border-b border-slate-100 dark:border-slate-800/80 flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
        {[
          { id: "overview", label: "Matched Skills", count: results.matchedSkills.length, icon: CheckCircle2 },
          { id: "gaps", label: "Skill Gaps", count: results.missingSkills.length, icon: AlertTriangle },
          { id: "recommendations", label: "ATS Recommendations", count: results.actionableRecommendations.length, icon: Compass },
          { id: "interview", label: "AI Interview Prep", count: results.interviewQuestions.length, icon: HelpCircle },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabChange(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-all duration-200 border-b-2 whitespace-nowrap cursor-pointer ${
                isActive
                  ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 bg-indigo-50/40 dark:bg-indigo-950/20"
                  : "border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400"}`} />
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive
                      ? "bg-indigo-600 text-white dark:bg-indigo-500"
                      : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Panels Content */}
      <div ref={tabContentRef} className="p-5 sm:p-7 min-h-[260px]">
        {/* TAB 1: Matched Skills */}
        {activeTab === "overview" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Verified Skills & Keywords from Resume
              </h4>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> High Confidence Matches
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {results.matchedSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700/60 transition-colors duration-200"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <div className="truncate">
                      <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                        {skill.name}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">{skill.category}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 shrink-0">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Missing Skills & Gaps */}
        {activeTab === "gaps" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Skills in Job Description Missing from Resume
              </h4>
              <span className="text-xs font-medium text-amber-600 dark:text-amber-400 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" /> Address before applying
              </span>
            </div>

            <div className="space-y-3">
              {results.missingSkills.map((gap, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 hover:border-amber-300 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white">{gap.name}</h5>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        gap.priority === "High"
                          ? "bg-rose-100 text-rose-700 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60"
                          : "bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-200 dark:border-amber-900/60"
                      }`}
                    >
                      {gap.priority} Priority Gap
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
                    <strong className="text-slate-700 dark:text-slate-200">Impact: </strong>
                    {gap.impact}
                  </p>
                  <div className="p-2.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-amber-100 dark:border-amber-950/60 text-xs text-slate-700 dark:text-slate-300">
                    <span className="text-amber-600 dark:text-amber-400 font-semibold">Recommendation: </span>
                    {gap.tip}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Actionable Recommendations */}
        {activeTab === "recommendations" && (
          <div className="space-y-3.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Specific ATS Optimization Advice for this Candidate
            </h4>
            {results.actionableRecommendations.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800 flex items-start gap-3.5 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  #{idx + 1}
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: Interview Questions */}
        {activeTab === "interview" && (
          <div className="space-y-3.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Potential Interview Questions Targeting Candidates with this Profile
            </h4>
            {results.interviewQuestions.map((q, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800 hover:border-violet-300 dark:hover:border-violet-700/60 transition-colors"
              >
                <div className="flex items-center justify-between text-[11px] mb-2 font-medium">
                  <span className="text-violet-600 dark:text-violet-400 font-semibold">
                    Question 0{idx + 1}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-violet-50 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300 border border-violet-200/60 dark:border-violet-900/60">
                    Focus: {q.focus}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
                  "{q.question}"
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

