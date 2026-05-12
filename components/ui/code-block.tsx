"use client";

import React from "react";

export function CodeBlock({ children }: { children: React.ReactNode }) {
  return <div className="w-full">{children}</div>;
}

export function CodeBlockGroup({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`flex items-center justify-between ${className}`}>{children}</div>;
}

export function CodeBlockCode({ code, language, theme }: { code: string; language?: string; theme?: string }) {
  return (
    <pre className="bg-[#0b1117] border-t border-gray-800 p-4 overflow-auto rounded-b-md text-sm font-mono text-[#c9d1d9]">
      <code>{code}</code>
    </pre>
  );
}
