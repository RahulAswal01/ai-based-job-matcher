import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { JobDescriptionInput } from "./components/JobDescriptionInput";
import { ResumeUploader } from "./components/ResumeUploader";
import { AnalysisResults } from "./components/AnalysisResults";
import { Footer } from "./components/Footer";
import {
  DEFAULT_JOB_DESCRIPTION,
  SAMPLE_RESUME_INFO,
  DEFAULT_ANALYSIS_RESULT,
} from "./data/mockData";
import {
  animateCardsEntrance,
  animateButtonSubmit,
} from "./animations/gsapAnimations";
import { Sparkles, ArrowRight, Loader2 } from "lucide-react";

export const App = () => {
  const [jobDescription, setJobDescription] = useState(DEFAULT_JOB_DESCRIPTION);
  const [resumeFile, setResumeFile] = useState({
    name: SAMPLE_RESUME_INFO.fileName,
    size: SAMPLE_RESUME_INFO.fileSize,
    type: "pdf",
    uploadedAt: "Preloaded Sample",
    isSample: true,
  });
  const [analysisResults, setAnalysisResults] = useState(DEFAULT_ANALYSIS_RESULT);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const cardsContainerRef = useRef(null);
  const resultsRef = useRef(null);
  const analyzeBtnRef = useRef(null);

  useEffect(() => {
    if (cardsContainerRef.current) {
      const cards = cardsContainerRef.current.querySelectorAll(".gsap-entry-card");
      animateCardsEntrance(cards);
    }
  }, []);

  const handleClearJD = () => {
    setJobDescription("");
  };

  const handleSetSampleJD = () => {
    setJobDescription(DEFAULT_JOB_DESCRIPTION);
  };

  const handleFileChange = (fileData) => {
    setResumeFile(fileData);
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
  };

  const handleSetSampleResume = () => {
    setResumeFile({
      name: SAMPLE_RESUME_INFO.fileName,
      size: SAMPLE_RESUME_INFO.fileSize,
      type: "pdf",
      uploadedAt: "Preloaded Sample",
      isSample: true,
    });
  };

  const handleLoadAllDemoData = () => {
    setJobDescription(DEFAULT_JOB_DESCRIPTION);
    handleSetSampleResume();
    setAnalysisResults(DEFAULT_ANALYSIS_RESULT);
  };

  const handleRunAnalysis = () => {
    if (!jobDescription.trim()) {
      alert("Please paste a job description first.");
      return;
    }
    if (!resumeFile) {
      alert("Please upload or load a sample resume (PDF/Word).");
      return;
    }

    if (analyzeBtnRef.current) {
      animateButtonSubmit(analyzeBtnRef.current);
    }

    setIsAnalyzing(true);

    setTimeout(() => {
      setIsAnalyzing(false);
      const newScore = Math.min(96, Math.max(78, Math.round(84 + Math.random() * 10)));
      setAnalysisResults({
        ...DEFAULT_ANALYSIS_RESULT,
        overallScore: newScore,
        verdict: newScore >= 85 ? "High Match Potential" : "Strong Candidate Fit",
      });

      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 700);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar onLoadDemoData={handleLoadAllDemoData} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        <Hero />

        <div ref={cardsContainerRef} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <div className="gsap-entry-card flex flex-col">
              <JobDescriptionInput
                value={jobDescription}
                onChange={setJobDescription}
                onClear={handleClearJD}
                onSetSample={handleSetSampleJD}
              />
            </div>

            <div className="gsap-entry-card flex flex-col">
              <ResumeUploader
                file={resumeFile}
                onFileChange={handleFileChange}
                onRemoveFile={handleRemoveFile}
                onSetSampleResume={handleSetSampleResume}
              />
            </div>
          </div>

          <div className="gsap-entry-card p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-[#111726] dark:via-[#151c2e] dark:to-[#111726] border border-indigo-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm font-bold text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-2">
                  <span>Synthesize Alignment &amp; Scoring</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                    Live Demo
                  </span>
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {resumeFile ? "Resume attached" : "Attach a resume"} • {" "}
                  {jobDescription ? `${jobDescription.trim().split(/\s+/).length} words in JD` : "Empty JD"}
                </p>
              </div>
            </div>


            <button
              ref={analyzeBtnRef}
              type="button"
              disabled={isAnalyzing}
              onClick={handleRunAnalysis}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:from-indigo-500 hover:via-violet-500 hover:to-indigo-600 shadow-lg shadow-indigo-500/25 active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Computing Semantic Match...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
                  <span>Analyze &amp; Benchmark Fit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>

          {/*  */}
          <div ref={resultsRef} className="gsap-entry-card pt-2">
            <AnalysisResults
              results={analysisResults}
              onReanalyze={handleRunAnalysis}
              isLoading={isAnalyzing}
            />
          </div>
        </div>
      </main>


      <Footer />
    </div>
  );
};

export default App;
