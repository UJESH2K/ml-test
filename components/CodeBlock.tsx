"use client";

import { useState } from "react";
import { FiCopy, FiCheck, FiPlay } from "react-icons/fi";

export default function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const [running, setRunning] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore
    }
  };

  const handleRun = () => {
    setRunning(true);
    setTimeout(() => setRunning(false), 1400);
  };

  return (
    <div className="mb-8 w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-zinc-800 bg-[#0a0a0a] transition-all duration-300 hover:border-zinc-700 hover:shadow-indigo-500/10">
      <div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 mr-4">
            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
          </div>
          <span className="text-xs font-mono text-zinc-400 select-none">python</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleRun}
            className="flex items-center gap-2 text-xs font-medium text-zinc-300 bg-zinc-800/50 hover:bg-zinc-800 hover:text-white px-3 py-1.5 rounded-md transition-all duration-200"
          >
            <FiPlay className={running ? "animate-pulse text-indigo-400" : ""} />
            <span>{running ? "Running..." : "Run Code"}</span>
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-all duration-200 bg-transparent p-1.5 rounded-md hover:bg-zinc-800"
            title="Copy code"
          >
            {!copied ? <FiCopy className="w-4 h-4" /> : <FiCheck className="w-4 h-4 text-emerald-400" />}
          </button>
        </div>
      </div>

      <div className="relative">
        <pre className="p-5 text-sm md:text-[15px] leading-relaxed font-mono text-zinc-300 bg-[#0a0a0a] max-h-[600px] overflow-auto whitespace-pre-wrap custom-scrollbar">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
