import React, { useRef, useState } from "react";
import { 
  UploadCloud, 
  FileType, 
  CheckCircle2, 
  Trash2, 
  RefreshCw, 
  AlertCircle, 
  Sparkles,
  Paperclip
} from "lucide-react";
import { animateFileSuccess } from "../animations/gsapAnimations";

export const ResumeUploader = ({ file, onFileChange, onRemoveFile, onSetSampleResume }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef(null);
  const fileCardRef = useRef(null);

  const ACCEPTED_EXTENSIONS = [".pdf", ".docx", ".doc"];
  const ACCEPTED_MIME = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const validateAndSetFile = (selectedFile) => {
    setErrorMessage("");
    if (!selectedFile) return;

    const fileName = selectedFile.name.toLowerCase();
    const isValidExtension = ACCEPTED_EXTENSIONS.some((ext) => fileName.endsWith(ext));
    const isValidMime = ACCEPTED_MIME.includes(selectedFile.type);

    if (!isValidExtension && !isValidMime) {
      setErrorMessage("Please upload a PDF (.pdf) or WOrd document (.docx, .doc).");
      return;
    }

    if (selectedFile.size > 15 * 1024 * 1024) {
      setErrorMessage("File exceeds 15MB limit. Please upload a smaller document.");
      return;
    }

    const formattedSize =
      selectedFile.size > 1024 * 1024
        ? (selectedFile.size / (1024 * 1024)).toFixed(2) + " MB"
        : (selectedFile.size / 1024).toFixed(1) + " KB";

    const fileData = {
      name: selectedFile.name,
      size: formattedSize,
      type: selectedFile.name.endsWith(".pdf") ? "pdf" : "doc",
      rawFile: selectedFile,
      uploadedAt: "Just now",
      isSample: false,
    };

    onFileChange(fileData);

    setTimeout(() => {
      if (fileCardRef.current) {
        animateFileSuccess(fileCardRef.current);
      }
    }, 50);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      fileInputRef.current.click();
    }
  };

  const handleSampleClick = () => {
    setErrorMessage("");
    onSetSampleResume();
    setTimeout(() => {
      if (fileCardRef.current) {
        animateFileSuccess(fileCardRef.current);
      }
    }, 50);
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#111726] rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
      {/*  */}
      <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-violet-50 dark:bg-violet-950/70 border border-violet-200/70 dark:border-violet-800/60 flex items-center justify-center text-violet-600 dark:text-violet-400">
            <FileType className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>Upload Resume</span>
              <span className="text-[11px] font-normal text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/50 px-2 py-0.5 rounded-full border border-violet-200/60 dark:border-violet-800/60">
                Step 2
              </span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Accepted: PDF, DOCX, DOC (Word & PDF)
            </p>
          </div>
        </div>

        {/*  */}
        <button
          type="button"
          onClick={handleSampleClick}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium text-violet-700 dark:text-violet-300 bg-violet-50/80 dark:bg-violet-950/40 hover:bg-violet-100 dark:hover:bg-violet-900/50 border border-violet-200/60 dark:border-violet-800/60 transition-colors cursor-pointer"
          title="Use mock candidate resume"
        >
          <Sparkles className="w-3 h-3 text-violet-500" />
          <span>Load Sample Resume</span>
        </button>
      </div>

      {/*  */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center">
        {/*  */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.docx,.doc,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="hidden"
          onChange={handleInputChange}
        />

        {!file ? (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleBrowseClick}
            className={`cursor-pointer relative border-2 border-dashed rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 group ${isDragging ? "border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 scale-[1.01]" : "border-slate-200 dark:border-slate-800 hover:border-violet-400 dark:hover:border-violet-600 bg-slate-50/50 dark:bg-slate-900/30 hover:bg-slate-50 dark:hover:bg-slate-900/60"}`}
          >
            {/*  */}
            <div className="relative mb-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-500/10 to-indigo-500/10 dark:from-violet-500/20 dark:to-indigo-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform duration-300 border border-violet-200/60 dark:border-violet-700/40">
                <UploadCloud className="w-7 h-7" />
              </div>
            </div>

            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">
              Drag & Drop your resume here, or {" "}
              <span className="text-violet-600 dark:text-violet-400 underline underline-offset-2">
                browse files
              </span>
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
              Supports PDF (.pdf) and Microsoft Word (.docx, .doc) up to 15MB
            </p>

            {/*  */}
            <div className="mt-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 border border-rose-200 dark:border-rose-900/50">
                PDF
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300 border border-sky-200 dark:border-sky-900/50">
                DOCX
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border border-blue-200 dark:border-blue-900/50">
                DOC
              </span>
            </div>
          </div>
        ) : (
          <div 
            ref={fileCardRef}
            className="p-4 sm:p-5 rounded-xl border border-violet-200 dark:border-violet-900/60 bg-gradient-to-br from-violet-50/40 via-white to-indigo-50/30 dark:from-violet-950/20 dark:via-[#111726] dark:to-indigo-950/20 shadow-xs"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-xs font-bold text-xs uppercase ${file.type === "pdf" || file.name.endsWith(".pdf") ? "bg-rose-600 shadow-rose-500/20" : "bg-blue-600 shadow-blue-500/20"}`}
                >
                  {file.type === "pdf" || file.name.endsWith(".pdf") ? "PDF" : "DOC"}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-xs" title={file.name}>
                    {file.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-slate-500 dark:text-slate-400">
                    <span>{file.size}</span>
                    <span>•</span>
                    <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Ready for Analysis
                    </span>
                  </div>
                </div>
              </div>

              {/*  */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleBrowseClick}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors cursor-pointer"
                  title="Replace with another file"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={onRemoveFile}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 transition-colors cursor-pointer"
                  title="Remove this resume"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/*  */}
            <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/80 text-xs">
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <Paperclip className="w-3.5 h-3.5 text-violet-500" />
                  ATS Parsing: <strong className="text-emerald-600 dark:text-emerald-400">100% Parsed</strong>
                </span>
                <span className="text-[11px] text-slate-400">
                  {file.uploadedAt || "Uploaded"}
                </span>
              </div>
            </div>
          </div>
        )}

        {/*  */}
        {errorMessage && (
          <div className="mt-3 p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
};