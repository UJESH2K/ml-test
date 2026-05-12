"use client";

import { useState } from "react";
import { CodeBlock, CodeBlockCode, CodeBlockGroup } from "@/components/ui/code-block";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

export default function CodeBlockThemed({ code, language = "Python" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="w-full max-w-[900px]">
      <CodeBlock>
        <CodeBlockGroup className="border-border border-b px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-white/5 text-white rounded px-2 py-1 text-xs font-medium">{language}</div>
            <span className="text-gray-400 text-sm">GitHub Dark Theme</span>
          </div>

          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleCopy}>
            {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
          </Button>
        </CodeBlockGroup>

        <CodeBlockCode code={code} language={language} theme="github-dark" />
      </CodeBlock>
    </div>
  );
}
